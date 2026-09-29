// main.js
// Informe completo de la tienda. Ejecutar: node main.js
// NO hace falta modificar este archivo: usa las funciones de tienda.js

import { catalogoMatriz, novedadesMatriz, pedidosTexto, pedidoUrgenteTexto } from './datos.js';
import * as tienda from './tienda.js';

console.log('===== 1. CATÁLOGO =====');
const catalogo = tienda.ampliarCatalogo(tienda.crearCatalogo(catalogoMatriz), novedadesMatriz);
console.log('Productos:', tienda.nombresOrdenados(catalogo));
console.log('Más baratos:', tienda.tresMasBaratos(catalogo));

console.log('\n===== 2 y 3. BÚSQUEDAS Y CÁLCULOS =====');
console.log('Agotados:', tienda.agotados(catalogo));
console.log('Entre 25 y 35 €:', tienda.productosEntre(catalogo, 25, 35).map((p) => p.nombre));
console.log('Más caro:', tienda.productoMasCaro(catalogo).nombre);
console.log('Valor del almacén:', tienda.valorAlmacen(catalogo), '€');
console.log('Unidades por categoría:', tienda.unidadesPorCategoria(catalogo));

console.log('\n===== 4 y 5. COLA DE PEDIDOS =====');
const cola = pedidosTexto.map(tienda.parsearPedido);
tienda.agregarUrgente(cola, tienda.parsearPedido(pedidoUrgenteTexto));
console.log('Pedidos en cola:', cola.map((pedido) => pedido.cliente).join(', '));

const resultado = tienda.procesarCola(catalogo, cola);

resultado.servidos.forEach((pedido) => {
  console.log(`\n${tienda.generarTicket(catalogo, pedido)}`);
});
console.log('\nRechazados por falta de stock:', resultado.rechazados.map((p) => p.cliente));

console.log('\n===== 5. CARRITO CON DESHACER =====');
const carrito = [];
const historial = [];
tienda.agregarAlCarrito(carrito, historial, 'Altavoz');
tienda.agregarAlCarrito(carrito, historial, 'Vinilo Jazz');
tienda.agregarAlCarrito(carrito, historial, 'Altavoz');
tienda.quitarDelCarrito(carrito, historial, 'Altavoz');
console.log('Carrito:', carrito);
tienda.deshacer(carrito, historial);
console.log('Tras deshacer:', carrito);
tienda.deshacer(carrito, historial);
console.log('Tras deshacer otra vez:', carrito);

console.log('\n===== 6. INFORME FINAL =====');
console.log('Productos vendidos:', tienda.productosVendidos(resultado.servidos));
const facturado = resultado.servidos.reduce(
  (total, pedido) => total + tienda.totalPedido(catalogo, pedido),
  0,
);
console.log('Total facturado:', facturado, '€');
console.log('Valor del almacén tras las ventas:', tienda.valorAlmacen(resultado.catalogo), '€');
console.log('\nStock final:');
tienda.graficoStock(resultado.catalogo).forEach((linea) => console.log(linea));
