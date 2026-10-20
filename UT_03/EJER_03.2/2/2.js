const revelarRespuesta = (elemento) => {
    ocultarTodasLasRespuestas()
    elemento.nextElementSibling.classList.remove('oculto')
}

const ocultarTodasLasRespuestas = () => {
    document.querySelectorAll('.oculto p').forEach(p => p.classList.add('oculto'))
}

revelarRespuesta(document.querySelectorAll('.faq h2')[1])