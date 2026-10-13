// ================================================================
// RETO 3 · MÉTODOS DE ARRAY                         (escribir funciones)
// ================================================================

// 3.1 nombresCaros
export const nombresCaros = (productos, minimo) => {
  // TU CÓDIGO AQUÍ
  return productos.filter(producto => producto.precio >= minimo).map(producto => producto.nombre).sort((a,b) => a.localeCompare(b, 'es'))
};

// 3.2 totalInventario
export const totalInventario = (productos) => {
  // TU CÓDIGO AQUÍ
  return productos.length === 0 ? 0 : productos.reduce((acumulador, producto) => acumulador + (producto.precio * producto.unidades), 0)
};

// 3.3 agruparPorCategoria
export const agruparPorCategoria = (productos) => {
  // TU CÓDIGO AQUÍ

};

// 3.4 productoMasBarato
export const productoMasBarato = (productos) => {
  // TU CÓDIGO AQUÍ
  return productos.length === 0 ? undefined : productos.sort((a,b) => a.precio - b.precio)[0]
};

// 3.5 hayAgotados
export const hayAgotados = (productos) => {
  // TU CÓDIGO AQUÍ
  return productos.some(producto => producto.unidades === 0)
};
