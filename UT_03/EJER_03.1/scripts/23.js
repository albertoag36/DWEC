const oculto = document.querySelector('.card:last-child .oculto')
console.log(oculto)
document.querySelector('.card:last-child h2').addEventListener('click', () => oculto.style.display = 'block')