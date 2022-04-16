(() => {
  let userID: number | string;
  userID = 345245;
  userID = '2fgsgv'

  //Union Types definido dentro del parámetro de función
  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      // El TypeOf de TS acota los métodos dependiendo del tipo
      console.log(`cuando string ${myText.length}`)
    } else {
      console.log(`cuando number ${myText.toExponential(2)}`)
    }
  }

  greeting('hola')
  greeting(2)

})();
