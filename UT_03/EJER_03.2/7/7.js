const carrito = document.getElementById('carrito')

const calcularTotal = () => {
    let total = 0

    document.querySelectorAll('#carrito li').forEach(producto => {
        let precio = parseFloat(producto.dataset.price)
        total += precio
        console.log(total)
    })

    document.getElementById('total').textContent = total
}

document.getElementById('lista-productos').addEventListener('click', (e) => {
    const clon = e.target.parentNode.cloneNode(true)
    clon.querySelector('button').remove()

    const botonEliminar = document.createElement('button')
    botonEliminar.textContent = 'Eliminar del carrito'
    clon.append(botonEliminar)

    carrito.append(clon)
    calcularTotal()
})

document.getElementById('carrito').addEventListener('click', (e) => {
    e.target.parentNode.remove()
    calcularTotal()
})