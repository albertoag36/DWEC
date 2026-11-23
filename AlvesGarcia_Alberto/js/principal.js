// Nombre y apellidos: ______________________________

import { peliculas } from "./datos.js";

// ============================================================
// Elementos de la página (ya seleccionados: no los cambies)
// ============================================================
const formularioFiltros = document.querySelector("#formulario-filtros");
const cartelera = document.querySelector("#cartelera");
const contador = document.querySelector("#contador");
const listaReservas = document.querySelector("#lista-reservas");
const totalReservas = document.querySelector("#total-reservas");
const mensajeReservas = document.querySelector("#mensaje-reservas");
const formularioReserva = document.querySelector("#formulario-reserva");
const resultado = document.querySelector("#resultado");

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 4)
formularioReserva.noValidate = true;

// Entradas reservadas (apartado 3)
let reservas = [];

let listaPeliculas = peliculas.map((pelicula) => ({ ...pelicula }));

// ============================================================
// APARTADO 1 · La cartelera
// ============================================================

// 1.1
const crearTarjeta = (pelicula) => {
  // TU CÓDIGO AQUÍ
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  const descripcion = document.createElement("p");
  const precio = document.createElement("p");
  const boton = document.createElement("button");

  boton.className = "reservar";
  boton.type = "button";
  boton.textContent = "Reservar";

  precio.textContent = pelicula.precio;

  descripcion.textContent = `${pelicula.genero} · ${pelicula.duracion} min`;

  h3.textContent = pelicula.titulo;

  article.className = "tarjeta";
  if (!pelicula.disponible) {
    article.classList.add("agotada");
    boton.disabled = true;
  }
  article.setAttribute("data-id", pelicula.id);
  article.append(h3, descripcion, precio, boton);

  document.getElementById("cartelera").appendChild(article);

  return article;
};

// 1.2
const pintarCartelera = (lista) => {
  // TU CÓDIGO AQUÍ
  cartelera.replaceChildren();

  lista.forEach((pelicula) => {
    crearTarjeta(pelicula);
  });
};

// ============================================================
// APARTADO 2 · Filtros y orden
// ============================================================

// 2.1
const filtrarPeliculas = (lista, genero, soloDisponibles) => {
  // TU CÓDIGO AQUÍ
  if (genero !== "")
    return lista.filter((pelicula) => pelicula.genero === genero);

  if (soloDisponibles)
    return lista.filter((pelicula) => pelicula.disponible === soloDisponibles);

  return lista;
};

// 2.2
const ordenarPeliculas = (lista, criterio) => {
  // TU CÓDIGO AQUÍ
  switch (criterio) {
    case "titulo":
      return lista.sort((a, b) => a.titulo.localeCompare(b.titulo));
    case "duracion":
      return lista.sort((a, b) => a.duracion - b.duracion);
    case "precio":
      return lista.sort((a, b) => a.precio - b.precio);
    default:
      return [];
  }
};

// 2.3
const actualizarCartelera = () => {
  // TU CÓDIGO AQUÍ
  const elementos = formularioFiltros.elements;
  const peliculasFiltradas = filtrarPeliculas(
    listaPeliculas,
    elementos.genero.value,
    elementos.disponibles.checked,
  );

  if (peliculasFiltradas === undefined) return;

  const peliculasOrdenadas = ordenarPeliculas(
    peliculasFiltradas,
    elementos.orden.value,
  );

  contador.textContent = `Mostrando ${peliculasFiltradas.length} de ${peliculas.length} películas`;
  pintarCartelera(peliculasOrdenadas);
};

// 2.4 · Eventos de los filtros
// TU CÓDIGO AQUÍ
formularioFiltros.addEventListener("input", () => {
  actualizarCartelera();
});

// ============================================================
// APARTADO 3 · Entradas reservadas
// ============================================================

// 3.1
const anadirReserva = (pelicula) => {
  // TU CÓDIGO AQUÍ
  const peliculaEncontrada = reservas.find(
    (reserva) => reserva.id === pelicula.id,
  );

  if (peliculaEncontrada === undefined) {
    reservas = [
      ...reservas,
      {
        id: pelicula.id,
        titulo: pelicula.titulo,
        precio: pelicula.precio,
        cantidad: 1,
      },
    ];
  } else {
    reservas = [
      ...reservas,
      {
        id: peliculaEncontrada.id,
        titulo: peliculaEncontrada.titulo,
        precio: peliculaEncontrada.precio,
        cantidad: peliculaEncontrada.cantidad++,
      },
    ];
  }
};

// 3.2
const eliminarReserva = (id) => {
  // TU CÓDIGO AQUÍ
  reservas = reservas.filter((reserva) => reserva.id !== id);
};

// 3.3
const calcularTotal = (lista) => {
  // TU CÓDIGO AQUÍ
  return lista.reduce(
    (acumulador, reserva) => acumulador + reserva.precio * reserva.cantidad,
    0,
  );
};

// 3.4
const pintarReservas = () => {
  // TU CÓDIGO AQUÍ
  listaReservas.replaceChildren();

  reservas.forEach((reserva) => {
    const li = document.createElement("li");
    const boton = document.createElement("button");

    boton.className = "quitar";
    boton.setAttribute("data-id", reserva.id);
    boton.type = "button";
    boton.textContent = "X";

    li.textContent = `${reserva.titulo} x ${reserva.cantidad} -- ${reserva.precio * reserva.cantidad} €`;
    li.appendChild(boton);

    listaReservas.appendChild(li);
  });

  totalReservas.textContent = `Total: ${calcularTotal(reservas)} €`;
};

// 3.5 · Eventos de la cartelera y de la lista de entradas
// TU CÓDIGO AQUÍ
cartelera.addEventListener("click", (evento) => {
  if (evento.target.className === "reservar") {
    const tarjeta = evento.target.closest(".tarjeta");
    anadirReserva(
      listaPeliculas.find(
        (pelicula) => pelicula.id === Number(tarjeta.dataset.id),
      ),
    );
    pintarReservas();
  }
});

listaReservas.addEventListener("click", (evento) => {
  if (evento.target.className === "quitar") {
    const boton = evento.target;
    eliminarReserva(
      listaPeliculas.find(
        (pelicula) => pelicula.id === Number(boton.dataset.id),
      ).id,
    );
    pintarReservas();
  }
});

// ============================================================
// APARTADO 4 · Formulario de reserva y validación
// ============================================================

// 4.1
const mostrarError = (campo) => {
  // TU CÓDIGO AQUÍ
  const pError = campo.nextElementSibling;
  if (!pError) return true;

  pError.textContent = campo.validationMessage;

  campo.classList.toggle("con-error", !campo.validity.valid);
  return campo.validity.valid;
};

// 4.2
const comprobarReglas = () => {
  // TU CÓDIGO AQUÍ
  const fechaInput = formularioReserva.elements.fecha;

  fechaInput.setCustomValidity("");
  if (fechaInput.value === "") return; // de eso se encarga required

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const fecha = new Date(`${fechaInput.value}T00:00`);

  if (fecha < hoy) {
    fechaInput.setCustomValidity("La fecha no puede ser anterior a hoy");
  }
};

// 4.3 · Eventos focusout e input del formulario
// TU CÓDIGO AQUÍ
formularioReserva.addEventListener("focusout", (evento) => {
  if (!evento.target.name) return;
  comprobarReglas();
  mostrarError(evento.target);
});

formularioReserva.addEventListener("input", (evento) => {
  const campo = evento.target;

  if (campo.classList.contains("con-error")) {
    comprobarReglas(campo);
    mostrarError(campo);
  }
});

// 4.4 · Evento submit del formulario
// TU CÓDIGO AQUÍ
formularioReserva.addEventListener("submit", (evento) => {
  evento.preventDefault();

  comprobarReglas();

  const campos = Array.from(formularioReserva.elements).filter((campo) =>
    campo.matches("input"),
  );

  const invalidos = campos.filter((campo) => !mostrarError(campo));

  if (invalidos.length > 0) {
    invalidos[0].focus();
    return;
  }

  if (reservas.length === 0) {
    mensajeReservas.textContent = "Reserva al menos una entrada";
    return;
  }

  mensajeReservas.textContent = "";

  const { nombre, correo, telefono, fecha } = formularioReserva.elements;

  const lineas = reservas
    .map((reserva) => `- ${reserva.titulo} × ${reserva.cantidad}`)
    .join("\n");

  resultado.textContent =
    `Reserva de ${nombre.value} (${correo.value}, ${telefono.value}) para el ${fecha.value}\n` +
    `${lineas}\n` +
    `Total: ${calcularTotal(reservas)} €`;

  reservas = [];
  pintarReservas();
});

// ============================================================
// ARRANQUE · al cargar la página (apartados 2.4 y 3.5)
// ============================================================
// TU CÓDIGO AQUÍ
actualizarCartelera();
