const estudiantes = [estudiante1 = {
    nombre: "Alberto",
    apellidos: "Alves Garcia",
    aprobado: true
}, estudiante2 = {
    nombre: "Pepe",
    apellidos: "Garcia Garcia",
    aprobado: true
}, estudiante3 = {
    nombre: "Manolo",
    apellidos: "Alves Alves",
    aprobado: false
}]

console.log(estudiantes)

//Utiliza el método .map() para crear un nuevo array donde a cada 
// estudiante se le añade una propiedad ‘id’ única (puede ser 1, 2, 3…).
estudiantesID = []

estudiantes.map(function(id) {
    for (let estudiantesN of estudiantes){
        estudiantes.id(estudiantes.findIndex(estudiantesN))
    }

    return  estudiantesID.push(estudiantes)
})

//Utiliza el método .filter() para obtener un array que contenga únicamente 
// a los estudiantes que tienen una calificación mayor o igual a 5.

// Para cada estudiante en el array filtrado (los aprobados), imprime un mensaje 
// en consola usando Template Strings que diga: “¡Felicidades [nombre], has aprobado con [calificacion]!”.


// Recorre el array original y verifica si el valor de la propiedad aprobado es 
// coherente con la calificacion (es decir, si calificacion >= 5 entonces aprobado 
// debe ser true, y si es menor, debe ser false).
// Si hay incoherencias, imprime un mensaje como:
// “⚠️ Incoherencia en el registro de [nombre]: calificación = [calificacion], 
// aprobado = [aprobado]”