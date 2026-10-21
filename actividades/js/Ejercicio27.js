
"use strict";
{
    let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    // a. Número de elementos
    console.log("a) Número de elementos: " + vector.length);

    // b. Pares e impares
    function paresImpares(vector) {
        let pares = vector.filter((n) => n % 2 === 0);
        let impares = vector.filter((n) => n % 2 !== 0);

        return { pares, impares };
    }

    let resultado = paresImpares(vector);
    console.log("b) Pares: " + resultado.pares.length + " → " + resultado.pares);
    console.log("b) Impares: " + resultado.impares.length + " → " + resultado.impares);

    // c. Suma de negativos
    function sumarNegativos(vector) {
        let negativos = vector.filter((n) => n < 0);
        return negativos.reduce((acc, n) => acc + n, 0);
    }

    console.log("c) Suma negativos: " + sumarNegativos(vector));

    // d. Producto de positivos
    function productoPositivos(vector) {
        let positivos = vector.filter((n) => n > 0);
        return positivos.reduce((acc, n) => acc * n, 1);
    }

    console.log("d) Producto positivos: " + productoPositivos(vector));

    // e. Números primos
    function esPrimo(numero) {
        if (numero < 2 || !Number.isInteger(numero)) {
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

    let primos = numerosPrimos(vector);
    console.log("e) Hay " + primos.length + " primos: " + primos);

    // f. Posiciones pares (2ª, 4ª, 6ª...)
    function posicionesPares(vector) {
        return vector.filter((numero, indice) => (indice + 1) % 2 === 0);
    }

    console.log("f) Posiciones pares: " + posicionesPares(vector));

    // g. Número mayor
    function numeroMayor(vector) {
        return Math.max(...vector);
    }

    console.log("g) Mayor: " + numeroMayor(vector));

    // h. Número menor
    function numeroMenor(vector) {
        return Math.min(...vector);
    }

    console.log("h) Menor: " + numeroMenor(vector));

    // i. Media y números por encima y debajo
    function calcularMedia(vector) {
        let suma = vector.reduce((acc, n) => acc + n, 0);
        let media = suma / vector.length;

        let porEncima = vector.filter((n) => n > media);
        let porDebajo = vector.filter((n) => n < media);

        return { media, porEncima, porDebajo };
    }

    let resultadoMedia = calcularMedia(vector);
    console.log("i) Media: " + resultadoMedia.media);
    console.log("Por encima: " + resultadoMedia.porEncima);
    console.log("Por debajo: " + resultadoMedia.porDebajo);

    // j. Ordenar de mayor a menor y viceversa
    function ordenarVector(vector) {
        let ascendente = [...vector].sort((a, b) => a - b);
        let descendente = [...vector].sort((a, b) => b - a);

        return { ascendente, descendente };
    }

    let ordenados = ordenarVector(vector);
    console.log("j) Ascendente: " + ordenados.ascendente);
    console.log("j) Descendente: " + ordenados.descendente);

    // k. Buscar valor introducido por el usuario
    function buscarValor(vector, valor) {
        return vector.includes(valor);
    }

    let entrada = prompt("Introduce el número que quieres buscar:");

    if (entrada !== null && entrada.trim() !== "" && !isNaN(Number(entrada))) {
        let valor = Number(entrada);

        if (buscarValor(vector, valor)) {
            console.log("k) El número " + valor + " existe en el vector");
        } else {
            console.log("k) El número " + valor + " no existe en el vector");
        }
    } else {
        console.log("k) Búsqueda cancelada o valor inválido");
    }
}
