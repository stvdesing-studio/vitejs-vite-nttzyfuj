/**
 * STVTranslator: Procesa la entrada y devuelve la lógica de viabilidad estructural.
 * @param {string} input - Instrucción de texto ingresada por el usuario.
 * @returns {object} - Matriz JSON con datos geométricos y de materiales.
 */
 const STVTranslator = async (input) => {
  // Simulamos el tiempo de cálculo del motor
  await new Promise(resolve => setTimeout(resolve, 800));

  let longitudCalculada = 6;
  if (input.includes("10")) longitudCalculada = 10;
  if (input.includes("12")) longitudCalculada = 12;

  return {
      parametros: {
          tipo: 'estructura',
          perfil: 'HSS', // Aseguramos perfil HSS
          longitud: longitudCalculada,
          ancho: 0.25,
          alto: 0.25,
          alturaColumna: 3, // Altura fijada a 3m para estabilidad y proporción
          colorPrincipal: '#1a1a1a', 
          colorColumnas: '#333333'
      }
  };
};

export default STVTranslator;