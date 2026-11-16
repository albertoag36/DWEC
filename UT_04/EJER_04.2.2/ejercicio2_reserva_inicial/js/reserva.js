// Ejercicio 2.1 · Reserva de viaje (versión inicial)
const formulario = document.getElementById("reserva");
const total = document.getElementById("total");
const resultado = document.getElementById("resultado");
const precioPersonaNoche = 50;

// 1. Desactivar la validación del navegador y fijar las fechas mínimas (hoy)
formulario.noValidate = true;
const hoy = new Date();

const anio = hoy.getFullYear();
const mes = hoy.getMonth();
const dia = hoy.getDate();

const fechaParaInput = `${anio}-${mes}-${dia}`;

document.getElementById("entrada").value = fechaParaInput;
document.getElementById("salida").value = fechaParaInput;
// 2. Función mostrarError(campo), como en el ejercicio 1.1
const mostrarError = (campo) => {
  const campoError = document.getElementById("error-" + campo.name);

  if (!campoError) return true;

  campoError.textContent = campo.validationMessage;
  campo.classList.toggle("con-error", !campo.validity.valid);

  return campo.validity.valid;
};
// 3. Función comprobarReglas(): la salida debe ser posterior a la entrada (setCustomValidity)
// 4. Funciones calcularNoches() y calcularTotal()
// 5. Eventos input y focusout en el formulario
// 6. Evento submit: valida todos los campos y muestra el resumen de la reserva
// 7. Evento reset
