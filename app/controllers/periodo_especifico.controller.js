const db = require("../models");
const Periodo_especifico = db.periodo_especifico;
const Op = db.Sequelize.Op;

// Crear un periodo_especifico
exports.create = (req, res) => {

    const periodo_especifico = {
      id_horario_especifico: req.body.id_horario_especifico,
      minutos_tiempo_inicial: req.body.minutos_tiempo_inicial,
      minutos_tiempo_finalizacion: req.body.minutos_tiempo_finalizacion
    };
  
    // Guardar periodo_especifico en la BD
    Periodo_especifico.create(periodo_especifico)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear periodo_especifico."
        });
      });
  };

  //Buscar periodo_especifico por PK
  exports.findByPk =  (req, res) => {
    const id_horario_especifico = req.params.id_horario_especifico;
    const minutos_tiempo_inicial = req.params.minutos_tiempo_inicial;
    const minutos_tiempo_finalizacion = req.params.minutos_tiempo_finalizacion;

    Periodo_especifico.findOne({where: { id_horario_especifico: id_horario_especifico, minutos_tiempo_inicial:minutos_tiempo_inicial, minutos_tiempo_finalizacion: minutos_tiempo_finalizacion }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el periodo_especifico con id_horario_especifico: " + id_horario_especifico + ", con minutos_tiempo_inicial: " + minutos_tiempo_inicial + " y con minutos_tiempo_finalizacion: "+minutos_tiempo_finalizacion
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Periodo_especifico.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  //Retornar todos los periodos_especificos.
  exports.findAll = (req, res) => {
  
    Periodo_especifico.findAll({ where: {} })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los periodos_especificos."
        });
      });   
  };

  //buscar periodo_especifico por id_horario_especifico
  exports.findBySpecificScheduleId = (req, res) => {
    Periodo_especifico.findAll({ where: { id_horario_especifico: req.params.id_horario_especifico } })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar periodo_especifico por id_horario_especifico."
        });
      });
  };

  //actualizar periodo_especifico
  exports.update = (req, res) => {
    const id_horario_especifico = req.params.id_horario_especifico;
    const minutos_tiempo_inicial=req.params.minutos_tiempo_inicial;
    const minutos_tiempo_finalizacion=req.params.minutos_tiempo_finalizacion;
    Periodo_especifico.update(req.body, {where: { id_horario_especifico: id_horario_especifico, minutos_tiempo_inicial:minutos_tiempo_inicial, minutos_tiempo_finalizacion:minutos_tiempo_finalizacion }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el periodo_especifico con la id_horario_especifico: ${id_horario_especifico}, con minutos_tiempo_inicial: ${minutos_tiempo_inicial} y con minutos_tiempo_finalizacion: ${minutos_tiempo_finalizacion}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al actualizar el periodo_especifico con la id_horario_especifico: ${id_horario_especifico}, con minutos_tiempo_inicial: ${minutos_tiempo_inicial} y con minutos_tiempo_finalizacion: ${minutos_tiempo_finalizacion}`});
      });
  };

  //eliminar periodo_especifico
  exports.delete = (req, res) => {
    const id_horario_especifico = req.params.id_horario_especifico;
    const minutos_tiempo_inicial=req.params.minutos_tiempo_inicial;
    const minutos_tiempo_finalizacion=req.params.minutos_tiempo_finalizacion;
    Periodo_especifico.destroy(req.body, {where: { id_horario_especifico: id_horario_especifico, minutos_tiempo_inicial:minutos_tiempo_inicial, minutos_tiempo_finalizacion:minutos_tiempo_finalizacion }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el periodo_especifico con la id_horario_especifico: ${id_horario_especifico}, con minutos_tiempo_inicial: ${minutos_tiempo_inicial} y con minutos_tiempo_finalizacion: ${minutos_tiempo_finalizacion}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al eliminar el periodo_especifico con la id_horario_especifico: ${id_horario_especifico}, con minutos_tiempo_inicial: ${minutos_tiempo_inicial} y con minutos_tiempo_finalizacion: ${minutos_tiempo_finalizacion}`});
      });
  };

  //eliminar todos los periodos_especificos
  exports.deleteAll = (req, res) => {
    Periodo_especifico.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los periodos_especificos han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar periodos_especificos."
        });
      });
    }
 

