"use strict"
{
    /**Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
    aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
    son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.**/
    let num1;
    let num2;
    let operacion;
    do {
        num1 = Number(prompt("Introduzca el primer numero: "));
    } while (isNaN(num1));
    do {
        operacion = (prompt("Operacion a realizar (+,-,*,/)"));
    } while (operacion !== "+" && operacion !== "/" && operacion !== "-" && operacion !== "*");
    do {
        num2 = Number(prompt("Introduzca el segundo numero: "));
    } while (isNaN(num2));

    let resultado;
    if (operacion === "+") {
        resultado = suma(num1, num2);
    }
    else if (operacion === "-") {
        resultado = resta(num1, num2);
    }
    else if (operacion === "*") {
        resultado = producto(num1, num2);
    }
    else if (operacion === "/") {
        resultado = division(num1, num2);
    }
    else if (operacion === "/") {
        if (num2 == 0) {
            console.log("No se puede dividir entre 0")
        }
    }

    console.log("El resultado es " + resultado);
    function suma(param1, param2) {
        return param1 + param2;
    }
    function resta(param1, param2) {
        return param1 - param2;
    }
    function producto(param1, param2) {
        return param1 * param2;
    }
    function division(param1, param2) {
        return param1 / param2;
    }






}