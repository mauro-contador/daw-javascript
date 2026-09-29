"use strict"
{
        let persona = {
            nombre : "pepe",
            edad : 30,
            ciudad:"Sevilla"
        }
        console.log(persona);
        console.log(persona.edad);
        persona.edad = 40;
        persona["edad"] = 45;
        console.log(persona);

        console.log ("---------------");

        let animal = {
            tipo : "gato",
            patas : 4,
            bigotes:true,
            dimensiones: {
                alto : 40,
                ancho : 20,
                largo : 50
            }
        }
        console.log(animal);
        animal.dimensiones.largo = 60;
        console.log(animal);
        console.table(animal);
        console.log(animal.dimensiones.largo);

        animal.dimensiones["ancho"] = 30;
        console.log(`El ${animal.tipo} mide ${animal.dimensiones.alto} cm de alto`);

        maullar (){
            console.log(`Soy un gato ${this.tipo} que hace miau`);
        }
        animal.maullar();

        console.log(Object.keys (animal)); // array con las claves 
        console.log(Object.values (animal)); // array con los valores 

}