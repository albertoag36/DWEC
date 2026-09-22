//CUIDADO:
//al no ser javaScript un lenguaje tipado,
//  no hay distinción entre tipos de datos en los parámetros de una función
function average(x, y) {
  return (x + y) / 2
}
let result = average(6, 7)
console.log(result)
result = average('6', '7')
console.log(result)
result = average('6', 7)
console.log(result)