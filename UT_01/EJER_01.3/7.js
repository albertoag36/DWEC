const dividir = (a, b) => {
  try {
    if (b < 0) {
      throw "el divisor no puede ser 0"
    }
  } catch (e) {

  }
  return a / b
}

try {
  console.log(dividir(10, 0))
} catch (e) {
  console.log('Error:', /* ... */)
} finally {
  console.log('Operación finalizada')
}