//Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

"use strict";
{
  let repetirTextoManual = (cadena, veces) => {
    let resultado = "";

    for (let i = 0; i < veces; i++) {
      resultado += cadena;

      // Si no es la última repetición, añadimos un espacio entre medias
      if (i < veces - 1) {
        resultado += " ";
      }
    }

    return resultado;
  };

  console.log(repetirTextoManual("Hola Mundo", 3)); 
  // "Hola Mundo Hola Mundo Hola Mundo"
}