/*Programa una función que dada una String te devuelva un Array 
de textos separados por cierto carácter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
"use strict"
{
    /**
     * @param {string} frase
     */
    function separarPalabrasPorCaracter(frase,caracter){
        let arrayFrase = frase.split(caracter);
        return arrayFrase;
    }
    let frase = "Hola/mundo/estoy/bien";
    console.log(separarPalabrasPorCaracter(frase,"/"));



}