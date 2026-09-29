// pruebas.js
// Comprueba automáticamente tus funciones. Ejecutar: node pruebas.js
// NO hace falta modificar este archivo.

import { catalogoMatriz, novedadesMatriz, pedidosTexto } from './datos.js';
import * as tienda from './tienda.js';

let aciertos = 0;
let total = 0;

// Ejecuta la función de prueba y compara el resultado con el esperado
const comprobar = (descripcion, prueba, esperado) => {
  total++;
  try {
    const obtenido = prueba();
    if (JSON.stringify(obtenido) === JSON.stringify(esperado)) {
      aciertos++;
      console.log(`  ✅ ${descripcion}`);
    } else {
      console.log(`  ❌ ${descripcion}`);
      console.log('       esperado:', JSON.stringify(esperado));
      console.log('       obtenido:', JSON.stringify(obtenido));
    }
  } catch (error) {
    console.log(`  💥 ${descripcion} → ${error.message}`);
  }
};

// Datos de prueba (se vuelven a crear en cada prueba para que no se "contaminen")
const nuevoCatalogo = () => tienda.crearCatalogo(catalogoMatriz);
const catalogoCompleto = () => tienda.ampliarCatalogo(nuevoCatalogo(), novedadesMatriz);
const pedidoLucia = { cliente: 'Lucía', lineas: [{ nombre: 'Tocadiscos', cantidad: 1 }, { nombre: 'Vinilo Jazz', cantidad: 2 }] };
const pedidoMarta = { cliente: 'Marta', lineas: [{ nombre: 'Preamplificador', cantidad: 1 }] };

console.log('\nPARTE 1 · Catálogo');
comprobar('1.1 crearCatalogo convierte la primera fila', () => nuevoCatalogo()[0],
  { nombre: 'Tocadiscos', categoria: 'equipos', precio: 200, stock: 3 });
comprobar('1.1 crearCatalogo mantiene la longitud', () => nuevoCatalogo().length, 8);
comprobar('1.1 crearCatalogo devuelve [] si no recibe un array', () => tienda.crearCatalogo('hola'), []);
comprobar('1.2 ampliarCatalogo añade las novedades', () => catalogoCompleto().length, 10);
comprobar('1.2 ampliarCatalogo no modifica el original', () => {
  const original = nuevoCatalogo();
  tienda.ampliarCatalogo(original, novedadesMatriz);
  return original.length;
}, 8);
comprobar('1.3 nombresOrdenados respeta las tildes', () => tienda.nombresOrdenados(catalogoCompleto()).slice(6),
  ['Vinilo Électro', 'Vinilo Jazz', 'Vinilo Ópera', 'Vinilo Rock']);
comprobar('1.4 ordenarPorPrecio ascendente', () => tienda.ordenarPorPrecio(nuevoCatalogo()).map((p) => p.precio),
  [20, 25, 30, 32, 35, 80, 200, 400]);
comprobar('1.4 ordenarPorPrecio descendente', () => tienda.ordenarPorPrecio(nuevoCatalogo(), true).map((p) => p.precio),
  [400, 200, 80, 35, 32, 30, 25, 20]);
comprobar('1.4 ordenarPorPrecio no modifica el original', () => {
  const original = nuevoCatalogo();
  tienda.ordenarPorPrecio(original);
  return original[0].nombre;
}, 'Tocadiscos');
comprobar('1.5 tresMasBaratos', () => tienda.tresMasBaratos(catalogoCompleto()),
  ['Cables de altavoz', 'Vinilo Rock', 'Vinilo Électro']);

console.log('\nPARTE 2 · Búsquedas');
comprobar('2.1 buscarProducto encuentra sin distinguir mayúsculas', () => tienda.buscarProducto(nuevoCatalogo(), 'altavoz').precio, 400);
comprobar('2.1 buscarProducto devuelve undefined si no existe', () => [
  tienda.buscarProducto(nuevoCatalogo(), 'Radio'),
  tienda.buscarProducto(nuevoCatalogo(), 'Tocadiscos').stock,
], [undefined, 3]);
comprobar('2.2 existeProducto (sí)', () => tienda.existeProducto(nuevoCatalogo(), 'VINILO ROCK'), true);
comprobar('2.2 existeProducto (no)', () => tienda.existeProducto(nuevoCatalogo(), 'Radio'), false);
comprobar('2.3 posicionProducto', () => tienda.posicionProducto(nuevoCatalogo(), 'Vinilo Jazz'), 5);
comprobar('2.3 posicionProducto devuelve -1', () => tienda.posicionProducto(nuevoCatalogo(), 'Radio'), -1);
comprobar('2.4 agotados', () => tienda.agotados(nuevoCatalogo()), ['Preamplificador']);
comprobar('2.5 productosEntre 25 y 35', () => tienda.productosEntre(nuevoCatalogo(), 25, 35).map((p) => p.nombre),
  ['Aguja de repuesto', 'Vinilo Jazz', 'Vinilo Rock', 'Vinilo Ópera']);

console.log('\nPARTE 3 · Cálculos');
comprobar('3.1 valorAlmacen', () => tienda.valorAlmacen(catalogoCompleto()), 3592);
comprobar('3.2 productoMasCaro', () => tienda.productoMasCaro(nuevoCatalogo()).nombre, 'Altavoz');
comprobar('3.3 unidadesPorCategoria', () => tienda.unidadesPorCategoria(catalogoCompleto()),
  { equipos: 7, accesorios: 29, discos: 14 });
comprobar('3.4 hayAgotados (sí)', () => tienda.hayAgotados(nuevoCatalogo()), true);
comprobar('3.4 hayAgotados (no)', () => tienda.hayAgotados(tienda.crearCatalogo(novedadesMatriz)), false);
comprobar('3.5 preciosValidos (sí)', () => tienda.preciosValidos(nuevoCatalogo()), true);
comprobar('3.5 preciosValidos (no)', () => tienda.preciosValidos(tienda.crearCatalogo([['Gratis', 'otros', 0, 1]])), false);

console.log('\nPARTE 4 · Pedidos');
comprobar('4.1 parsearPedido', () => tienda.parsearPedido(pedidosTexto[0]), pedidoLucia);
comprobar('4.1 parsearPedido convierte la cantidad en número', () => typeof tienda.parsearPedido(pedidosTexto[2]).lineas[0].cantidad, 'number');
comprobar('4.2 puedeServirse (sí)', () => tienda.puedeServirse(nuevoCatalogo(), pedidoLucia), true);
comprobar('4.2 puedeServirse (no, sin stock)', () => tienda.puedeServirse(nuevoCatalogo(), pedidoMarta), false);
comprobar('4.2 puedeServirse (no, producto inexistente)', () =>
  tienda.puedeServirse(nuevoCatalogo(), { cliente: 'X', lineas: [{ nombre: 'Radio', cantidad: 1 }] }), false);
comprobar('4.3 totalPedido', () => tienda.totalPedido(nuevoCatalogo(), pedidoLucia), 260);
comprobar('4.4 servirPedido descuenta el stock', () => {
  const nuevo = tienda.servirPedido(nuevoCatalogo(), pedidoLucia);
  return [nuevo[0].stock, nuevo[5].stock];
}, [2, 3]);
comprobar('4.4 servirPedido no modifica el original', () => {
  const original = nuevoCatalogo();
  tienda.servirPedido(original, pedidoLucia);
  return original[0].stock;
}, 3);
comprobar('4.5 generarTicket', () => tienda.generarTicket(nuevoCatalogo(), pedidoLucia),
  'Cliente: Lucía\n1 x Tocadiscos = 200 €\n2 x Vinilo Jazz = 60 €\nTOTAL: 260 €');

console.log('\nPARTE 5 · Cola y carrito');
comprobar('5.1 atenderSiguiente saca el primero', () => {
  const cola = ['A', 'B', 'C'];
  return [tienda.atenderSiguiente(cola), cola];
}, ['A', ['B', 'C']]);
comprobar('5.2 agregarUrgente lo pone el primero', () => {
  const cola = ['A', 'B'];
  return [tienda.agregarUrgente(cola, 'URGENTE'), cola];
}, [3, ['URGENTE', 'A', 'B']]);
comprobar('5.3 agregarAlCarrito', () => {
  const carrito = [];
  const historial = [];
  tienda.agregarAlCarrito(carrito, historial, 'Altavoz');
  return [carrito, historial];
}, [['Altavoz'], [{ accion: 'agregar', nombre: 'Altavoz' }]]);
comprobar('5.4 quitarDelCarrito', () => {
  const carrito = ['Altavoz', 'Vinilo Jazz', 'Altavoz'];
  const historial = [];
  const quitado = tienda.quitarDelCarrito(carrito, historial, 'Altavoz');
  return [quitado, carrito, historial];
}, [true, ['Vinilo Jazz', 'Altavoz'], [{ accion: 'quitar', nombre: 'Altavoz', posicion: 0 }]]);
comprobar('5.4 quitarDelCarrito devuelve false si no está', () => tienda.quitarDelCarrito(['Altavoz'], [], 'Radio'), false);
comprobar('5.5 deshacer un "quitar" lo devuelve a su sitio', () => {
  const carrito = ['Vinilo Jazz', 'Altavoz'];
  const historial = [{ accion: 'quitar', nombre: 'Altavoz', posicion: 0 }];
  tienda.deshacer(carrito, historial);
  return carrito;
}, ['Altavoz', 'Vinilo Jazz', 'Altavoz']);
comprobar('5.5 deshacer un "agregar" quita la última aparición', () => {
  const carrito = ['Altavoz', 'Vinilo Jazz', 'Altavoz'];
  const historial = [{ accion: 'agregar', nombre: 'Altavoz' }];
  tienda.deshacer(carrito, historial);
  return [carrito, historial];
}, [['Altavoz', 'Vinilo Jazz'], []]);
comprobar('5.5 deshacer con historial vacío', () => tienda.deshacer([], []), false);

console.log('\nPARTE 6 · Informe final');
comprobar('6.1 procesarCola separa servidos y rechazados', () => {
  const cola = pedidosTexto.map(tienda.parsearPedido);
  const resultado = tienda.procesarCola(catalogoCompleto(), cola);
  return [resultado.servidos.length, resultado.rechazados.map((p) => p.cliente), cola.length];
}, [4, ['Marta', 'Irene'], 0]);
comprobar('6.2 productosVendidos (sin repetidos y ordenados)', () =>
  tienda.productosVendidos([pedidoLucia, pedidoMarta, pedidoLucia]), ['Preamplificador', 'Tocadiscos', 'Vinilo Jazz']);
comprobar('6.3 graficoStock', () => tienda.graficoStock(tienda.crearCatalogo([['Altavoz', 'equipos', 400, 3], ['Radio', 'equipos', 50, 0]])),
  ['Altavoz: ■■■ (3)', 'Radio:  (0)']);

console.log(`\nResultado: ${aciertos} de ${total} pruebas superadas`);
