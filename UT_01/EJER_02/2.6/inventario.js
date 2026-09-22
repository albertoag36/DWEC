export const crearProducto = (nombre, categoria, precio, stock) => {
    return {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        stock: stock
    }
}

export const filtrarPorCategoria = (inventario, categoria) => inventario.filter(producto => producto.categoria === categoria)

export const listarProductosAgotados = (inventario) => inventario.filter(producto => producto.stock == 0)

export const calcularValorTotalInventario = (inventario) => {
    let valorTotal = 0
    inventario.forEach(producto => {
        valorTotal += (producto.precio * producto.stock)
    });
    return valorTotal
}

export default function resumenInventario(inventario) {
    let categoriaComparar = []
    let numeroCategoriasDistintas = 0
    inventario.forEach(producto => {
        if (!categoriaComparar.includes(producto.categoria)){
            categoriaComparar.push(producto.categoria)
            numeroCategoriasDistintas++
        }
    })

    const resumen = `-- Resumen del inventario --
        Número total de productos: ${inventario.length}
        Número de categorías distintas: ${numeroCategoriasDistintas}
        Valor total: ${calcularValorTotalInventario(inventario)}`

    return resumen
}