const coche = {
    marca: "seat",
    modelo: "leon",
    año: "2002",
    estaDisponible: false
}

console.table(coche)

const {marca, modelo, año, estaDisponible} = coche

console.log(marca)
console.log(modelo)

coche.estaDisponible = true
coche.color = "rojo"
delete coche.año

console.table(coche)

