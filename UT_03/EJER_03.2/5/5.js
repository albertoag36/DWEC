// document.getElementById('boton-anadir').addEventListener('click', () => {
//     const valueTarea = document.getElementById('input-tarea').value.trim()
//     if (valueTarea === '') return

//     const li = document.createElement('li')
//     li.textContent = valueTarea
//     const eliminar = document.createElement('button')
//     eliminar.textContent = 'Eliminar'

//     eliminar.addEventListener('click', () => {
//         eliminar.parentNode.remove()
//     })
    
//     li.append(eliminar)
//     document.getElementById('lista').appendChild(li)
// })

const input = document.getElementById('input-tarea')
const boton = document.getElementById('boton-anadir')
const lista = document.getElementById('lista')

boton.addEventListener('click', () => {
    const texto = input.value.trim()
    if (texto === '') return

    const li = document.createElement('li')
    li.textContent = texto

    const eliminar = document.createElement('button')
    eliminar.textContent = 'Eliminar'

    li.append(eliminar)
    lista.appendChild(li)

    input.value = ''
    input.focus()
})

// Delegación de eventos: un solo listener en el <ul>
lista.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
        e.target.parentNode.remove()
    }
})