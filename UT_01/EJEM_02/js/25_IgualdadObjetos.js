let harry = { name: 'Harry Smith', age: 42 } 

let harry2 = harry 

harry === harry2 // verdadero: dos referencias al mismo objeto 

let harry3 = { name: 'Harry Smith', age: 42 } 

harry === harry3 // falso: objetos diferentes 