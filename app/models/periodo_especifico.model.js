module.exports = (sequelize, Sequelize) => {
    const Periodo_especifico = sequelize.define("periodo_especifico", {
      id_horario_especifico: {
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
      
    return Periodo_especifico;
  };