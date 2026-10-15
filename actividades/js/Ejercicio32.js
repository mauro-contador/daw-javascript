/*32. Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
"use strict"
{
function contarVocalesYConsonantes(palabra){
    let contadorVocales = 0;
    let contadorConsonantes = 0;
    palabra = palabra.replace(" ","");
    let palabraArray = palabra.trim("");
    for(let i=0; i<palabraArray.length;i++){
        if(palabraArray[i] === 'a' || palabraArray[i] === 'e'|| palabraArray[i] === 'i' ||palabraArray[i] === 'o' || palabraArray[i] === 'u'){
            contadorVocales++;
        }else{
            contadorConsonantes++;
        }
    }
    return "Hay "+ contadorVocales + " vocales y "+contadorConsonantes + " consonantes";
}
console.log(contarVocalesYConsonantes("hola mundo soy mauro"));




}