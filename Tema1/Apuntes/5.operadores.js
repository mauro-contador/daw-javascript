"use strict"
{

    let num1 = 3;
    let num2 = 5;
    num2 = +num1;
    console.log(num2);

    num2 -= num1;
    console.log(num2);

    num2 *= num1;
    console.log(num2);

    num2 *= num1;
    console.log(num2);

    //primero incremento y después asignación
    num2 = ++num1;
    console.log(num2);

    //primero lo asigna y después lo incrementa
    num2 = num1++;
    console.log(num2);

    num2 /= num1;
    console.log(num2);

    num2 %= num1;
    console.log(num2);

    let a = 10;
    let b = "10";
    if (a === b) { // tiene en cuenta el typeOf y el valor, se usa para evitar la coercion
        console.log("son iguales");
    } else {
        console.log("a no es menor que b");
    }

    let c = 10
    let d = "10"
    if (c !== d) { // tiene en cuenta el typeOf y el valor, se usa para evitar la coercion
        console.log("son distintos");
    } else {
        console.log("no son distintos");
    }

    let edadAna, edadLuis;
    //usamos parseInt para convertir a entero
    edadAna = parseInt(prompt("introduce la edad", ""));
    edadLuis = parseInt(prompt("Introduce la edad Luis", ""));

    if (typeof edadAna == Number && typeof edadLuis === number) {
        if (edadAna > edadLuis) {
            console.log("Ana es mayor que Luis.");
            console.log("Ana tiene" + edadAna + " años y Luis " + edadLuis);

        } else {
            console.log("Ana es menor o de igual edad que Luis");
            console.log("Ana tiene " + edadAna + " años y Luis " + edadLuis);
        }
    }
}