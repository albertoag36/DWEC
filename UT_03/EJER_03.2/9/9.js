const ciudades = [
    { ciudad: 'Madrid', pais: 'España' },
    { ciudad: 'Barcelona', pais: 'España' },
    { ciudad: 'Sevilla', pais: 'España' },
    { ciudad: 'París', pais: 'Francia' },
    { ciudad: 'Lyon', pais: 'Francia' },
    { ciudad: 'Marsella', pais: 'Francia' },
    { ciudad: 'Roma', pais: 'Italia' },
    { ciudad: 'Milán', pais: 'Italia' },
    { ciudad: 'Venecia', pais: 'Italia' },
    { ciudad: 'Berlín', pais: 'Alemania' },
    { ciudad: 'Múnich', pais: 'Alemania' },
    { ciudad: 'Lisboa', pais: 'Portugal' },
    { ciudad: 'Oporto', pais: 'Portugal' },
    { ciudad: 'Londres', pais: 'Reino Unido' },
    { ciudad: 'Edimburgo', pais: 'Reino Unido' },
    { ciudad: 'Ciudad de México', pais: 'México' },
    { ciudad: 'Guadalajara', pais: 'México' },
    { ciudad: 'Buenos Aires', pais: 'Argentina' },
    { ciudad: 'Córdoba', pais: 'Argentina' },
    { ciudad: 'Tokio', pais: 'Japón' },
    { ciudad: 'Osaka', pais: 'Japón' }
]

const filtro = document.getElementById('filtro')
const listaCiudades = document.getElementById('lista-ciudades')

const aniadirLi = (ciudad) => {
    const li = document.createElement('li')
    li.textContent = ciudad.ciudad
    listaCiudades.append(li)
}

const filtrarCiudades = () => {
    return ciudades.filter(elemento => elemento.pais.localeCompare(filtro.value.trim(), 'es', { sensitivity: 'base'}) === 0)
}

document.getElementById('filtrar').addEventListener('click', () => {
    listaCiudades.innerHTML = ''
    filtrarCiudades().forEach(ciudad => aniadirLi(ciudad))
    filtro.value = ''

})

document.getElementById('limpiar').addEventListener('click', () => {
    listaCiudades.innerHTML = ''
    ciudades.forEach(ciudad => aniadirLi(ciudad))
    filtro.value = ''
})

ciudades.forEach(ciudad => aniadirLi(ciudad))