module.exports = (sequelize, Sequelize) => {
    const Tarea_automatica = sequelize.define("tarea_automatica", {
      id_tarea: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nivel_dificultad: {
        type: Sequelize.STRING
      },
      nivel_prioridad: {
        type: Sequelize.STRING
      },
      duracion_estimada: {
        type: Sequelize.INTEGER
      },
      restriccion_inicio: {
        type: Sequelize.DATE,
      },
      restriccion_finalizacion: {
        type: Sequelize.DATE
      },
      restriccion_dias: {
        type: Sequelize.STRING
      },
      max_horas_dia: {
        type: Sequelize.INTEGER
      },
      min_horas_dia: {
        type: Sequelize.INTEGER
      },
      antelacion_notificacion: {
        type: Sequelize.INTEGER
      },
      duracion_estimada_medida:{
        type: Sequelize.STRING
      }
      
    },{freezeTableName: true,
    timestamps: false});
      
    return Tarea_automatica;
  };