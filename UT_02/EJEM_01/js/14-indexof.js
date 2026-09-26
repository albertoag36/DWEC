const transactions = [
-20.0, 500.50, -40.0, -34.50, 200, 500.50, -20, 200
];

// búsqueda por delante indexOf
console.log(transactions.indexOf(-20.0)); // Salida: 0
console.log(transactions.indexOf(500)); // Salida: -1
console.log(transactions.indexOf(200)); // Salida: 4
console.log(transactions.indexOf(200, 5)); // Salida: 7  

// búsqueda por atrás lastIndexOf
console.log(transactions.lastIndexOf(-20.0)); // Salida: 6
console.log(transactions.lastIndexOf(500)); // Salida: -1
console.log(transactions.lastIndexOf(200)); // Salida: 7
console.log(transactions.lastIndexOf(200, 5)); // Salida: 4 
