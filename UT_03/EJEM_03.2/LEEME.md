# UT 3.2 · Ejemplos

Diez ejemplos cortos sobre cómo modificar el documento. Cada archivo exporta **una sola función,
sin parámetros**, que hace todo el ejemplo y muestra el resultado en la consola.

## Cómo usarlos

1. Abre la carpeta con Visual Studio Code y lanza `index.html` con **Live Server**
   (los módulos ES6 no funcionan abriendo el archivo con `file://`).
2. Abre la consola de las DevTools (F12).
3. En `main.js`, quita las `//` de la línea del ejemplo que quieras probar y guarda.
   Prueba los ejemplos de uno en uno.

| Archivo | Función | Qué enseña | Apartado |
| --- | --- | --- | --- |
| `ej01-texto.js` | `verTexto()` | textContent, innerText e innerHTML | 1.1 a 1.3 |
| `ej02-crear.js` | `crearElemento()` | Crear un elemento en tres pasos | 2 |
| `ej03-insertar.js` | `insertarElementos()` | append, prepend, before y after | 2 |
| `ej04-insertar-html.js` | `insertarHTML()` | insertAdjacentHTML y sus cuatro posiciones | 2 |
| `ej05-tabla.js` | `pintarTabla()` | Rellenar una tabla desde un array | 2 y 2.3 |
| `ej06-plantilla.js` | `usarPlantilla()` | Copiar un molde con template y cloneNode | 2 |
| `ej07-mover-clonar.js` | `moverYClonar()` | Mover frente a copiar | 2 |
| `ej08-eliminar.js` | `eliminarElementos()` | removeChild, remove y replaceChildren | 2.2 |
| `ej09-atributos.js` | `trabajarConAtributos()` | getAttribute, setAttribute, removeAttribute | 3.1 a 3.4 |
| `ej10-clases.js` | `trabajarConClases()` | classList: add, remove, contains, toggle | 3.5 |
