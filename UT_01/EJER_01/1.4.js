const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"]

ciudades.push("Roma")

console.log(ciudades)

const ciudadesMayusculas = []

ciudades.map(function(ciudad){
    return ciudadesMayusculas.push(ciudad.toUpperCase())
})

console.log(ciudadesMayusculas)

const ciudadesFiltradas = []

ciudades.filter(function(ciudad){
    if (ciudad.length > 6) return ciudadesFiltradas.push(ciudad)
})

console.log(ciudadesFiltradas)