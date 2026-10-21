"use strict"
{
    function convertirBase(numero, base) {
        if (numero === undefined) return "No has introducido ningún núemero";
        if (base === undefined) return "No has introducido ninguna base";

        if (base === 2) {
            let decimal = parseInt(numero, 2);
            return decimal + " base 10";
        } else if (base === 10) {
            let binario = parseInt(numero).toString(2);
            return binario + " base 2";
        } else {
            return "La base introducida no es válida. O 2 o 10";
        }
    }

    console.log(convertirBase(100, 2));
    console.log(convertirBase(4, 10)); 
}