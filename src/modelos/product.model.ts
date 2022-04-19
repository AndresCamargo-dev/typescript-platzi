export type Tallas = 'S' | 'M' | 'L';

export type Producto = {
  nombre: string,
  precio: number,
  cantidad: number,
  talla?: Tallas
}
