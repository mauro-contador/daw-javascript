/*Programa una función llamada analizarHastaNegativo(numeros) que reciba un array de números y recorra sus elementos.
El programa deberá:
1. Dejar de procesar números cuando encuentre el primer número negativo.
2. Contar cuántos números ha procesado antes del negativo.
3. Calcular la suma de esos números.
4. Contar cuántos de ellos son pares.
5. Calcular su media.*/
"use strict" 
{
    function analizarHastaNegativo(numeros) {
        let i = 0;
        let suma = 0;
        let pares = 0;
        while (i < numeros.length && numeros[i] >= 0) {
            suma += numeros[i];
            console.log(numeros[i]);
            if (numeros[i] % 2 == 0) {
                pares++;
            }
            i++;
        }
        let media;
        if(i<=0){
            media = 0;
        }else{
            media = suma / i;
        }
        console.log("numeros procesados " + i);
        return {
            cantidad: i,
            suma: suma,
            pares: pares,
            media: media

        };
    }
    let numeros = [0, 7, 1, -3, 10, 8];
    console.log(analizarHastaNegativo(numeros));
}