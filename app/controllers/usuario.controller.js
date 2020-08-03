const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

// Crear un Usuario
exports.create = (req, res) => { 
    
    const usuario = {
      id_usuario: req.body.id_usuario,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      contrasenna: req.body.contrasenna,
      correo_electronico: req.body.correo_electronico,
      tipo_usuario: req.body.tipo_usuario,
      descripcion_personal: req.body.descripcion_personal,
      compannia: req.body.compannia,
      foto_perfil: req.body.foto_perfil
    };
  
    // Guardar el usuario en la BD
    Usuario.create(usuario)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al crear el usuario."
        });
      });
  };

  //Retornar usuario buscando por Pk
  exports.findByPk =  async (req, res) => {
    const id_usuario = req.params.id_usuario;
    console.log(req.params);
    //const results = await  Usuario.sequelize.query("delete from public.usuario "+"where id_usuario = "+id_usuario);
    //console.log(results[0][0]["nombre"]);
    Usuario.findByPk(id_usuario)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar el usuario con id: " + id_usuario
        });
      });
  };

  //Realiza la consulta solicitada
  exports.consulta =  async (req, res) => {
    const consulta = req.body.consulta;
    const results = await  Usuario.sequelize.query(consulta).then(data => {
      res.send(data[0]);
    })
    .catch(err => {
      res.send("fallo");

      
    });
    //console.log(results[0]);
  };

  // Retornar todos los usuarios
  exports.findAll = (req, res) => {

    Usuario.findAll({ where:{} })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ERROR al retornar los usuarios."
        });
      });
  };

  //buscar usuario por nombre
  exports.findByName = (req, res) => {
    Usuario.findAll({ where: { nombre: req.params.nombre } })
      .then(data => {res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al buscar usuarios por nombre."
        });
      });
  };

  //actualizar usuario
  exports.update = (req, res) => {
    const id_usuario = req.params.id_usuario;
    Usuario.update(req.body, {where: { id_usuario: id_usuario }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede actualizar el usuario que tiene la id: ${id_usuario}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al actualizar usuario de id: " + id_usuario});
      });
  };

  //eliminar usuario
  exports.delete = (req, res) => {
    const id_usuario = req.params.id_usuario;
    Usuario.destroy({where: { id_usuario: id_usuario }})
      .then(num => {
        (num == 1) ? res.send({message: "Completado con éxito"})
          : res.send({message: `No se puede eliminar el usuario que tiene la id: ${id_usuario}`});
      })
      .catch(err => {
        res.status(500).send({message: "Error al eliminar usuario de id: " + id_usuario});
      });
  };

  //eliminar todos los usuarios
  exports.deleteAll = (req, res) => {
    Usuario.destroy({where: {},truncate: false})
      .then(nums => {
        res.send({ message: `${nums} Todos los usuarios han sido eliminados!` });
      })
      .catch(err => {
        res.status(500).send({
          message:err.message || "Error al eliminar usuarios."
        });
      });
  };