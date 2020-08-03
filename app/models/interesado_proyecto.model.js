
module.exports = (sequelize, Sequelize) => {
    const Interesado_proyecto = sequelize.define("interesado_proyecto", {

    id_interesado: {        
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
      
    return Interesado_proyecto;
  };