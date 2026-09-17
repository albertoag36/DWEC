const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"];

ciudades.push("Roma");

console.log(ciudades);

const ciudadesMayusculas = ciudades.map(function (ciudad) {
  return ciudad.toLocaleUpperCase();
});

console.log(ciudadesMayusculas);

const ciudadesFiltradas = ciudades.filter(function (ciudad) {
  return ciudad.length > 6
});

console.log(ciudadesFiltradas);
