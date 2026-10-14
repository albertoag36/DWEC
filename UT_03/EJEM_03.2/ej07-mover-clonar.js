// Ejemplo 7 · Mover o copiar un elemento que ya existe
// Tema: apartado 2 (append y cloneNode)

export const moverYClonar = () => {
  const lista = document.getElementById('lista'); // <ul> con "Uno" y "Dos"
  const uno = lista.firstElementChild;            // el <li> "Uno"

  // MOVER: si haces append() de un elemento que YA está en la página,
  // no se duplica: se quita de su sitio y se coloca al final.
  lista.append(uno);

  // [...lista.children] convierte los hijos en un array para poder usar map()
  // y quedarnos solo con el texto de cada <li>
  console.log('Tras mover:', [...lista.children].map((li) => li.textContent)); // ['Dos', 'Uno']

  // COPIAR: para tenerlo dos veces hay que clonarlo antes
  const copia = uno.cloneNode(true);
  lista.append(copia);
  console.log('Tras clonar:', [...lista.children].map((li) => li.textContent)); // ['Dos', 'Uno', 'Uno']
};
