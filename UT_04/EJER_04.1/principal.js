// ==========================================================
// EJER_04.1 · Eventos en JavaScript
// Escribe aquí tus soluciones (módulo ES6).
// - Nombres de variables y funciones en español.
// - Usa addEventListener (no onclick en el HTML).
// ==========================================================

// ---------- Ejercicio 1 · Contador de clics ----------
let contador = 0
const valorContador = document.getElementById('valor-contador')

document.getElementById('boton-restar').addEventListener('click', () => {
    contador--
    valorContador.textContent = contador
    valorContador.style.color = contador < 0 ? 'red' : ''
})

document.getElementById('boton-sumar').addEventListener('click', () => {
    contador++
    valorContador.textContent = contador
    valorContador.style.color = contador < 0 ? 'red' : ''
})

document.getElementById('boton-reiniciar').addEventListener('click', () => {
    valorContador.textContent = 0
    contador = 0
    valorContador.style.color = contador < 0 ? 'red' : ''
})
// ---------- Ejercicio 2 · Tarjeta sensible al ratón ----------
const zona = document.getElementById('tarjeta-raton')

zona.addEventListener('mouseover', () => {
    const p = document.getElementById('mensaje-raton')
    p.textContent = '¡Estás dentro!'
    p.classList.add('activa')
})

zona.addEventListener('mouseout', () => {
    const p = document.getElementById('mensaje-raton')
    p.textContent = 'Pasa el ratón por la tarjeta'
    p.classList.remove('activa')
})

zona.addEventListener('dblclick', () => {
    const p = document.getElementById('mensaje-raton')
    p.textContent = '¡Doble clic!'
})
// ---------- Ejercicio 3 · Espejo de texto ----------
const caracteresRestantes = document.getElementById('caracteres-restantes')

document.getElementById('campo-texto').addEventListener('input', (e) => {
    if (e.target.value.length <= 30) {
        document.getElementById('eco-texto').textContent = e.target.value
        caracteresRestantes.textContent = (30 - e.target.value.length)

        Number(caracteresRestantes.textContent) <= 5 ? caracteresRestantes.classList.add('poco') : caracteresRestantes.classList.remove('poco')
    }
})
// ---------- Ejercicio 4 · Mover con el teclado ----------
const area = document.getElementById('area-juego')
const cuadrado = document.getElementById('cuadrado')
const posicion = document.getElementById('posicion-cuadrado')

const PASO = 10
let x = 0
let y = 0

const espacio = () => {
    cuadrado.style.left = x + 'px'
    cuadrado.style.top = y + 'px'
    posicion.textContent = `Posición: (${x}, ${y})`
}

document.addEventListener('keydown', (e) => {
    const maxX = area.clientWidth - cuadrado.offsetWidth
    const maxY = area.clientHeight - cuadrado.offsetHeight

    switch (e.key) {
        case 'ArrowRight':
            x = Math.min(x + PASO, maxX)
            break
        case 'ArrowLeft':
            x = Math.max(x - PASO, 0)
            break
        case 'ArrowDown':
            y = Math.min(y + PASO, maxY)
            break
        case 'ArrowUp':
            y = Math.max(y - PASO, 0)
            break
        case ' ':
            x = 0
            y = 0
            break
        default:
            return
    }

    e.preventDefault()
    espacio()
})

espacio()
// ---------- Ejercicio 5 · Paleta de colores ----------
const lienzo = document.getElementById('lienzo')
const nombreColor = document.getElementById('nombre-color')

document.querySelectorAll('.muestra').forEach(paleta => {
    paleta.addEventListener('click', () => {
        const dataColor = paleta.getAttribute('data-color')
        const dataNombre = paleta.getAttribute('data-nombre')

        lienzo.style.background = dataColor
        nombreColor.textContent = dataNombre

    })
})
// ---------- Ejercicio 6 · Grupo con foco ----------
const p = document.getElementById('mensaje-foco')

document.getElementById('grupo-contacto').querySelectorAll('input').forEach(input => {

    input.addEventListener('mouseover', () => {
        input.parentElement.classList.add('activo')
        p.textContent = 'Editando: placeholder del campo'
    })

    input.addEventListener('mouseout', () => {
        input.parentElement.classList.remove('activo')
        p.textContent = 'Ningún campo activo'
    })
})
// ---------- Ejercicio 7 · Burbuja y captura ----------
const registroFlujo = document.getElementById('registro-flujo')
const botonLimpiar = document.getElementById('boton-limpiar-flujo')
const cajaExterna = document.getElementById('caja-externa')
const cajaMedia = document.getElementById('caja-media')
const cajaInterna = document.getElementById('caja-interna')

const creacionLi = (texto) => {
    const li = document.createElement('li')
    li.textContent = texto
    registroFlujo.appendChild(li)
}

// Uso burbuja

cajaExterna.addEventListener('click', () => creacionLi('Externa'))
cajaMedia.addEventListener('click', () => creacionLi('Media'))
cajaInterna.addEventListener('click', () => creacionLi('Interna'))

// Uso captura

cajaExterna.addEventListener("click", () => creacionLi("Externa (captura)"), { capture: true });
cajaMedia.addEventListener("click", () => creacionLi("Media (captura)"), { capture: true });
cajaInterna.addEventListener("click", () => creacionLi("Interna (captura)"), { capture: true });


botonLimpiar.addEventListener('click', () => {
    registroFlujo.innerHTML = ""
})
// ---------- Ejercicio 8 · Detener y cancelar ----------
const tarjeta = document.getElementById('tarjeta-producto')
const p1 = document.getElementById('mensaje-estado')
const boton = document.getElementById('boton-comprar')
const link = document.getElementById('enlace-info')

tarjeta.addEventListener('click', () => {
    p1.textContent = 'Has pulsado la tarjeta'
}, { capture: true })

boton.addEventListener('click', () => {
    p1.textContent = 'Producto comprado'
}, { capture: true })

link.addEventListener('click', (e) => {
    e.preventDefault()
    p1.textContent = 'Enlace bloqueado'
})