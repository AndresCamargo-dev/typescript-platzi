(() => {
  // Forma inferida de Array de un solo tipo
  let listas = [132, 345, 134, 6]
  console.log(listas)
  listas.push('dfsbs') //no lo admite porque está definido como array de numeros
  listas.push({})

  // Forma inferida de Array de varios tipos
  let lista2 = ['a', 2, false];
  lista2.push('g');
  console.log(lista2)

  // Forma explícita de Array con varios tipos
  let lista3: (string | number | boolean)[];
  lista3 = ['hola']
  lista3.push(3);
  console.log(lista3)

  // Verifica que los métodos se puedan realizar para el tipo de dato
  let numeros = [132, 345, 134, 6]
  console.log(numeros.map(i => i * 2))

})();
