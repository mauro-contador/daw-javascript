"use strict"
{
    //4. Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
    //hasta introducir un número negativo y entonces mostrar el resultado.
    let num;
    let i = 0;
    let suma = 0;
    let producto = 1;
    let media;
    num = 0;
    while (num >= 0) {
        num = Number(prompt("Introduzca el " + (i + 1) + " numero: "));
        if (num >= 0) {
            suma = suma + num;
            producto = producto * num;
            i++;
        }
    }
    media = suma / i;
    console.log("La suma de todos los numeros es : " + suma);
    console.log("El producto de todos los numeros es :" + producto);
    console.log("La media de todos los numeros es de : " + media);

}