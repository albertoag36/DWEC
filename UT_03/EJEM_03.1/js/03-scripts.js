// Como seleccionar un elemento por su ID, 
// recuerda los ID's solo se deben utilizar
// uno con ese mismo nombre por documento...

const formulario = document.getElementById('formulario');
console.log(formulario);

// Si no existe estará vacio

const noExiste = document.getElementById('no-existe');
console.log(noExiste);

// Añadir un ID 2 veces, seleccionara el primero que encuentre...
