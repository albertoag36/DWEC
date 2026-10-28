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
const cuadrado = document.getElementById('cuadrado')
cuadrado.addEventListener('keydown', (e) => {
    if (e.key === 'Left Arrow Key') {
        cuadrado.style.left = '10px'
    }

})

// ---------- Ejercicio 5 · Paleta de colores ----------


// ---------- Ejercicio 6 · Grupo con foco ----------


// ---------- Ejercicio 7 · Burbuja y captura ----------


// ---------- Ejercicio 8 · Detener y cancelar ----------
