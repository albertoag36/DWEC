const maximo = (...numeros) => {
    let numeroMax = 0
    for (let numero of numeros) {
        if (numero > numeroMax) {
            numeroMax = numero
        }
    }

    return numeroMax
}

const notas = [7, 9, 5, 10, 6]

console.log(maximo(...notas)) // 10