"use strict"
/*Programa una función que te devuelva el texto recortado según el número de caracteres
indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola". */

{
    /**
     * @param {string} palabra
     * @param {number} digitos
     */
    function devolverPalabra(palabra, digitos) {
        let palabraRecortada = "";
        let array = palabra.split("");
        for (let i = 0; i < digitos; i++) {
            palabraRecortada += array[i];
        }
        return palabraRecortada;
    }
    console.log(devolverPalabra("como en casa",4));
}