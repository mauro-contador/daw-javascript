//Solicitar el nombre(sin numeros ni simb)first letter mayus, si no es valido volver a pedir
//prompt para la entrada de datos 
// valores validos son : R, P, S -> si opcion no es valida, volver a pedir
//Tras cada jugada: nº jugadas,elecciones,jugador que gana, puntuacion acumulada

{
    // FUNCIONES 
    //Validacion del nombre
    function validarNombre(name) {
        const validar = /^[A-Z]+[a-z]/;
        return validar.test(name);

    }
    function partida(player1, player2) {


        // Definimos variables necesarias
        let numJugadas = 0;
        let nombreGanador = "";
        let puntuacionAcumulada1 = 0;
        let puntuacionAcumulada2 = 0;
        let empates = 0;

        while (numJugadas <= 5 || puntuacionAcumulada1 > 2 || puntuacionAcumulada2 > 2) {

            let tiradaPlayer1 = prompt("Realice la tirada, debe ser R(piedra), P(papel) o S(tijeras)");

            while (tiradaPlayer1 !== "R" && tiradaPlayer1 !== "P" && tiradaPlayer1 === "S") {
                tiradaPlayer1 = prompt("Repita la tirada, debe ser R(piedra), P(papel) o S(tijeras)");
            }
        

            let tiradaPlayer2 = prompt("Realice la tirada, debe ser R(piedra), P(papel) o S(tijeras)");

            while (tiradaPlayer2 === "R" && tiradaPlayer2 === "P" && tiradaPlayer2 === "S") {
                tiradaPlayer2 = prompt("Repita la tirada, debe ser R(piedra), P(papel) o S(tijeras)");
            }



            if ((tiradaPlayer1 === "R" && tiradaPlayer2 === "S") ||
                (tiradaPlayer1 === "S" && tiradaPlayer2 === "P") ||
                (tiradaPlayer1 === "P" && tiradaPlayer2 === "R")) {

                numJugadas++;
                alert("Vaya!, El ganador de la ronda " + numJugadas + " es " + player1);
                nombreGanador = player1;
                puntuacionAcumulada1++;

            } else if ((tiradaPlayer1 === "S" && tiradaPlayer2 === "R") ||
                (tiradaPlayer1 === "P" && tiradaPlayer2 === "S") || (
                    tiradaPlayer1 === "R" && tiradaPlayer2 === "P")) {

                numJugadas++;
                alert("Vaya!, El ganador de la ronda " + numJugadas + " es " + player2);
                nombreGanador = player2;
                puntuacionAcumulada2++;

            } else if ((tiradaPlayer1 === "S" && tiradaPlayer2 === "S") ||
                (tiradaPlayer1 === "P" && tiradaPlayer2 === "P") || (
                    tiradaPlayer1 === "R" && tiradaPlayer2 === "R")) {
                numJugadas++;
                empates++;
                alert("¡Empate!");
            }

            alert("El numero de jugadas realizadas hasta el momento es de " + numJugadas);
            alert("La puntuacion de " + player1 + " es de " + puntuacionAcumulada1);
            alert("La puntuacion de " + player2 + " es de " + puntuacionAcumulada2);
        }

        //RESUMEN 

        alert("¡La partida ha finalizado!" + "----RESUMEN----");
        if (puntuacionAcumulada1 > puntuacionAcumulada2) {
            alert("El ganador ha sido " + player1 + "\n"
                + "Se han  jugado  " + numJugadas + " jugadas" + "\n"
                + "Jugadas ganadas de " + player1 + " : " + puntuacionAcumulada1 + "\n"
                + "Jugadas ganadas de " + player2 + " : " + puntuacionAcumulada2 + "\n"
                + "el numero de empates han sido " + empates);
        } else if (puntuacionAcumulada1 == puntuacionAcumulada2) {
            alert("Empate técnico" + "\n"
                + "Se han  jugado  " + numJugadas + " jugadas" + "\n"
                + "Jugadas ganadas de " + player1 + " : " + puntuacionAcumulada1 + "\n"
                + "Jugadas ganadas de " + player2 + " : " + puntuacionAcumulada2 + "\n"
                + "el numero de empates han sido " + empates);
        }
        else {
            alert("El ganador ha sido " + player2 + "\n"
                + "Se han  jugado  " + numJugadas + " jugadas" + "\n"
                + "Jugadas ganadas de " + player1 + " : " + puntuacionAcumulada1 + "\n"
                + "Jugadas ganadas de " + player2 + " : " + puntuacionAcumulada2 + "\n"
                + "el numero de empates han sido " + empates);
        }

    }
    //PROGRAMA

    let player1 = prompt("Introduzca el nombre de player1 para ser verificado");
    while (!validarNombre(player1)) {
        player1 = prompt("No es válido, introduzca un nombre válido para player1  ");
    }
    let player2 = prompt("Introduzca el nombre de player2 para ser verificado");
    while (!validarNombre(player2)) {
        player2 = prompt("Introduzca el nombre de player2 para ser verificado");
    }
    alert("El nombre introducido de player1  es " + player1);
    alert("El nombre introducido de player2 es " + player2);

    alert("¡Buenas a " + player1 + " y buenas también a " + player2 + " !" + " El juego va a comenzar");

    partida(player1, player2);

}






