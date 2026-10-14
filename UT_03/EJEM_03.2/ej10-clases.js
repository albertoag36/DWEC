// Ejemplo 10 · Añadir, quitar y alternar clases con classList
// Tema: apartado 3.5

export const trabajarConClases = () => {
  const enlace = document.getElementById('enlace-ayuda'); // class="enlace"

  enlace.classList.add('activo');                     // class="enlace activo"
  enlace.classList.remove('enlace');                  // class="activo"
  console.log(enlace.classList.contains('activo'));   // true

  // toggle() quita la clase si está y la pone si no está.
  // Devuelve true si la clase ha quedado puesta.
  console.log(document.body.classList.toggle('tema-oscuro')); // true: tema oscuro activado

  // toggle() con un segundo parámetro: pone la clase si la condición es true
  // y la quita si es false. Aquí resaltamos los emails acabados en ".es".
  const filas = document.querySelectorAll('#tabla-contactos tbody tr');
  for (const fila of filas) {
    const email = fila.cells[2].textContent; // cells[2] es la tercera celda de la fila
    fila.classList.toggle('resaltado', email.endsWith('.es'));
  }
  console.log('Filas resaltadas:', document.querySelectorAll('tr.resaltado').length); // 1
};
