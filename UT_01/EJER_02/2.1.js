const numeros = [0,1,2,3,4,5]

const dobles = numeros.map(numero => numero*2)

console.log(dobles)

const pares = numeros.filter(numero => numero%2 == 0)

console.log(pares)

for (numeroPar of pares) {
    console.log(numeroPar)
}