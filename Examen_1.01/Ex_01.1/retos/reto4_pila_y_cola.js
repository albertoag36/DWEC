// ================================================================
// RETO 4 · PILA Y COLA CON ARRAYS                   (escribir funciones)
// ================================================================

// 4.1 atenderTurnos
export const atenderTurnos = (cola, cantidad) => {
  // TU CÓDIGO AQUÍ
  let contador = 0
  let elementosEliminados = []
  while (contador < cantidad) {
    elementosEliminados.push(cola.shift())
    contador++
  }
  return elementosEliminados
};

// 4.2 deshacerUltimas
export const deshacerUltimas = (historial, cantidad) => {
  // TU CÓDIGO AQUÍ

};
