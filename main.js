import Categoria from "./categoria.js";
import Producto from "./producto.js";

let producto1 = new Producto(`1`,`Producto 1`,1000, 100)
let producto2 = new Producto(`2`,`Producto 2`,2000, 100)
let producto3 = new Producto(`3`,`Producto 3`,3000, 100)

console.log(producto1, producto2, producto3);
console.log(producto1.aumentarStock(10))
console.log(producto2.aumentarStock(20))
console.log(producto3.aumentarStock(30))

console.log(producto1.descontarStock(10))
console.log(producto2.descontarStock(20))
console.log(producto3.descontarStock(30))


let categoria1 = new Categoria(`1`,`categoria 1`, producto1)
let categoria2 = new Categoria(`2`,`categoria 2`, producto2)
let categoria3 = new Categoria(`3`,`categoria 3`, producto3)

console.log(categoria1, categoria2, categoria3);

console.log(categoria1.totalStockPorCategoria())
