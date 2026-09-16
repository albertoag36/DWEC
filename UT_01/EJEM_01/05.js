// Objetos - Manipulación
const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: false
}

//no permite manipular el objeto (cambiar valores o añadir propiedades)
// Object.freeze(producto)
//permite manipular el objeto pero no modificar propiedades
// Object.seal(producto)

// Reescribir un valor
producto.disponible = true

// Sino existe, lo va a añadir
producto.imagen = 'imagen.jpg'

// Eliminar propiedad
delete producto.precio

console.log(producto)