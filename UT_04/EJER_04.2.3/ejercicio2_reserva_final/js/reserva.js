// Ejercicio 2.2 · Reserva de viaje (versión final)
// Copia aquí tu solución del ejercicio 2.1 y amplíala siguiendo el enunciado.
// Copia también en esta carpeta js/ el archivo validaciones.js del ejercicio 1.2.
// import { mostrarError, limpiarErrores } from './validaciones.js';

// Ejercicio 2.1 · Reserva de viaje (versión inicial)
const formulario = document.getElementById("reserva");
const total = document.getElementById("total");
const resultado = document.getElementById("resultado");
const precioPersonaNoche = 50;

const nombre = document.getElementById("nombre");
const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");
const personas = document.getElementById("personas");

// 1. Desactivar la validación del navegador y fijar las fechas mínimas (hoy)
formulario.noValidate = true;
const hoy = new Date();

const fechaParaInput = hoy.toISOString().slice(0, 10);

entrada.min = fechaParaInput;
salida.min = fechaParaInput;
// 2. Función mostrarError(campo), como en el ejercicio 1.1
const mostrarError = (campo) => {
  const campoError = document.getElementById("error-" + campo.name);

  if (!campoError) return true;

  campoError.textContent = campo.validationMessage;
  campo.classList.toggle("con-error", !campo.validity.valid);

  return campo.validity.valid;
};
// 3. Función comprobarReglas(): la salida debe ser posterior a la entrada (setCustomValidity)
// const comprobarReglas = () => {
//   if (salida.valueAsDate <= entrada.valueAsDate)
//     salida.setCustomValidity(
//       "La fecha de salida debe ser posterior a la de entrada",
//     );
// };

const comprobarReglas = () => {
  salida.setCustomValidity("");
  if (entrada.value && salida.value && calcularNoches() <= 0) {
    salida.setCustomValidity(
      "La fecha de salida debe ser posterior a la de entrada",
    );
  }
};
// 4. Funciones calcularNoches() y calcularTotal()
const calcularNoches = () => {
  const noches = (new Date(salida.value) - new Date(entrada.value)) / 86400000;
  return Number.isNaN(noches) ? 0 : noches;
};

const calcularTotal = () => {
  const n = personas.valueAsNumber;
  const numPersonas = Number.isNaN(n) ? 0 : n;
  const noches = Math.max(0, calcularNoches());
  const totalCalculado = numPersonas * noches * precioPersonaNoche;

  total.textContent = `Total estimado: ${totalCalculado.toFixed(2)} €`;
  return totalCalculado;
};
// 5. Eventos input y focusout en el formulario
formulario.addEventListener("input", (e) => {
  comprobarReglas();

  if (e.target.classList.contains("con-error")) {
    mostrarError(e.target);
  }

  if (e.target === entrada && salida.value !== "") {
    mostrarError(salida);
  }

  calcularTotal();
});

formulario.addEventListener("focusout", (e) => {
  if (!e.target.matches("input")) return;
  comprobarReglas();
  mostrarError(e.target);
});
// 6. Evento submit: valida todos los campos y muestra el resumen de la reserva
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  comprobarReglas();

  const campos = Array.from(formulario.elements).filter((el) =>
    el.matches("input"),
  );
  const invalidos = campos.filter((campo) => !mostrarError(campo));

  if (invalidos.length > 0) {
    invalidos[0].focus();
    resultado.textContent = "";
    return;
  }

  const datos = Object.fromEntries(new FormData(formulario));

  resultado.textContent =
    `Reserva de ${datos.nombre}\n` +
    `Personas: ${datos.personas}\n` +
    `Entrada: ${datos.entrada}\n` +
    `Salida: ${datos.salida}\n` +
    `Noches: ${calcularNoches()}\n` +
    `Total: ${calcularTotal().toFixed(2)} €`;
});
// 7. Evento reset
formulario.addEventListener("reset", () => {
  salida.setCustomValidity("");

  formulario.querySelectorAll(".con-error").forEach((campo) => {
    campo.classList.remove("con-error");
  });
  formulario.querySelectorAll(".error").forEach((zona) => {
    zona.textContent = "";
  });

  total.textContent = "Total estimado: 0.00 €";
  resultado.textContent = "";
});

