const nombre = "Alberto"
let edad = 24
const tieneMascota = true

edad = 18
// tieneMascota = false

console.log(`${nombre} tipo: ${typeof(nombre)}`)
console.log(`${edad} tipo: ${typeof(edad)}`)
console.log(`${tieneMascota} tipo: ${typeof(tieneMascota)}`)

//REVISAR
let mascota = function(){
    if (tieneMascota){
        return "tiene mascota"
    }
    return "no tiene mascota"

}
console.log(`${nombre} tiene ${edad} años y ${mascota}}`)