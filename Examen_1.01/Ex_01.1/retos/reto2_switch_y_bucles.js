// ================================================================
// RETO 2 · switch Y BUCLES                          (escribir funciones)
// ================================================================


// 2.1 descuentoPorCategoria
export const descuentoPorCategoria = (categoria) => {
  // TU CÓDIGO AQUÍ
  switch (categoria) {
    case 'estudiante':
    case 'jubilado':
      return 0.2
    case 'familiaNumerosa':
      return 0.3
    case 'socio':
      return 0.1
    default:
      return 0
  }
};

// 2.2 sumarHastaLimite
export const sumarHastaLimite = (numeros, limite) => {
  // TU CÓDIGO AQUÍ
  let sumatorio = 0
  for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    if (numero >= 0) {
      if (sumatorio < limite - 1) {
        sumatorio += numero
      } else {
        break
      }
    }
  }

  return sumatorio
};

// 2.3 contarVocales
export const contarVocales = (texto) => {
  // TU CÓDIGO AQUÍ
  let contadorVocales = 0
  for (let caracter of texto) {
    if (caracter.toLocaleLowerCase() === 'a' || caracter.toLocaleLowerCase() === 'e' || caracter.toLocaleLowerCase() === 'i' || caracter.toLocaleLowerCase() === 'o' || caracter.toLocaleLowerCase() === 'u') {
      contadorVocales++
    }
  }
  return contadorVocales
};
