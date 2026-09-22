import {
  crearPerfil,
  esMayorDeEdad,
  obtenerMayoresDeEdad,
  calcularPromedioEdad,
} from "./gestorUsuarios.js";
import mostrarPerfil from "./gestorUsuarios.js";

const usuarios = [
  crearPerfil("Alberto", "albertoag36@educastur.es", 24),
  crearPerfil("Miguel", "miguel@educastur.es", 20),
  crearPerfil("Lucía", "lucia@educastur.es", 16),
  crearPerfil("Sara", "sara@educastur.es", 15),
  crearPerfil("Diego", "diego@educastur.es", 30),
];

console.log(usuarios);

usuarios.forEach((usuario) => {
  console.log(mostrarPerfil(usuario));
});

const usuariosMayoresDeEdad = obtenerMayoresDeEdad(usuarios);

console.log("Usuarios mayores de edad:");
usuariosMayoresDeEdad.forEach((usuario) => {
  console.log(usuario);
});

console.log(
  `La edad promedio de los usuarios es: ${calcularPromedioEdad(usuarios)}`,
);
