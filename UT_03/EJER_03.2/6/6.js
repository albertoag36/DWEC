/*
- Objetivo: Crear un sistema de pestañas que muestre un contenido diferente
 para cada pestaña seleccionada.
- Estructura HTML: Un div para los botones de las pestañas y otro div para 
el contenido. Dentro del de contenido, varios div (uno por cada pestaña) con una clase común y una clase oculto.
- Lógica (JS):
   1. Asigna un data-id a cada botón de pestaña que se corresponda con el 
   id del div de contenido que debe mostrar.
   2. Usando delegación de eventos, escucha los clics en los botones.
   3. Al hacer clic, primero oculta todos los div de contenido (añadiendo 
   la clase oculto).
   4. Luego, obtén el data-id del botón clicado y muestra solo el div de 
   contenido correspondiente (quitándole la clase oculto).
*/

document.querySelectorAll('#botones-pestanas button').forEach(boton => boton.id = 'data-id')

document.getElementById('botones-pestanas').addEventListener('click', (e) => {
    if (e.target.id === 'data-id') {
        e.target.parentNode.classList.add('oculto')
        const indice = e.target.getElementById('data-id').dataset.indice
        document.querySelectorAll('.contenido')[indice].classList.remove('oculto')
    }
})