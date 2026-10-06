/*23.Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
    igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

"use strict"
 {
        function esPalindromo(frase) {
    
            let fraseNormalizada = frase
                .toLowerCase()
                .replaceAll(" ", "");
    
            let fraseInvertida = fraseNormalizada
                .split("")
                .reverse()
                .join("");
    
            return fraseNormalizada === fraseInvertida;
        }
    
        console.log(esPalindromo("Salas"));               // true
        console.log(esPalindromo("Hola Mundo"));          // false
}



