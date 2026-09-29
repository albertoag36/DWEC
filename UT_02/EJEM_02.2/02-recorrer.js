// 02-recorrer.js
// forEach: ejecutar una función por cada elemento

const personajes = ['Bilbo', 'Gandalf', 'Nazgul'];

// Solo con el elemento
personajes.forEach((personaje) => {
  console.log(`Hola, ${personaje}`);
});

// Con el elemento, el índice y el array completo
personajes.forEach((personaje, indice, lista) => {
  console.log(`${personaje} está en la posición ${indice} de [${lista}]`);
});

// Con un array de objetos
const alumnos = [
  { nombre: 'Celina', nota: 7.5 },
  { nombre: 'David', nota: 4 },
  { nombre: 'Federico', nota: 9 },
];

alumnos.forEach((alumno) => {
  const resultado = alumno.nota >= 5 ? 'aprobado' : 'suspenso';
  console.log(`${alumno.nombre}: ${resultado}`);
});

// forEach NO devuelve nada
const devuelto = personajes.forEach((personaje) => personaje.toUpperCase());
console.log(devuelto); // undefined → si quieres un array de resultados, usa map
