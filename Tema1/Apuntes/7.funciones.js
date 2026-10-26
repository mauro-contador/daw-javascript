"use strict"
{

    function nombreDeLaFuncion() {
        let x = 0;
        return x;
    }

    function f1(param1, param2, param3) {
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }

    f1();
    f1(2, 4, 6);
    // los 3 puntos permiten mas parametros
    function f2(param1, param2, ...param3) {
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }
    f2(2, 4, 6, 8, 10, { nombre: "yo", edad: 19 });

    let f3 = function (param1, param2, ...param3) {
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }
    console.log(f3(1, 2, 3, 4, 5, 6, 7));

    let f4 = function (param1, param2, param3 = 0) {

        let r = parseInt(param1) + parseInt
            (param2) + parseInt(param3);
        return r;
    }
    // console.log(f4);
    console.log(f4(2, 4, 6));
    let v = (function (p1, p2, p3) {
        console.log("Funcion rara");
    }) // funcion 
        (1); // llamada
}