{
    // DECLARAR UN ARRAY
    let myArray = [];

    myArray[0] = 10;
    myArray[1] = 20;
    myArray[2] = "Martínez";

    console.log(myArray);

    let myArray2 = new Array();

    myArray2[0] = 10;
    myArray2[1] = "20";

    // número de elementos
    console.log(`Mi array tiene ${myArray2.length} elementos`);

    let myArray3 = ["gamusino", "globo", "up"];

    let myArray4 = myArray3; // por referencia
    myArray4 = [...myArray3]; // clonar array por copia

    console.log(myArray4);

    myArray3[4] = "la madrastra de cenicienta";
    console.log(myArray4);

    // ARRAYS BIDIMENSIONALES 

    let myArrayBi1 = new Array();

    myArrayBi1[0] = [1, 2, 3];
    myArrayBi1 = [4, 5, 6];

    console.table(myArrayBi1);

    let numFilas = 2;
    let numColumnas = 3;
    let myArrayBi2 = newArray();

    for (let i = 0; i < numFilas; i++) {
        myArrayBi2[i] = new Array(numColumnas);
    }
    console.table(myArrayBi2);
    myArrayBi2[0][0] = null;
    console.table(myArrayBi2);

    let myArrayBi3 = Array.from(Array(numFilas), () => new Array(numColumnas));

    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j < numColumnas; j++) {
            myArrayBi3[i][j] = 0;
        }
    }

    let myArrayBi4 = new Array(5).fill().map(() => new Array(numColumnas));

    console.table(myArrayBi4);

    let myArrayBi5 = [...Array(numFilas)].map(() => Array(numColumnas).fill(0));

    // OPERACIONES CON ARRAYS
    //join

    let elems = ["fuego", "aire", "agua"];
    let str = elems.join(/*separador*/);
    console.log(str);

    //split
    let strNumbers = "1,2,3,4,5,6,7,8,9,10";
    let myArrayNumbers = strNumbers.split = (",");
    console.log(myArrayNumbers);
    for (let i = 0; i < myArrayNumbers.length; i++) {
        myArrayNumbers[i] = parseInt(myArrayNumbers[i]);
    }

    console.log(myArrayNumbers);

    // push
    elems.push("tierra");

    //pop
    let ultimoElemento = elems.pop();
    console.log(ultimoElemento);
    console.log(elems);

    //shift
    let primerElemento = elems.shift();
    console.log(primerElemento);
    console.log(elems);

    // reversed
    let reversedElems = [...elems].reverse(); // los cambios se guardan sin variable
    console.log(reversedElems);
    console.log(elems);

    // slice
    let nombres = ["Rita", "Manuel", "Miguel", "Ana", "Vanessa"];

    let nombresSeleccionados = nombres.slice(1, 3);
    console.log(nombresSeleccionados);

    nombresSeleccionados = nombres.slice(1);
    console.log(nombresSeleccionados);

    //Filter
    const usuarios = [
        { name: "juan", age: 34 },
        { name: "Manoli", age: 41 },
        { name: "JuanFran", age: 27 }
    ]
    let usuariosMayores = usuarios.filter(function (usuario) {
        return usuario.age > 30;
    });
    console.log(usuariosMayores);

    //Funcion flecha (recomendada)
    let usuariosMayores2 = usuarios.filter((usuario) => usuario.age > 30);
    console.log(usuariosMayores);

    //Find
    let re = /M[a-z]*/i; // empieza por m y puede contener todo tipo de caracteres
    let usuarioEncontrado = usuarios.find((usuario) => usuario.name.match(re));//Find solo devuelve el primero
    console.log(usuarioEncontrado);

    usuarioEncontrado = usuarios.find((usuario) => re.test(usuario.name));
    console.log(usuarioEncontrado);

    //Some -> devuelve true si encuentra alguno que cumpla la condicion
    let existe = usuarios.some((usuario) => usuario.age == 27);
    console.log(existe);

    //findIndex -> te muestra la primera posición que encuentra con esa condición 
    let index = usuarios.findIndex((usuario) => usuario.age > 30);
    console.log(index);

    //Concat 
    const array1 = ["a", "b", "c"];
    const array2 = ["b", "c", "d"];
    const array3 = array1.concat(array2);
    console.log(array3);

    const array4 = [...array1, ...array2];
    console.log(array4);

    //reduce (function(acumulador,valorActual){}, valorInicial) Sirve para 
    let sumaEdades = usuarios.reduce(function (acc, usuario) {
        return acc += usuario.age;
    }, 10);
    console.log(sumaEdades);

    sumaEdades = usuarios.reduce((acc, usuario) =>
        acc += usuario.age
        , 0);
    console.log(sumaEdades);


    const misNumeros = [1, 2, 3, 4, 5];
    let sumaNumeros = misNumeros.reduce ((acc,va) => acc+va,0);

    const miArrayDeArrayConNumeros = [[0,1],[2,3],[4,5]];
    // [0,1,2,3,4,5]
    let miArrayConNumeros = miArrayDeArrayConNumeros.reduce ((acc,va)=>acc.concat(va),[]);
    console.log(miArrayConNumeros);

    // includes (verifica que el array contiene el elemento)
    const motos = ["yamaha","·ducatti","suzuki"];
    let incluye = motos.includes("vespa");
    console.log(incluye);

    incluye = motos.some((e) => e==="vespa");
    console.log(incluye);


    //ITERAR sobre los elementos del array
    //for, foreach, map, for of

    let vector = [1,2,"A","F",-1,2.4];
    for(let i=0; i<vector.length;i++){
        console.log(vector[i]);
    }
    vector.forEach (function (elem){
        console.log(elem);
    });

    vector.map(function (elem){
        console.log(elem);
        return elem % 2 ;
    });
    console.log(valores);
    valores = vector.map ( (elem) => elem + 1);
    console.log(valores);
   /* const usuarios = [
        { name: "Juan", age: 34 },
        { name: "Manoli", age: 41 },
        { name: "JuanFran", age: 27 }
    ]; */
    let nuevasEdades = usuarios.map( (usuario) =>usuario.age*2);
    console.log(nuevasEdades);

    let nuevosUsuarios = usuarios.map ( (usuario) => {
        return {name:usuario.name , age: usuario.age*2};
    });
    console.log(nuevosUsuarios);

    let nuevosUsuarios2 = usuarios.map((usuario) =>{
      usuario.age*=2;
      return usuario;
    });
    console.log(usuarios);
    console.log(nuevosUsuarios2);

    let nuevosUsuarios3 = usuarios.map ( (usuario) => {
        return{
            ...usuario, //{ name: "Juan", age: 34 }
            altura:100
        }
    });
    console.log(nuevosUsuarios3);

    let nuevosUsuarios4 = [];
    for (let usuario of usuarios){
        console.log(usuario);
        nuevosUsuarios4.push(usuario);
    }


}
