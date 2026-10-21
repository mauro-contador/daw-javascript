/* Crea una función llamada analizarPalabras(palabras) que reciba un array de cadenas de texto y devuelva un objeto con estas tres propiedades:
- masLarga: la palabra con más caracteres del array. Si hay empate, devuelve la primera.
- contienenA: un array con todas las palabras que contengan al menos una letra a, sin distinguir mayúsculas de minúsculas.
- cortas: cuántas palabras tienen menos de 5 caracteres. */

"use strict"
{
function analizarPalabras(palabras){
    
    let masLarga = palabras.reduce((acc,elemento) => {
        if(acc.length< elemento.length){
             acc = elemento;
        }
        return acc;
    },"");

    let regExp = /[Aa]+/;
    let contienenA = palabras.filter((elemento) => regExp.test(elemento));
    let cortas = palabras.filter((elemento) => elemento.length < 5);
    let cantidadCortas =cortas.length;

    return{
        masLarga : masLarga,
       contienenA: contienenA,
       cortas : cantidadCortas

    };
}    
let palabras = ["hola","adios","supercalifragilisticoespialidoso","ver","comer"];
console.log(analizarPalabras(palabras));
}