module.exports = (sequelize, Sequelize) => {
    const Tarea_periodo = sequelize.define("tarea_periodo", {
      id_tarea: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fecha_hora_inicio_original: {
        type: Sequelize.DATE
      },
      fecha_hora_final_original: {
        type: Sequelize.DATE
      },
      fecha_hora_inicio_real: {
        type: Sequelize.DATE
      },
      fecha_hora_final_real: {
        type: Sequelize.DATE,
      },
      antelacion_notificacion: {
        type: Sequelize.INTEGER
      }
      
    },{freezeTableName: true,
    timestamps: false});
      
    return Tarea_periodo;
  };