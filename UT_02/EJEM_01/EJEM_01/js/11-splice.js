const todoList = [
    "Limpiar el baño",
    "Ir de compras",
    "Ordenar",
    "Cortar el césped"
];
todoList.splice(
2, // Índice desde el que insertar elementos
0, // Número de elementos que se van a eliminar
"Pintar el garaje" // Elemento que se va a añadir
);
console.log(todoList);
// [
// «Limpiar el baño»,
// «Ir de compras»,
// «Pintar el garaje»,
// «Ordenar»,
// «Cortar el césped»
// ]
todoList.splice(
2, // Índice desde el que insertar elementos
0, // Número de elementos que se van a eliminar
"Colocar césped", // Elementos que se van a ...
"Diseñar huerto" // ... añadir
);
console.log(todoList);
// [
// «Limpiar el baño»,
// «Ir de compras»,
// «Colocar césped»,
// «Hacer el huerto»,
// «Pintar el garaje»,
// «Ordenar»,
// «Cortar el césped»
// ] 
