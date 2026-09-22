// Revisar

const funcion = (saldo, retirar, tieneTarjetaCredito) =>
  saldo >= retirar
    ? `Retiro exitoso. Saldo restante: ${saldo - retirar}`
    : tieneTarjetaCredito
      ? `Saldo insuficiente, pagando con tarjeta de crédito`
      : `Saldo insuficiente`;

console.log(funcion(20, 10, true));
