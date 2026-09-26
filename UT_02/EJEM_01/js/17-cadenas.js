const nombres = ["María", "James", "Peter", "45", 1234567.89, new Date];

const cadenaNombres = nombres.toString();
console.log(cadenaNombres); // Salida: María,James,Peter

console.log(nombres.toLocaleString('es-ES')); 
// "1.234.567,89" (en España: punto como separador de miles, coma decimal)
// "fecha en formato español"

console.log(nombres.toLocaleString('en-US')); 
// "1,234,567.89" (en EE.UU.: coma como separador de miles, punto decimal)
// "fecha en formato estadounidense"

const nombresUnidos = nombres.join("-");
console.log(nombresUnidos); // Salida: María-James-Peter...
