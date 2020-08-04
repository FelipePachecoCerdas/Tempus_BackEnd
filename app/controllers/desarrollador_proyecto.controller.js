const db = require("../models");
const Desarrollador_proyecto = db.desarrollador_proyecto;
const Op = db.Sequelize.Op;

// Crear un desarrollador_proyecto
exports.create = (req, res) => {

    const desarrollador_proyecto = {
      id_desarrollador: req.body.id_desarrollador,
      id_proyecto: req.body.id_proyecto,
      nivel_visibilidad: req.body.nivel_visibilidad
    };
  
    // Guardar desarrollador_proyecto en la BD
    Desarrollador_proyecto.create(desarrollador_proyecto)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear desarrollador_proyecto."
        });
      });
  };

  //Buscar desarrollador_proyecto por PK
  exports.findByPk =  (req, res) => {
    const id_desarrollador = req.params.id_desarrollador;
    const id_proyecto =req.params.id_proyecto;
    Desarrollador_proyecto.findOne({where: { id_desarrollador: id_desarrollador,id_proyecto:id_proyecto }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el proyecto con id_desarrollador: " + id_desarrollador + " y con id_proyecto: " + id_proyecto
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Desarrollador_proyecto.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  //Retornar todos los desarrolladores_proyecto.
  exports.findAll = (req, res) => {
  
    Desarrollador_proyecto.findAll({ where: {},order:
      [['id_desarrollador', 'ASC']] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los proyectos."
        });
      });   
  };

  //buscar desarrolladores_proyecto por nivel_visibilidad
  exports.findByVisibilityLevel = (req, res) => {
    Desarrollador_proyecto.findAll({ where: { nivel_visibilidad: req.params.nivel_visibilidad } })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar desarrolladores_proyecto por nivel_visibilidad."
        });
      });
  };

//buscar desarrolladores_proyecto por id_proyecto
exports.findByProjectId = (req, res) => {
    Desarrollador_proyecto.findAll({ where: { id_proyecto: req.params.id_proyecto },order:
      [['id_proyecto', 'ASC']] })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar desarrolladores_proyecto por id_proyecto."
        });
      });
  };

  //buscar desarrolladores_proyecto por id_proyecto
exports.findByDeveloperId = (req, res) => {
  Desarrollador_proyecto.findAll({ where: { id_desarrollador: req.params.id_desarrollador },order:
    [['id_proyecto', 'ASC']] })
    .then(data => {res.send(data);})
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error al buscar desarrolladores_proyecto por id_proyecto."
      });
    });
};


  //actualizar desarrollador_proyecto
  exports.update = (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const id_desarrollador=req.params.id_desarrollador;
    Desarrollador_proyecto.update(req.body, {where: { id_proyecto: id_proyecto, id_desarrollador:id_desarrollador }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el desarrollador_proyecto con la id_desarrollador: ${id_desarrollador} y con la id_proyecto: ${id_proyecto}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al actualizar el desarrollador_proyecto con la id_desarrollador: ${id_desarrollador} y con la id_proyecto: ${id_proyecto}`});
      });
  };

  //eliminar desarrollador_proyecto
  exports.delete = (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const id_desarrollador=req.params.id_desarrollador;
    Desarrollador_proyecto.destroy({where: { id_proyecto: id_proyecto, id_desarrollador:id_desarrollador }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el desarrollador_proyecto con la id_desarrollador: ${id_desarrollador} y con la id_proyecto: ${id_proyecto}`});
      })
      .catch(err => {
        res.status(500).send({message: `Error al eliminar el desarrollador_proyecto con la id_desarrollador: ${id_desarrollador} y con la id_proyecto: ${id_proyecto}`});
      });
  };

  //eliminar todos los desarrolladores_proyecto
  exports.deleteAll = (req, res) => {
    Desarrollador_proyecto.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los desarrolladores_proyecto han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar desarrolladores_proyecto."
        });
      });
    }
 

