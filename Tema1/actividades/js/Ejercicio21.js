/* Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
Mundo") devolverá "odnuM aloH" */
"use strict"
{
    function invertirPalabras(frase){
        let fraseInvertida = frase.split("").reverse().join("");
        return fraseInvertida;
    }
    console.log(invertirPalabras("Hola Mundo"));


}