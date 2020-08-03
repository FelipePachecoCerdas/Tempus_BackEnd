module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      contrasenna: {
        type: Sequelize.STRING
      },
      correo_electronico: {
        type: Sequelize.STRING,
        unique: true
      },
      tipo_usuario: {
        type: Sequelize.STRING
      },
      descripcion_personal: {
        type: Sequelize.STRING
      },
      compannia: {
        type: Sequelize.STRING
      },
      foto_perfil: {
        type: Sequelize.BLOB
      },
      
    },{freezeTableName: true,
    timestamps: false});
      
    return Usuario;
  };