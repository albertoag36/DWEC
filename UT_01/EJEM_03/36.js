//manejo de excepciones
// try...catch...finally
// try {
//   // Código que puede generar una excepción
// } catch (error) {
//error es un objeto que contiene información sobre la excepción
//   // Manejo de la excepción
// } finally {
//   // Código que se ejecuta siempre
// Por ejemplo, para liberar recursos
// }


// Si registra excepciones en un nivel de su código,
// pero trata el fallo en un nivel superior,
//  entonces volvemos a lanzar la excepción después de registrarla:
// try {
//   // Realizar el trabajo
//   . . .
// } catch (e) {
//   console.log(e)
//   throw e // Reenviar a un controlador que se ocupe del fallo
// }
