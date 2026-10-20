const generarInformeDeValidacion = () => {
    const valueNombre = document.getElementById('nombre').value
    const valueEmail = document.getElementById('email').value

    const informeErrores = document.getElementById('informe-errores')
    informeErrores.replaceChildren()

    if (valueNombre.length < 3) {
        const p = document.createElement('p')
        p.textContent = 'El nombre es obligatorio'
        informeErrores.appendChild(p)
    }

    if (!valueEmail.includes('@')) {
        const p = document.createElement('p')
        p.textContent = 'El email es obligatorio'
        informeErrores.appendChild(p)
    }

    if (valueNombre.length > 3 && valueEmail.includes('@')) {
        const p = document.createElement('p')
        p.textContent = 'Formulario válido'
        informeErrores.appendChild(p)
    }
}

document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault()
    generarInformeDeValidacion()
})