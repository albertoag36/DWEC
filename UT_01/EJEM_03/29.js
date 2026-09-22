// ejemplo bucle for... in 
// El bucle for...in en JavaScript se utiliza para iterar
//  sobre las propiedades enumerables de un objeto
//  o los índices de un array.
//   Es diferente del bucle for...of, que itera sobre los valores.

function mostrarPropiedades(persona) {
    for (const propiedad in persona) {
        console.log(`${propiedad}: ${persona[propiedad]}`);
    }
}

// Ejemplo de uso
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

mostrarPropiedades(persona);
// Imprime:
// nombre: Juan
// edad: 30
// ciudad: Madrid


// con un array (no se recomienda) sería así:
function mostrarIndices(array) {
    for (const indice in array) {
        console.log(`Índice ${indice}: ${array[indice]}`);
    }
}

// Ejemplo de uso
const colores = ["rojo", "verde", "azul"];
mostrarIndices(colores);
// Imprime:
// Índice 0: rojo
// Índice 1: verde
// Índice 2: azul
