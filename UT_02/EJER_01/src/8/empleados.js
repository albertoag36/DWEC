export const empleados = [
  { id: 1, nombre: "Ana Gómez", departamento: "Desarrollo", salario: 35000 },
  { id: 2, nombre: "Carlos Mendoza", departamento: "Ventas", salario: 28000 },
  {
    id: 3,
    nombre: "Lucía Fernández",
    departamento: "Recursos Humanos",
    salario: 30000,
  },
  {
    id: 4,
    nombre: "Javier Martínez",
    departamento: "Desarrollo",
    salario: 42000,
  },
  { id: 5, nombre: "María Torres", departamento: "Marketing", salario: 31000 },
  { id: 6, nombre: "David López", departamento: "Soporte", salario: 24000 },
  { id: 7, nombre: "Elena Ramos", departamento: "Diseño", salario: 29000 },
  { id: 8, nombre: "Gonzalo Ruiz", departamento: "Finanzas", salario: 38000 },
  { id: 9, nombre: "Patricia Silva", departamento: "Ventas", salario: 27000 },
  {
    id: 10,
    nombre: "Alejandro Vega",
    departamento: "Desarrollo",
    salario: 36000,
  },
];


export const agregarEmpleado = (empleado) => empleados.push(empleado)

export const eliminarEmpleado = (id) => empleados.splice(empleados.findIndex(empleado => empleado.id === id), 1)

export const buscarPorDepartamento = (departamento) => empleados.filter(empleado => empleado.departamento === departamento)

export const calcularSalarioPromedio = () => empleados.reduce((acc, empleado) => acc + empleado.salario, 0) / empleados.length

export const obtenerEmpleadosOrdenadosPorSalario = () => empleados.sort((empleado1, empleado2) => empleado2.salario - empleado1.salario)