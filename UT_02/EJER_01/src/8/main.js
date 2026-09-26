import {
  empleados,
  agregarEmpleado,
  eliminarEmpleado,
  buscarPorDepartamento,
  calcularSalarioPromedio,
  obtenerEmpleadosOrdenadosPorSalario,
} from "./empleados.js";

agregarEmpleado({
  id: 11,
  nombre: "Valeria Castro",
  departamento: "Calidad",
  salario: 33500,
});

console.log(empleados);
console.log();

eliminarEmpleado(7)
console.log(empleados);
console.log();

console.log(buscarPorDepartamento("Diseño"))
console.log();

console.log(calcularSalarioPromedio())
console.log();

console.log(obtenerEmpleadosOrdenadosPorSalario())
console.log();