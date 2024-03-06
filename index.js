const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("min")
const segundo = document.getElementById("seg")

const lancamento = "1 dec 2024"

function countdown(){
 
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje) / 1000;
    const dias =  Math.floor((segTotal / 3600 / 24));
    const horas =  Math.floor((segTotal/3600) % 24);
    const minutos = Math.floor(segTotal / 60) % 60;
    const segundos = Math.floor(segTotal % 60);

    dia.innerHTML = `<b>${formatoTempo(dias)}D</b>`
    hora.innerHTML = `<b>${formatoTempo(horas)}H</b>`
    minuto.innerHTML = `<b>${formatoTempo(minutos)}M</b>`
    segundo.innerHTML = `<b>${formatoTempo(segundos)}S</b>`
}
function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

countdown()

setInterval(countdown, 1000)