module.exports = (sequelize, Sequelize) => {
    const Actividad_desarrollador = sequelize.define("actividad_desarrollador", {
      id_actividad: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      id_desarrollador: {
        type: Sequelize.INTEGER,
        primaryKey:true
      },
      id_proyecto: {
        type: Sequelize.INTEGER
      },
      
    },{freezeTableName: true,
    timestamps: false});
      
    return Actividad_desarrollador;
  };