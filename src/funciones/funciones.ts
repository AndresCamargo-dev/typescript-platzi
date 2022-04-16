(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';

  function crearProducto(
    descripcion: string,
    precio: number,
    talla: Size,
    createAt: Date,
  ) {
    return {
      descripcion,
      precio,
      talla,
      createAt
    }
  }

  // Arrow Function
  const producto1 = crearProducto('camisa', 100, 'M', new Date());
  console.log(producto1)

  const crearProducto2 = (
    descripcion: string,
    precio: number,
    createAt: Date,
    talla?: Size,
  ) => {
    return {
      descripcion,
      precio,
      talla,
      createAt
    }
  }

  const producto2 = crearProducto2('camisa', 100, new Date());
  console.log(producto2)
})()
