const estudiantes = [
    {
        nombre: "Alberto",
        apellidos: "Alves Garcia",
        calificacion: 8,
        aprobado: true
    },
    {
        nombre: "Pepe",
        apellidos: "Garcia Garcia",
        calificacion: 0,
        aprobado: true
    },
    {
        nombre: "Manolo",
        apellidos: "Alves Alves",
        calificacion: 5,
        aprobado: false
    }]

// console.log(estudiantes)

estudiantesID = []

let id = 1

estudiantes.map(function (estudiante) {
    estudiante.id = id++

    return estudiantesID.push(estudiante)
})

console.log(estudiantesID)

estudiantesFiltrados = []

estudiantes.map(function (estudiante) {
    if (estudiante.calificacion >= 5) return estudiantesFiltrados.push(estudiante)
})

console.log(estudiantesFiltrados)


estudiantesFiltrados.forEach(estudiante => {
    console.log(`¡Felicidades ${estudiante.nombre}, has aprobado con ${estudiante.calificacion}`)
});

estudiantes.forEach(estudiante => {
    if (estudiante.aprobado && estudiante.calificacion >= 5) {
        return console.log(`¡Felicidades ${estudiante.nombre}, has aprobado con ${estudiante.calificacion}`)
    } return console.log(`⚠️ Incoherencia en el registro de ${estudiante.nombre}: calificación = ${estudiante.calificacion}, aprobado: ${estudiante.aprobado}`)
})