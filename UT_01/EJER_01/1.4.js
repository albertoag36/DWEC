const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"]

ciudades.push("Roma")

console.log(ciudades)

const ciudadesMayusculas = []

ciudadesMayusculasconst  = ciudades.map(function(ciudad){
    return ciudadesMayusculas.push(ciudad.toUpperCase())
})

console.log(ciudadesMayusculas)

// const ciudadesFiltradas = ciudades.filter(function(ciudad){
//     return ciudadesFiltradas.push(ciudad.length > 6)
// })

// console.log(ciudadesFiltradas)