

module.exports = app => {
  var userRouter = require("express").Router();
  var projectRouter = require("express").Router();
  var stakeholderProjectRouter =require("express").Router();
  var developerProjectRouter =require("express").Router();
  var activityRouter = require("express").Router();
  var effectiveSchedulePerDayRouter = require("express").Router();
  var specificSchedulePerDayRouter = require("express").Router();
  var generalPeriodRouter = require("express").Router();
  var specificPeriodRouter = require("express").Router();
  var activityDeveloperRouter = require("express").Router();
  var taskRouter = require("express").Router();
  var tagRouter = require("express").Router();
  var taskTagRouter = require("express").Router();
  var automaticTaskRouter = require("express").Router();
  var taskPeriodRouter = require("express").Router();

    const usuario = require("../controllers/usuario.controller.js");

    // Crear un nuevo usuario
    userRouter.post("/", usuario.create);
  
    // Retornar todos los usuarios
    userRouter.get("/", usuario.findAll);
  
    // Retornar usuarios que cumplan el nombre
    userRouter.get("/nombre/:nombre", usuario.findByName);
  
    // Retornar usuario que tenga esa id
    userRouter.get("/id_usuario/:id_usuario", usuario.findByPk);

    //Retornar usuario por correo_electronico
    userRouter.get("/correo_electronico/:correo_electronico", usuario.findByEmail);

    // Actualizar por id
    userRouter.put("/id_usuario/:id_usuario", usuario.update);
  
    // Eliminar por id
    userRouter.delete("/id_usuario/:id_usuario", usuario.delete);
  
    // Eliminar todos los usuarios
    userRouter.delete("/", usuario.deleteAll);

    userRouter.post("/consulta",usuario.consulta);
  
    app.use('/api/usuario', userRouter);

    const proyecto = require("../controllers/proyecto.controller.js");
  
    // Crear un nuevo proyecto
    projectRouter.post("/", proyecto.create);
  
    // Retornar todos los proyectos
    projectRouter.get("/", proyecto.findAll);
  
    // Retornar proyectos que cumplan el nombre
    projectRouter.get("/nombre_proyecto/:nombre_proyecto", proyecto.findByName);
  
    // Retornar proyecto que tenga esa id
    projectRouter.get("/id_proyecto/:id_proyecto", proyecto.findByPk);

    // Retornar proyecto que cumplan con el administrador_proyecto
    projectRouter.get("/administrador_proyecto/:administrador_proyecto", proyecto.findByProjectAdministrator);
  
    // Actualizar proyecto por id
    projectRouter.put("/id_proyecto/:id_proyecto", proyecto.update);
  
    // Eliminar proyecto por id
    projectRouter.delete("/id_proyecto/:id_proyecto", proyecto.delete);
  
    // Eliminar todos los proyectos
    projectRouter.delete("/", proyecto.deleteAll);

    projectRouter.post("/consulta",proyecto.consulta);
  
    app.use('/api/proyecto', projectRouter);


    const interesado_proyecto = require("../controllers/interesado_proyecto.controller.js");
  
    // Crear un nuevo interesado_proyecto
    stakeholderProjectRouter.post("/", interesado_proyecto.create);
  
    // Retornar todos los interesados_proyecto 
    stakeholderProjectRouter.get("/", interesado_proyecto.findAll);
  
    // Retornar el interesado_proyecto que tenga la id
    stakeholderProjectRouter.get("/id_proyecto/:id_proyecto/id_interesado/:id_interesado", interesado_proyecto.findByPk);
  
    // Retornar el interesado_proyecto por nivel_visilibidad
    stakeholderProjectRouter.get("/nivel_visibilidad/:nivel_visibilidad", interesado_proyecto.findByVisibilityLevel);

    // Retornar el interesado_proyecto por id_proyecto
    stakeholderProjectRouter.get("/id_proyecto/:id_proyecto", interesado_proyecto.findByProjectId);

    stakeholderProjectRouter.get("/id_interesado/:id_interesado",interesado_proyecto.findByStakeholderId);

    // Actualizar interesado_proyecto por id
    stakeholderProjectRouter.put("/id_proyecto/:id_proyecto/id_interesado/:id_interesado", interesado_proyecto.update);
  
    // Eliminar interesado_proyecto por id
    stakeholderProjectRouter.delete("/id_proyecto/:id_proyecto/id_interesado/:id_interesado", interesado_proyecto.delete);
  
    // Eliminar todos_los interesados_proyecto
    stakeholderProjectRouter.delete("/", interesado_proyecto.deleteAll);

    stakeholderProjectRouter.post("/consulta",interesado_proyecto.consulta);

    app.use('/api/interesado_proyecto', stakeholderProjectRouter);

    
    const desarrollador_proyecto = require("../controllers/desarrollador_proyecto.controller.js");
  
    // Crear un nuevo desarrollador_proyecto
    developerProjectRouter.post("/", desarrollador_proyecto.create);
  
    // Retornar todos los desarrolladores_proyecto 
    developerProjectRouter.get("/", desarrollador_proyecto.findAll);
  
    // Retornar el desarrollador_proyecto que tenga la id
    developerProjectRouter.get("/id_proyecto/:id_proyecto/id_desarrollador/:id_desarrollador", desarrollador_proyecto.findByPk);
  
    // Retornar el desarrollador_proyecto por nivel_visilibidad
    developerProjectRouter.get("/nivel_visibilidad/:nivel_visibilidad", desarrollador_proyecto.findByVisibilityLevel);

    // Retornar el desarrollador_proyecto por id_proyecto
    developerProjectRouter.get("/id_proyecto/:id_proyecto", desarrollador_proyecto.findByProjectId);

    // Retornar el desarrollador_proyecto por id_proyecto
    developerProjectRouter.get("/id_desarrollador/:id_desarrollador", desarrollador_proyecto.findByDeveloperId);

    // Actualizar desarrollador_proyecto por id
    developerProjectRouter.put("/id_proyecto/:id_proyecto/id_desarrollador/:id_desarrollador", desarrollador_proyecto.update);
  
    // Eliminar desarrollador_proyecto por id
    developerProjectRouter.delete("/id_proyecto/:id_proyecto/id_desarrollador/:id_desarrollador", desarrollador_proyecto.delete);
  
    // Eliminar todos_los desarrolladores_proyecto
    developerProjectRouter.delete("/", desarrollador_proyecto.deleteAll);

    developerProjectRouter.post("/consulta",desarrollador_proyecto.consulta);

    app.use('/api/desarrollador_proyecto', developerProjectRouter);


    const actividad = require("../controllers/actividad.controller.js");

    // Crear un nueva actividad
    activityRouter.post("/", actividad.create);
  
    // Retornar todas las actividades
    activityRouter.get("/", actividad.findAll);
  
    // Retornar actividades que cumplan el nombre
    activityRouter.get("/nombre_actividad/:nombre_actividad", actividad.findByName);

    // Retornar actividades que cumplan la id_proyecto
    activityRouter.get("/id_proyecto/:id_proyecto", actividad.findByProjectId);
  
    // Retornar usuario que tenga esa id
    activityRouter.get("/id_actividad/:id_actividad", actividad.findByPk);
  
    // Actualizar por id
    activityRouter.put("/id_actividad/:id_actividad", actividad.update);
  
    // Eliminar por id
    activityRouter.delete("/id_actividad/:id_actividad", actividad.delete);
  
    // Eliminar todos los usuarios
    activityRouter.delete("/", actividad.deleteAll);

    activityRouter.post("/consulta",actividad.consulta);
  
    app.use('/api/actividad', activityRouter);

  
    const horario_efectivo_por_dia = require("../controllers/horario_efectivo_por_dia.controller.js");

    // Crear un nuevo horario_efectivo_por_dia
    effectiveSchedulePerDayRouter.post("/", horario_efectivo_por_dia.create);
  
    // Retornar todos los horarios_efectivo_por_dia
    effectiveSchedulePerDayRouter.get("/", horario_efectivo_por_dia.findAll);
  
    // Retornar horarios_efectivo_por_dia que cumplan el id_usuario
    effectiveSchedulePerDayRouter.get("/id_usuario/:id_usuario", horario_efectivo_por_dia.findByUserId);
  
    // Retornar horario_efectivo_por_dia que tenga esa id
    effectiveSchedulePerDayRouter.get("/id_horario_efectivo/:id_horario_efectivo", horario_efectivo_por_dia.findByPk);
  
    // Actualizar por id
    effectiveSchedulePerDayRouter.put("/id_horario_efectivo/:id_horario_efectivo", horario_efectivo_por_dia.update);
  
    // Eliminar por id
    effectiveSchedulePerDayRouter.delete("/id_horario_efectivo/:id_horario_efectivo", horario_efectivo_por_dia.delete);
  
    // Eliminar todos los horarios_efectivo_por_dia
    effectiveSchedulePerDayRouter.delete("/", horario_efectivo_por_dia.deleteAll);

    effectiveSchedulePerDayRouter.post("/consulta",horario_efectivo_por_dia.consulta);
  
    app.use('/api/horario_efectivo_por_dia', effectiveSchedulePerDayRouter);


    const horario_especifico_por_dia = require("../controllers/horario_especifico_por_dia.controller.js");

    // Crear un nuevo horarios_especifico_por_dia
    specificSchedulePerDayRouter.post("/", horario_especifico_por_dia.create);
  
    // Retornar todos los horarios_especifico_por_dia
    specificSchedulePerDayRouter.get("/", horario_especifico_por_dia.findAll);
  
    // Retornar horarios_especifico_por_dia que cumplan el id_horario_efectivo
    specificSchedulePerDayRouter.get("/id_horario_efectivo/:id_horario_efectivo", horario_especifico_por_dia.findByEffectiveScheduleId);
  
    // Retornar horarios_especifico_por_dia que tenga esa id
    specificSchedulePerDayRouter.get("/id_horario_especifico/:id_horario_especifico", horario_especifico_por_dia.findByPk);
  
    // Actualizar por id
    specificSchedulePerDayRouter.put("/id_horario_especifico/:id_horario_especifico", horario_especifico_por_dia.update);
  
    // Eliminar por id
    specificSchedulePerDayRouter.delete("/id_horario_especifico/:id_horario_especifico", horario_especifico_por_dia.delete);
  
    // Eliminar todos los horarios_especifico_por_dia
    specificSchedulePerDayRouter.delete("/", horario_especifico_por_dia.deleteAll);

    specificSchedulePerDayRouter.post("/consulta",horario_especifico_por_dia.consulta);
  
    app.use('/api/horario_especifico_por_dia', specificSchedulePerDayRouter);
  
  
    const periodo_general = require("../controllers/periodo_general.controller.js");

    // Crear un nuevo periodo_general
    generalPeriodRouter.post("/", periodo_general.create);
  
    // Retornar todos los periodos_generales
    generalPeriodRouter.get("/", periodo_general.findAll);
  
    // Retornar periodos_generales que cumplan el id_horario_general
    generalPeriodRouter.get("/id_horario_general/:id_horario_general", periodo_general.findByGeneralScheduleId);
  
    // Retornar periodo_general que tenga esa id
    generalPeriodRouter.get("/id_horario_general/:id_horario_general/minInicial/:minutos_tiempo_inicial/minFinal/:minutos_tiempo_finalizacion", periodo_general.findByPk);
  
    // Actualizar por id
    generalPeriodRouter.put("/id_horario_general/:id_horario_general/minInicial/:minutos_tiempo_inicial/minFinal/:minutos_tiempo_finalizacion", periodo_general.update);
  
    // Eliminar por id
    generalPeriodRouter.delete("/id_horario_general/:id_horario_general/minInicial/:minutos_tiempo_inicial/minFinal/:minutos_tiempo_finalizacion", periodo_general.delete);
  
    // Eliminar todos los periodos_generales
    generalPeriodRouter.delete("/", periodo_general.deleteAll);

    generalPeriodRouter.post("/consulta",periodo_general.consulta);
  
    app.use('/api/periodo_general', generalPeriodRouter);


    const periodo_especifico = require("../controllers/periodo_especifico.controller.js");

    // Crear un nuevo periodo_especifico
    specificPeriodRouter.post("/", periodo_especifico.create);
  
    // Retornar todos los periodos_especificos
    specificPeriodRouter.get("/", periodo_especifico.findAll);
  
    // Retornar periodos_especificoes que cumplan el id_horario_especifico
    specificPeriodRouter.get("/id_horario_especifico/:id_horario_especifico", periodo_especifico.findBySpecificScheduleId);
  
    // Retornar periodo_especifico que tenga esa id
    specificPeriodRouter.get("/id_horario_especifico/:id_horario_especifico/minInicial/:minutos_tiempo_inicial/minFinal/:minutos_tiempo_finalizacion", periodo_especifico.findByPk);
  
    // Actualizar por id
    specificPeriodRouter.put("/id_horario_especifico/:id_horario_especifico/minInicial/:minutos_tiempo_inicial/minFinal/:minutos_tiempo_finalizacion", periodo_especifico.update);
  
    // Eliminar por id
    specificPeriodRouter.delete("/id_horario_especifico/:id_horario_especifico/minInicial/:minutos_tiempo_inicial/minFinal/:minutos_tiempo_finalizacion", periodo_especifico.delete);
  
    // Eliminar todos los periodos_especificoes
    specificPeriodRouter.delete("/", periodo_especifico.deleteAll);

    specificPeriodRouter.post("/consulta",periodo_especifico.consulta);
  
    app.use('/api/periodo_especifico', specificPeriodRouter);


    const actividad_desarrollador = require("../controllers/actividad_desarrollador.controller.js");
  
    // Crear un nuevo actividad_desarrollador
    activityDeveloperRouter.post("/", actividad_desarrollador.create);
  
    // Retornar todos los actividad_desarrollador 
    activityDeveloperRouter.get("/", actividad_desarrollador.findAll);
  
    // Retornar el actividad_desarrollador que tenga la id
    activityDeveloperRouter.get("/id_actividad/:id_actividad/id_desarrollador/:id_desarrollador", actividad_desarrollador.findByPk);

    // Retornar el actividad_desarrollador por id_proyecto
    activityDeveloperRouter.get("/id_proyecto/:id_proyecto", actividad_desarrollador.findByProjectId);

    activityDeveloperRouter.get("/id_proyecto/:id_proyecto/id_desarrollador/:id_desarrollador", actividad_desarrollador.findByProjectUserId)

    // Actualizar actividad_desarrollador por id
    activityDeveloperRouter.put("/id_actividad/:id_actividad/id_desarrollador/:id_desarrollador", actividad_desarrollador.update);
  
    // Eliminar actividad_desarrollador por id
    activityDeveloperRouter.delete("/id_actividad/:id_actividad/id_desarrollador/:id_desarrollador", actividad_desarrollador.delete);
  
    // Eliminar todos_los actividad_desarrollador
    activityDeveloperRouter.delete("/", actividad_desarrollador.deleteAll);

    activityDeveloperRouter.post("/consulta",actividad_desarrollador.consulta);

    app.use('/api/actividad_desarrollador', activityDeveloperRouter);


    const tarea = require("../controllers/tarea.controller.js");

    // Crear un nuevo tarea
    taskRouter.post("/", tarea.create);
  
    // Retornar todos los tareas
    taskRouter.get("/", tarea.findAll);
  
    // Retornar tareas que cumplan el nombre
    taskRouter.get("/nombre_tarea/:nombre_tarea", tarea.findByName);

    // Retornar tareas que cumplan el nombre
    taskRouter.get("/id_usuario/:id_usuario", tarea.findByUserId);
  
    // Retornar tareas que cumplan el nombre
    taskRouter.get("/id_usuario/:id_usuario/id_actividad/:id_actividad_proyecto", tarea.findByUserActivityId);

    // Retornar tarea que tenga esa id
    taskRouter.get("/id_tarea/:id_tarea", tarea.findByPk);
  
    // Actualizar por id
    taskRouter.put("/id_tarea/:id_tarea", tarea.update);
  
    // Eliminar por id
    taskRouter.delete("/id_tarea/:id_tarea", tarea.delete);
  
    // Eliminar todos los tareas
    taskRouter.delete("/", tarea.deleteAll);

    taskRouter.post("/consulta",tarea.consulta);
  
    app.use('/api/tarea', taskRouter);

    const etiqueta = require("../controllers/etiqueta.controller.js");

    // Crear un nuevo etiqueta
    tagRouter.post("/", etiqueta.create);
  
    // Retornar todos los etiquetas
    tagRouter.get("/", etiqueta.findAll);
  
    // Retornar etiquetas que cumplan el nombre
    tagRouter.get("/nombre_etiqueta/:nombre_etiqueta", etiqueta.findByName);

    // Retornar etiquetas que cumplan el id_usuario
    tagRouter.get("/id_usuario/:id_usuario", etiqueta.findByUserId);
  
    // Retornar etiqueta que tenga esa id
    tagRouter.get("/id_usuario/:id_usuario/nombre_etiqueta/:nombre_etiqueta", etiqueta.findByPk);
  
    // Actualizar por id
    tagRouter.put("/id_usuario/:id_usuario/nombre_etiqueta/:nombre_etiqueta", etiqueta.update);
  
    // Eliminar por id
    tagRouter.delete("/id_usuario/:id_usuario/nombre_etiqueta/:nombre_etiqueta", etiqueta.delete);
  
    // Eliminar todos los etiquetas
    tagRouter.delete("/", etiqueta.deleteAll);

    tagRouter.post("/consulta",etiqueta.consulta);
  
    app.use('/api/etiqueta', tagRouter);


    const etiqueta_tarea = require("../controllers/etiqueta_tarea.controller.js");

    // Crear un nuevo etiqueta_tarea
    taskTagRouter.post("/", etiqueta_tarea.create);
  
    // Retornar todos los etiqueta_tarea
    taskTagRouter.get("/", etiqueta_tarea.findAll);
  
    // Retornar etiqueta_tarea que cumplan el id_usuario
    taskTagRouter.get("/id_usuario/:id_usuario", etiqueta_tarea.findByUserId);
  
    // Retornar etiqueta_tarea que tenga esa id
    taskTagRouter.get("/id_usuario/:id_usuario/nombre_etiqueta/:nombre_etiqueta/id_tarea/:id_tarea", etiqueta_tarea.findByPk);
  
    // Actualizar por id
    taskTagRouter.put("/id_usuario/:id_usuario/nombre_etiqueta/:nombre_etiqueta/id_tarea/:id_tarea", etiqueta_tarea.update);
  
    // Eliminar por id
    taskTagRouter.delete("/id_usuario/:id_usuario/nombre_etiqueta/:nombre_etiqueta/id_tarea/:id_tarea", etiqueta_tarea.delete);
  
    // Eliminar todos los etiqueta_tarea
    taskTagRouter.delete("/", etiqueta_tarea.deleteAll);

    taskTagRouter.post("/consulta",etiqueta_tarea.consulta);
  
    app.use('/api/etiqueta_tarea', taskTagRouter);


    const tarea_automatica = require("../controllers/tarea_automatica.controller.js");

    // Crear un nuevo tarea_automatica
    automaticTaskRouter.post("/", tarea_automatica.create);
  
    // Retornar todos los tareas
    automaticTaskRouter.get("/", tarea_automatica.findAll);

    // Retornar tarea_automatica que tenga esa id
    automaticTaskRouter.get("/id_tarea/:id_tarea", tarea_automatica.findByPk);
  
    // Actualizar por id
    automaticTaskRouter.put("/id_tarea/:id_tarea", tarea_automatica.update);
  
    // Eliminar por id
    automaticTaskRouter.delete("/id_tarea/:id_tarea", tarea_automatica.delete);
  
    // Eliminar todos los tareas
    automaticTaskRouter.delete("/", tarea_automatica.deleteAll);
    
    automaticTaskRouter.post("/consulta",tarea_automatica.consulta);
  
    app.use('/api/tarea_automatica', automaticTaskRouter);


    const tarea_periodo = require("../controllers/tarea_periodo.controller.js");

    // Crear un nuevo tarea_periodo
    taskPeriodRouter.post("/", tarea_periodo.create);
  
    // Retornar todos los tareas
    taskPeriodRouter.get("/", tarea_periodo.findAll);

    // Retornar tarea_periodo que tenga esa id
    taskPeriodRouter.get("/id_tarea/:id_tarea/fecha_inicial/:fecha_hora_inicio_original/fecha_final/:fecha_hora_final_original", tarea_periodo.findByPk);
  
    // Actualizar por id
    taskPeriodRouter.put("/id_tarea/:id_tarea/fecha_inicial/:fecha_hora_inicio_original/fecha_final/:fecha_hora_final_original", tarea_periodo.update);
  
    // Eliminar por id
    taskPeriodRouter.delete("/id_tarea/:id_tarea/fecha_inicial/:fecha_hora_inicio_original/fecha_final/:fecha_hora_final_original", tarea_periodo.delete);

    taskPeriodRouter.get("/id_tarea/:id_tarea",tarea_periodo.findByTaskId);
  
    // Eliminar todos los tareas
    taskPeriodRouter.delete("/", tarea_periodo.deleteAll);

    taskPeriodRouter.post("/consulta",tarea_periodo.consulta);
  
    app.use('/api/tarea_periodo', taskPeriodRouter);

  };