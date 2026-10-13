// main.js — Ejecuta TODOS los retos con ejemplos y muestra lo que devuelve cada función
// ¡NO MODIFIQUES ESTE ARCHIVO!
//
//   node main.js          → ejecuta los 4 retos
//   node main.js 3        → ejecuta solo el reto 3
//
// No puntúa nada (para eso está pruebas.js): sirve para ver qué hace tu código.
// Si una función aún no está hecha o falla, el programa sigue y lo avisa (undefined / 💥).

import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { inspect } from 'node:util';

const DIRECTORIO = resolve(process.env.RETOS_DIR ?? './retos');
const filtro = process.argv[2];
const ver = (valor) => inspect(valor, { depth: 3, breakLength: Infinity, compact: true });
// Para las llamadas que muestran además cómo queda el array original
const TEXTO = Symbol('texto');
const conOriginal = (resultado, etiqueta, original) => ({ [TEXTO]: `${ver(resultado)}   (${etiqueta}: ${ver(original)})` });

const PRODUCTOS = [
  { nombre: 'Teclado', categoria: 'perifericos', precio: 25, unidades: 4 },
  { nombre: 'Monitor', categoria: 'pantallas', precio: 180, unidades: 2 },
  { nombre: 'Ratón', categoria: 'perifericos', precio: 12, unidades: 0 },
  { nombre: 'Cable HDMI', categoria: 'cables', precio: 7, unidades: 15 },
];

// Cada reto: archivo, título y, para cada función, las llamadas de ejemplo.
// Una llamada es [descripción, (m) => resultado]; "m" es el módulo del reto.
const retos = [
  {
    num: 1,
    archivo: 'reto1_corregir_arrays.js',
    titulo: 'Corregir métodos de array',
    llamadas: [
      ['ordenarNumeros([10, 9, 1])', (m) => { const lista = [10, 9, 1]; const r = m.ordenarNumeros(lista); return conOriginal(r, 'la lista original queda', lista); }],
      ['duplicarPrecios([5, 10])', (m) => m.duplicarPrecios([5, 10])],
      ['ultimos([1, 2, 3, 4], 2)', (m) => { const lista = [1, 2, 3, 4]; const r = m.ultimos(lista, 2); return conOriginal(r, 'la lista original queda', lista); }],
      ['primerPar([3, 0, 4])', (m) => m.primerPar([3, 0, 4])],
      ['primerPar([3, 5])', (m) => m.primerPar([3, 5])],
      ['sumaTotal([1, 2, 3])', (m) => m.sumaTotal([1, 2, 3])],
      ['sumaTotal([])', (m) => m.sumaTotal([])],
    ],
  },
  {
    num: 2,
    archivo: 'reto2_switch_y_bucles.js',
    titulo: 'switch y bucles',
    llamadas: [
      ...['estudiante', 'jubilado', 'familiaNumerosa', 'socio', 'vip'].map((c) => [`descuentoPorCategoria('${c}')`, (m) => m.descuentoPorCategoria(c)]),
      ["sumarHastaLimite([5, -2, 'x', 4, 8, 1], 10)", (m) => m.sumarHastaLimite([5, -2, 'x', 4, 8, 1], 10)],
      ['sumarHastaLimite([3, 3, 4, 9], 10)', (m) => m.sumarHastaLimite([3, 3, 4, 9], 10)],
      ["contarVocales('Murciélago ÁÚ')", (m) => m.contarVocales('Murciélago ÁÚ')],
      ["contarVocales('rhythm')", (m) => m.contarVocales('rhythm')],
    ],
  },
  {
    num: 3,
    archivo: 'reto3_metodos_de_array.js',
    titulo: 'Métodos de array',
    llamadas: [
      ['nombresCaros(productos, 20)', (m) => m.nombresCaros(PRODUCTOS, 20)],
      ['totalInventario(productos)', (m) => m.totalInventario(PRODUCTOS)],
      ['agruparPorCategoria(productos)', (m) => m.agruparPorCategoria(PRODUCTOS)],
      ['productoMasBarato(productos)', (m) => m.productoMasBarato(PRODUCTOS)],
      ['productoMasBarato([])', (m) => m.productoMasBarato([])],
      ['hayAgotados(productos)', (m) => m.hayAgotados(PRODUCTOS)],
    ],
  },
  {
    num: 4,
    archivo: 'reto4_pila_y_cola.js',
    titulo: 'Pila y cola con arrays',
    llamadas: [
      ['atenderTurnos(cola, 2)', (m) => { const cola = ['A1', 'A2', 'A3', 'A4']; const r = m.atenderTurnos(cola, 2); return conOriginal(r, 'la cola queda', cola); }],
      ['atenderTurnos(cola, 10)', (m) => { const cola = ['X', 'Y']; const r = m.atenderTurnos(cola, 10); return conOriginal(r, 'la cola queda', cola); }],
      ['deshacerUltimas(historial, 2)', (m) => { const h = ['abrir', 'escribir', 'borrar']; const r = m.deshacerUltimas(h, 2); return conOriginal(r, 'el historial queda', h); }],
    ],
  },
];

console.log('BATERÍA DE RETOS · ejecución de ejemplo');
for (const reto of retos) {
  if (filtro && String(reto.num) !== filtro) continue;
  console.log(`\n===== RETO ${reto.num} · ${reto.titulo}  (retos/${reto.archivo}) =====`);
  let modulo;
  try {
    modulo = await import(pathToFileURL(resolve(DIRECTORIO, reto.archivo)).href);
  } catch (error) {
    console.log(`💥 No se puede cargar ${reto.archivo}: ${error.message}`);
    continue;
  }
  for (const [descripcion, ejecutar] of reto.llamadas) {
    let salida;
    try {
      const resultado = ejecutar(modulo);
      salida = resultado?.[TEXTO] ?? ver(resultado);
    } catch (error) {
      salida = `💥 ${error.name}: ${error.message}`;
    }
    console.log(`  ${descripcion}  →  ${salida}`);
  }
}
