const db = require("../models");
const Tarea_periodo = db.tarea_periodo;
const Op = db.Sequelize.Op;

// Crear un Tarea_periodo
exports.create = (req, res) => { 
    
    const tarea_periodo = {
      id_tarea: req.body.id_tarea,
      fecha_hora_inicio_original: req.body.fecha_hora_inicio_original,
      fecha_hora_final_original: req.body.fecha_hora_final_original,
      fecha_hora_inicio_real: req.body.fecha_hora_inicio_real,
      fecha_hora_final_real: req.body.fecha_hora_final_real,
      antelacion_notificacion: req.body.antelacion_notificacion
    };
  
    // Guardar el tarea_periodo en la BD
    Tarea_periodo.create(tarea_periodo)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear el tarea_periodo."
        });
      });
  };

  //Retornar tarea_periodo buscando por Pk-->Está mala(Crear una solo para id_tarea***)
  exports.findByPk =  async (req, res) => {
    const id_tarea = req.params.id_tarea;
    Tarea_periodo.findByPk(id_tarea)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el tarea_periodo con id: " + id_tarea
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Tarea_periodo.sequelize.query(consulta).then(data => {
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

    Tarea_periodo.findAll({ where:{} })
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


  //actualizar tarea_periodo
  exports.update = (req, res) => {
    const id_tarea = req.params.id_tarea;
    Tarea_periodo.update(req.body, {where: { id_tarea: id_tarea }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el tarea_periodo que tiene la id: ${id_tarea}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al actualizar tarea_periodo de id: " + id_tarea});
      });
  };

  //eliminar tarea_periodo
  exports.delete = (req, res) => {
    const id_tarea = req.params.id_tarea;
    Tarea_periodo.destroy({where: { id_tarea: id_tarea }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el tarea_periodo que tiene la id: ${id_tarea}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al eliminar tarea_periodo de id: " + id_tarea});
      });
  };

  //eliminar todos los tareas
  exports.deleteAll = (req, res) => {
    Tarea_periodo.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los tareas han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar tareas."
        });
      });
  };