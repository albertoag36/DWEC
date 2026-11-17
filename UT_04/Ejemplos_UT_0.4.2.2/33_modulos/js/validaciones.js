export function mostrarError(campo) {
  const zonaError = document.getElementById(`error-${campo.id}`);
  if (zonaError) zonaError.textContent = obtenerMensaje(campo);
  // campo.setAttribute('aria-invalid', 'true');
}
// mensaje de error personalizado según el tipo de fallo
function obtenerMensaje(campo) {
  const v = campo.validity;
  if (v.valueMissing)    return 'Este campo es obligatorio.';
  if (v.typeMismatch)    return 'El formato no es válido.';
  if (v.tooShort)        return `Mínimo ${campo.minLength} caracteres.`;
  if (v.patternMismatch) return campo.title || 'El valor no cumple el formato.';
  if (v.rangeUnderflow)  return `El valor mínimo es ${campo.min}.`;
  if (v.rangeOverflow)  return `El valor máximo es ${campo.max}.`;
  return campo.validationMessage; // el mensaje nativo como último recurso
}
