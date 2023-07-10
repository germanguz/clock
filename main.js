const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})

// *Explicaciones*
/*
si no pongo el tiempo de intervalo en el final de "setInterval"
(entre la última llave y el paréntesis) lo hace a cada segundo

deg es igual a 6 porque así me da los grados para graficar
360º/60min o seg = 6

hh se multiplica por 30 también para lograr los grados:
360º/24horas = 15, pero como la hora la da en hasta 24hrs
entonces tiene que dar 2 vueltas, por eso se multiplica por 2
y da 30.
Otra forma de verlo es que como tiene que dar 2 vueltas (12 y 12)
entonces sería 360ºx2=720º, luego 720º/24hrs=30

en hr divide mm en 12 para poder representar los grados entre
cada hora. Cada 30 grados es una hora, 360º/12=30 o 360º/30º de
cada hora = 12
*/