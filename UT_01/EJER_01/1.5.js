const estudiantes = [estudiante1 = {
    nombre: "Alberto",
    apellidos: "Alves Garcia",
    calificacion: 8,
    aprobado: true
}, estudiante2 = {
    nombre: "Pepe",
    apellidos: "Garcia Garcia",
    calificacion: 0,
    aprobado: true
}, estudiante3 = {
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

// console.log(estudiantesID)

estudiantesFiltrados = []

estudiantes.map(function (estudiante) {
    if (estudiante.calificacion >= 5)  return estudiantesFiltrados.push(estudiante)
})

console.log(estudiantesFiltrados)

// Para cada estudiante en el array filtrado (los aprobados), imprime un mensaje
// en consola usando Template Strings que diga: “¡Felicidades [nombre], has aprobado con [calificacion]!”.

estudiantes.map(function (estudiante) {
    if (estudiante.aprobado)  return estudiantesFiltrados.push(estudiante)
})

estudiantesFiltrados.forEach(estudiante => {
    console.log(`¡Felicidades ${estudiante.nombre}, has aprobado con ${estudiante.calificacion}`)
});

// Recorre el array original y verifica si el valor de la propiedad aprobado es
// coherente con la calificacion (es decir, si calificacion >= 5 entonces aprobado
// debe ser true, y si es menor, debe ser false).
// Si hay incoherencias, imprime un mensaje como:
// “⚠️ Incoherencia en el registro de [nombre]: calificación = [calificacion],
// aprobado = [aprobado]”