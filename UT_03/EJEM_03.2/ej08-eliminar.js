// Ejemplo 8 · Eliminar elementos
// Tema: apartado 2.2 (removeChild y remove)

export const eliminarElementos = () => {
  const lista = document.getElementById('lista'); // <ul> con "Uno" y "Dos"

  // Forma clásica: se llama sobre el PADRE y se le pasa el hijo que se quiere quitar
  const quitado = lista.removeChild(lista.firstElementChild);
  console.log('He quitado:', quitado.textContent); // Uno

  // Forma moderna: se llama directamente sobre el elemento que se quiere quitar
  document.querySelector('#tabla-contactos tbody tr').remove();
  console.log('Filas que quedan:', document.querySelector('#tabla-contactos tbody').rows.length); // 1

  // Vaciar un elemento entero de una vez
  lista.replaceChildren();
  console.log('Elementos en la lista:', lista.children.length); // 0
};
