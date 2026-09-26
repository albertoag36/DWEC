// Imagina que tienes una tienda en línea y un cliente agrega varios artículos a su carrito de compras, para almacenar esos artículos en variables individuales
//  podrías hacer algo como lo que ves arriba, pero si el cliente agrega 100 artículos tendrías que crear 100 variables, lo cual no es nada práctico.

// Aquí es donde entran los arreglos o arrays, que son una forma de agrupar varios elementos en una sola variable.

// Un arreglo puede contener cualquier tipo de dato, ya sean números, strings, booleanos, objetos, etc.             

// Al igual que los objetos los arreglos forman una parte muy importante en cualquier lenguaje de programación
// Un ejemplo de un arreglo es un carrito de compras, sirve para agrupar elementos del mismo tipo.


// const shoppingCartItem1 = "Tocadiscos";       // primer artículo
// const shoppingCartItem2 = "Altavoz";         // segundo artículo
// const shoppingCartItem3 = "Preamplificador";        // tercer artículo
// const shoppingCartItem4 = "Cables de altavoz";  // cuarto artículo  

// const shoppingCartItems = [shoppingCartItem1, shoppingCartItem2, shoppingCartItem3, shoppingCartItem4];
// const shoppingCartItems = ["Tocadiscos", "Altavoz", "Preamplificador", "Cables de altavoz"];


// Veamos primero como crear un Arreglo...
const numeros = [10,20,30,40,50];
console.log(numeros);

// En JavaScript cuando veas esos corchetes son buen indicativo de que esto es un arreglo, a diferencia de los objetos is recuerdas su sintaxis es la de unas llaves { }

// El arreglo anterior fue de números, también puedes crear uno de Strings por ejemplo y se puede crear utilizando la palabra new
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
console.log(meses);

// Ahora no es obligatorio que el arreglo tenga numeros o strings unicamente, también puede tener un poco de todo:
const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4]];
console.log(deTodo);

// incluso un array puede tener un array dentro

// Personalmente encuentro más fácil de utilizar la sintaxis de llaves asi que esa sera la que estaremos utilizando, pero recuerda, un arreglo es una forma de agrupar grandes cantidades de información en una sola variable.