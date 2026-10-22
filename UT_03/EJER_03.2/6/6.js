document.querySelectorAll('#botones-pestanas button').forEach(boton => boton.id = 'data-id')

document.getElementById('botones-pestanas').addEventListener('click', (e) => {
    if (e.target.id === 'data-id') {
        console.log(e.target)
        console.log(e.target.parentNode.parentNode)
        document.querySelectorAll('.contenido').forEach(contenido => contenido.classList.add('oculto'))
        const indice = e.target.dataset.indice
        console.log(indice)
        document.querySelectorAll('.contenido')[indice].classList.remove('oculto')
    }
})