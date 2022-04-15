(() => {
  let esPermitido = true;
  esPermitido = false;
  // esPermitido = undefined    -> No permite inicializar variable con valor diferente a boleano;

  let abierto: boolean = false;
  console.log('abierto', abierto);

  let aleatorio = Math.random();
  console.log('random', aleatorio);

  // verificación TS con Operador Terciario
  abierto = aleatorio > 0.2 ? true : false;
  console.log('abierto aleatorio', aleatorio, abierto)


})();
