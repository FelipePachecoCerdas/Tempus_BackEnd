module.exports = (sequelize, Sequelize) => {
    const Actividad = sequelize.define("actividad", {
      id_actividad: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      id_proyecto: {
        type: Sequelize.INTEGER
      },
      nombre_actividad: {
        type: Sequelize.STRING
      },
      descripcion_actividad: {
        type: Sequelize.STRING
      },
      fecha_inicio: {
        type: Sequelize.DATE,
        unique: true
      },
      fecha_finalizacion: {
        type: Sequelize.DATE
      },
    },{freezeTableName: true,
    timestamps: false});
      
    return Actividad;
  };