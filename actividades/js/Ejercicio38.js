/*38. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma
descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/
"use strict" 
{
    function ordenarArray(array) {
        let arrayAscedente = [...array.sort((a,b) => a-b)];
        let arrayDescendente = [...array.sort((a,b) =>b-a)];

        return {
            arrayDescendente: arrayDescendente,
            arrayAscedente: arrayAscedente
        }
    }
        let array = [1, 2, 3, 4, 5, 6];
        console.log(ordenarArray(array));
}