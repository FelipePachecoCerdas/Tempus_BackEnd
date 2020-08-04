const db = require("../models");
const Actividad = db.actividad;
const Op = db.Sequelize.Op;

// Crear un actividad
exports.create = (req, res) => { 
    
    const actividad = {
      id_actividad: req.body.id_actividad,
      id_proyecto: req.body.id_proyecto,
      nombre_actividad: req.body.nombre_actividad,
      descripcion_actividad: req.body.descripcion_actividad,
      fecha_inicio: req.body.fecha_inicio,
      fecha_finalizacion: req.body.fecha_finalizacion
    };
  
    // Guardar la actividad en la BD
    Actividad.create(actividad)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear la actividad."
        });
      });
  };

  //Retornar actividad buscando por Pk
  exports.findByPk =  async (req, res) => {
    const id_actividad = req.params.id_actividad;
    Actividad.findByPk(id_actividad)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar la actividad con id: " + id_actividad
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Actividad.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  // Retornar todos las actividades
  exports.findAll = (req, res) => {

    Actividad.findAll({ where:{},order:
      [['id_actividad', 'ASC']] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar las actividades."
        });
      });
  };

  //buscar actividad por nombre
  exports.findByName = (req, res) => {
    Actividad.findAll({ where: { nombre_actividad: req.params.nombre_actividad },order:
      [['id_actividad', 'ASC']] })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar actividades por nombre."
        });
      });
  };

  //buscar actividad por id_proyecto
  exports.findByProjectId = (req, res) => {
    Actividad.findAll({ where: { id_proyecto: req.params.id_proyecto },order:
      [['id_proyecto', 'ASC']] })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar actividades por id_proyecto."
        });
      });
  };

  //actualizar actividad
  exports.update = (req, res) => {
    const id_actividad = req.params.id_actividad;
    Actividad.update(req.body, {where: { id_actividad: id_actividad }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar la actividad que tiene la id: ${id_actividad}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al actualizar la actividad de id: " + id_actividad});
      });
  };

  //eliminar actividad
  exports.delete = (req, res) => {
    const id_actividad = req.params.id_actividad;
    Actividad.destroy({where: { id_actividad: id_actividad }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar la actividad que tiene la id: ${id_actividad}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al eliminar la actividad de id: " + id_actividad});
      });
  };

  //eliminar todos los actividades
  exports.deleteAll = (req, res) => {
    Actividad.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos las actividades han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar actividades."
        });
      });
  };