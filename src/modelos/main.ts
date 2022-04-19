import { agregarProducto, calcularCantidad, productos } from "./product.service";

agregarProducto(
  {
    nombre: 'camisa',
    precio: 4000,
    cantidad: 2
  });
agregarProducto({
  nombre: 'pantalón',
  precio: 3000,
  cantidad: 4,
  talla: 'L'
});


console.log(productos);
const suma = calcularCantidad(productos);
console.log(suma)
