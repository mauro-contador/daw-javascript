"use strict"
{
    let inicio = Number(prompt("Introduzca el inicio: "));
    let fin = Number(prompt("Introduzca el final: "));
    console.log("Los numeros que estan dentro de " + inicio + " y " + fin + " son :");
    for (let i = inicio + 1; i < fin; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}







