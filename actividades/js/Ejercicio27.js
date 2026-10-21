"use strict"
{
    let vector = [1, 2, 3, 4, 5, -6, 7, 8, -9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    // a
    console.log("El número de elementos del vector es: " + vector.length);

    // b
    function contarParesImpares(vector) {
        let pares = vector.filter((numero) => numero % 2 === 0);
        let impares = vector.filter((numero) => numero % 2 !== 0);

        return {
            pares: pares,
            impares: impares
        };
    }

    // c
    function sumaNegativos(vector) {
        let negativos = vector.filter((numero) => numero < 0);

        let suma = negativos.reduce((acc, numero) => {
            return acc + numero;
        }, 0);
        return suma;
    }

    // d
    function productoNumerosPositivos(vector) {
        let positivos = vector.filter((numero) => numero > 0);

        let producto = positivos.reduce((acc, numero) => {
            return acc * numero;
        }, 1);
        return producto;
    }

    // e
    function esPrimo(numero) {
        if (numero < 2) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }

        return true;
    }

    function numerosPrimos(vector) {
        return vector.filter((numero) => esPrimo(numero));
    }

    // f
    function posicionesPares(vector) {
        return vector.filter((valor, indice) => indice % 2 === 0);
    }

    // g
    function numeroMayor(vector) {
        return Math.max(...vector);
    }

    // h
    function numeroMenor(vector) {
        return Math.min(...vector);
    }

    // i
    function calcularMedia(vector) {
        let sumaVector = vector.reduce((acc, numero) => {
            return acc + numero;
        }, 0);

        let media = sumaVector / vector.length;
        let porDebajo = vector.filter((numero) => numero < media);
        let porEncima = vector.filter((numero) => numero > media);
        return {
            media: media,
            porDebajo: porDebajo,
            porEncima: porEncima
        };
    }

    // j
    function ordenarVector(vector) {
        let mayorAMenor = [...vector].sort((a, b) => b - a);
        let menorAMayor = [...vector].sort((a, b) => a - b);
        return {
            mayorAMenor: mayorAMenor,
            menorAMayor: menorAMayor
        };
    }

    // k
    function buscarValor(vector, valor) {
        return vector.includes(valor);
    }


    let resultadoPares = contarParesImpares(vector);

    console.log(
        "Hay " + resultadoPares.pares.length + " números pares: " +
        resultadoPares.pares
    );

    console.log(
        "Hay " + resultadoPares.impares.length + " números impares: " +
        resultadoPares.impares
    );

    console.log(
        "La suma de los números negativos es: " +
        sumaNegativos(vector)
    );

    console.log(
        "El producto de los números positivos es: " +
        productoNumerosPositivos(vector)
    );

    let primos = numerosPrimos(vector);

    console.log(
        "Hay " + primos.length + " números primos: " +
        primos
    );

    console.log(
        "Los números que ocupan posiciones pares son: " +
        posicionesPares(vector)
    );

    console.log(
        "El número mayor es: " +
        numeroMayor(vector)
    );

    console.log(
        "El número menor es: " +
        numeroMenor(vector)
    );

    let resultadoMedia = calcularMedia(vector);

    console.log("La media es: " + resultadoMedia.media);

    console.log(
        "Los números por debajo de la media son: " +
        resultadoMedia.porDebajo
    );

    console.log(
        "Los números por encima de la media son: " +
        resultadoMedia.porEncima
    );

    let resultadoOrdenado = ordenarVector(vector);

    console.log(
        "Vector de mayor a menor: " +
        resultadoOrdenado.mayorAMenor
    );

    console.log(
        "Vector de menor a mayor: " +
        resultadoOrdenado.menorAMayor
    );

    let valorBuscado = Number(
        prompt("Introduce el número que quieres buscar:")
    );

    if (buscarValor(vector, valorBuscado)) {
        console.log("El número " + valorBuscado + " existe en el vector");
    } else {
        console.log("El número " + valorBuscado + " no existe en el vector");
    }
}