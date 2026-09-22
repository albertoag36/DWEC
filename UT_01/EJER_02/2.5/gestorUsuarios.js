export const crearPerfil = (nombre, email, edad) => ({
  nombre: nombre,
  email: email,
  edad: edad,
});

const mostrarPerfil = (usuario) =>
  `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`;

export default mostrarPerfil;

export const esMayorDeEdad = (usuario) => (usuario.edad >= 18 ? true : false);

export const obtenerMayoresDeEdad = (usuarios) =>
  usuarios.filter((usuario) => esMayorDeEdad(usuario));

export const calcularPromedioEdad = (usuarios) =>
  usuarios.reduce((i, usuario) => i + usuario.edad, 0) / usuarios.length;
