function compare(valor1, valor2) {
if (valor1 < valor2) {
	return -1; // El primer valor es menor que el segundo.
} else if(valor1 > valor2) {
	return 1; // El primer valor es mayor que el segundo.
} else {
	return 0; // Ambos valores son de igual tamaño.
}
} 
const values = [7, 6, 4, 8, 7, 2, 4];


// values.sort();
// values.sort(compare);
//LO DE ABAJO NO FUNCIONA 
values.sort(compare());
console.log(values); // 2, 4, 4, 6, 7, 7 

// const months = ["March", "Jan", "Feb", "Dec", "Nov"];
// months.sort();
// console.log(months); // Dec, Feb, Jan, March, Nov   