const usuario = {
    nombre: "Alberto",
    email: "albertoag36@educastur.es"
}

const perfil = {
    puesto: "Becario",
    empresa: "Uniovi"
}

const empleado = {
    ...usuario,
    ...perfil
}

console.log(empleado.perfil?.direccion.ciudad ?? "Ciudad no especificada")