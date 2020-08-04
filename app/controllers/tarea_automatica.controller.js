const db = require("../models");
const Tarea_automatica = db.tarea_automatica;
const Op = db.Sequelize.Op;

// Crear un Tarea_automatica
exports.create = (req, res) => { 
    
    const tarea_automatica = {
      id_tarea: req.body.id_tarea,
      nivel_dificultad: req.body.nivel_dificultad,
      nivel_prioridad: req.body.nivel_prioridad,
      duracion_estimada: req.body.duracion_estimada,
      restriccion_inicio: req.body.restriccion_inicio,
      restriccion_finalizacion: req.body.restriccion_finalizacion,
      restriccion_dias: req.body.restriccion_dias,
      max_horas_dia: req.body.max_horas_dia,
      min_horas_dia: req.body.min_horas_dia,
      antelacion_notificacion: req.body.antelacion_notificacion,
      duracion_estimada_medida: req.body.duracion_estimada_medida
    };
  
    // Guardar el tarea_automatica en la BD
    Tarea_automatica.create(tarea_automatica)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear el tarea_automatica."
        });
      });
  };

  //Retornar tarea_automatica buscando por Pk
  exports.findByPk =  async (req, res) => {
    const id_tarea = req.params.id_tarea;
    Tarea_automatica.findByPk(id_tarea)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el tarea_automatica con id: " + id_tarea
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Tarea_automatica.sequelize.query(consulta).then(data => {
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

    Tarea_automatica.findAll({ where:{},order:
      [['id_tarea', 'ASC']]  })
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


  //actualizar tarea_automatica
  exports.update = (req, res) => {
    const id_tarea = req.params.id_tarea;
    Tarea_automatica.update(req.body, {where: { id_tarea: id_tarea }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el tarea_automatica que tiene la id: ${id_tarea}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al actualizar tarea_automatica de id: " + id_tarea});
      });
  };

  //eliminar tarea_automatica
  exports.delete = (req, res) => {
    const id_tarea = req.params.id_tarea;
    Tarea_automatica.destroy({where: { id_tarea: id_tarea }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el tarea_automatica que tiene la id: ${id_tarea}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al eliminar tarea_automatica de id: " + id_tarea});
      });
  };

  //eliminar todos los tareas
  exports.deleteAll = (req, res) => {
    Tarea_automatica.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los tareas han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar tareas."
        });
      });
  };