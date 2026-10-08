// tienda.js
// Ejercicio integrador UT 2.1 + UT 2.2: Tienda de música
//
// Completa cada función. No cambies su nombre ni sus parámetros.
// Comprueba tu trabajo con:  node pruebas.js
// Cuando todo esté en verde:  node main.js
//
// Recuerda: salvo en la PARTE 5, las funciones NO deben modificar
// los arrays que reciben. Si necesitas ordenar, copia primero.
import {
  catalogoMatriz,
  novedadesMatriz,
  pedidosTexto,
  pedidoUrgenteTexto,
} from "./datos.js";
// ================================================================
// PARTE 1 · EL CATÁLOGO
// ================================================================

// 1.1 Convierte la matriz [[nombre, categoria, precio, stock], ...]
//     en un array de objetos { nombre, categoria, precio, stock }.
//     Si lo que recibe no es un array, devuelve [].
export const crearCatalogo = (matriz) => {
  // Tu código aquí
  if (Array.isArray(matriz)) {
    const catalogoObjeto = [];
    matriz.forEach((elemento) => {
      catalogoObjeto.push({
        nombre: elemento[0],
        categoria: elemento[1],
        precio: elemento[2],
        stock: elemento[3],
      });
    });
    return catalogoObjeto;
  }
  return [];
};

// 1.2 Devuelve un catálogo NUEVO con las novedades (que llegan en
//     formato matriz) añadidas al final.
export const ampliarCatalogo = (catalogo, matrizNovedades) => {
  // Tu código aquí
  const objetoNovedades = [];
  matrizNovedades.forEach((elemento) => {
    objetoNovedades.push({
      nombre: elemento[0],
      categoria: elemento[1],
      precio: elemento[2],
      stock: elemento[3],
    });
  });

  return catalogo.concat(objetoNovedades);
};

// 1.3 Devuelve los nombres de todos los productos en orden
//     alfabético, respetando las tildes ('Vinilo Ópera' va tras 'Vinilo Jazz').
export const nombresOrdenados = (catalogo) => {
  // Tu código aquí
  return catalogo
    .map((objeto) => objeto.nombre)
    .sort((a, b) => a.localeCompare(b));
};

// 1.4 Devuelve una COPIA del catálogo ordenada por precio,
//     de menor a mayor o, si descendente es true, de mayor a menor.
export const ordenarPorPrecio = (catalogo, descendente = false) => {
  // Tu código aquí
  const copia = [...catalogo];
  if (descendente) {
    return copia.sort((a, b) => b.precio - a.precio);
  }
  return copia.sort((a, b) => a.precio - b.precio);
};

// 1.5 Devuelve los nombres de los tres productos más baratos.
export const tresMasBaratos = (catalogo) => {
  // Tu código aquí
  return catalogo
    .sort((a, b) => a.precio - b.precio)
    .map((objeto) => objeto.nombre)
    .slice(0, 3);
};

// ================================================================
// PARTE 2 · BÚSQUEDAS
// ================================================================

// 2.1 Devuelve el producto con ese nombre, sin distinguir mayúsculas
//     y minúsculas, o undefined si no existe.
export const buscarProducto = (catalogo, nombre) => {
  // Tu código aquí
  return catalogo.find(
    (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase(),
  );
};

// 2.2 Devuelve true si existe un producto con ese nombre.
//     Obligatorio: usa includes.
export const existeProducto = (catalogo, nombre) => {
  // Tu código aquí
  return catalogo
    .map((objeto) => objeto.nombre.toLowerCase())
    .includes(nombre.toLowerCase());
};

// 2.3 Devuelve la posición del producto en el catálogo, o -1.
export const posicionProducto = (catalogo, nombre) => {
  // Tu código aquí
  return catalogo.findIndex((objeto) => objeto.nombre === nombre);
};

// 2.4 Devuelve un array con los NOMBRES de los productos sin stock.
export const agotados = (catalogo) => {
  // Tu código aquí
  return catalogo
    .filter((objeto) => objeto.stock === 0)
    .map((objeto) => objeto.nombre);
};

// 2.5 Devuelve los productos con precio entre minimo y maximo
//     (ambos incluidos).
export const productosEntre = (catalogo, minimo, maximo) => {
  // Tu código aquí
  return catalogo.filter(
    (objeto) => objeto.precio >= minimo && objeto.precio <= maximo,
  );
};

// ================================================================
// PARTE 3 · CÁLCULOS
// ================================================================

// 3.1 Valor total del almacén: suma de precio × stock.
export const valorAlmacen = (catalogo) => {
  // Tu código aquí
  return catalogo.reduce(
    (suma, objeto) => suma + objeto.precio * objeto.stock,
    0,
  );
};

// 3.2 Devuelve el producto (el objeto completo) más caro.
export const productoMasCaro = (catalogo) => {
  // Tu código aquí
  return catalogo
    .map((producto) => producto)
    .sort((a, b) => b.precio - a.precio)[0];
};

// 3.3 Devuelve un objeto con las unidades en stock de cada categoría:
//     { equipos: 7, accesorios: 29, discos: 14 }
export const unidadesPorCategoria = (catalogo) =>
  // Tu código aquí
  catalogo.reduce((acc, producto) => {
    acc[producto.categoria] = (acc[producto.categoria] ?? 0) + producto.stock;
    return acc;
  }, {});

// 3.4 Devuelve true si hay AL MENOS un producto agotado.
export const hayAgotados = (catalogo) => {
  // Tu código aquí
  return catalogo.some((objeto) => objeto.stock === 0);
};

// 3.5 Devuelve true si TODOS los precios son números mayores que 0.
export const preciosValidos = (catalogo) => {
  // Tu código aquí
  return catalogo.every((objeto) => objeto.precio > 0);
};

// ================================================================
// PARTE 4 · PEDIDOS
// ================================================================

// 4.1 Convierte el texto 'Lucía|Tocadiscos:1;Vinilo Jazz:2' en:
//     {
//       cliente: 'Lucía',
//       lineas: [
//         { nombre: 'Tocadiscos', cantidad: 1 },
//         { nombre: 'Vinilo Jazz', cantidad: 2 },
//       ],
//     }
//     ¡Ojo! La cantidad debe ser un número, no un string.
export const parsearPedido = (texto) => {
  // Tu código aquí
  const [cliente, resto] = texto.split("|");

  const lineas = resto.split(";").map((linea) => {
    const [nombre, cantidad] = linea.split(":");
    return { nombre, cantidad: Number(cantidad) };
  });

  return { cliente, lineas };
};

// REVISAR EL 4.3 DE PRUEBAS

// 4.2 Devuelve true si TODOS los productos del pedido existen
//     y tienen stock suficiente.
export const puedeServirse = (catalogo, pedido) => {
  // Tu código aquí
  return pedido.lineas.every(
    (linea) =>
      buscarProducto(catalogo, linea.nombre)?.nombre === linea.nombre &&
      buscarProducto(catalogo, linea.nombre)?.stock >= linea.cantidad,
  );
};

// 4.3 Devuelve el importe total del pedido.
export const totalPedido = (catalogo, pedido) => {
  // Tu código aquí
  return pedido.lineas.reduce(
    (suma, linea) =>
      suma +
      linea.cantidad *
        catalogo
          .filter((producto) => producto.nombre === linea.nombre)
          .map((producto) => producto.precio),
    0,
  );
};

// 4.4 Devuelve un catálogo NUEVO en el que se ha restado del stock
//     la cantidad pedida de cada producto. El original no cambia.
//     Pista: { ...producto, stock: nuevoStock } crea una copia del objeto.
export const servirPedido = (catalogo, pedido) => {
  // Tu código aquí
  return catalogo.map((producto) => {
    return {
      ...producto,
      stock:
        producto.stock -
        (pedido.lineas.find((linea) => linea.nombre === producto.nombre)
          ?.cantidad ?? 0),
    };
  });
};

// 4.5 Devuelve el ticket del pedido como un único texto:
//     Cliente: Lucía
//     1 x Tocadiscos = 200 €
//     2 x Vinilo Jazz = 60 €
//     TOTAL: 260 €
//     Pista: construye un array de líneas y únelas con '\n'.
export const generarTicket = (catalogo, pedido) => {
  // Tu código aquí
  const lineas = pedido.lineas.map((linea) => {
    return `${linea.cantidad} x ${linea.nombre} = ${linea.cantidad * catalogo.find((p) => p.nombre === linea.nombre).precio} €`;
  });

  return [
    `Cliente: ${pedido.cliente}`,
    ...lineas,
    `TOTAL: ${totalPedido(catalogo, pedido)} €`,
  ].join("\n");
};

// ================================================================
// PARTE 5 · COLA DE PEDIDOS Y CARRITO CON "DESHACER"
// En esta parte SÍ se modifican los arrays recibidos.
// ================================================================

// 5.1 COLA (el primero que llega es el primero en salir):
//     saca y devuelve el primer pedido de la cola.
export const atenderSiguiente = (cola) => {
  // Tu código aquí
  return cola.shift();
};

// 5.2 Coloca el pedido al PRINCIPIO de la cola y devuelve
//     la nueva longitud de la cola.
export const agregarUrgente = (cola, pedido) => {
  // Tu código aquí
  return cola.unshift(pedido);
};

// 5.3 Añade el nombre al final del carrito y apunta la acción en el
//     historial: { accion: 'agregar', nombre }
export const agregarAlCarrito = (carrito, historial, nombre) => {
  // Tu código aquí
  carrito.push(nombre);
  historial.push({ accion: "agregar", nombre });
  return [carrito, historial];
};

// 5.4 Quita la PRIMERA aparición del nombre en el carrito y apunta en
//     el historial: { accion: 'quitar', nombre, posicion }
//     Devuelve true, o false (sin tocar nada) si no estaba.
export const quitarDelCarrito = (carrito, historial, nombre) => {
  // Tu código aquí
  let posicion = carrito.indexOf(nombre);
  if (posicion == -1) {
    return false;
  }
  carrito.splice(posicion, 1);
  historial.push({ accion: "quitar", nombre, posicion });
  return true;
};

// 5.5 PILA (la última acción es la primera en deshacerse):
//     saca la última acción del historial y la revierte:
//     - si fue 'agregar', quita la ÚLTIMA aparición de ese nombre;
//     - si fue 'quitar', vuelve a insertarlo en su posición original.
//     Devuelve true, o false si el historial estaba vacío.
export const deshacer = (carrito, historial) => {
  // Tu código aquí
  if (historial.length === 0) {
    return false;
  }

  switch (historial[0].accion) {
    case "agregar":
      historial.pop();
      carrito.pop();
      break;
    case "quitar":
      carrito.splice(0, 0, historial[0].nombre);
      break;
  }
  return true;
};

// ================================================================
// PARTE 6 · INFORME FINAL
// ================================================================

// 6.1 Atiende uno a uno (con atenderSiguiente) todos los pedidos de la
//     cola. Si puede servirse, actualiza el catálogo con servirPedido y lo
//     guarda en servidos; si no, en rechazados. Al terminar la cola queda vacía.
//     Devuelve { catalogo, servidos, rechazados }
export const procesarCola = (catalogo, cola) => {
  // Tu código aquí
  const servidos = [];
  const rechazados = [];

  while (cola.length > 0) {
    const pedido = atenderSiguiente(cola);

    if (puedeServirse(catalogo, pedido)) {
      catalogo = servirPedido(catalogo, pedido);
      servidos.push(pedido);
    } else {
      rechazados.push(pedido);
    }
  }

  return { catalogo, servidos, rechazados };
};

// 6.2 Recibe un array de pedidos y devuelve los nombres de los productos
//     vendidos, SIN repetidos y en orden alfabético.
export const productosVendidos = (pedidos) => {
  // Tu código aquí
  const nombres = pedidos
    .map((pedido) => pedido.lineas)
    .flat()
    .map((linea) => linea.nombre);

  return nombres.filter((nombre, i) => nombres.indexOf(nombre) === i).sort();
};

// 6.3 Devuelve un array de textos con una barra por producto:
//     'Altavoz: ■■■ (3)'
//     Obligatorio: crea la barra con new Array(...).fill('■')
export const graficoStock = (catalogo) => {
  // Tu código aquí
  return catalogo.map(({nombre, stock}) => {
    const barra = new Array(stock).fill('■').join('')
    return `${nombre}: ${barra} (${stock})`
  })
};
