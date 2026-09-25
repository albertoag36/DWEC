const libros = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 471
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
  },
  {
    id: 3,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96
  },
  {
    id: 4,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    paginas: 863
  },
  {
    id: 5,
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    paginas: 249
  },
  {
    id: 6,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    paginas: 432
  },
  {
    id: 7,
    titulo: "El hobbit",
    autor: "J.R.R. Tolkien",
    paginas: 310
  },
  {
    id: 8,
    titulo: "Pedro Páramo",
    autor: "Juan Rulfo",
    paginas: 130
  },
  {
    id: 9,
    titulo: "Crimen y castigo",
    autor: "Fyodor Dostoevsky",
    paginas: 672
  },
  {
    id: 10,
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    paginas: 600
  }
];

export const agregarLibro = (nuevoLibro) => libros.push(nuevoLibro)

export const obtenerLibros = () => {
    libros.forEach(libro => {
        console.log(`Id: ${libro.id} | Título: ${libro.titulo} | Autor: ${libro.autor} | Páginas: ${libro.paginas}`)
    })
}