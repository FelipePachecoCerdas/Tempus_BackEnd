const db = require("../models");
const Periodo_general = db.periodo_general;
const Op = db.Sequelize.Op;

// Crear un periodo_general
exports.create = (req, res) => {

    const periodo_general = {
      id_horario_general: req.body.id_horario_general,
      minutos_tiempo_inicial: req.body.minutos_tiempo_inicial,
      minutos_tiempo_finalizacion: req.body.minutos_tiempo_finalizacion
    };
  
    // Guardar periodo_general en la BD
    Periodo_general.create(periodo_general)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear periodo_general."
        });
      });
  };

  //Buscar periodo_general por PK
  exports.findByPk =  (req, res) => {
    const id_horario_general = req.params.id_horario_general;
    const minutos_tiempo_inicial = req.params.minutos_tiempo_inicial;
    const minutos_tiempo_finalizacion = req.params.minutos_tiempo_finalizacion;

    Periodo_general.findOne({where: { id_horario_general: id_horario_general, minutos_tiempo_inicial:minutos_tiempo_inicial, minutos_tiempo_finalizacion: minutos_tiempo_finalizacion }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el periodo_general con id_horario_general: " + id_horario_general + ", con minutos_tiempo_inicial: " + minutos_tiempo_inicial + " y con minutos_tiempo_finalizacion: "+minutos_tiempo_finalizacion
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Periodo_general.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  //Retornar todos los periodos_generales.
  exports.findAll = (req, res) => {
  
    Periodo_general.findAll({ where: {} })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los periodos_generales."
        });
      });   
  };

  //buscar periodo_general por id_horario_general
  exports.findByGeneralScheduleId = (req, res) => {
    Periodo_general.findAll({ where: { id_horario_general: req.params.id_horario_general } })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar periodo_general por id_horario_general."
        });
      });
  };

  //actualizar periodo_general
  exports.update = (req, res) => {
    const id_horario_general = req.params.id_horario_general;
    const minutos_tiempo_inicial=req.params.minutos_tiempo_inicial;
    const minutos_tiempo_finalizacion=req.params.minutos_tiempo_finalizacion;
    Periodo_general.update(req.body, {where: { id_horario_general: id_horario_general, minutos_tiempo_inicial:minutos_tiempo_inicial, minutos_tiempo_finalizacion:minutos_tiempo_finalizacion }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el periodo_general con la id_horario_general: ${id_horario_general}, con minutos_tiempo_inicial: ${minutos_tiempo_inicial} y con minutos_tiempo_finalizacion: ${minutos_tiempo_finalizacion}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al actualizar el periodo_general con la id_horario_general: ${id_horario_general}, con minutos_tiempo_inicial: ${minutos_tiempo_inicial} y con minutos_tiempo_finalizacion: ${minutos_tiempo_finalizacion}`});
      });
  };

  //eliminar periodo_general
  exports.delete = (req, res) => {
    const id_horario_general = req.params.id_horario_general;
    const minutos_tiempo_inicial=req.params.minutos_tiempo_inicial;
    const minutos_tiempo_finalizacion=req.params.minutos_tiempo_finalizacion;
    Periodo_general.destroy(req.body, {where: { id_horario_general: id_horario_general, minutos_tiempo_inicial:minutos_tiempo_inicial, minutos_tiempo_finalizacion:minutos_tiempo_finalizacion }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el periodo_general con la id_horario_general: ${id_horario_general}, con minutos_tiempo_inicial: ${minutos_tiempo_inicial} y con minutos_tiempo_finalizacion: ${minutos_tiempo_finalizacion}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al eliminar el periodo_general con la id_horario_general: ${id_horario_general}, con minutos_tiempo_inicial: ${minutos_tiempo_inicial} y con minutos_tiempo_finalizacion: ${minutos_tiempo_finalizacion}`});
      });
  };

  //eliminar todos los periodos_generales
  exports.deleteAll = (req, res) => {
    Periodo_general.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los periodos_generales han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar periodos_generales."
        });
      });
    }
 

