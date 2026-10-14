
// 1. Selecciona el h1 con id 'titulo-principal' y muestra su contenido en la consola.
(function() {
  const titulo = document.getElementById('titulo-principal');
  if (titulo) {
    console.log('Ejercicio 1:', titulo.textContent);
  }
})();

// 2. Selecciona todos los enlaces ('a') de la barra de navegación y muestra cuántos hay.
(function() {
  const enlaces = document.querySelectorAll('.navegacion a');
  console.log(`Ejercicio 2: Hay ${enlaces.length} enlaces.`);
})();

// 3. Selecciona el elemento con la clase 'premium' y muestra su contenido.
(function() {
  const premiumCard = document.querySelector('.premium');
  if (premiumCard) {
    console.log('Ejercicio 3:', premiumCard.outerHTML);
  }
})();

// 4. Selecciona todas las tarjetas (elementos con clase 'card') y muestra la colección en la consola.
(function() {
  const tarjetas = document.querySelectorAll('.card');
  console.log('Ejercicio 4:', tarjetas);
})();

// 5. Selecciona el formulario con id 'formulario-contacto'.
(function() {
  const formulario = document.getElementById('formulario-contacto');
  console.log('Ejercicio 5:', formulario);
})();

// 6. Selecciona el párrafo que tiene el atributo 'data-precio'. Muestra su contenido en la consola.
(function() {
  const parrafoPrecio = document.querySelector('[data-precio]');
  if (parrafoPrecio) {
    console.log('Ejercicio 6:', parrafoPrecio.textContent);
  }
})();

// 7. Selecciona el 'input' de tipo 'email' que está dentro del formulario. Muestra el elemento en la consola.
(function() {
  const inputEmail = document.querySelector('#formulario-contacto input[type="email"]');
  console.log('Ejercicio 7:', inputEmail);
})();

// 8. Selecciona el segundo enlace de la barra de navegación usando 'nth-child'. Muestra su texto en la consola.
(function() {
  const segundoEnlace = document.querySelector('.navegacion a:nth-child(2)');
  if (segundoEnlace) {
    console.log('Ejercicio 8:', segundoEnlace.textContent);
  }
})();

// 9. Cambia el texto del h1 seleccionado en el punto 1 por 'Nueva Guía del DOM'.
(function() {
  const titulo = document.getElementById('titulo-principal');
  if (titulo) {
    titulo.textContent = 'Nueva Guía del DOM';
  }
})();

// 10. Cambia el 'href' del primer enlace de la navegación para que apunte a 'https://www.google.com'.
(function() {
  const primerEnlace = document.querySelector('.navegacion a');
  if (primerEnlace) {
    primerEnlace.href = 'https://www.google.com';
  }
})();

// 11. Añade la clase 'titulo-grande' al h1. (Puedes añadir estilos para esta clase en el CSS para ver el efecto).
(function() {
  const titulo = document.getElementById('titulo-principal');
  if (titulo) {
    titulo.classList.add('titulo-grande');
  }
})();

// 12. Modifica el texto del último enlace de la navegación (Contacto) para que muestre dinámicamente el número de cursos (tarjetas) disponibles. El texto final debería ser, por ejemplo: "Contacto (3 Cursos)"
(function() {
  const numCursos = document.querySelectorAll('.card').length;
  const enlaceContacto = document.querySelector('.navegacion a:last-child');
  if (enlaceContacto) {
    enlaceContacto.textContent = `Contacto (${numCursos} Cursos)`;
  }
})();

// 13. Selecciona la imagen del primer 'card' y cambia su 'src' por 'img/hacer4.jpg'.
(function() {
  const primeraImagen = document.querySelector('.card img');
  if (primeraImagen) {
    primeraImagen.src = 'img/hacer4.jpg';
  }
})();

// 14. Selecciona el botón con id 'btn-info-premium' y cambia su texto a 'Ver Más'.
(function() {
  const botonPremium = document.getElementById('btn-info-premium');
  if (botonPremium) {
    botonPremium.textContent = 'Ver Más';
  }
})();

// 15. Desde el primer 'card', selecciona el siguiente elemento hermano.
(function() {
  const primerCard = document.querySelector('.card');
  if (primerCard) {
    console.log('Ejercicio 15:', primerCard.nextElementSibling);
  }
})();

// 16. Desde el botón 'btn-info-premium', selecciona su elemento padre (el div con clase 'info').
(function() {
  const botonPremium = document.getElementById('btn-info-premium');
  if (botonPremium) {
    console.log('Ejercicio 16:', botonPremium.parentElement);
  }
})();

// 17. Desde el segundo 'card' (el 'premium'), selecciona el 'h2' que contiene.
(function() {
  const premiumCard = document.querySelector('.premium');
  if (premiumCard) {
    const h2 = premiumCard.querySelector('h2');
    console.log('Ejercicio 17:', h2);
  }
})();

// 18. Selecciona el footer. A partir de ahí, navega hasta su elemento hermano anterior (el 'main.container') y ponle un borde de 2px de color rojo.
(function() {
  const footer = document.getElementById('footer-principal');
  if (footer && footer.previousElementSibling) {
    footer.previousElementSibling.style.border = '2px solid red';
  }
})();

// 19. Selecciona el primer 'div' con clase 'info'. A partir de ahí, navega hasta su elemento padre (la tarjeta) y luego selecciona el primer hijo de esa tarjeta (la imagen).
(function() {
  const primerInfo = document.querySelector('.info');
  if (primerInfo && primerInfo.parentElement) {
    const imagen = primerInfo.parentElement.firstElementChild;
    console.log('Ejercicio 19:', imagen);
  }
})();

// 20. Selecciona el segundo enlace de la navegación. Navega hasta su padre (`<nav>`) y luego selecciona el elemento hermano anterior del padre (el `<h1>`). Cambia su color a naranja.
(function() {
  const segundoEnlace = document.querySelector('.navegacion a:nth-child(2)');
  if (segundoEnlace && segundoEnlace.parentElement && segundoEnlace.parentElement.previousElementSibling) {
    segundoEnlace.parentElement.previousElementSibling.style.color = 'orange';
  }
})();

// 21. Añade un 'event listener' al botón 'btn-info-premium'. Cuando se haga clic, debe mostrar una alerta que diga 'Información exclusiva para miembros premium'.
(function() {
  const botonPremium = document.getElementById('btn-info-premium');
  if (botonPremium) {
    botonPremium.addEventListener('click', function() {
      alert('Información exclusiva para miembros premium');
    });
  }
})();

// 22. Añade un 'event listener' al formulario 'formulario-contacto'. Al enviarse (evento 'submit'), debe prevenir el comportamiento por defecto y mostrar en la consola los valores de los campos de nombre y mensaje.
(function() {
  const formulario = document.getElementById('formulario-contacto');
  if (formulario) {
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const mensaje = document.getElementById('mensaje').value;
      console.log('Ejercicio 22: Nombre:', nombre, 'Mensaje:', mensaje);
    });
  }
})();

// 23. Selecciona el párrafo con la clase 'oculto' en la tercera tarjeta. Al hacer clic en el h2 de esa misma tarjeta ('Introducción a React'), el párrafo debe hacerse visible (puedes quitarle la clase 'oculto').
(function() {
  const cards = document.querySelectorAll('.card');
  const tercerCard = cards[2]; 
  if(tercerCard){
    const h2React = tercerCard.querySelector('h2');
    const parrafoOculto = tercerCard.querySelector('.oculto');
    if (h2React && parrafoOculto) {
      h2React.addEventListener('click', function() {
        parrafoOculto.classList.remove('oculto');
      });
    }
  }
})();

// 24. Selecciona todos los elementos 'h2' dentro de las tarjetas. Recórrelos y añade el texto "[CURSO]" al principio del contenido de cada uno.
(function() {
  const titulosCursos = document.querySelectorAll('.card h2');
  titulosCursos.forEach(function(titulo) {
    titulo.textContent = `[CURSO] ${titulo.textContent}`;
  });
})();

// 25. Selecciona todas las tarjetas. Recórrelas y, si una tarjeta contiene un párrafo con la categoría 'Desarrollo Web', cambia el color de fondo de esa tarjeta a un tono grisáceo (#f0f0f0).
(function() {
  const tarjetas = document.querySelectorAll('.card');
  tarjetas.forEach(function(tarjeta) {
    const categoria = tarjeta.querySelector('.categoria');
    if (categoria && categoria.textContent === 'Desarrollo Web') {
      tarjeta.style.backgroundColor = '#f0f0f0';
    }
  });
})();

// 26. Para cada tarjeta, crea un nuevo elemento 'p' con el texto 'Duración: 20 horas' y una clase 'duracion'. Añádelo dentro del div con clase 'info'.
(function() {
  const infos = document.querySelectorAll('.card .info');
  infos.forEach(function(info) {
    const pDuracion = document.createElement('p');
    pDuracion.textContent = 'Duración: 20 horas';
    pDuracion.classList.add('duracion');
    info.appendChild(pDuracion);
  });
})();

// 27. Selecciona todas las tarjetas. Usando el préstamo de métodos 'Array.prototype.filter.call', crea una nueva lista que contenga solo las tarjetas que NO tengan la clase 'premium'. Luego, recorre esa nueva lista y añade un borde de 2px punteado color negro a cada una.
(function() {
  const todasLasTarjetas = document.querySelectorAll('.card');
  const tarjetasNoPremium = Array.prototype.filter.call(todasLasTarjetas, function(tarjeta) {
    return !tarjeta.classList.contains('premium');
  });
  tarjetasNoPremium.forEach(function(tarjeta) {
    tarjeta.style.border = '2px dotted black';
  });
})();

// 28. Selecciona todos los párrafos con la clase 'categoria'. Usando 'Array.prototype.map.call', crea un nuevo array que contenga solo el texto de cada categoría (ej: ['Desarrollo Web', 'Diseño', 'Desarrollo Web']). Muestra este nuevo array en la consola.
(function() {
  const categorias = document.querySelectorAll('.categoria');
  const nombresCategorias = Array.prototype.map.call(categorias, function(categoria) {
    return categoria.textContent;
  });
  console.log('Ejercicio 28:', nombresCategorias);
})();

// 29. Selecciona todos los enlaces de la navegación. Usa 'Array.prototype.forEach.call' para recorrerlos y añade a cada uno un atributo 'data-tipo' con el valor 'enlace-nav'.
(function() {
  const enlacesNav = document.querySelectorAll('.navegacion a');
  Array.prototype.forEach.call(enlacesNav, function(enlace) {
    enlace.setAttribute('data-tipo', 'enlace-nav');
  });
})();

// 30. Primero, selecciona solo la sección con el id 'formulario-seccion'. Luego, usando un selector aplicado a esa sección, encuentra su 'textarea' y cambia su 'placeholder' a 'Escribe aquí tu consulta'.
(function() {
  const seccionFormulario = document.getElementById('formulario-seccion');
  if (seccionFormulario) {
    const textarea = seccionFormulario.querySelector('textarea');
    if (textarea) {
      textarea.placeholder = 'Escribe aquí tu consulta';
    }
  }
})();

// 31. Selecciona la tarjeta que contiene el curso de 'React'. Después, busca **solo dentro de esa tarjeta** el párrafo con la clase 'oculto' y añádele el texto ' (¡Oferta especial!)'.
(function() {
  const tarjetas = document.querySelectorAll('.card');
  tarjetas.forEach(function(tarjeta){
      const h2 = tarjeta.querySelector('h2');
      if(h2 && h2.textContent.includes('React')){
          const parrafoOculto = tarjeta.querySelector('.oculto');
          if(parrafoOculto){
              parrafoOculto.textContent += ' (¡Oferta especial!)';
          }
      }
  });
})();

// 32. Selecciona todas las tarjetas. Recorre la lista con un bucle. En cada iteración, selecciona **solo dentro de la tarjeta actual** el elemento 'img' y añádele la clase 'imagen-curso'.
(function() {
  const tarjetas = document.querySelectorAll('.card');
  tarjetas.forEach(function(tarjeta) {
    const img = tarjeta.querySelector('img');
    if (img) {
      img.classList.add('imagen-curso');
    }
  });
})();
