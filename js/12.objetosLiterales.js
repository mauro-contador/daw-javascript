"use strict"
{
    let persona = {
        nombre: "pepe",
        edad: 30,
        ciudad: "Sevilla"
    }
    console.log(persona);
    console.log(persona.edad);
    persona.edad = 40;
    persona["edad"] = 45;
    console.log(persona);

    console.log("---------------");

    let animal = {
        tipo: "gato",
        patas: 4,
        bigotes: true,
        dimensiones: {
            alto: 40,
            ancho: 20,
            largo: 50
        },

        maullar() {
            console.log(`Soy un gato ${this.tipo} que hace miau`);
        }
    };

    animal.maullar();

    console.log(animal);
    animal.dimensiones.largo = 60;
    console.log(animal);
    console.table(animal);
    console.log(animal.dimensiones.largo);

    animal.dimensiones["ancho"] = 30;
    console.log(`El ${animal.tipo} mide ${animal.dimensiones.alto} cm de alto`);


    console.log(Object.keys(animal)); // array con las claves 
    console.log(Object.values(animal)); // array con los valores 

    // DESTRUCTURING O DESESTRUCTURACIÓN
    const { tipo, bigotes, dimensiones: { alto } } = animal;
    console.log(tipo);
    console.log(bigotes);
    animal.tipo = "perro";
    console.log(tipo);
    console.log(alto);
    const { alto: a, ancho, largo } = dimensiones; // los : sirven para renombrar la variable
    console.log(a);

    //unir 2 objetos literales
    // unir 2 objetos literales
    const producto = {
        nombreProducto: "Reloj",
        tipo: "bolsillo",
        tamaño: "grande"
    };

    const colores = {
        esfera: "blanco",
        correa: "negro"
    };

    const productoCompleto = { producto, colores }; // por referencia
    console.log(productoCompleto.producto.nombreProducto);
    producto.nombreProducto = "anillo";
    console.log(productoCompleto);
    
    const productoCompletoCopia = {...producto,...colores};
    


}