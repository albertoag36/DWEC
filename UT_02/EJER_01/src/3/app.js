import {
  agregarLibro,
  obtenerLibros,
  buscarLibro,
  eliminarLibro,
  calcularTotalPaginas,
  ordenarPorPaginas,
  hayLibrosLargos,
  todosSonLibrosCortos
} from "./biblioteca.js";

console.log(obtenerLibros());
console.log();

agregarLibro({
  id: 11,
  titulo: "La sombra del viento",
  autor: "Carlos Ruiz Zafón",
  paginas: 565,
});

console.log(obtenerLibros());
console.log();

console.log(buscarLibro(4));
console.log();

console.log(eliminarLibro(3));
console.log();

console.log(obtenerLibros());
console.log();

console.log(`El número de páginas total de la biblioteca es: ${calcularTotalPaginas()}`)
console.log();

console.log(ordenarPorPaginas());
console.log();

let limitePaginas = 672
hayLibrosLargos(limitePaginas) ? console.log(`Hay algún libro con más de ${limitePaginas} páginas`) : console.log(`No hay algún libro con más de ${limitePaginas} páginas`)
console.log();

todosSonLibrosCortos(limitePaginas) ? console.log(`Todos los libros tienen menos de ${limitePaginas} páginas`) : console.log(`No hay ningún libro con menos de ${limitePaginas} páginas`)
console.log();