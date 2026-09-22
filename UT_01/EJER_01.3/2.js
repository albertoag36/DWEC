const suma = (a, b) => a + b
const resta = (a, b) => a - b

// potencia debe lanzar un error si el exponente es negativo
// (pista: usa cuerpo de bloque y throw)
const potencia = (base, exponente) => {
    try {
        if (exponente < 0){
            throw "El exponente debe ser positivo"
        }
        return Math.pow(base, exponente)
    } catch (e) {
        console.log(e)
    }
}

const aplicarOperacion = (a, b, operacion) => {
    switch (operacion) {
        case suma:
            return suma(a, b)
        case resta:
            return resta(a, b)
        case potencia:
            return potencia(a, b)
        default:
            console.log(`Escribe una de las siguientes operaciones: suma, resta o potencia`)
    }
}


console.log(aplicarOperacion(5, 3, suma))  // 8
console.log(aplicarOperacion(5, 3, resta)) // 2
console.log(aplicarOperacion(2, 3, potencia)) // 8
console.log(aplicarOperacion(2, -1, potencia)) // debería lanzar un error