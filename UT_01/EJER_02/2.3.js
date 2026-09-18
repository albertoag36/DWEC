// Revisar

const funcion = (saldo, retirar, tieneTarjetaCredito) => {
    saldo < retirar && tieneTarjetaCredito ?
    `Saldo insuficiente, pagando con tarjeta de crédito`:
    `Retiro exitoso. Saldo restante: ${retirar-saldo}`
}

console.log(funcion(20,30, false))