"use strict"
{
    let fecha = new Date();
    console.log(fecha);

    let fecha2 = new Date("1979/05/30");
    console.log(fecha2);
    let fecha3 = new Date(1979, 5, 30, 14, 30, 15); // todos los meses son mes-1 enero == 0;
    // año,mes,dia,horas,min,sec
    console.log(fecha3);
    let fecha4 = new Date(1979, 4, 30);
    console.log(fecha4);
    let fecha5 = new Date("1979/05/30 14:30:15.857");
    console.log(fecha4);


    console.log(fecha5.getDay()); // te da el dia de la semana (empiezan en 1) domingo = 0,lunes = 1, 
    console.log(fecha5.getDate());// el dia de la fecha 
    console.log(fecha5.getMonth()); // el numero del mes 
    console.log(fecha5.getFullYear()); // el año
    console.log(fecha5.getYear()); // el año (te da 79, ya que empieza 1900); 1857 = -43 2004 = 104;
    console.log(fecha5.getHours());
    console.log(fecha5.getMinutes());
    console.log(fecha5.getSeconds());
    console.log(fecha5.getMilliseconds());
    console.log(fecha5.getTime()); // milisegundos desde 01/01/1970 00:00:00


    fecha5.setMonth(0);
    fecha5.setDate(29); // establecer el dia
    fecha5.setFullYear(1999);

    console(fecha.toDateString()); // Crea la fecha en un string
    console.log(fecha.toLocaleDateString());
    console.log(fecha.toGMTString());
    console.log(fecha.toUTCString());
}