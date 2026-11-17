const formulario = document.getElementById("formulario-compra");
const lista = document.getElementById("lista");
const buscador = document.getElementById("buscador");

let productos = [];

const crearSecuencia = (inicio = 1) => {
  let actual = inicio;
  return () => actual++;
};
const siguiente = crearSecuencia();

const crearSpan = (clase, texto) => {
  const span = document.createElement("span");
  span.className = clase;
  span.textContent = texto;
  return span;
};

const crearBoton = (texto, accion) => {
  const boton = document.createElement("button");
  boton.textContent = texto;
  boton.dataset.accion = accion;
  return boton;
};

const crearItem = (producto) => {
  const li = document.createElement("li");
  li.id = `${producto.id}`;

  li.append(
    crearSpan("nombre", `${producto.nombre}: `),
    crearSpan("unidades", producto.unidades),
    crearSpan("precio", ` x ${producto.precio} € `),
    crearBoton("-", "restar"),
    crearBoton("+", "sumar"),
    crearBoton("Borrar", "borrar"),
  );
  return li;
};

const pintar = (lista_productos = productos) => {
  lista.innerHTML = "";
  lista.append(...lista_productos.map(crearItem));
};

const calcularTotal = () =>
  productos.reduce(
    (acumulador, producto) => acumulador + producto.precio * producto.unidades,
    0,
  );

const textoTotal = () => {
  const p = document.getElementById("total");
  p.textContent = `Total: ${calcularTotal().toFixed(2)} €`;
};

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = formulario.elements.producto.value;
  const precio = formulario.elements.precio.valueAsNumber;
  const unidades = formulario.elements.unidades.valueAsNumber;

  const existente = productos.find(
    (p) => p.nombre.toLowerCase() === nombre.toLowerCase(),
  );

  if (existente) {
    existente.unidades += unidades;
  } else {
    productos = [...productos, { id: siguiente(), nombre, precio, unidades }];
  }

  formulario.reset();
  formulario.elements.producto.focus();

  pintar();
  textoTotal();
});

lista.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button");
  if (!boton) return;

  const li = evento.target.closest("li");
  const id = Number(li.id);
  const producto = productos.find((p) => p.id === id);

  switch (boton.dataset.accion) {
    case "restar":
      if (producto.unidades > 1) producto.unidades -= 1;
      break;
    case "sumar":
      producto.unidades += 1;
      break;
    case "borrar":
      productos = productos.filter((p) => p.id !== id);
      break;
  }

  pintar();
  textoTotal();
});

buscador.addEventListener("input", (evento) => {
  const texto = evento.target.value.toLowerCase();

  if (texto.trim() === "") {
    pintar();
  } else {
    const filtrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(texto),
    );

    pintar(filtrados);
  }
});

formulario.addEventListener("focusin", (evento) => {
  if (evento.target.matches("input")) {
    evento.target.classList.add("activo");
  }
});

formulario.addEventListener("focusout", (evento) => {
  if (evento.target.matches("input")) {
    evento.target.classList.remove("activo");
  }
});
