const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milisegundos = document.getElementById('milisegundos');

//Transforma o texto das spans do HTML com o valor das variáveis de tempo e adiciona um "0" se alguns desses campos for menos que 10
const relogio = setInterval (function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let milisec = dateToday.getMilliseconds();

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    milisegundos.textContent= milisec;

    

})