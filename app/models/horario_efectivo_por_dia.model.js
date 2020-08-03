module.exports = (sequelize, Sequelize) => {
    const Horario_efectivo_por_dia = sequelize.define("horario_efectivo_por_dia", {
      id_horario_efectivo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      dia: {
        type: Sequelize.STRING
      },
      id_usuario: {
        type: Sequelize.INTEGER
      },
    },{freezeTableName: true,
    timestamps: false});
      
    return Horario_efectivo_por_dia;
  };