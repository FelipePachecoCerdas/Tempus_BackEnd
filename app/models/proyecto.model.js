module.exports = (sequelize, Sequelize) => {
    const Proyecto = sequelize.define("proyecto", {
      id_proyecto: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nombre_proyecto: {
        type: Sequelize.STRING
      },
      descripcion_proyecto: {
        type: Sequelize.STRING
      },
      administrador_proyecto: {
        type: Sequelize.INTEGER
      },
      
    },{freezeTableName: true,
    timestamps: false});
      
    return Proyecto;
  };