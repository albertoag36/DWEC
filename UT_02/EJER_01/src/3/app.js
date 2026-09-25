import { agregarLibro, obtenerLibros } from "./biblioteca.js"

obtenerLibros()

agregarLibro({
    id: 11,
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    paginas: 565
})

obtenerLibros()