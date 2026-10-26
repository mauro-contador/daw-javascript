/* Programa una función que cuente el número de caracteres de una cadena de texto, pe.
miFunción("Hola Mundo") devolverá 10.*/  
"use strict"
{
//  function contarCaracteres(palabra){
//     let array = palabra.split("");
//     let contador =  0;
//     for (let i=0;i<array.length;i++){
//         contador++;
//     }
//     console.log("Tu frase contiene "+ contador + " caracteres");
//  }  
{
    function contarCaracteres(palabra) {
        return palabra.length;
    }

    console.log(contarCaracteres("Hola Mundo"));
}




}