//bucles while y do...while

function contarHasta(valor) {
    let contador = 1;
    
    // Mientras que el contador sea menor o igual al valor, sigue ejecutando el bucle
    while (contador <= valor) {
        console.log(contador);
        contador++; // Incrementa el contador en 1 en cada iteración
    }
}

// Ejemplo de uso
contarHasta(5);  // Imprime: 1, 2, 3, 4, 5


// function contarHasta(valor) {
//     let contador = 1;
    
//     // El bucle se ejecuta al menos una vez y luego verifica la condición
//     do {
//         console.log(contador);
//         contador++; // Incrementa el contador en 1 en cada iteración
//     } while (contador <= valor);
// }

// // Ejemplo de uso
// contarHasta(5);  // Imprime: 1, 2, 3, 4, 5

