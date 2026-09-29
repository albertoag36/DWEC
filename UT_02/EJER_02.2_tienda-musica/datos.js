// datos.js
// Datos de partida de la tienda. NO hace falta modificar este archivo.

// Catálogo inicial como MATRIZ (array de arrays), igual que en la UT 2.1:
// cada fila es [nombre, categoria, precio, stock]
export const catalogoMatriz = [
  ['Tocadiscos', 'equipos', 200, 3],
  ['Altavoz', 'equipos', 400, 4],
  ['Preamplificador', 'equipos', 80, 0],
  ['Cables de altavoz', 'accesorios', 20, 15],
  ['Aguja de repuesto', 'accesorios', 35, 6],
  ['Vinilo Jazz', 'discos', 30, 5],
  ['Vinilo Rock', 'discos', 25, 4],
  ['Vinilo Ópera', 'discos', 32, 3],
];

// Productos que acaban de llegar al almacén (mismo formato)
export const novedadesMatriz = [
  ['Auriculares', 'accesorios', 60, 8],
  ['Vinilo Électro', 'discos', 28, 2],
];

// Pedidos recibidos como texto:
// "cliente|producto:cantidad;producto:cantidad;..."
export const pedidosTexto = [
  'Lucía|Tocadiscos:1;Vinilo Jazz:2',
  'Andrés|Altavoz:2;Cables de altavoz:2',
  'Marta|Preamplificador:1',
  'Óscar|Aguja de repuesto:1;Vinilo Ópera:1;Vinilo Jazz:1',
  'Irene|Vinilo Électro:3',
  'Pablo|Auriculares:1;Vinilo Jazz:2',
];

// Pedido urgente que debe atenderse antes que todos los demás
export const pedidoUrgenteTexto = 'Dirección|Tocadiscos:2';
