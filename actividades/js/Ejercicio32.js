/*32. Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
"use strict"
{
function contarVocalesYConsonantes(palabra){
    let contadorVocales = 0;
    let contadorConsonantes = 0;
    palabra = palabra.replaceAll(" ","");
    palabraMinuscula = palabra.toLowerCase();
    for(let i=0; i<palabraMinuscula.length;i++){
        if(palabraMinuscula[i] === 'a' || palabraMinuscula[i] === 'e'|| palabraMinuscula[i] === 'i' ||palabraMinuscula[i] === 'o' || palabraMinuscula[i] === 'u'){
            contadorVocales++;
        }else{
            contadorConsonantes++;
        }
    }
    return "Hay "+ contadorVocales + " vocales y "+contadorConsonantes + " consonantes";
}
console.log(contarVocalesYConsonantes("hola mundo soy mauro"));

}