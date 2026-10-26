{
    try {
        console.log("En el Try se agrega el código a evaluar");//se ejecuta
        // noExiste;//Lanza un error
        console.log("Segundo mensaje en el try");//no se ejecuta porque salta un error en la línea anterior
        let tuEdad = prompt("Introduce tu edad", "");

        if (tuEdad < 18) {
            throw new Error("Eres menor de edad");
        }
    } catch (error) {
        console.log("Catch, captura cualquier error surgido o lanzado en el try");//se ejecuta
        console.log(error);//Se ejecuta
    } finally {
        console.log("El bloque finally se ejecutará siempre al final de unbloque try-catch");//se ejecuta siempre
    }

    try {
        let a = 5, b = 0;
        let c = a / b;
        console.log("El resultado es " + c)
        const v = [1, 2, 3];
        v[0] = 4;
        console.log("Mi vector es " + v)
        v[2] = {
            nombre: "yo",
            edad: 29
        }
        console.log("Mi vector es " + v)

    } catch (e) {
        console.error(e);
    }
    try {
        let numero = prompt("Introduce un numero", "hola");
        if (isNaN(numero)) {
            throw new Error("no es un numero");
        }
        let nuevoNumero = parseInt(numero);
        nuevoNumero++;
        console.log(nuevoNumero);
    } catch (error) {
        console.error(error);
    }

}