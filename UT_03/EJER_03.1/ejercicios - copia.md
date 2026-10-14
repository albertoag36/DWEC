1. Selecciona el h1 con id 'titulo-principal' y muestra su contenido en la consola.
2. Selecciona todos los enlaces ('a') de la barra de navegación y muestra cuántos hay.
3. Selecciona el elemento con la clase 'premium' y muestra su contenido.
4. Selecciona todas las tarjetas (elementos con clase 'card') y muestra la colección en la consola.
5. Selecciona el formulario con id 'formulario-contacto'.
6. Selecciona el párrafo que tiene el atributo 'data-precio'. Muestra su contenido en la consola.
7. Selecciona el 'input' de tipo 'email' que está dentro del formulario. Muestra el elemento en la consola.
8. Selecciona el segundo enlace de la barra de navegación usando 'nth-child'. Muestra su texto en la consola.
9. Cambia el texto del h1 seleccionado en el punto 1 por 'Nueva Guía del DOM'.
10. Cambia el 'href' del primer enlace de la navegación para que apunte a 'https://www.google.com'.
11. Añade la clase 'titulo-grande' al h1. (Puedes añadir estilos para esta clase en el CSS para ver el efecto).
12. Modifica el texto del último enlace de la navegación (Contacto) para que muestre dinámicamente el número de cursos (tarjetas) disponibles. El texto final debería ser, por ejemplo: "Contacto (3 Cursos)"
13. Selecciona la imagen del primer 'card' y cambia su 'src' por 'img/hacer4.jpg'.
14. Selecciona el botón con id 'btn-info-premium' y cambia su texto a 'Ver Más'.
15. Desde el primer 'card', selecciona el siguiente elemento hermano.
16. Desde el botón 'btn-info-premium', selecciona su elemento padre (el div con clase 'info').
17. Desde el segundo 'card' (el 'premium'), selecciona el 'h2' que contiene.
18. Selecciona el footer. A partir de ahí, navega hasta su elemento hermano anterior (el 'main.container') y ponle un borde de 2px de color rojo.
19. Selecciona el primer 'div' con clase 'info'. A partir de ahí, navega hasta su elemento padre (la tarjeta) y luego selecciona el primer hijo de esa tarjeta (la imagen).
20. Selecciona el segundo enlace de la navegación. Navega hasta su padre (`<nav>`) y luego selecciona el elemento hermano anterior del padre (el `<h1>`). Cambia su color a naranja.
21. Añade un 'event listener' al botón 'btn-info-premium'. Cuando se haga clic, debe mostrar una alerta que diga 'Información exclusiva para miembros premium'.
22. Añade un 'event listener' al formulario 'formulario-contacto'. Al enviarse (evento 'submit'), debe prevenir el comportamiento por defecto y mostrar en la consola los valores de los campos de nombre y mensaje.
23. Selecciona el párrafo con la clase 'oculto' en la tercera tarjeta. Al hacer clic en el h2 de esa misma tarjeta ('Introducción a React'), el párrafo debe hacerse visible (puedes quitarle la clase 'oculto').
24. Selecciona todos los elementos 'h2' dentro de las tarjetas. Recórrelos y añade el texto "[CURSO]" al principio del contenido de cada uno.
25. Selecciona todas las tarjetas. Recórrelas y, si una tarjeta contiene un párrafo con la categoría 'Desarrollo Web', cambia el color de fondo de esa tarjeta a un tono grisáceo (#f0f0f0).
26. Para cada tarjeta, crea un nuevo elemento 'p' con el texto 'Duración: 20 horas' y una clase 'duracion'. Añádelo dentro del div con clase 'info'.
27. Selecciona todas las tarjetas. Usando el préstamo de métodos 'Array.prototype.filter.call', crea una nueva lista que contenga solo las tarjetas que NO tengan la clase 'premium'. Luego, recorre esa nueva lista y añade un borde de 2px punteado color negro a cada una.
28. Selecciona todos los párrafos con la clase 'categoria'. Usando 'Array.prototype.map.call', crea un nuevo array que contenga solo el texto de cada categoría (ej: ['Desarrollo Web', 'Diseño', 'Desarrollo Web']). Muestra este nuevo array en la consola.
29. Selecciona todos los enlaces de la navegación. Usa 'Array.prototype.forEach.call' para recorrerlos y añade a cada uno un atributo 'data-tipo' con el valor 'enlace-nav'.
30. Primero, selecciona solo la sección con el id 'formulario-seccion'. Luego, usando un selector aplicado a esa sección, encuentra su 'textarea' y cambia su 'placeholder' a 'Escribe aquí tu consulta'.
31. Selecciona la tarjeta que contiene el curso de 'React'. Después, busca **solo dentro de esa tarjeta** el párrafo con la clase 'oculto' y añádele el texto ' (¡Oferta especial!)'.
32. Selecciona todas las tarjetas. Recorre la lista con un bucle. En cada iteración, selecciona **solo dentro de la tarjeta actual** el elemento 'img' y añádele la clase 'imagen-curso'.