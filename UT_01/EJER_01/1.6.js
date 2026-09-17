const cursos = [
  {
    nombre: "Matemáticas Discretas",
    profesor: "Laura Fernández",
    estudiantes: [
      { nombre: "Carlos Pérez", calificacion: 0 },
      { nombre: "Ana Gómez", calificacion: 7.2 },
      { nombre: "Diego Martín", calificacion: 9.1 },
    ],
  },
  {
    nombre: "Programación Orientada a Objetos",
    profesor: "Javier Ruiz",
    estudiantes: [
      { nombre: "Sofía López", calificacion: 6.8 },
      { nombre: "Pablo Sánchez", calificacion: 9.4 },
      { nombre: "Marta Díaz", calificacion: 7.9 },
      { nombre: "Hugo Romero", calificacion: 5.5 },
    ],
  },
  {
    nombre: "Bases de Datos",
    profesor: "Elena Castro",
    estudiantes: [
      { nombre: "Lucía Vargas", calificacion: 8.0 },
      { nombre: "Adrián Torres", calificacion: 6.3 },
      { nombre: "Claudia Ibáñez", calificacion: 9.7 },
    ],
  },
  {
    nombre: "Redes de Computadores",
    profesor: "Miguel Ángel Ortega",
    estudiantes: [
      { nombre: "Raúl Molina", calificacion: 4 },
      { nombre: "Isabel Navarro", calificacion: 8.8 },
      { nombre: "Fernando Reyes", calificacion: 4.9 },
    ],
  },
];

const resumenCursos = cursos.map(function (curso) {
  let sumaTotal = curso.estudiantes.reduce(
    (i, estudiante) => i + estudiante.calificacion,
    0,
  );

  return {
    nombreCurso: curso.nombre,
    promedioCalificaciones: sumaTotal / curso.estudiantes.length,
  };
});

console.log(resumenCursos);

const cursosDestacados = cursos.filter(function (curso) {
  for (let resumenCurso of resumenCursos) {
    if (
      resumenCurso.nombreCurso === curso.nombre &&
      resumenCurso.promedioCalificaciones >= 7
    ) {
      return true;
    }
  }
});

// Preguntar por imprimir estudiante
console.dir(cursosDestacados);

cursosDestacados.forEach((curso) => {
  for (let resumenCurso of resumenCursos) {
    if (resumenCurso.nombreCurso == curso.nombre)
      return console.log(
        `📘 El curso ${curso.nombre} tiene un promdedio de ${resumenCurso.promedioCalificaciones} y es considerado destacado`,
      );
  }
});

cursos.forEach((curso) => {
  if (curso.estudiantes.find(function (estudiante) {
    return estudiante.calificacion < 4
  }))
    return console.log(
      `⚠️ Atención: En el curso ${curso.nombre} hay estudiantes con calificaciones muy bajas.`,
    );
});
