const numeros = [2,3,4,5,6,7,2,3,4,5]
//buscar el primer elemento impar
const result = numeros.find(element => element % 2 !== 0)
console.log(result); // 3

//buscar el índice del primer elemento impar
const result2 = numeros.findIndex(element => element % 2 !== 0);
console.log(result2); // 1 
