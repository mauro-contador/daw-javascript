/*Crea una función que reciba un array de números y devuelva un objeto con tres propiedades:
- mayores: números mayores que 10.
- dobles: todos los números multiplicados por 2.
- suma: suma de todos los números. */

"use strict"
{
function analizarNumeros(array){
    let mayores = array.filter((elemento) => elemento > 10 );
    let dobles = array.map((elemento) =>  elemento * 2);
    let suma = array.reduce((acc, elemento) => {
         //acc = acc + elemento;
         return acc + elemento;
    },0);
    return {
        mayores : mayores,
        dobles: dobles,
        suma : suma
    
    };

}
    let array = [1,2,30,40,50,6];
    console.log(analizarNumeros(array));




}