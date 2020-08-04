const db = require("../models");
const Horario_efectivo_por_dia = db.horario_efectivo_por_dia;
const Op = db.Sequelize.Op;

// Crear un Horario_efectivo_por_dia
exports.create = (req, res) => { 
    
    const horario_efectivo_por_dia = {
      id_horario_efectivo: req.body.id_horario_efectivo,
      dia: req.body.dia,
      id_usuario: req.body.id_usuario,
    };
  
    // Guardar el horario_efectivo_por_dia en la BD
    Horario_efectivo_por_dia.create(horario_efectivo_por_dia)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear el horario_efectivo_por_dia."
        });
      });
  };

  //Retornar horario_efectivo_por_dia buscando por Pk
  exports.findByPk =  async (req, res) => {
    const id_horario_efectivo = req.params.id_horario_efectivo;
    Horario_efectivo_por_dia.findByPk(id_horario_efectivo)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el horario_efectivo_por_dia con id: " + id_horario_efectivo
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Horario_efectivo_por_dia.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  // Retornar todos los usuarios
  exports.findAll = (req, res) => {

    Horario_efectivo_por_dia.findAll({ where:{},order:
      [['id_horario_efectivo', 'ASC']] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los horarios_efectivo_por_dia."
        });
      });
  };

  //buscar horario_efectivo_por_dia por id_usuario
  exports.findByUserId = (req, res) => {
    Horario_efectivo_por_dia.findAll({ where: { id_usuario: req.params.id_usuario },order:
      [['id_horario_efectivo', 'ASC']] })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar horarios_efectivo_por_dia por id_usuario."
        });
      });
  };

  //actualizar horario_efectivo_por_dia
  exports.update = (req, res) => {
    const id_horario_efectivo = req.params.id_horario_efectivo;
    Horario_efectivo_por_dia.update(req.body, {where: { id_horario_efectivo: id_horario_efectivo }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el horario_efectivo_por_dia que tiene la id: ${id_horario_efectivo}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al actualizar horario_efectivo_por_dia de id: " + id_horario_efectivo});
      });
  };

  //eliminar horario_efectivo_por_dia
  exports.delete = (req, res) => {
    const id_horario_efectivo = req.params.id_horario_efectivo;
    Horario_efectivo_por_dia.destroy({where: { id_horario_efectivo: id_horario_efectivo }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el usuario que tiene la id: ${id_horario_efectivo}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al eliminar usuario de id: " + id_horario_efectivo});
      });
  };

  //eliminar todos los usuarios
  exports.deleteAll = (req, res) => {
    Horario_efectivo_por_dia.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los horarios_efectivo_por_dia han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar horarios_efectivo_por_dia."
        });
      });
  };