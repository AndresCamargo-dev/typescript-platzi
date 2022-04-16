(() => {

  //Especificación del tipo del retorno
  const calcularTotal = (prices: number[]): string => {
    let total: number = 0;
    prices.forEach((i) => {
      total += i;
    })
    return total.toString();
  }

  const printCalculo = (prices: number[]): void => {
    console.log(calcularTotal(prices))
  }

  printCalculo([2, 5, 4])

  // Función sin retorno


})()
