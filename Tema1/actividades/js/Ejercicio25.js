/*25. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
un sentido que en otro), pe. miFuncion(2002) devolverá true. */
"use strict"
{
    function esCapicua(num) {

        let numInvertido = num
            .split("")
            .reverse()
            .join("");

        return numInvertido === num;
    }

    console.log(esCapicua("1991"));               // true
    console.log(esCapicua("1990"));          // false
}

