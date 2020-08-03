module.exports = (sequelize, Sequelize) => {
    const Horario_especifico_por_dia = sequelize.define("horario_especifico_por_dia", {
      id_horario_especifico: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fecha: {
        type: Sequelize.DATE
      },
      id_horario_efectivo: {
        type: Sequelize.INTEGER
      },
    },{freezeTableName: true,
    timestamps: false});
      
    return Horario_especifico_por_dia;
  };