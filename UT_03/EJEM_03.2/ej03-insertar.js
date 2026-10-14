// Ejemplo 3 · Dónde se inserta cada cosa: append, prepend, before, after
// Tema: apartado 2 (métodos de inserción)

export const insertarElementos = () => {
  const lista = document.getElementById('lista'); // <ul> con "Uno" y "Dos"

  const primero = document.createElement('li');
  primero.textContent = 'Cero (prepend)';
  lista.prepend(primero); // DENTRO de la lista, al principio

  const ultimo = document.createElement('li');
  ultimo.textContent = 'Tres (append)';
  lista.append(ultimo); // DENTRO de la lista, al final

  lista.before('Texto antes de la lista (before)'); // FUERA, justo antes del <ul>
  lista.after('Texto después de la lista (after)'); // FUERA, justo después del <ul>
  // before() y after() aceptan cadenas: se convierten en nodos de texto automáticamente

  console.log(lista.outerHTML); // outerHTML muestra el elemento completo, incluida su propia etiqueta

  // previousSibling y nextSibling son los nodos que hay justo antes y justo después del <ul>:
  // aquí, los dos textos que acabamos de insertar con before() y after()
  console.log(lista.previousSibling.textContent); // Texto antes de la lista (before)
  console.log(lista.nextSibling.textContent);     // Texto después de la lista (after)
};
