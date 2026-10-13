// DATOS DE PARTIDA DE LA PRUEBA · Liga Cantábrica
//4 equipos · jornadas 1 a 6 (12 partidos, ida y vuelta)
// ¡NO MODIFIQUES ESTE ARCHIVO!

// ---------------------------------------------------------------
// EQUIPOS
// Ojo: no todos los equipos tienen todos los datos.
//   · 'estadio' puede faltar, y dentro de él 'aforo' también.
//   · 'entrenador' puede ser null (banquillo vacante).
// ---------------------------------------------------------------
export const equipos = [
  { id: 'AST', nombre: 'Ástur CF', ciudad: 'Oviedo', fundacion: 1923, estadio: { nombre: 'La Campa', aforo: 9800 }, entrenador: { nombre: 'Marta Quirós', anios: 12 } },
  { id: 'CUE', nombre: 'Cuenca Minera', ciudad: 'Mieres', fundacion: 1939, estadio: { nombre: 'La Hullera' }, entrenador: null },
  { id: 'SEL', nombre: 'Sella Deportivo', ciudad: 'Arriondas', fundacion: 1975, entrenador: { nombre: 'Pelayo Díaz', anios: 0 } },
  { id: 'NOR', nombre: 'Ñora Atlético', ciudad: 'Noreña', fundacion: 1990, estadio: { nombre: 'El Rebollar', aforo: 2100 }, entrenador: { nombre: 'Covadonga Lobo', anios: 2 } },
];

// ---------------------------------------------------------------
// PARTIDOS (ordenados por jornada)
// Cada partido: { jornada, local, visitante, golesLocal, golesVisitante, goles }
//   · 'local' y 'visitante' son el id del equipo.
//   · 'goles' es un array de { minuto, jugador, equipo } ordenado por minuto.
// Ojo: hay partidos APLAZADOS con datos incompletos:
//   · goles a null · propiedades ausentes (sin 'goles') · goles a NaN
// ---------------------------------------------------------------
export const partidos = [
  { jornada: 1, local: 'AST', visitante: 'NOR', golesLocal: 2, golesVisitante: 3,
    goles: [
      { minuto: 6, jugador: 'Aitor Foyo', equipo: 'NOR' },
      { minuto: 28, jugador: 'Joel Llaneza', equipo: 'NOR' },
      { minuto: 55, jugador: 'Hugo Meana', equipo: 'AST' },
      { minuto: 72, jugador: 'Aitor Foyo', equipo: 'NOR' },
      { minuto: 73, jugador: 'Álvaro Llano', equipo: 'AST' },
    ] },
  { jornada: 1, local: 'CUE', visitante: 'SEL', golesLocal: 1, golesVisitante: 3,
    goles: [
      { minuto: 2, jugador: 'Brais Fombona', equipo: 'CUE' },
      { minuto: 30, jugador: 'Éric Cueto', equipo: 'SEL' },
      { minuto: 65, jugador: 'Nacho Bode', equipo: 'SEL' },
      { minuto: 70, jugador: 'Pablo Alea', equipo: 'SEL' },
    ] },
  { jornada: 2, local: 'SEL', visitante: 'AST', golesLocal: 1, golesVisitante: 1,
    goles: [
      { minuto: 10, jugador: 'Pablo Alea', equipo: 'SEL' },
      { minuto: 21, jugador: 'Adrián Piñera', equipo: 'AST' },
    ] },
  { jornada: 2, local: 'NOR', visitante: 'CUE', golesLocal: null, golesVisitante: null, goles: [] },
  { jornada: 3, local: 'AST', visitante: 'CUE', golesLocal: 0, golesVisitante: 0, goles: [] },
  { jornada: 3, local: 'SEL', visitante: 'NOR', golesLocal: 1, golesVisitante: 1,
    goles: [
      { minuto: 47, jugador: 'Ismael Cabo', equipo: 'NOR' },
      { minuto: 55, jugador: 'Nacho Bode', equipo: 'SEL' },
    ] },
  { jornada: 4, local: 'NOR', visitante: 'AST' },
  { jornada: 4, local: 'SEL', visitante: 'CUE', golesLocal: NaN, golesVisitante: NaN, goles: [] },
  { jornada: 5, local: 'AST', visitante: 'SEL', golesLocal: 1, golesVisitante: 0,
    goles: [
      { minuto: 23, jugador: 'Álvaro Llano', equipo: 'AST' },
    ] },
  { jornada: 5, local: 'CUE', visitante: 'NOR', golesLocal: 2, golesVisitante: 1,
    goles: [
      { minuto: 70, jugador: 'Raúl Pandiella', equipo: 'CUE' },
      { minuto: 74, jugador: 'Ismael Cabo', equipo: 'NOR' },
      { minuto: 79, jugador: 'Brais Fombona', equipo: 'CUE' },
    ] },
  { jornada: 6, local: 'CUE', visitante: 'AST', golesLocal: 0, golesVisitante: 0, goles: [] },
  { jornada: 6, local: 'NOR', visitante: 'SEL', golesLocal: 2, golesVisitante: 0,
    goles: [
      { minuto: 14, jugador: 'Ismael Cabo', equipo: 'NOR' },
      { minuto: 50, jugador: 'Ismael Cabo', equipo: 'NOR' },
    ] },
];
