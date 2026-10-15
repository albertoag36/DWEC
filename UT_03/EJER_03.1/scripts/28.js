const listaCategorias = []

document.querySelectorAll('.categoria').forEach(categoria => listaCategorias.push(categoria.textContent))

console.log(listaCategorias)

// const nombres2 = [...document.querySelectorAll('.categoria')].map(c => c.textContent);