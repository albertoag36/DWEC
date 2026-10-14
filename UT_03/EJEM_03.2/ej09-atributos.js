// Ejemplo 9 · Leer, cambiar y quitar atributos
// Tema: apartados 3.1 a 3.4

export const trabajarConAtributos = () => {
  const enlace = document.getElementById('enlace-ayuda'); // <a href="ayuda.html" class="enlace">

  // LEER: getAttribute() devuelve lo que está escrito en el HTML…
  console.log(enlace.getAttribute('href')); // ayuda.html
  // …pero la PROPIEDAD href devuelve la dirección completa
  console.log(enlace.href);                 // http://…/ayuda.html

  // CAMBIAR o AÑADIR: si el atributo existe se cambia; si no existe, se crea
  enlace.setAttribute('href', 'https://developer.mozilla.org/es/');
  enlace.setAttribute('target', '_blank');

  // QUITAR
  enlace.removeAttribute('target');
  console.log(enlace.hasAttribute('target')); // false

  // OJO con los formularios: el ATRIBUTO value guarda el valor inicial,
  // la PROPIEDAD value guarda lo que hay escrito ahora mismo.
  const campo = document.getElementById('campo-nombre'); // value="Juan"
  campo.value = 'Lucía'; // como si el usuario hubiera escrito "Lucía"
  console.log(campo.getAttribute('value'), campo.value); // Juan Lucía
};
