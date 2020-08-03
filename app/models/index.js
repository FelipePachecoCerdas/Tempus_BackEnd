const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.proyecto = require("./proyecto.model.js")(sequelize, Sequelize);
db.interesado_proyecto = require("./interesado_proyecto.model.js")(sequelize, Sequelize);
db.desarrollador_proyecto = require("./desarrollador_proyecto.model.js")(sequelize, Sequelize);
db.actividad = require("./actividad.model.js")(sequelize, Sequelize); 
db.horario_efectivo_por_dia = require("./horario_efectivo_por_dia.model.js")(sequelize, Sequelize);
db.horario_especifico_por_dia = require("./horario_especifico_por_dia.model.js")(sequelize, Sequelize);
db.periodo_general = require("./periodo_general.model.js")(sequelize, Sequelize);
db.periodo_especifico = require("./periodo_especifico.model.js")(sequelize, Sequelize);
db.actividad_desarrollador = require("./actividad_desarrollador.model.js")(sequelize, Sequelize);
db.tarea = require("./tarea.model.js")(sequelize, Sequelize);
db.etiqueta = require("./etiqueta.models.js")(sequelize, Sequelize);
db.etiqueta_tarea = require("./etiqueta_tarea.model.js")(sequelize, Sequelize);
db.tarea_automatica = require("./tarea_automatica.model.js")(sequelize, Sequelize);
db.tarea_periodo = require("./tarea_periodo.model.js")(sequelize, Sequelize);


module.exports = db;