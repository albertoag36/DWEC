
sumar(10, 20)
sumar(300, 1)
sumar(100)

// // Funciones - Function Expression
// se pueden asignar a una variable
// hay que llamarlas después de haber sido declaradas
// const sumar = function(numero1 = 0, numero2 = 0) {
//     console.log(numero1 + numero2)
// }
// Así si funcionaría, esto se llama hoisting, las funciones 
//  se suben al inicio del archivo automáticamente
function sumar(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2)
}

