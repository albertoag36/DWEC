const formulario = document.getElementById("formulario-notas");
const aprobadroSuspenso = document.getElementById("vista-previa");
const tabla = document.getElementById("tabla");
const boton = document.createElement("button");
const tbody = tabla.tBodies[0];
const theadAlumno = tabla.tHead.rows[0].cells[0];
const theadNota = tabla.tHead.rows[0].cells[1];
const resumen = document.getElementById("resumen");
let alumnos = [];

const crearSecuencia = (inicio = 1) => {
  let actual = inicio;
  return () => actual++;
};

const siguiente = crearSecuencia();

const asignarTabla = () => {
  const filas = alumnos.map((alumno) => {
    const tr = document.createElement("tr");
    tr.className = alumno.nota >= 5 ? "aprobado" : "suspenso";

    const tdNombre = document.createElement("td");
    tdNombre.textContent = alumno.alumno;

    const tdNota = document.createElement("td");
    tdNota.textContent = alumno.nota;

    const tdAccion = document.createElement("td");
    const boton = document.createElement("button");
    boton.textContent = "Borrar";
    boton.dataset.id = alumno.id;
    tdAccion.append(boton);

    tr.append(tdNombre, tdNota, tdAccion);
    return tr;
  });

  tbody.replaceChildren(...filas);
};

const notaMedia = () => {
  const total = alumnos.reduce(
    (acumulador, alumno) => acumulador + alumno.nota,
    0,
  );
  const mejorAlumno = alumnos.reduce(
    (mejor, alumno) => (alumno.nota > mejor.nota ? alumno : mejor),
    alumnos[0],
  );
  const numeroAprobados = alumnos.filter((alumno) => alumno.nota >= 5);
  const apruebanTodos = alumnos.every((alumno) => alumno.nota >= 5);

  if (tbody.textContent === "") {
    resumen.textContent = "Sin alumnos";
  } else {
    resumen.textContent = `Media: ${(total / alumnos.length).toFixed(2)} · Mejor: ${mejorAlumno.alumno} (${mejorAlumno.nota}) · Aprobados: ${numeroAprobados.length}/${alumnos.length} · ¿Todos aprueban? ${apruebanTodos ? "Si" : "No"}`;
  }
};

formulario.addEventListener("input", (evento) => {
  if (evento.target === formulario.elements.nota) {
    const nota = evento.target.valueAsNumber;

    if (Number.isNaN(nota)) {
      aprobadroSuspenso.textContent = "";
    } else if (nota >= 5) {
      aprobadroSuspenso.textContent = "Aprobado";
    } else {
      aprobadroSuspenso.textContent = "Suspenso";
    }
  }
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  alumnos = [
    ...alumnos,
    {
      id: siguiente(),
      alumno: formulario.elements.alumno.value,
      nota: formulario.elements.nota.valueAsNumber,
    },
  ];
  formulario.reset();
  formulario.elements.alumno.focus();

  asignarTabla();
  notaMedia();
});

tbody.addEventListener("click", (evento) => {
  alumnos = alumnos.filter(
    (alumno) => alumno.id !== Number(evento.target.dataset.id),
  );
  asignarTabla();
  notaMedia();
});

theadAlumno.addEventListener("click", () => {
  alumnos = alumnos.sort((a, b) => a.alumno.localeCompare(b.alumno));

  asignarTabla();
});

theadAlumno.addEventListener("dblclick", () => {
  alumnos = alumnos.sort((a, b) => b.alumno.localeCompare(a.alumno));

  asignarTabla();
});

theadNota.addEventListener("click", () => {
  alumnos = alumnos.sort((a, b) => a.nota - b.nota);

  asignarTabla();
});

theadNota.addEventListener("dblclick", () => {
  alumnos = alumnos.sort((a, b) => b.nota - a.nota);

  asignarTabla();
});