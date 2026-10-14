// Ejemplo 6 · Copiar un molde con <template> y cloneNode
// Tema: apartado 2 (cloneNode)

export const usarPlantilla = () => {
  const nombres = ['Juan', 'Lucía', 'Pedro'];
  const plantilla = document.getElementById('plantilla-tarjeta');
  const contenedor = document.getElementById('tarjetas');

  for (const nombre of nombres) {
    // plantilla.content es el contenido del <template> (no se ve en la página).
    // firstElementChild es el <article> que hace de molde.
    // cloneNode(true) hace una copia COMPLETA (con todo lo que tiene dentro).
    const tarjeta = plantilla.content.firstElementChild.cloneNode(true);

    tarjeta.querySelector('.tarjeta-nombre').textContent = nombre;
    tarjeta.querySelector('.tarjeta-email').textContent = `${nombre.toLowerCase()}@ejemplo.es`;
    contenedor.append(tarjeta);
  }

  console.log('Tarjetas creadas:', contenedor.children.length); // 3
};
