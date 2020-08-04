const db = require("../models");
const Etiqueta = db.etiqueta;
const Op = db.Sequelize.Op;

// Crear un interesado_proyecto
exports.create = (req, res) => {

    const etiqueta = {
      id_usuario: req.body.id_usuario,
      nombre_etiqueta: req.body.nombre_etiqueta,
      color: req.body.color
    };
  
    // Guardar interesado_proyecto en la BD
    Etiqueta.create(etiqueta)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear etiqueta."
        });
      });
  };

  //Buscar etiqueta por PK
  exports.findByPk =  (req, res) => {
    const id_usuario = req.params.id_usuario;
    const nombre_etiqueta =req.params.nombre_etiqueta;
    Etiqueta.findOne({where: { id_usuario: id_usuario,nombre_etiqueta:nombre_etiqueta }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar la etiqueta con id_usuario: " + id_usuario + " y con nombre_etiqueta: " + nombre_etiqueta
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Etiqueta.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  //Retornar todos las etiqueta.
  exports.findAll = (req, res) => {
  
    Etiqueta.findAll({ where: {},order:
      [['nombre_etiqueta', 'ASC']] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los etiqueta."
        });
      });   
  };

  //buscar etiqueta por id_usuario
  exports.findByUserId = (req, res) => {
    Etiqueta.findAll({ where: { id_usuario: req.params.id_usuario },order:
      [['nombre_etiqueta', 'ASC']] })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar etiqueta por id_usuario."
        });
      });
  };

  //buscar interesados_proyecto por nombre_etiqueta
  exports.findByName = (req, res) => {
    Etiqueta.findAll({ where: { nombre_etiqueta: req.params.nombre_etiqueta } })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar etiqueta por nombre_etiqueta."
        });
      });
  };

  //actualizar etiqueta
  exports.update = (req, res) => {
    const nombre_etiqueta = req.params.nombre_etiqueta;
    const id_usuario=req.params.id_usuario;
    Etiqueta.update(req.body, {where: { nombre_etiqueta: nombre_etiqueta, id_usuario:id_usuario }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el etiqueta con la id_usuario: ${id_usuario} y con la nombre_etiqueta: ${nombre_etiqueta}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al actualizar el etiqueta con la id_usuario: ${id_usuario} y con la nombre_etiqueta: ${nombre_etiqueta}`});
      });
  };

  //eliminar etiqueta
  exports.delete = (req, res) => {
    const nombre_etiqueta = req.params.nombre_etiqueta;
    const id_usuario=req.params.id_usuario;
    Etiqueta.destroy({where: { nombre_etiqueta: nombre_etiqueta, id_usuario:id_usuario }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el etiqueta con la id_usuario: ${id_usuario} y con la nombre_etiqueta: ${nombre_etiqueta}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al eliminar el etiqueta con la id_usuario: ${id_usuario} y con la nombre_etiqueta: ${nombre_etiqueta}`});
      });
  };

  //eliminar todos los interesados_proyecto
  exports.deleteAll = (req, res) => {
    Etiqueta.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los etiqueta han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar etiqueta."
        });
      });
    }
 

