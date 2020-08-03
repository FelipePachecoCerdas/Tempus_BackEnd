
module.exports = (sequelize, Sequelize) => {
    const Etiqueta_tarea = sequelize.define("etiqueta_tarea", {

    id_usuario: {        
        type: Sequelize.INTEGER,
        primaryKey: true
        
    },
    nombre_etiqueta: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_tarea: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    },
    {   freezeTableName: true,
        timestamps: false});
      
    return Etiqueta_tarea;
  };