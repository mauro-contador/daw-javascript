"use strict"
{
    let s = "Hoy parece que llueve";
    console.log(s.toLowerCase());
    console.log(s);
    let s2 = new String("lo que sea ");
    console.log(s.toUpperCase());
    console.log(s.concat(s2));
    console.log(s.indexOf("L"));// te indica la posición
    console.log(s.charAt(0));
    console.log(s.lastIndexOf("E"));
    console.log(s.lastIndexOf("e", 12));
    console.log(s.replace("L", "H"));
    console.log(s.replaceAll("L", "H"));
    console.log(s);

    let datos = "Juan:Pedro:Bernal:47";
    let arrayConTodosLosTrozos = datos.split(":");
    console.table(arrayConTodosLosTrozos);
    console.log(arrayConTodosLosTrozos);
    console.log(arrayConTodosLosTrozos[4]);
    console.log(datos.length);
    console.log(arrayConTodosLosTrozos.length);

    console.log(datos.substring(5));
    console.log(datos.substring(5,15));
    datos.includes("Ma");
    let datos2 = new String("              con mi amigo");
    console.log(datos2);
    console.log(datos2.trim());
    console.log(datos2);

    console.log(datos.repeat(2));
    console.log(datos);
}