//  Iteración de arreglos
// Iteración de arreglos
// for, forEach, map, for ... of

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

// for(let i = 0; i < tecnologias.length; i++) {
//     console.log(tecnologias[i] )
// }

// forEach
//EJECUTA UNA FUNCIÓN POR CADA ELEMENTO DEL ARREGLO
// tecnologias.forEach(function(tech) {
//     console.log(tech)
// })

// map
// transforma un arreglo en otro arreglo
// devuelve un nuevo arreglo con los resultados de la función aplicada a cada elemento
const arrayMap = tecnologias.map(function(tech) {
    return tech
})

// for ... of
// itera sobre los elementos del arreglo directamente
// no se necesita un índice
for(let tech of tecnologias) {
    console.log(tech)
}

// console.log(arrayMap)