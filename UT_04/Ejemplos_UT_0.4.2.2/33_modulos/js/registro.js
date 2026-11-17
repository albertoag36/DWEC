import { mostrarError } from './validaciones.js';

const formulario = document.getElementById('registro');
formulario.noValidate = true;

// Delegación: focusout burbujea, así que un solo escuchador sirve para todos los campos
formulario.addEventListener('focusout', (evento) => {
  if (evento.target.willValidate) mostrarError(evento.target);
});

formulario.addEventListener('submit', (evento) => {
  if (!formulario.checkValidity()) {
    evento.preventDefault();
    for (const campo of formulario.elements) {
      if (campo.willValidate) mostrarError(campo);
    }
  }
});
