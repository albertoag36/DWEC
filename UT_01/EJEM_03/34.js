// En JavaScript, no se especifican los tipos de argumentos de las funciones. 
// Esto significa que se pueden pasar argumentos de cualquier tipo a una función,
//  y la función debe manejar esos argumentos de manera adecuada. Por ejemplo:

const average = (x, y) => {
  let sum = 0
  let n = 0
  if (Array.isArray(x)) {
    for (const value of x) { sum += value; n++ }
  } else {
    sum = x; n = 1
  }
  if (Array.isArray(y)) {
    for (const value of y) { sum += value }
  } else {
    sum += y; n++
  }
  return n === 0 ? 0 : sum / n
} 
  
result = average(1, 2)
result = average([1, 2, 3], 4)
result = average(1, [2, 3, 4])
result = average([1, 2], [3, 4, 5]) 
console.log(result)

// Sin embargo, esto también significa que si se pasan argumentos de tipos inesperados,
//  la función puede producir resultados incorrectos o errores en tiempo de ejecución. 
// Por ejemplo:     
result = average('1', '2') // '12' / 2 = 6
console.log(result)