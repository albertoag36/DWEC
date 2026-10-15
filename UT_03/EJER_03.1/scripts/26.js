document.querySelectorAll('.card .info').forEach(informacion => {
  const p = document.createElement('p');
  p.textContent = 'Duración: 20 horas';
  p.classList.add('duracion');
  informacion.appendChild(p);
});