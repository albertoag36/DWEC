// Nombre y apellidos: ______________________________

import { tareasIniciales } from "./datos.js";

// ============================================================
// Constantes y elementos de la página (ya definidos: no los cambies)
// ============================================================
const ESTADOS = ["porhacer", "encurso", "hecha"];
const LIMITE_HORAS = 40;

const formularioTarea = document.querySelector("#formulario-tarea");
const campoHoras = formularioTarea.elements.horas;
const mensajeFormulario = document.querySelector("#mensaje-formulario");
const buscador = document.querySelector("#buscador");
const botonArchivar = document.querySelector("#boton-archivar");
const tablero = document.querySelector("#tablero");
const listaHoras = document.querySelector("#horas-asignatura");
const progreso = document.querySelector("#progreso");

const columnas = {
  porhacer: document.querySelector("#col-porhacer"),
  encurso: document.querySelector("#col-encurso"),
  hecha: document.querySelector("#col-hecha"),
};
const contadores = {
  porhacer: document.querySelector("#num-porhacer"),
  encurso: document.querySelector("#num-encurso"),
  hecha: document.querySelector("#num-hecha"),
};

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 1)
formularioTarea.noValidate = true;

// Tareas del tablero. Es una copia: los datos originales no se tocan
let tareas = tareasIniciales.map((tarea) => ({ ...tarea }));

// Repinta todo a partir del array de tareas (ya hecha: la usarás en el apartado 4)
const repintar = () => {
  pintarTablero(buscarTareas(tareas, buscador.value));
  pintarResumen(tareas);
};

// ============================================================
// APARTADO 1 · Formulario y validación
// ============================================================

// 1.1 · Devuelve el texto del error de un campo según su `validity` ('' si es válido)
const mensajeDeError = (campo) => {
  // TU CÓDIGO AQUÍ
  const validacion = campo.validity;

  if (validacion.valueMissing) return "Este campo es obligatorio";
  if (validacion.tooShort)
    return `Escribe al menos ${campo.minLength} caracteres`;
  if (validacion.rangeUnderflow || validacion.rangeOverflow) {
    return `Debe estar entre ${campo.min} y ${campo.max}`;
  }
  if (validacion.customError) return campo.validationMessage;

  return "";
};

// 1.2 · Muestra u oculta el error de un campo y devuelve si es válido
const validarCampo = (campo) => {
  // TU CÓDIGO AQUÍ
  const mensaje = mensajeDeError(campo);

  campo.nextElementSibling.textContent = mensaje;
  campo.classList.toggle("invalido", mensaje !== "");

  return mensaje === "";
};

// 1.3 · Aplica (o quita) el error personalizado de #horas según el límite de horas pendientes
const comprobarHoras = () => {
  const pendientes = tareas
    .filter(
      (tarea) => tarea.estado === ESTADOS[0] || tarea.estado === ESTADOS[1],
    )
    .reduce((acumulador, tarea) => acumulador + tarea.horas, 0);
  const escritas = Number(campoHoras.value) || 0;

  if (pendientes + escritas > LIMITE_HORAS) {
    campoHoras.setCustomValidity(
      `Superas el límite de ${LIMITE_HORAS} h pendientes (ahora hay ${pendientes} h)`,
    );
  } else {
    campoHoras.setCustomValidity("");
  }
};

// 1.4 · Deja el formulario como recién cargado
const limpiarFormulario = () => {
  // TU CÓDIGO AQUÍ
  formularioTarea.reset();

  formularioTarea.querySelectorAll("input, select").forEach((campo) => {
    campo.classList.remove("invalido");

    if (campo.nextElementSibling) {
      campo.nextElementSibling.textContent = "";
    }

    campo.setCustomValidity("");
  });
};

// 1.5 · Eventos del formulario (change, input y keydown)
// TU CÓDIGO AQUÍ
formularioTarea.addEventListener("change", (evento) => {
  comprobarHoras();
  validarCampo(evento.target);
});

formularioTarea.addEventListener("input", (evento) => {
  if (evento.target.classList.contains("invalido")) {
    comprobarHoras();
    validarCampo(evento.target);
  }
});

formularioTarea.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") limpiarFormulario();
});

// ============================================================
// APARTADO 2 · Cálculos con los datos (funciones puras)
// ============================================================

// 2.1 · Tareas cuyo título o asignatura contienen el texto buscado
const buscarTareas = (lista, texto) => {
  // TU CÓDIGO AQUÍ
  const busqueda = texto.trim().toLowerCase();

  if (busqueda === "") {
    return [...lista];
  }

  return lista.filter(
    (tarea) =>
      tarea.titulo.toLowerCase().includes(busqueda) ||
      tarea.asignatura.toLowerCase().includes(busqueda),
  );
};

// 2.2 · Reparte las tareas en un objeto con una lista por cada estado
const agruparPorEstado = (lista) => {
  // TU CÓDIGO AQUÍ
  return Object.fromEntries(
    ESTADOS.map((estado) => [
      estado,
      lista.filter((tarea) => tarea.estado === estado),
    ]),
  );
};

// 2.3 · Suma las horas de cada asignatura, de más a menos horas
const horasPorAsignatura = (lista) => {
  // TU CÓDIGO AQUÍ
  if (lista.length === 0) return [];

  const totales = lista.reduce((acc, { asignatura, horas }) => {
    acc[asignatura] = (acc[asignatura] || 0) + horas;
    return acc;
  }, {});

  return Object.entries(totales)
    .map(([asignatura, horas]) => ({ asignatura, horas }))
    .sort(
      (a, b) => b.horas - a.horas || a.asignatura.localeCompare(b.asignatura),
    );
};

// ============================================================
// APARTADO 3 · Pintar la página
// ============================================================

// 3.1 · Devuelve (sin insertarla) la tarjeta <li> de una tarea
const crearTarjeta = (tarea) => {
  // TU CÓDIGO AQUÍ
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  const span = document.createElement("strong");
  const botonRetroceder = document.createElement("button");
  const botonAvanzar = document.createElement("button");

  botonAvanzar.type = "button";
  botonAvanzar.setAttribute("data-accion", "avanzar");
  botonAvanzar.textContent = "→";

  botonRetroceder.type = "button";
  botonRetroceder.setAttribute("data-accion", "retroceder");
  botonRetroceder.textContent = "←";

  span.className = "meta";
  span.textContent = `${tarea.asignatura} · ${tarea.horas} h`;

  strong.className = "titulo";
  strong.textContent = tarea.titulo;

  li.append(strong, span, botonRetroceder, botonAvanzar);

  li.setAttribute("id", tarea.id);
  li.className = "tarjeta";
  li.classList.add(`prioridad-${tarea.prioridad}`);

  return li;
};

// 3.2 · Reparte las tarjetas de lista en las tres columnas y actualiza los contadores
const pintarTablero = (lista) => {
  // TU CÓDIGO AQUÍ
  columnas.encurso.innerHTML = "";
  columnas.hecha.innerHTML = "";
  columnas.porhacer.innerHTML = "";

  const listaAgrupada = agruparPorEstado(lista);

  listaAgrupada.encurso.forEach((tarea) => {
    columnas.encurso.appendChild(crearTarjeta(tarea));
  });

  listaAgrupada.hecha.forEach((tarea) => {
    columnas.hecha.appendChild(crearTarjeta(tarea));
  });

  listaAgrupada.porhacer.forEach((tarea) => {
    columnas.porhacer.appendChild(crearTarjeta(tarea));
  });

  contadores.encurso.textContent = listaAgrupada.encurso.length;
  contadores.hecha.textContent = listaAgrupada.hecha.length;
  contadores.porhacer.textContent = listaAgrupada.porhacer.length;
};

// 3.3 · Pinta el resumen: horas por asignatura y progreso
const pintarResumen = (lista) => {
  // TU CÓDIGO AQUÍ
  horasPorAsignatura(lista).forEach((tarea) => {
    const li = document.createElement("li");
    li.textContent = `${tarea.asignatura} — ${tarea.horas} h`;
    listaHoras.appendChild(li);
  });

  const listaAgrupada = agruparPorEstado(lista);
  const porcentaje = (listaAgrupada.hecha.length / tareas.length) * 100;

  progreso.textContent = `Hechas: ${listaAgrupada.hecha.length} de ${tareas.length} (${Math.round(Number.isNaN(porcentaje) ? 0 : porcentaje)} %)`;
};

// ============================================================
// APARTADO 4 · Interacción
// ============================================================

// 4.1 · Mueve una tarea `paso` columnas (+1 avanza, -1 retrocede)
const moverTarea = (id, paso) => {
  // TU CÓDIGO AQUÍ
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (!tarea) return;

  const nuevaPosicion = ESTADOS.indexOf(tarea.estado) + paso;
  if (nuevaPosicion < 0 || nuevaPosicion >= ESTADOS.length) return;

  tarea.estado = ESTADOS[nuevaPosicion];
};

// 4.2 · Añade una tarea nueva al array y la devuelve
const anadirTarea = (datos) => {
  // TU CÓDIGO AQUÍ
  const nuevaTarea = {
    ...datos,
    id: Math.max(0, ...tareas.map((tarea) => tarea.id)) + 1,
    estado: "porhacer",
  };

  tareas = [...tareas, nuevaTarea];
  return nuevaTarea;
};

// 4.3 · Elimina del array las tareas hechas y devuelve cuántas eran
const archivarHechas = () => {
  // TU CÓDIGO AQUÍ
  const tareasHechas = tareas.filter((tarea) => tarea.estado === "hecha");

  tareas = tareas.filter((tarea) => tarea.estado !== "hecha");

  return tareasHechas.length;
};

// 4.4 · Eventos del tablero, del buscador y del botón «Archivar hechas», y primer pintado
// TU CÓDIGO AQUÍ
tablero.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button[data-accion]");

  if (!boton) return; // no se pulsó un botón de acción

  const id = Number(boton.parentElement.id);

  const paso = boton.dataset.accion === "avanzar" ? 1 : -1;
  moverTarea(id, paso);

  repintar();
});

buscador.addEventListener("input", repintar);

botonArchivar.addEventListener("click", () => {
  archivarHechas();
  repintar();
});

repintar();

// 4.5 · Envío del formulario
// TU CÓDIGO AQUÍ
formularioTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  comprobarHoras();

  const campos = [...formularioTarea.querySelectorAll("input, select")];
  const resultados = campos.map((campo) => validarCampo(campo));

  if (resultados.includes(false)) {
    campos[resultados.indexOf(false)].focus();
    return;
  }
  const titulo = formularioTarea.elements.titulo.value.trim();

  anadirTarea({
    titulo,
    asignatura: formularioTarea.elements.asignatura.value,
    horas: Number(campoHoras.value),
    prioridad: formularioTarea.elements.prioridad.value,
  });

  limpiarFormulario();
  repintar();

  mensajeFormulario.textContent = `Tarea añadida: ${titulo}`;
});
