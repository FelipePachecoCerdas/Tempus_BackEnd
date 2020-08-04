const db = require("../models");
const Tarea = db.tarea;
const Op = db.Sequelize.Op;

// Crear un Tarea
exports.create = (req, res) => { 
    
    const tarea = {
      id_tarea: req.body.id_tarea,
      porcentaje_completitud: req.body.porcentaje_completitud,
      id_usuario: req.body.id_usuario,
      id_actividad_proyecto: req.body.id_actividad_proyecto,
      nombre_tarea: req.body.nombre_tarea,
      descripcion_tarea: req.body.descripcion_tarea,
      repeticion: req.body.repeticion,
      notificar: req.body.notificar,
      modo_notificar: req.body.modo_notificar,
      modo_tarea: req.body.modo_tarea,
      repetir_hasta: req.body.repetir_hasta
    };
  
    // Guardar el tarea en la BD
    Tarea.create(tarea)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear el tarea."
        });
      });
  };

  //Retornar tarea buscando por Pk
  exports.findByPk =  async (req, res) => {
    const id_tarea = req.params.id_tarea;
    Tarea.findByPk(id_tarea)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el tarea con id: " + id_tarea
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Tarea.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  // Retornar todos los tareas
  exports.findAll = (req, res) => {

    Tarea.findAll({ where:{},order:
      [['id_tarea', 'ASC']] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los tareas."
        });
      });
  };

  //buscar tarea por nombre
  exports.findByName = (req, res) => {
    Tarea.findAll({ where: { nombre_tarea: req.params.nombre_tarea },order:
      [['id_tarea', 'ASC']]  })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar tareas por nombre."
        });
      });
  };

  //actualizar tarea
  exports.update = (req, res) => {
    const id_tarea = req.params.id_tarea;
    Tarea.update(req.body, {where: { id_tarea: id_tarea }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el tarea que tiene la id: ${id_tarea}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al actualizar tarea de id: " + id_tarea});
      });
  };

  //eliminar tarea
  exports.delete = (req, res) => {
    const id_tarea = req.params.id_tarea;
    Tarea.destroy({where: { id_tarea: id_tarea }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el tarea que tiene la id: ${id_tarea}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al eliminar tarea de id: " + id_tarea});
      });
  };

  //eliminar todos los tareas
  exports.deleteAll = (req, res) => {
    Tarea.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los tareas han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar tareas."
        });
      });
  };