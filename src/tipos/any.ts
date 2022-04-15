(() => {
  let valor: any;
  valor = {};
  valor = 'ROJO';



  // CAS utilizando as "tratar como"
  const valor1 = (valor as string).toLowerCase;
  console.log(valor1);

  valor = 12
  // CAS utilizando <> genéricos
  const valor2 = (<number>valor).toFixed();
  console.log(valor2)

})();
