// ================================================================
// RETO 1 · CORREGIR MÉTODOS DE ARRAY                (corregir código)
// ================================================================

export const ordenarNumeros = (numeros) => {
  /*
  return numeros.sort((a, b) => a - b);
  
  Tiene que ser una copia de números, porque sort modifica el array
  */
  return [...numeros].sort((a, b) => a - b);
};

export const duplicarPrecios = (precios) => {
  return precios.map((precio) => precio * 2);
};

export const ultimos = (lista, cantidad) => {
  /*
  return lista.splice(-cantidad);

  slice en vez de splice
  */
 return lista.slice(-cantidad);
};

export const primerPar = (numeros) => {
  /*
  const par = numeros.find((numero) => numero % 2 === 0);
  return par === 0 ? par : 'ninguno';
  
  Tiene que ser par !== undefined
  */
  const par = numeros.find((numero) => numero % 2 === 0);
  return par !== undefined ? par : 'ninguno';
};

export const sumaTotal = (numeros) => {
  return numeros.reduce((acumulado, numero) => acumulado + numero, 0);
};
