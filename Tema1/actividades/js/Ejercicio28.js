"use strict"
{
    function analizarCadenas(vector = []) {
        if (vector.length === 0) return "El vector está vacío";

        let masCorta = vector[0];
        let masLarga = vector[0];
        let cadenaMasA = vector[0];
        let maxContadorA = 0;

        let cadenasConB = [];
        let contadorB = 0;

        for (let i = 0; i < vector.length; i++) {
            let palabra = vector[i];
            if (palabra.length < masCorta.length) {
                masCorta = palabra;
            }
            if (palabra.length > masLarga.length) {
                masLarga = palabra;
            }
            let contadorA = 0;
            for (let j = 0; j < palabra.length; j++) {
                if (palabra.charAt(j).toLowerCase() === 'a') {
                    contadorA++;
                }
            }
            if (contadorA > maxContadorA) {
                maxContadorA = contadorA;
                cadenaMasA = palabra;
            }
            if (palabra.toLowerCase().includes('b')) {
                cadenasConB.push(palabra);
                contadorB++;
            }
        }
        console.log("Cadena más corta: " + masCorta);
        console.log("Cadena más larga: " + masLarga);
        console.log("Cadena con más letras 'a': " + cadenaMasA);
        console.log("Cadenas con 'b': " + contadorB + " (" + cadenasConB.join(", ") + ")");
    }

    let miVector = ["fresa", "manzana", "platano", "frambuesa", "kiwi", "albaricoque"];
    analizarCadenas(miVector);
}