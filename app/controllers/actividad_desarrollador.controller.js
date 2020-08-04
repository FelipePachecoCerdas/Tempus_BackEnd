const db = require("../models");
const Actividad_desarrollador = db.actividad_desarrollador;
const Op = db.Sequelize.Op;

// Crear una actividad_desarrollador
exports.create = (req, res) => { 
    
    const actividad_desarrollador = {
      id_actividad: req.body.id_actividad,
      id_desarrollador:req.body.id_desarrollador,
      id_proyecto: req.body.id_proyecto
    }
    // Guardar la actividad_desarrollador en la BD
    Actividad_desarrollador.create(actividad_desarrollador)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear la actividad_desarrollador."
        });
      });
  };

  //Buscar actividad_desarrollador por PK
  exports.findByPk =  (req, res) => {
    const id_actividad = req.params.id_actividad;
    const id_desarrollador =req.params.id_desarrollador;
    Actividad_desarrollador.findOne({where: { id_actividad: id_actividad,id_desarrollador:id_desarrollador }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar la actividad_desarrollador con id_actividad: " + id_actividad + " y con id_desarrollador: " + id_desarrollador
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Actividad_desarrollador.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };


  //Retornar todos los actividad_desarrollador.
  exports.findAll = (req, res) => {
  
    Actividad_desarrollador.findAll({ where: {},order:
      [['id_actividad_desarrollador', 'ASC']] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los actividad_desarrollador."
        });
      });   
  };


  //buscar actividad_desarrollador por id_proyecto
  exports.findByProjectId = (req, res) => {
    Actividad_desarrollador.findAll({ where: { id_proyecto: req.params.id_proyecto },order:
      [['id_proyecto', 'ASC']] })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar actividad_desarrollador por id_proyecto."
        });
      });
  };

  //actualizar actividad_desarrollador
  exports.update = (req, res) => {
    const id_desarrollador = req.params.id_desarrollador;
    const id_actividad=req.params.id_actividad;
    Actividad_desarrollador.update(req.body, {where: { id_desarrollador: id_desarrollador, id_actividad:id_actividad }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el actividad_desarrollador con la id_actividad: ${id_actividad} y con la id_desarrollador: ${id_desarrollador}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al actualizar el actividad_desarrollador con la id_actividad: ${id_actividad} y con la id_desarrollador: ${id_desarrollador}`});
      });
  };

  //eliminar actividad_desarrollador
  exports.delete = (req, res) => {
    const id_desarrollador = req.params.id_desarrollador;
    const id_actividad=req.params.id_actividad;
    Actividad_desarrollador.destroy({where: { id_desarrollador: id_desarrollador, id_actividad:id_actividad }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el actividad_desarrollador con la id_actividad: ${id_actividad} y con la id_desarrollador: ${id_desarrollador}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al eliminar el actividad_desarrollador con la id_actividad: ${id_actividad} y con la id_desarrollador: ${id_desarrollador}`});
      });
  };

  //eliminar todos los actividad_desarrollador
  exports.deleteAll = (req, res) => {
    Actividad_desarrollador.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los actividad_desarrollador han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar actividad_desarrollador."
        });
      });
    }
 

