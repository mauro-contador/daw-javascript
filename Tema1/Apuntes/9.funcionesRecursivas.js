"use strict"
{
    function cuentaAtras1(n) {
        // caso base
        if (n === 0) {
            console.log(n);
        } else { // caso recursivo
            console.log(n);
            cuentaAtras1(n - 1);
        }
    }

    cuentaAtras1(10);

    let cuentaAtras2 = function (n) {
        if (n === 0) {
            console.log(n);
        } else { // caso recursivo
            console.log(n);
            cuentaAtras2(n - 1);
        }
    }
    cuentaAtras2(10);

    let cuentaAtras3 = (n) => {
        if (n === 0) {
            console.log(n);
        } else { // caso recursivo
            console.log(n);
            cuentaAtras1(n - 1);
        }
    }
    cuentaAtras3(10);

    let sumaAtras = (n) => {
        if (n == 0) {
            return 0;
        } else {
            return n + sumaAtras(n - 1);
        }
    }
    let s = sumaAtras(4);
    console.log(`La sumaAtras es ${s}`);

    // FUNCION QUE ME DEVUELVE SI El  NUMERO INTRODUCIDO ES  PAR O IMPAR 
    let parImpar = (n) => {
        if (n === 0) {
            console.log("PAR");
        } else if (n === 1) {
            console.log("IMPAR");
        } else {
            parImpar(n - 2);
        }

    }
}
//FUNCIÓN QUE ME DEVUELVA UN STRING CON LA PALABRA "PAR" O "IMPAR" 
//DEPENDIENDO DE SI EL NUMERO N ES PAR O IMPAR 
let parImparString = (n) => {
    if(n===0){
        return("PAR");
    }else if(n===1){
        return("IMPAR");
    }else {
        return parImparString(n-2);
    }
    let p = parImparString(10);
    console.log(p);

}