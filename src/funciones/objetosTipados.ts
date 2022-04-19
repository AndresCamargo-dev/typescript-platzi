(() => {

  type Tallas = 'S' | 'M' | 'L';
  // Definir Tipo de objeto con caracteristicas
  type Producto = {
    nombre: string,
    precio: number,
    cantidad: number,
    talla?: Tallas
  }

  //Definir lista de componentes del tipo creado
  const productos: Producto[] = [];

  //Definir dunción que recibe el tipo creado
  const agregarProducto = (data: Producto) => {
    productos.push(data)
  }

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


  console.log(productos)

})()
