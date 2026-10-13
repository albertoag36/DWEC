// main.js — LIGA CANTÁBRICA · mini aplicación de consola
// ¡NO MODIFIQUES ESTE ARCHIVO!
//
// Es la aplicación que vas construyendo paso a paso: cada paso usa los módulos de src/.
//
//   node main.js            → ejecuta los 3 pasos seguidos
//   node main.js 2          → ejecuta solo el paso 2
//
// Si una función aún no está hecha (o falla), la aplicación sigue y lo avisa con 💥.

import { equipos, partidos } from './datos.js';
import { describirEquipo, resultadoPartido } from './src/carga.js';
import { contarPartidos, formaReciente } from './src/consultas.js';
import { estadisticasGoles, calcularClasificacion, equipoMasGoleador } from './src/clasificacion.js';

const seguro = (fn) => {
  try {
    return fn();
  } catch (error) {
    return `💥 ${error.name}: ${error.message}`;
  }
};
const titulo = (texto) => console.log(`\n===== ${texto} =====`);

// La ordenación de la tabla la hace la propia aplicación (no forma parte del examen)
const ordenarTabla = (filas) =>
  [...filas].sort((a, b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf || a.nombre.localeCompare(b.nombre, 'es'));

const mostrarClasificacion = (listaPartidos) => {
  const filas = seguro(() => calcularClasificacion(equipos, listaPartidos));
  if (!Array.isArray(filas)) return console.log(filas);
  console.log('Pos  Equipo                  PJ PG PE PP  GF  GC  DG PTS');
  ordenarTabla(filas).forEach((f, indice) => {
    console.log(
      `${String(indice + 1).padStart(2)}   ${String(f.nombre).padEnd(22)} ` +
        `${String(f.pj).padStart(2)} ${String(f.pg).padStart(2)} ${String(f.pe).padStart(2)} ${String(f.pp).padStart(2)} ` +
        `${String(f.gf).padStart(3)} ${String(f.gc).padStart(3)} ${String(f.dg).padStart(3)} ${String(f.pts).padStart(3)}`,
    );
  });
};

// ---------------------------------------------------------------
// Los 3 pasos de la aplicación
// ---------------------------------------------------------------
const pasos = {
  1() {
    titulo('PASO 1 · CARGAR Y COMPROBAR LOS DATOS  (src/carga.js)');
    console.log(`Datos cargados: ${equipos.length} equipos y ${partidos.length} partidos.\n`);
    console.log('Equipos:');
    equipos.forEach((equipo) => console.log(`  ${seguro(() => describirEquipo(equipo))}`));

    const recuento = seguro(() =>
      partidos.reduce((cuenta, partido) => {
        const estado = resultadoPartido(partido);
        return { ...cuenta, [estado]: (cuenta[estado] ?? 0) + 1 };
      }, {}),
    );
    console.log('\nEstado de los partidos:', recuento);
  },

  2() {
    titulo('PASO 2 · CONSULTAR LOS DATOS  (src/consultas.js)');
    console.log('Partidos en total:', seguro(() => contarPartidos(partidos)));
    console.log('Partidos de la jornada 6:', seguro(() => contarPartidos(partidos, (p) => p.jornada === 6)));
    console.log('Partidos de Ástur CF:', seguro(() => contarPartidos(partidos, (p) => p.local === 'AST' || p.visitante === 'AST')));
    console.log('\nForma reciente (V = victoria, E = empate, D = derrota):');
    equipos.forEach((e) => {
      const forma = seguro(() => formaReciente(partidos, e.id));
      console.log(`  ${e.id}: ${Array.isArray(forma) ? forma.join('') : forma}`);
    });
  },

  3() {
    titulo('PASO 3 · CLASIFICACIÓN Y EQUIPO MÁS GOLEADOR  (src/clasificacion.js)');
    const goles = partidos.filter((p) => Number.isInteger(p.golesLocal)).map((p) => p.golesLocal + p.golesVisitante);
    console.log('Goles por partido jugado:', seguro(() => estadisticasGoles(...goles)));
    console.log('\nClasificación tras la jornada 6:');
    mostrarClasificacion(partidos);
    console.log('\nEquipo más goleador:', seguro(() => equipoMasGoleador(partidos)));
  },
};

const argumento = process.argv[2];
console.log('LIGA CANTÁBRICA · mini aplicación de consola');
if (argumento && pasos[argumento]) pasos[argumento]();
else Object.values(pasos).forEach((paso) => paso());
