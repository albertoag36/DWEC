// Ejercicio 1.2 · Registro de usuario (versión final)
// Copia aquí tu solución del ejercicio 1.1 y amplíala siguiendo el enunciado.
import { mostrarError, validarFormulario, limpiarErrores } from './validaciones.js';

// Ejercicio 1.1 · Registro de usuario (versión inicial)
const formulario = document.getElementById("registro");
const resultado = document.getElementById("resultado");

// 1. Desactivar la validación del navegador (noValidate)
formulario.noValidate = true;

const paises = ['España', 'Francia', 'Italia', 'Portugal']
paises.forEach((pais) => {
  formulario.elements.pais.add(new Option(pais, pais))
})

const hoy = new Date();
const fechaParaInput = hoy.toLocaleDateString('en-CA');

formulario.elements.nacimiento.max = fechaParaInput

console.log(hoy.getFullYear() - new Date('2008-03-15').getFullYear())

const comprobarReglas = () => {
  const elementos = formulario.elements
  if (elementos.correo2.value !== formulario.elements.correo.value) {

  }

  if (elementos.clave2.value !== formulario.elements.clave.value) {

  }

  const calcularEdad = () => {
    const nacimiento = new Date(elementos.nacimiento)
    const hoy = new Date()

    let edad = hoy.getFullYear() - nacimiento.getUTCFullYear()

    const mesActual = hoy.getMonth()
    const mesNacimiento = nacimiento.getUTCMonth()

    const cumpleNoLlegado =
      mesActual < mesNacimiento ||
      (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getUTCDate())

    if (cumpleNoLlegado) edad--

    return edad
  }
}