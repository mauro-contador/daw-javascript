/* Programa una función llamada analizarVotos(votos) que reciba un array con los votos de varios alumnos para elegir su lenguaje de programación favorito.

Los únicos votos válidos son JS, PHP y PYTHON.

La función deberá devolver un objeto con cuatro propiedades:
- resultados: objeto que indique cuántos votos ha recibido cada lenguaje.
- invalidos: cantidad de votos que no correspondan a ninguno de los tres lenguajes.
- totalValidos: número total de votos válidos.
- ganador: lenguaje que ha recibido más votos.*/
"use strict" 
{
    function analizarVotos(votos) {
        let resultados = {
            JS: 0,
            PHP: 0,
            PYTHON: 0
        }
        let invalidos = 0;
        let totalValidos = 0;
        votos.forEach(element => {
            element = element.toUpperCase().trim();
            if (element === "JS") {
                resultados.JS++;
                totalValidos++;
            } else if (element === "PHP") {
                resultados.PHP++
                totalValidos++;;
            } else if (element === "PYTHON") {
                resultados.PYTHON++;
                totalValidos++;
            } else {
                invalidos++;
            }

        });
        if (totalValidos === 0) {
            ganador = "sin Ganador";
            
        }else{
            let maxVotos = Math.max(...Object.values(resultados));
            let ganador = Object.keys(resultados).filter((element) => resultados[element]=== maxVotos); 
            if(ganador.length > 1){
                ganador = "Empate";
            }else if(ganador === 1){
                ganador = ganador[0];
            }
            return {
                
        resultados: resultados,
        invalidos: invalidos,
        totalValidos: totalValidos,
        ganador: ganador
    };
        }
    }
    let votos = [
        "JS",
        "php",
        "Js",
        "Docker",
        "  PYTHON  ",
        "PHP",
        "php",
        "Rust"
    ];
    console.log(analizarVotos(votos));
}