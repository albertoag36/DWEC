function calcularAreaRectangulo (base = 1, altura = 2) {
    return base*altura
}

const calcularAreaTriangulo = function (base = 1, altura = 2) {
    return (base*altura)/2
}

const calcularAreaTrianguloArrow = (base = 1, altura = 2) => (base*altura)/2

console.log(calcularAreaRectangulo(2,2))
console.log(calcularAreaTriangulo(2,2))
console.log(calcularAreaTrianguloArrow(3,2))