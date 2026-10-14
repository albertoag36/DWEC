// Ejemplo 1 · Leer y cambiar texto: textContent, innerText e innerHTML
// Tema: apartados 1.1, 1.2 y 1.3

export const verTexto = () => {
  const noticia = document.getElementById('noticia');

  // 1. LEER el contenido de tres formas
  console.log('textContent:', noticia.textContent); // todo el texto, sin etiquetas
  console.log('innerText:', noticia.innerText);     // solo el texto VISIBLE (no muestra lo oculto con CSS)
  console.log('innerHTML:', noticia.innerHTML);     // el HTML de dentro, con sus etiquetas

  // 2. CAMBIAR el contenido
  const titulo = document.querySelector('h1');

  // titulo.textContent = 'Mis <em>contactos</em>';
  // // Con textContent las etiquetas NO se interpretan: se ven tal cual en la página
  // console.log('Hijos tras textContent:', titulo.children.length); // 0

  // titulo.innerHTML = 'Mis <em>contactos</em>';
  // // Con innerHTML las etiquetas SÍ se interpretan: se crea un elemento <em>
  // console.log('Hijos tras innerHTML:', titulo.children.length); // 1
};
