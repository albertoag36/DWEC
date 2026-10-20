const cambiarImagenPrincipal = (numero) => {
    const listaImagenesMiniatura = document.querySelectorAll('.miniatura')
    const imagen = listaImagenesMiniatura[numero].src
    document.getElementById('imagen-principal').src = imagen
}

const resaltarMiniatura = (indice) => {
    document.querySelectorAll('.miniatura')[indice].classList.add('activa')
}

cambiarImagenPrincipal(1)
resaltarMiniatura(2)