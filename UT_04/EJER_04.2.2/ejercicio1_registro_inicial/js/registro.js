// Ejercicio 1.1 · Registro de usuario (versión inicial)
const formulario = document.getElementById("registro");
const resultado = document.getElementById("resultado");

// 1. Desactivar la validación del navegador (noValidate)
formulario.noValidate = true;
// 2. Función mostrarError(campo): escribe campo.validationMessage en #error-<name>,
//    activa o quita la clase 'con-error' y devuelve true si el campo es válido
const mostrarError = (campo) => {
  const campoError = document.getElementById("error-" + campo.name);

  if (!campoError) return true;

  campoError.textContent = campo.validationMessage;
  campo.classList.toggle("con-error", !campo.validity.valid);

  return campo.validity.valid;
};
// 3. Evento focusout en el formulario: valida el campo que se abandona
formulario.addEventListener("focusout", (e) => {
  if (!e.target.willValidate) return;
  mostrarError(e.target);
});
// 4. Evento input en el formulario: si el campo ya tenía error, se revalida
formulario.addEventListener("input", (e) => {
  if (e.target.classList.contains("con-error")) {
    mostrarError(e.target);
  }
});
// 5. Evento submit: valida todos los campos; si hay errores, foco en el primero;
//    si no, muestra los datos en JSON sin la contraseña
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
  delete datos.clave;

  resultado.textContent = JSON.stringify(datos, null, 2);
});
// 6. Evento reset: limpia el resultado y todos los errores
