import { Producto } from "./product.model";

export const productos: Producto[] = [];

export const agregarProducto = (data: Producto) => {
  productos.push(data)
}

export const calcularCantidad = (data: Producto[]) => {
  let total = 0;
  productos.forEach((i) => {
    total += i.cantidad
  })
  return total
}
