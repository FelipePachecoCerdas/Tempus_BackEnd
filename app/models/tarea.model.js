module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define("tarea", {
      id_tarea: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      porcentaje_completitud: {
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER
      },
      id_actividad_proyecto: {
        type: Sequelize.INTEGER
      },
      nombre_tarea: {
        type: Sequelize.STRING,
      },
      descripcion_tarea: {
        type: Sequelize.STRING
      },
      repeticion: {
        type: Sequelize.STRING
      },
      notificar: {
        type: Sequelize.STRING
      },
      modo_notificar: {
        type: Sequelize.STRING
      },
      modo_tarea: {
        type: Sequelize.STRING
      },
      repetir_hasta:{
        type:Sequelize.DATE
      }
      
    },{freezeTableName: true,
    timestamps: false});
      
    return Tarea;
  };