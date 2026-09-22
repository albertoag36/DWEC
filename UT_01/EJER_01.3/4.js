'use strict'

const sumaFlexible = (x, y) => {
  const valorDe = (v) => {
    if (Array.isArray(v)) {
        console.log("")
        return v.reduce((acc, indice) => acc + indice)
    }
    return v
  }

  return valorDe(x) + valorDe(y)
}

console.log(sumaFlexible(3, 4))      // 7
console.log(sumaFlexible([1, 2], 4)) // 7