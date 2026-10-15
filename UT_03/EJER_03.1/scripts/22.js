const formulario = document.getElementById('formulario-contacto')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  console.log(`Nombre: ${nombre}
    Email: ${email}
    Mensaje: ${mensaje}`);
});