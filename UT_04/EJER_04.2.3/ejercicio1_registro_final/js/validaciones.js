// Módulo reutilizable de validación (Ejercicio 1.2, parte A)
// Exporta estas cuatro funciones:

// export function mensajeError(campo) { ... }
//   Devuelve el mensaje en español según la causa del error ('' si el campo es válido).
export const mensajeError = (campo) => {
    const estadoValidez = campo.validity

    if (estadoValidez.valueMissing) {
        if (campo.type === 'checkbox') return 'Debes marcar esta casilla para continuar'
        if (campo.type === 'radio') return 'Selecciona una de las opciones'
        if (campo.tagName === 'SELECT') return 'Selecciona una opción de la lista'
        return 'Este campo es obligatorio'
    }
    if (estadoValidez.typeMismatch) return 'El formato no es válido'
    if (estadoValidez.patternMismatch) return 'El valor no cumple el formato requerido'
    if (estadoValidez.tooShort) return `Debe tener al menos ${campo.minLength} caracteres`
    if (estadoValidez.tooLong) return `No puede superar los ${campo.maxLength} caracteres`
    if (estadoValidez.rangeUnderflow) return `El valor mínimo permitido es ${campo.min}`
    if (estadoValidez.rangeOverflow) return `El valor máximo permitido es ${campo.max}`
    if (estadoValidez.stepMismatch) return 'El valor no es válido para este campo'
    if (estadoValidez.badInput) return 'Introduce un valor válido'
    if (estadoValidez.customError) return campo.validationMessage
    return ''
}
// export function mostrarError(campo) { ... }
//   Escribe el mensaje en #error-<name>, actualiza la clase 'con-error' y aria-invalid.
//   Devuelve true si el campo es válido.
export const mostrarError = (campo) => {
    const mensaje = mensajeError(campo)

    document.getElementById(`error-${campo.name}`).textContent = mensaje

    if (campo.type === 'radio') {
        campo.form.querySelectorAll(`input[type="radio"][name="${campo.name}"]`).forEach(campo => {
            campo.classList.toggle('con-error', mensaje !== '')
            campo.setAttribute('aria-invalid', String(mensaje !== ''))
        });
    } else {
        campo.classList.toggle('con-error', mensaje !== '')
        campo.setAttribute('aria-invalid', String(mensaje !== ''))
    }

    return mensaje === ''
}
// export function validarFormulario(formulario) { ... }
//   Valida todos los campos, pone el foco en el primero inválido y devuelve true/false.
export const validarFormulario = (formulario) => {
    const campos = [...formulario.elements].filter((campo) =>
        ['INPUT', 'SELECT', 'TEXTAREA'].includes(campo.tagName)
    )

    const resultados = campos.map((campo) => mostrarError(campo));

    if (resultados.includes(false)) {
        campos[resultados.indexOf(false)].focus();
        return false;
    }
    return true
}
// export function limpiarErrores(formulario) { ... }
//   Borra mensajes, clases y errores propios (setCustomValidity('')).
export const limpiarErrores = (formulario) => {
    const campos = [...formulario.elements].filter((campo) =>
        ['INPUT', 'SELECT', 'TEXTAREA'].includes(campo.tagName)
    )

    campos.forEach(campo => {
        campo.classList.remove('con-error')
        campo.removeAttribute('aria-invalid')
        campo.setCustomValidity('')

        document.getElementById(`error-${campo.name}`).textContent = ''
    })
}