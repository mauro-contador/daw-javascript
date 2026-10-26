"use strict"
{

    const r1 = /.a.o/i;
    //DATO dato dAto daTO

    const r2 = new RegExp(".a.o", "i");
    const r3 = new RegExp(".a.o", "i");

    console.log(r1.test("PERRO"));
    console.log(r1.test("PatO"));
    console.log(r1.test("Perro"));

    const r4 = new RegExp("^fútbol", "m"); // ^  => al principio
    //m => multiline
    console.log(r4.test("no me gusta el futbol")); // false
    console.log(r4.test("fútbol sala"));
    console.log("Sevilla \nfútbol club");
    console.log(r4.test("Sevilla \n fútbol club"));

    const r5 = /./;
    console.log(r5.test("x"));//true
    console.log(r5.test("abc"));//true
    console.log(r5.test("x"));//true


    let s = "table footballfootbolin";
    const r6 = /foo/y; // sticky 
    console.log(r6.lastIndex);
    console.log(r6.test(s));


    // let s = "table footballfootbolin";
    // const r6 = /foo/y;
    // console.log(r6.lastIndex);
    // console.log(r6.test(s));
    // console.log(r6.lastIndex);


    // CARACTERES ESPECIALES

    // . => cualquier carácter
    // \ => invierte significado del carácter. Si es especial, lo escapa.

    const r7 = /\./i;
    console.log(r7.test(".ATO"));
    console.log(/\.a.o/i.test(".aTO"));//TRUE
    console.log(/A./.test("Ab"))//TRUE

    // \s --> un espacio
    // [] --> cualquiera de los caracteres del interior
    // [^] --> no existen los caracteres del interior del corchete
    // | --> alternativa: lo que está a la izquierda 
    //o lo que está a la derecha
    const r8 = /[^aeiou]/i;
    console.log(r8.test("OB"));
    const r9 = /[^aeiou]|.$/i;
    console.log(r9.test("XXXXXX"));

    const r10 = /[^ca|ma]/i; // se ha encontrado algo que no es ni ca ni ma (pa)
    console.log(r10.test("mapa"));

    /*
    [0-9] =>\d
    [^0-9] =>\D
    [A-Z] (ni Ñ ni tildes)
    [a-z]
    [^A-Za-z0-9]// buscar cosas raras
    [ /t/r/n] = /s => encuentras o un espacio,o un salto de linea o un retorno de cargo
    [^ \t\r\n] = \S =>que no exista **/

    const r11 = /^[0-9]$/;  // solo UN numero
    const r112 = /^[A-Za-z0-9]$/;
    console.log(r11.test("Xx7"));
    /* 
        \b = texto con espacios o símbolos de puntuación 
        al principio o al final
    **/
    const r12 = /fo\b/i; //fo la palabra que estas buscando
    console.log(r12.test("Esto es un parrafo de texto."));

    const r13 = /\bfo/i;
    console.log(r13.test("Esto es un párra fos"));
    /* 
        \B = lo contrario a \b
    */
    /*
        * --> 0 o mas ocurrencias
        + --> 1 o mas ocurrencias
    */
    const r14 = /a*/; // a ->cadena vacia / *-> 0 o mas ocurrencias
    r14.test(""); // true
    r14.test("a"); // true
    r14.test("aba"); // true

    const r15 = /a+/;
    r15.test(""); // false
    r15.test("a"); // true
    r15.test("aba"); // true
    r15.test("bbb"); // false

    const r16 = /disparos?/;
    r16.test("escuche disparos en la habitación");// true
    r16.test("efectuo un  disparo al aire");// true

    /*
        {n} -> lo q esta a la izq se repite n veces
        {n,} --> lo q esta a la izq se repite n o más veces
        {n,m} --> lo q esta a la izq se repite entre n y m veces
    */
    const r17 = /[0-9]{2}/;
    r17.test(42); // true
    r17.test(1); // False
    r17.test(125);//true 

    const r18 = /^[0-9]{2}$/; // va a haber dos de esos y terminara la expresion x ahi
    r18.test(4); // false
    r18.test(55);// true
    r18.test(125);//False

    const r19 = /^[0-9]{3,}$/;
    r19.test(33); // false
    r19.test(345);// true
    r19.test(3450); // true (3 o mas dígitos)

    const r20 = /^[0-9]{2,5}$/;
    r20.test(2); // false
    r20.test(444); // true 
    r20.test(2222224); // false

    const r21 = /^\D{2}$/; // que no haya dos digitos 
    console.log(r21.test("a8a"));// 
    const r22 = /^\w{3}$/;
    console.log(r22.test("aB7*"));

    const r23 = /\b[a-z]{3}\b/gi;
    let t = "la ola del mar es azul y tenia más sal que el salero";

    console.log(r23.lastIndex);
    console.log(r23.exec(t));
    console.log(r23.lastIndex);
    

     let x = t.match(r23); // Te crea un array con las ocurrencias 
     console.log(x);
}