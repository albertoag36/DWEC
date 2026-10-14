// Ejemplo 5 · Rellenar una tabla a partir de un array
// Tema: apartados 2 y 2.3 (createElement, insertRow, insertCell)

export const pintarTabla = () => {
  const contactos = [
    { nombre: 'Juan', apellido: 'Pérez', email: 'juan@ejemplo.es' },
    { nombre: 'Lucía', apellido: 'Gómez', email: 'lucia@ejemplo.com' },
    { nombre: 'Pedro', apellido: 'Ruiz', email: 'pedro@ejemplo.es' },
  ];

  const cuerpo = document.querySelector('#tabla-contactos tbody');
  cuerpo.replaceChildren(); // vacía el <tbody> (quita todas las filas que hubiera)

  for (const contacto of contactos) {
    // insertRow() crea un <tr>, lo añade al final del <tbody> y nos lo devuelve
    const fila = cuerpo.insertRow();

    // insertCell() hace lo mismo con un <td> dentro de la fila
    fila.insertCell().textContent = contacto.nombre;
    fila.insertCell().textContent = contacto.apellido;
    fila.insertCell().textContent = contacto.email;
  }

  console.log('Filas en la tabla:', cuerpo.rows.length); // 3
};
