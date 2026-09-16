const producto = {
    nombre: "iphone",
    precio: "1200"
}

const cliente = {
    nombreCliente: "Alberto",
    esPremium: false
}

const pedido = {
    ...producto,
    ...cliente
}

console.log(pedido)

const producto2 = {
    nombre: "huawei",
    precio: "1250"
}

const pedido2 = {
    ...producto2,
    ...cliente
}

console.log(pedido2)

// No sucede nada, es decir, el nombre de cada prodcto se respeta