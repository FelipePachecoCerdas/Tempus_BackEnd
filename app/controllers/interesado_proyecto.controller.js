const db = require("../models");
const Interesado_proyecto = db.interesado_proyecto;
const Op = db.Sequelize.Op;

// Crear un interesado_proyecto
exports.create = (req, res) => {

    const interesado_proyecto = {
      id_interesado: req.body.id_interesado,
      id_proyecto: req.body.id_proyecto,
      nivel_visibilidad: req.body.nivel_visibilidad
    };
  
    // Guardar interesado_proyecto en la BD
    Interesado_proyecto.create(interesado_proyecto)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear interesado_proyecto."
        });
      });
  };

  //Buscar interesado_proyecto por PK
  exports.findByPk =  (req, res) => {
    const id_interesado = req.params.id_interesado;
    const id_proyecto =req.params.id_proyecto;
    Interesado_proyecto.findOne({where: { id_interesado: id_interesado,id_proyecto:id_proyecto }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el proyecto con id_interesado: " + id_interesado + " y con id_proyecto: " + id_proyecto
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Interesado_proyecto.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  //Retornar todos los interesados_proyecto.
  exports.findAll = (req, res) => {
  
    Interesado_proyecto.findAll({ where: {},order:
      [['id_interesado', 'ASC']] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los interesados_proyecto."
        });
      });   
  };

  //buscar interesados_proyecto por nivel_visibilidad
  exports.findByVisibilityLevel = (req, res) => {
    Interesado_proyecto.findAll({ where: { nivel_visibilidad: req.params.nivel_visibilidad } })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar interesados_proyecto por nivel_visibilidad."
        });
      });
  };

  //buscar interesados_proyecto por id_proyecto
  exports.findByProjectId = (req, res) => {
    Interesado_proyecto.findAll({ where: { id_proyecto: req.params.id_proyecto },order:
      [['id_proyecto', 'ASC']] })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar interesados_proyecto por id_proyecto."
        });
      });
  };

  exports.findByStakeholderId = (req, res) => {
    Interesado_proyecto.findAll({ where: { id_interesado: req.params.id_interesado },order:
      [['id_proyecto', 'ASC']] })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar interesados_proyecto por id_proyecto."
        });
      });
  };

  //actualizar interesado_proyecto
  exports.update = (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const id_interesado=req.params.id_interesado;
    Interesado_proyecto.update(req.body, {where: { id_proyecto: id_proyecto, id_interesado:id_interesado }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el interesado_proyecto con la id_interesado: ${id_interesado} y con la id_proyecto: ${id_proyecto}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al actualizar el interesado_proyecto con la id_interesado: ${id_interesado} y con la id_proyecto: ${id_proyecto}`});
      });
  };

  //eliminar interesado_proyecto
  exports.delete = (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const id_interesado=req.params.id_interesado;
    Interesado_proyecto.destroy({where: { id_proyecto: id_proyecto, id_interesado:id_interesado }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el interesado_proyecto con la id_interesado: ${id_interesado} y con la id_proyecto: ${id_proyecto}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al eliminar el interesado_proyecto con la id_interesado: ${id_interesado} y con la id_proyecto: ${id_proyecto}`});
      });
  };

  //eliminar todos los interesados_proyecto
  exports.deleteAll = (req, res) => {
    Interesado_proyecto.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los interesados_proyecto han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar interesados_proyecto."
        });
      });
    }
 

