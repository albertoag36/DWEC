//ejemplo uso switch
function comprobarDia(dia) {
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Día inválido. Por favor ingrese un número entre 1 y 7.");
            break;
    }
}

// Ejemplo de uso
comprobarDia(3);  // Imprime: Miércoles
comprobarDia(8);  // Imprime: Día inválido. Por favor ingrese un número entre 1 y 7.
