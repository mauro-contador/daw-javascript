/*22. Programa una función para contar el número de veces que se repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
"use strict"
{
function contarApariciones(frase,palabra){
    let frase2 = frase.split(" ");
    let contador = 0;
    for(let palabraEncontrar of frase2 ){
        if(palabraEncontrar === palabra){
            contador++;
        }
    }
    return contador;
}
console.log(contarApariciones("hola mundo adios mundo", "mundo"));



}