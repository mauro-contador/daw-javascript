/* 39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
Funcion (“x”,10,”x”,2,”10",10, true,true) devolverá [“x”,10,2,”10”,true]*/
"use strict"

function eliminarDuplicados(array){
    const sinDuplicados = new Set(array);
    return [...sinDuplicados];
}
let array1 =["x",10,"x",2,"10",10, true,true];
console.log(eliminarDuplicados(array1));