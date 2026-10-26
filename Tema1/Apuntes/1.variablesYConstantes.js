"use strict"
{
    //VARIABLES (Declaración)
    let a = "hola";
    var b = "adiós";
    
    function saludar(){
        //imprimes por pantalla
        console.log(a);
        console.log(b);
        let c = "no se ve fuera";
        let d = "tampoco se ve fuera";
    }
    {
        let e = "xxxx";
        var f = "yyyy";
    }
    //llamas a la función
    saludar ();
    console.log(f);
    console.log(e);
    //SIEMPRE SE USA let PARA QUE CADA COSA SE VEA SIEMPRE EN SU ÁMBITO
    
    //Declarar constante
    const g = 10;
    console.log(g);
    g = g+1;
    console.log(g);

    let h;
}