const eliminarClaseActiva = () => {
    document.querySelectorAll('#botones-pestanas button').forEach(boton => {
        boton.classList.remove('activa')
    })
}

document.querySelectorAll('#botones-pestanas button').forEach(boton => {
    boton.classList.remove('activa')
    boton.id = 'data-id'
})

document.getElementById('botones-pestanas').addEventListener('click', (e) => {
    eliminarClaseActiva()
    if (e.target.id === 'data-id') {
        if (!e.target.classList.contains('activa')) {
            e.target.classList.add('activa')
        }

        document.querySelectorAll('.contenido').forEach(contenido => contenido.classList.add('oculto'))
        const indice = e.target.dataset.indice
        document.querySelectorAll('.contenido')[indice].classList.remove('oculto')
    }
})