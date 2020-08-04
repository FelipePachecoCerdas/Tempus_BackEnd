const db = require("../models");
const Proyecto = db.proyecto;
const Op = db.Sequelize.Op;

// Crear un proyecto
exports.create = (req, res) => {

    const proyecto = {
      id_proyecto: req.body.id_proyecto,
      nombre_proyecto: req.body.nombre_proyecto,
      descripcion_proyecto: req.body.descripcion_proyecto,
      administrador_proyecto: req.body.administrador_proyecto
    };
  
    // Guardar proyecto en la BD
    Proyecto.create(proyecto)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear el proyecto."
        });
      });
  };

  //buscar proyecto por PK
  exports.findByPk =  (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    Proyecto.findByPk(id_proyecto)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el proyecto con id: " + id_proyecto
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Proyecto.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al realizar la consulta: "+consulta
      });
    });;
    console.log(results[0]);
  };

  //Retornar todos los proyectos.
  exports.findAll = (req, res) => {
  
    Proyecto.findAll({ where:{},order:
      [['id_proyecto', 'ASC']] })
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

  //buscar proyecto por nombre
  exports.findByName = (req, res) => {
    Proyecto.findAll({ where: { nombre_proyecto: req.params.nombre_proyecto } })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar proyectos por nombre."
        });
      });
  };



  //buscar proyecto por administrador_proyecto
  exports.findByProjectAdministrator = (req, res) => {
    Proyecto.findAll({ where: { administrador_proyecto: req.params.administrador_proyecto },order:
      [['id_proyecto', 'ASC']]  })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar proyectos por nombre."
        });
      });
  };

  //actualizar proyecto
  exports.update = (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    Proyecto.update(req.body, {where: { id_proyecto: id_proyecto }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el proyecto que tiene la id: ${id_proyecto}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al actualizar el proyecto de id: " + id_proyecto});
      });
  };

  //eliminar proyecto
  exports.delete = (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    Proyecto.destroy({where: { id_proyecto: id_proyecto }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el proyecto que tiene la id: ${id_proyecto}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al eliminar proyecto de id: " + id_proyecto});
      });
  };

  //eliminar todos los proyectos
  exports.deleteAll = (req, res) => {
    Proyecto.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los proyectos han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar proyectos."
        });
      });
    }
 

