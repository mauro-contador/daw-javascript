"use strict"
 {
    console.log(window.location);
    console.log(window.location.href);
    console.log(window.location.origin);
    console.log(window.location.protocol);
    console.log(window.location.host);
    console.log(window.location.hostname);
    console.log(window.location.port);
    console.log(window.location.pathname);

    console.log(window.history);

    //window.history.back();
    let back = document.createElement("button");
    back.textContent = "Atrás";
    document.body.append(back);

    back.onclick = function (e) {
        //window.history.back();
        window.history.go(-1);
    }

    let siguiente = document.createElement("button");
    siguiente.textContent = "Siguiente";
    document.body.append(siguiente);

    siguiente.onclick = function (e) {
        //window.history.forward();
        window.history.go(1);
    }

    let refrescar = document.createElement("button");
    refrescar.textContent = "Refrescar";

    refrescar.onclick = function (e) {
        window.history.go(0);
    }

    console.log(window.navigator);
    console.log(window.navigator.userAgent);
    console.log("---");

    let geolocalizacion = document.createElement("button");
    geolocalizacion.textContent = "Geolocalizar";
    document.body.append(geolocalizacion);
    geolocalizacion.addEventListener("click", (e) => {
        window.navigator.geolocation.getCurrentPosition(exito, error, opciones);

    })
    const opciones = {
        enableHighAccuracy: true,
        timeout: 2000, // tiempo maximo de espera para obtener la geolocalización
        maximumAge: 0

    };

    function verDatosGeolocalizacion(pos) {
        let coordenada = pos.coords;
        console.log("Tu ubicacion actual es: ");
        console.log(coordenada.latitude);
        console.log(coordenada.accuracy + " metros");
    }

    function error(er) {
        console.error(er.code + "-" + er.message);
    }

    let ventana;

    let botonAbrirVentana = document.createElement("button");
    botonAbrirVentana.textContent = "abrir ventana";
    document.body.appendChild(botonAbrirVentana);

    botonAbrirVentana.addEventListener("click", (evento) => {
        ventana = window.open ("https://iesmartinezmontañes.es");
    });

    let botonCerrarVentana = document.createElement("button");
    botonCerrarVentana.textContent = "cerrar ventana";
    document.body.appendChild(botonCerrarVentana);

    botonCerrarVentana.addEventListener("click", (evento) => {
        ventana.close();
        window.close();
    });

    let botonImprimirVentana = document.createElement("button");
    botonImprimirVentana.textContent = "imprimir ventana";
    document.body.appendChild(botonImprimirVentana);

    botonImprimirVentana.addEventListener("click", (evento) => {

    });
}