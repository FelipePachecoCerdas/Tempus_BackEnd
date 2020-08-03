
module.exports = (sequelize, Sequelize) => {
    const Desarrollador_proyecto = sequelize.define("desarrollador_proyecto", {

    id_desarrollador: {        
        type: Sequelize.INTEGER,
        primaryKey: true
        
    },
    id_proyecto: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nivel_visibilidad: {
        type: Sequelize.STRING
    },
    },
    {   freezeTableName: true,
        timestamps: false});
      
    return Desarrollador_proyecto;
  };