"uses strict"
{
    //concatena los dos strings
    let a = "15";
    let b = 100;
    console.log(a + b);
    let c = a + b;
    console.log(c);

    //Imprime el tipo de variable
    console.log(typeof a);
    console.log(typeof b);

    if (a < b) { // 15 < 100 (aplica coercion, por lo tanto,)
        console.log("a es menor que b");
    } else {
        console.log("a no es menor que b");
    }
}