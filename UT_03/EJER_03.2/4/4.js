const usuarios = [{ nombre: 'Ana', edad: 25 }, { nombre: 'Luis', edad: 30 }]

const creacionTabla = (arrayUsuarios) => {
    const fragment = new DocumentFragment()
    const table = document.createElement('table')

    const tHead = document.createElement('thead')
    const rowTHead = document.createElement('tr')

    const thNombre = document.createElement('th')
    const thEdad = document.createElement('th')

    thNombre.textContent = 'Nombre'
    thEdad.textContent = 'Edad'

    rowTHead.append(thNombre, thEdad)
    tHead.appendChild(rowTHead)

    const tBody = table.createTBody()
    arrayUsuarios.forEach(usuario => {
        const rowTBody = document.createElement('tr')
        const tdNombre = document.createElement('td')
        const tdEdad = document.createElement('td')

        tdNombre.textContent = usuario.nombre
        tdEdad.textContent = usuario.edad

        rowTBody.append(tdNombre, tdEdad)
        tBody.appendChild(rowTBody)
    })

    table.append(tHead, tBody)
    fragment.appendChild(table)

    document.getElementById('contenedor-tabla').appendChild(fragment)
}

creacionTabla(usuarios)