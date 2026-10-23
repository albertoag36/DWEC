const ul = document.getElementById('lista')

document.getElementById('ordenar').addEventListener('click', () => {
    const lista = Array.from(document.querySelectorAll('#lista li'))

    lista.sort((a, b) => a.textContent.localeCompare(b.textContent, 'es'))

    ul.innerHTML = ''

    lista.forEach(elemento => ul.append(elemento))
})