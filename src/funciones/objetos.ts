(() => {
  //Definir función que recibe un objeto
  const funcion1 = (data: { email: string, password: number }) => {
    console.log(data.email, data.password)
  }

  //Llamar Función pasandole un objeto
  funcion1({ email: 'ol@ol.com', password: 2543 })

  // Definir Función que agregue objetos a Arrays
  const productos: any[] = [];
  type Tallas = 'S' | 'M' | 'L';

  const agregarProducto = (data: {
    nombre: string,
    precio: number,
    cantidad: number,
    talla?: Tallas
  }) => {
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
