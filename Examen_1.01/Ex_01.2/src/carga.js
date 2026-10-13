// ================================================================
// PASO 1 · CARGAR Y COMPROBAR LOS DATOS
// ================================================================
// Módulo: src/carga.js
// Míralo en la aplicación:    node main.js 1
//
// · No cambies el nombre de las funciones ni el orden de sus parámetros.
// · Todas se exportan (export const ...) para que las usen main.js.

// 1.1 describirEquipo
export const describirEquipo = (equipo) => {
  // TU CÓDIGO AQUÍ

};

// 1.2 resultadoPartido
export const resultadoPartido = (partido) => {
  // TU CÓDIGO AQUÍ

  if(partido.golesLocal > partido.golesVisitante){
    return "local"
  } 
  
  if (partido.golesLocal < partido.golesVisitante){
    return "visitante"
  }
  
  //REVISAR
  if (partido.golesLocal === partido.golesVisitante){
    return "empate"
  }
  
  if (partido.golesLocal !== typeof(Number) || partido.golesVisitante !== typeof(Number)){
    return "aplazado"
  }
};
