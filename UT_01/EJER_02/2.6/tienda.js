import { crearProducto, filtrarPorCategoria, listarProductosAgotados, calcularValorTotalInventario } from "./inventario.js"
import resumenInventario from "./inventario.js"

const inventario = []

inventario.push(crearProducto("Smartphone Galaxy A54", "Electrónica", 349.99, 15))
inventario.push(crearProducto("Auriculares Bluetooth", "Electrónica", 29.99, 0))
inventario.push(crearProducto("Camiseta básica algodón", "Ropa", 12.5, 40))
inventario.push(crearProducto("Pantalón vaquero", "Ropa", 34.9, 20))
inventario.push(crearProducto("Cien años de soledad", "Libros", 15.75, 8))
inventario.push(crearProducto("El Principito", "Libros", 9.99, 25))

console.log(filtrarPorCategoria(inventario, "Ropa"))
console.log(listarProductosAgotados(inventario))
console.log(calcularValorTotalInventario(inventario))
console.log(resumenInventario(inventario))