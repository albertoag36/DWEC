const cursos = [
    {
        nombre: "Matemáticas Discretas",
        profesor: "Laura Fernández",
        estudiantes: [
            { nombre: "Carlos Pérez", calificacion: 8.5 },
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
            { nombre: "Raúl Molina", calificacion: 7.5 },
            { nombre: "Isabel Navarro", calificacion: 8.8 },
            { nombre: "Fernando Reyes", calificacion: 4.9 },
        ],
    },
]

resumenCursos = []

cursos.map(function(curso) {
    resumenCurso = {
        nombreCurso: curso.nombre,
        promedioCalificaciones:
    }
})