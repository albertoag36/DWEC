function esContrasenaValida(contrasena) {
    if (contrasena.length >= 8) return true
    return false
}

const contrasenas = ['1234', 'miClave2024', 'abc']

const resultado = contrasenas.map(function (contrasena) {
    if (contrasena.length >= 8) return true
    return false
})

console.log(resultado) // [false, true, false]