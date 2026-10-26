/* 26. Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
“a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.*/
"use strict"
{
let cadena = "miedo";
let re = /^[md].*[ao]$/i;
console.log("Resultado RegEx:", re.test(cadena));

let cadenaMin = cadena.toLocaleLowerCase();
let empiezaBien = cadenaMin.startsWith("m") || cadenaMin.startsWith("d");
let terminaBien = cadenaMin.endsWith("a") || cadenaMin.endsWith("o");
    
console.log("Resultado Funciones:", empiezaBien && terminaBien); 





}