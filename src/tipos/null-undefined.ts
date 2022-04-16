(() => {

  // Cono Inferidos los null y undefined son identificados como any
  let var1 = null;
  let var2 = undefined;

  // declaración explícita del tipo
  let var3: null = null;
  let var4: undefined = undefined;

  //declaración de null y undefined como Literal Types
  let numero: number | null = null;
  let nombre: string | undefined = undefined;
  numero = 12;
  nombre = 'jorge';

  // Control de Flujo para null y undefined
  function hi(nombre: string | null) {
    if (nombre) {
      console.log(`hola ${nombre}`)
    } else {
      console.log(`hola amigo NN`)
    }
  }

  //Control de Flujo con Operador Ternario para null y undefined
  function hi2(nombre: string | null) {
    let minuscula;
    minuscula = nombre?.toLowerCase || console.log(`hola amigo NN`)

  }

  hi('JUAN')
  hi(null)

  hi2('JUAN')
  hi2(null)


})();
