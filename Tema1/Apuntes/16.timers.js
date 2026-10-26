"use strict"
{
    // temporizadores
    console.log("1"); // Se ejecuta primero

    setTimeout(function () {
        console.log("timeout"); // Se ejecuta tras 2 segundos
    }, 2000);

    console.log("2"); // Se ejecuta sin esperar al timeout

    //callback
    setTimeout(f, 4000); // Llama a f tras 4 segundos

    function f() {
        console.log("timeout f"); // Mensaje de la función
    }
    
    console.log("3"); // También se ejecuta inmediatamente


    function f2(){
        console.log("timeout f2");
    }
    let codigo = setInterval(f2,6000); // esta funcion devuelve un number(codigo)
    setTimeout(f3,1000);

    function f3(){
        clearInterval(codigo);
    }
}