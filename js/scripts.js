/*!
 * Start Bootstrap - Freelancer v7.0.3 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
// 

let info = document.getElementById("info");
let link = document.getElementById("link");
let anotar = document.getElementById("anotar")

const imprimir = (data) => {

    let datos = prompt("Ingresa un departamento");
    datos = datos.toLocaleLowerCase();

    if (datos === "amazonas") {
        info.innerHTML = "La capital de Amazonas es Leticia: ";
        link.innerHTML = "https://colombia.travel/es/leticia";
        return;
    }
    if (datos === "antioquia") {
        info.innerHTML = "La capital de Antioquia es Medellín: ";
        link.innerHTML = "https://colombia.travel/es/medellin";
        return;
    }
    if (datos === "arauca") {
        info.innerHTML = "La capital de Arauca es Arauca: ";
        link.innerHTML = "https://colombia.travel/es/arauca";
        return;
    }
    if (datos === "atlantico") {
        info.innerHTML = "La capital de Atlántico es Barranquilla: ";
        link.innerHTML = "https://colombia.travel/es/barranquilla";
        return;
    }
    if (datos === "bolivar") {
        info.innerHTML = "La capital de Bolivar es Cartagena de Indias: ";
        link.innerHTML = "https://colombia.travel/es/cartagena-de-indias";
        return;
    }
    if (datos === "boyaca") {
        info.innerHTML = "La capital de Boyacá es Tunja: ";
        link.innerHTML = "https://colombia.travel/es/tunja";
        return;
    }
    if (datos === "caldas") {
        info.innerHTML = "La capital de Caldas es Manizales: ";
        link.innerHTML = "https://colombia.travel/es/manizales";
        return;
    }
    if (datos === "caqueta") {
        info.innerHTML = "La capital de Caquetá es Florencia: ";
        link.innerHTML = "https://colombia.travel/es/florencia";
        return;
    }
    if (datos === "casanare") {
        info.innerHTML = "La capital de Casanare es Yopal: ";
        link.innerHTML = "https://colombia.travel/es/yopal";
        return;
    }
    if (datos === "cauca") {
        info.innerHTML = "La capital de Cauca es Popayán: ";
        link.innerHTML = "https://colombia.travel/es/popayan";
        return;
    }
    if (datos === "cesar") {
        info.innerHTML = "La capital de Cesar es Valledupar: ";
        link.innerHTML = "https://colombia.travel/es/valledupar";
        return;
    }
    if (datos === "choco") {
        info.innerHTML = "La capital de Chocó es Quibdó: ";
        link.innerHTML = "https://colombia.travel/es/choco";
        return;
    }
    if (datos === "cordoba") {
        info.innerHTML = "La capital de Córdoba es Montería: ";
        link.innerHTML = "https://colombia.travel/es/monteria";
        return;
    }
    if (datos === "cundinamarca") {
        info.innerHTML = "La capital de Cundinamarca es Bogotá: ";
        link.innerHTML = "https://colombia.travel/es/bogota";
        return;
    }
    if (datos === "guainia") {
        info.innerHTML = "La capital de Guainía es Inírida: ";
        link.innerHTML = "https://colombia.travel/es/guania";
        return;
    }
    if (datos === "guaviare") {
        info.innerHTML = "La capital de Guaviare es San José del Guaviare: ";
        link.innerHTML = "https://colombia.travel/es/san-jose-del-guaviare";
        return;
    }
    if (datos === "huila") {
        info.innerHTML = "La capital de Huila es Neiva: ";
        link.innerHTML = "https://colombia.travel/es/neiva";
        return;
    }
    if (datos === "guajira") {
        info.innerHTML = "La capital de La Guajira es Riohacha: ";
        link.innerHTML = "https://colombia.travel/es/riohacha";
        return;
    }
    if (datos === "magdalena") {
        info.innerHTML = "La capital de Magdalena es Santa Marta: ";
        link.innerHTML = "https://colombia.travel/es/santa-marta";
        return;
    }
    if (datos === "meta") {
        info.innerHTML = "La capital de Meta es Villavicencio: ";
        link.innerHTML = "https://colombia.travel/es/villavicencio";
        return;
    }
    if (datos === "nariño") {
        info.innerHTML = "La capital de Nariño es Pasto: ";
        link.innerHTML = "https://colombia.travel/es/pasto";
        return;
    }
    if (datos === "norte de santander") {
        info.innerHTML = "La capital de Norte de Santander es San José de Cúcuta: ";
        link.innerHTML = "https://colombia.travel/es/cucuta";
        return;
    }
    if (datos === "putumayo") {
        info.innerHTML = "La capital de Putumayo es Mocoa: ";
        link.innerHTML = "https://colombia.travel/es/mocoa";
        return;
    }
    if (datos === "quindio") {
        info.innerHTML = "La capital de Quindio es Armenia: ";
        link.innerHTML = "https://colombia.travel/es/armenia";
        return;
    }
    if (datos === "risaralda") {
        info.innerHTML = "La capital de Risaralda es Pereira: ";
        link.innerHTML = "https://colombia.travel/es/pereira";
        return;
    }
    if (datos === "san andres") {
        info.innerHTML = "La capital de San Andrés y Providencia es San andrés: ";
        link.innerHTML = "https://colombia.travel/es/san-andres";
        return;
    }
    if (datos === "santander") {
        info.innerHTML = "La capital de Santander es Bucaramanga: ";
        link.innerHTML = "https://colombia.travel/es/bucaramanga";
        return;
    }
    if (datos === "sucre") {
        info.innerHTML = "La capital de Sucre es Sincelejo: ";
        link.innerHTML = "https://colombia.travel/es/sincelejo";
        return;
    }
    if (datos === "tolima") {
        info.innerHTML = "La capital de Tolima es Ibagué: ";
        link.innerHTML = "https://colombia.travel/es/ibague";
        return;
    }
    if (datos === "valle del cauca") {
        info.innerHTML = "La capital de Valle del Cauca es Cali: ";
        link.innerHTML = "https://colombia.travel/es/cali";
        return;
    }
    if (datos === "vaupes") {
        info.innerHTML = "La capital de Vaupés es Mitú: ";
        link.innerHTML = "https://colombia.travel/es/mitu";
        return;
    }
    if (datos === "vichada") {
        info.innerHTML = "La capital de Vichada es Puerto Carreño: ";
        link.innerHTML = "https://colombia.travel/es/puero-carreno";
        return;
    } else {
        alert("El dato ingresado no es válido");
    }

};


anotar.onclick = function() {
    imprimir();
};