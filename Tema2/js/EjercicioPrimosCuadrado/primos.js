"use strict"
 {
    let num = 1;
    let tabla = document.createElement("table");
    for (let i = 0; i < 100; i++) {
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        for (let j = 0; j < 100; j++) {
            let celda = document.createElement("td");
            fila.appendChild(celda);
            celda.textContent = num;
            num++;
        }
    }
    document.body.appendChild(tabla);
    let botonPrimos = document.querySelector("#calcularPrimos");
    let botonReset = document.querySelector("#resetear");

    let celdas = document.querySelectorAll("td");

    botonPrimos.addEventListener("click", () => {
        celdas.forEach(celda => {
            let numero = Number(celda.textContent);
            let esPrimo = true;
            if (numero < 2) {
                esPrimo = false
            }
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                celda.style.backgroundColor = "yellow";
            }
        });
    })
}