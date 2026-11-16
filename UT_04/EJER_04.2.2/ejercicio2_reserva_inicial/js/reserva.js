// Ejercicio 2.1 · Reserva de viaje (versión inicial)
const formulario = document.getElementById("reserva");
const total = document.getElementById("total");
const resultado = document.getElementById("resultado");
const precioPersonaNoche = 50;

const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");
const personas = document.getElementById("personas");

// 1. Desactivar la validación del navegador y fijar las fechas mínimas (hoy)
formulario.noValidate = true;
const hoy = new Date();

const fechaParaInput = hoy.toISOString().slice(0, 10);

entrada.value = fechaParaInput;
salida.value = fechaParaInput;
// 2. Función mostrarError(campo), como en el ejercicio 1.1
const mostrarError = (campo) => {
  const campoError = document.getElementById("error-" + campo.name);

  if (!campoError) return true;

  campoError.textContent = campo.validationMessage;
  campo.classList.toggle("con-error", !campo.validity.valid);

  return campo.validity.valid;
};
// 3. Función comprobarReglas(): la salida debe ser posterior a la entrada (setCustomValidity)
const comprobarReglas = () => {

  salida.setCustomValidity('')

  if (!entrada.value || !salida.value) return

  if (Date.parse(salida.value) <= Date.parse(entrada.value)) {
    salida.setCustomValidity('La salida debe ser posterior a la entrada')
  }
}
// 4. Funciones calcularNoches() y calcularTotal()
const calcularNoches = () => {
  const diferencia = new Date(salida.value) - new Date(entrada.value);
  return diferencia / 86400000;
}

const calcularTotal = () => {
  const totalValor = personas.valueAsNumber * calcularNoches() * precioPersonaNoche
  total.textContent = `Total estimado: ${totalValor.toFixed(2)}€`
}
// 5. Eventos input y focusout en el formulario
formulario.addEventListener("input", (e) => {
  // La regla cruzada depende de ambos campos: recalcular al cambiar cualquiera
  if (e.target === entrada || e.target === salida) comprobarReglas();

  if (e.target.classList.contains("con-error")) mostrarError(e.target);

  // Si cambia la entrada, refrescar también el error visible de la salida
  if (e.target === entrada && salida.classList.contains("con-error")) {
    mostrarError(salida);
  }
});

formulario.addEventListener("focusout", (e) => {
  if (!e.target.willValidate) return;

  // Asegura que el mensaje personalizado esté al día antes de mostrarlo
  if (e.target === entrada || e.target === salida) comprobarReglas();

  mostrarError(e.target);

  calcularTotal()
});
// 6. Evento submit: valida todos los campos y muestra el resumen de la reserva
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const campos = [...formulario.elements].filter((el) => el.willValidate);
  let primerInvalido = null;

  campos.forEach((campo) => {
    if (!mostrarError(campo) && !primerInvalido) {
      primerInvalido = campo;
    }
  });

  if (primerInvalido) {
    primerInvalido.focus();
    resultado.textContent = "";
    return;
  }

  const datos = Object.fromEntries(new FormData(formulario));
  resultado.textContent = JSON.stringify(datos, null, 2);
});
// 7. Evento reset
formulario.addEventListener('reset', () => {
  entrada.value = fechaParaInput;
  salida.value = fechaParaInput;
  total.textContent = 'Total estimado: 0.00 €'
  resultado.textContent = ''

  formulario.querySelectorAll('.error').forEach((zona) => {
    zona.textContent = ''
  })

  resultado.textContent = ''
})