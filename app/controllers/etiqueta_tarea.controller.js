const db = require("../models");
const Etiqueta_tarea = db.etiqueta_tarea;
const Op = db.Sequelize.Op;

// Crear un etiqueta_tarea
exports.create = (req, res) => {

    const etiqueta_tarea = {
      id_usuario: req.body.id_usuario,
      nombre_etiqueta: req.body.nombre_etiqueta,
      id_tarea: req.body.id_tarea
    };
  
    // Guardar etiqueta_tarea en la BD
Etiqueta_tarea.create(etiqueta_tarea)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear etiqueta_tarea."
        });
      });
  };

  //Buscar etiqueta_tarea por PK
  exports.findByPk =  (req, res) => {
    const id_usuario = req.params.id_usuario;
    const nombre_etiqueta = req.params.nombre_etiqueta;
    const id_tarea = req.params.id_tarea;

    Etiqueta_tarea.findOne({where: { id_usuario: id_usuario, nombre_etiqueta:nombre_etiqueta, id_tarea: id_tarea }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el etiqueta_tarea con id_usuario: " + id_usuario + ", con nombre_etiqueta: " + nombre_etiqueta + " y con id_tarea: "+id_tarea
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Etiqueta_tarea.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  //Retornar todos los etiqueta_tarea.
  exports.findAll = (req, res) => {
  
    Etiqueta_tarea.findAll({ where: {} })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los etiqueta_tarea."
        });
      });   
  };

  //buscar etiqueta_tarea por id_usuario
  exports.findByUserId = (req, res) => {
    Etiqueta_tarea.findAll({ where: { id_usuario: req.params.id_usuario } })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar etiqueta_tarea por id_usuario."
        });
      });
  };

  //actualizar etiqueta_tarea
  exports.update = (req, res) => {
    const id_usuario = req.params.id_usuario;
    const nombre_etiqueta=req.params.nombre_etiqueta;
    const id_tarea=req.params.id_tarea;
    Etiqueta_tarea.update(req.body, {where: { id_usuario: id_usuario, nombre_etiqueta:nombre_etiqueta, id_tarea:id_tarea }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el etiqueta_tarea con la id_usuario: ${id_usuario}, con nombre_etiqueta: ${nombre_etiqueta} y con id_tarea: ${id_tarea}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al actualizar el etiqueta_tarea con la id_usuario: ${id_usuario}, con nombre_etiqueta: ${nombre_etiqueta} y con id_tarea: ${id_tarea}`});
      });
  };

  //eliminar etiqueta_tarea
  exports.delete = (req, res) => {
    const id_usuario = req.params.id_usuario;
    const nombre_etiqueta=req.params.nombre_etiqueta;
    const id_tarea=req.params.id_tarea;
    Etiqueta_tarea.destroy(req.body, {where: { id_usuario: id_usuario, nombre_etiqueta:nombre_etiqueta, id_tarea:id_tarea }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el etiqueta_tarea con la id_usuario: ${id_usuario}, con nombre_etiqueta: ${nombre_etiqueta} y con id_tarea: ${id_tarea}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al eliminar el etiqueta_tarea con la id_usuario: ${id_usuario}, con nombre_etiqueta: ${nombre_etiqueta} y con id_tarea: ${id_tarea}`});
      });
  };

  //eliminar todos los etiqueta_tarea
  exports.deleteAll = (req, res) => {
    Etiqueta_tarea.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los etiqueta_tarea han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar etiqueta_tarea."
        });
      });
    }
 

