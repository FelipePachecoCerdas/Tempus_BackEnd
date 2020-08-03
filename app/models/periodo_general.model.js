module.exports = (sequelize, Sequelize) => {
    const Periodo_general = sequelize.define("periodo_general", {
      id_horario_general: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      minutos_tiempo_inicial: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      minutos_tiempo_finalizacion: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
    },{freezeTableName: true,
    timestamps: false});
      
    return Periodo_general;
  };