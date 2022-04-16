(() => {
  // Definición de Alias o tipo creado
  type PersonaPrograma = {} | number | string;

  // Asignación del alias como tipo
  let persona: PersonaPrograma;

  function greeting(persona: PersonaPrograma) {
    if (typeof persona === 'string') {
      console.log(`cuando string ${persona.length}`)
    }
  }

  //Literal Types
  let tamaños: 'S' | 'M' | 'L' = 'M';

  // Literal Types convertidos en Alias
  type Tallas = 'S' | 'M' | 'L';
  let camisasMujer: Tallas;
  camisasMujer = 'L'

})();
