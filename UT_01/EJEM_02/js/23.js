// Evaluación de corto circuito
// La evaluación de corto circuito es una técnica en JavaScript 
// que permite ejecutar una expresión solo si la primera parte es verdadera.
// También se puede usar para asignar valores predeterminados a variables.    
// console.log(nombre)



// auth = true; // Asignación de valor a auth
//Evaluación de corto circuito
let nombre;
let usuario = nombre || 'Invitado'; // Si nombre es undefined, usuario será 'Invitado'
console.log(usuario); // Imprime 

// Ejemplo:
// let nombre;
// console.log(nombre || 'Invitado'); // Imprime 'Invitado' si nombre es undefined o falso



// let auth=false

// En este caso, si auth es true, se ejecutará el console.log.
// Si auth es false, no se ejecutará nada.
// auth && console.log('Usuario Autenticado') 