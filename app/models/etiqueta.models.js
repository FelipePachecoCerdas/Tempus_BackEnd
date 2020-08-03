module.exports = (sequelize, Sequelize) => {
    const Etiqueta = sequelize.define("etiqueta", {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nombre_etiqueta: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      color: {
        type: Sequelize.STRING
      },
    },{freezeTableName: true,
    timestamps: false});
      
    return Etiqueta;
  };