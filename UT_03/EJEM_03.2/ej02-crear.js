// Ejemplo 2 · Crear un elemento en tres pasos
// Tema: apartado 2 (createElement)

export const crearElemento = () => {
  // Paso 1: CREAR el elemento (de momento solo existe en la variable, no se ve)
  const aviso = document.createElement('div');

  // Paso 2: CONFIGURARLO (clase y texto)
  aviso.className = 'alerta';
  aviso.textContent = '¡Bienvenido a la agenda de contactos!';

  // isConnected nos dice si el elemento ya está dentro de la página
  console.log('¿Está en la página?', aviso.isConnected); // false

  // Paso 3: INSERTARLO en la página
  document.getElementById('principal').prepend(aviso);

  console.log('¿Está en la página?', aviso.isConnected); // true
};
