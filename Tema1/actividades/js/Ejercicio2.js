"use strict"
{
    /**  Modifica el programa anterior: si los números no son un número o son menores o iguales a
     ceros, que los vuelva a pedir.**/
    let num1;
    let num2;

    do {
        num1 = prompt("Introduzca el primer numero: ");
    } while (isNaN(num1) || num1 <= 0);
    do {
        num2 = prompt("Introduzca el segundo numero: ");
    } while (isNaN(num2) || num2 <= 0);

    if (num1 > num2) {
        console.log(num1 + "es mayor que " + num2);
    } else if (num1 == num2) {
        console.log("Los numeros son iguales");
    } else {
        console.log(num2 + "es mayor que " + num1);
    }




}