// Ejemplo 4 · Insertar HTML con insertAdjacentHTML
// Tema: apartado 2 (insertAdjacentHTML)

export const insertarHTML = () => {
  const noticia = document.getElementById('noticia');

  // El primer parámetro dice DÓNDE se inserta, respecto al elemento:
  noticia.insertAdjacentHTML('beforebegin', '<p><b>1. beforebegin</b>: fuera, antes</p>');
  noticia.insertAdjacentHTML('afterbegin', '<b>2. afterbegin</b>: dentro, al principio · ');
  noticia.insertAdjacentHTML('beforeend', ' · <b>3. beforeend</b>: dentro, al final');
  noticia.insertAdjacentHTML('afterend', '<p><b>4. afterend</b>: fuera, después</p>');

  // A diferencia de before() o append(), aquí el texto SÍ se interpreta como HTML
  console.log(document.getElementById('zona-pruebas').innerHTML);
};
