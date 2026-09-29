// 08-practica.js
// Caso práctico: combinamos varios métodos sobre una lista de productos

import { productos } from './productos.js';

// 1. Nombres de los productos que tienen stock (filter + map)
const conStock = productos
  .filter((producto) => producto.stock > 0)
  .map((producto) => producto.nombre);
console.log(conStock); // ['Teclado', 'Monitor', 'Cascos']

// 2. Valor total del inventario (reduce)
const valorTotal = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0,
);
console.log(valorTotal); // 740

// 3. Copia ordenada por precio, sin modificar el original (spread + sort)
const porPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log(porPrecio.map((producto) => producto.nombre));
// ['Ratón', 'Teclado', 'Cascos', 'Monitor']

// 4. ¿Hay algún producto de más de 100 €? (some)
console.log(productos.some((producto) => producto.precio > 100)); // true

// 5. Buscar un producto por su nombre (find)
const monitor = productos.find((producto) => producto.nombre === 'Monitor');
console.log(monitor); // { nombre: 'Monitor', precio: 180, stock: 2 }

// 6. Lista de nombres separada por comas (map + join)
console.log(productos.map((producto) => producto.nombre).join(', '));
// 'Teclado, Ratón, Monitor, Cascos'
