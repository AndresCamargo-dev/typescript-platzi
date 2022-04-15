(() => {
  // Utilizando inferencia de tipos
  let precio = 2000;
  precio = 500;
  console.log('precio', precio);

  // Sintáxis explicita del tipo
  let edad: number = 26;
  edad = edad + 5;
  // edad = edad + '1' -> genera error porque es concatenación

  // Declarar variable pero no asignar valor. Si no se le asigna un valor no puede operarse
  let stock: number;
  console.log('number', stock);
  if (stock > 10) {
    console.log('mayor')
  }

  // usar matodos de convertir tipos en declaración
  let descuento = parseInt('234543')
  console.log('descuento', descuento)

  // Not A Number opera como número
  let descuentostring = parseInt('agtbtb')
  console.log('descuentostring', descuentostring)
  if (descuentostring > 10) {
    console.log('yes')
  } else {
    console.log('no number nan')
  }

  //Hexadecimales
  let hex = 0xfff;
  console.log('hex', hex);

  //Binarios
  let binario = 0b1010;
  console.log('binario', binario)

})();
