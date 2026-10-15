/*
Para cada tarjeta, crea un nuevo elemento 'p' con el texto 'Duración: 20 horas'
 y una clase 'duracion'. Añádelo dentro del div con clase 'info'.*/ 
 
document.querySelectorAll('.card .info').forEach(informacion => {
  const p = document.createElement('p');
  p.textContent = 'Duración: 20 horas';
  p.classList.add('duracion');
  informacion.appendChild(p);
});

// document.querySelectorAll('.card .info').forEach(informacion => 
//     informacion.appendChild(document.createElement('p').textContent = 'Duración'))