// El token 
// =>  
// debe estar en la misma línea que los parámetros:
const average = (x, y)=> // OK
  (x + y) / 2

const distance  = (x, y) // Error
  => Math.abs(x - y) 


//   Si una función flecha no hace nada más que devolver un objeto literal, 
// debe encerrar el objeto entre paréntesis:
const stats = (x, y) => ({
    average: (x + y) / 2,
    distance: Math.abs(x - y)
  }) 
