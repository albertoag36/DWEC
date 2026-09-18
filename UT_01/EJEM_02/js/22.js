// Optional chaining (?)
// Optional chaining allows you to safely access 
// deeply nested properties without having to check 
// each level for null or undefined.
const alumno = {
    nombre: 'Juan',
    clase: 'Programación 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}
// Acceso seguro a propiedades anidadas
// Si examenes es undefined, no se lanzará un error,
// Y NO PARARÁ la ejecución del programa,
// simplemente devolverá undefined para examen1.
// IMPRIMIRÁ UN ERROR SI NO SE PONE EL ? y parará)

// Error si no existe examenes
console.log(alumno.examenes.examen1)
//No da error
console.log(alumno.examenes?.examen1)
console.log('Después de ALUMNO')

// Nullish coalescing operator (??)
// El operador de coalescencia nula (??)
// devuelve el operando de la derecha 
// cuando el operando de la izquierda es null o undefined.   
// Es útil para proporcionar valores predeterminados
// cuando una variable puede ser null o undefined.  
// let numero =10 //imprime 10
let numero //imprime 1
const pagina = numero ?? 1
console.log(pagina)