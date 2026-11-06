// Ejercicio 1.1 · Registro de usuario (versión inicial)
const formulario = document.getElementById('registro');
const resultado = document.getElementById('resultado');

// 1. Desactivar la validación del navegador (noValidate)
// 2. Función mostrarError(campo): escribe campo.validationMessage en #error-<name>,
//    activa o quita la clase 'con-error' y devuelve true si el campo es válido
// 3. Evento focusout en el formulario: valida el campo que se abandona
// 4. Evento input en el formulario: si el campo ya tenía error, se revalida
// 5. Evento submit: valida todos los campos; si hay errores, foco en el primero;
//    si no, muestra los datos en JSON sin la contraseña
// 6. Evento reset: limpia el resultado y todos los errores
