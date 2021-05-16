const $ = document.querySelector.bind(document);
const relogio = $(".relogio");
const adicionaZero = numero => numero <10?`0${numero}`:`${numero}`;
let [segundos,minutos,horas] = [1,0,0];
let cronometro;

$(".iniciar").addEventListener("click",function(){
  relogio.style.color = "black";
  clearInterval(cronometro);
  cronometro = setInterval(function(){

    if(segundos === 60){
      segundos = 0;
      minutos++
    }

    if(minutos === 60){
      minutos = 0;
      horas++
    }

    if(horas === 23 && minutos === 59 && segundos === 59) clearInterval(cronometro) 
      relogio.innerText = `${adicionaZero(horas)}:${adicionaZero(minutos)}:${adicionaZero(segundos)}`;
      segundos++
  },1000);
});

$(".pausar").addEventListener("click",function(){
  
  relogio.style.color = "red";
  clearInterval(cronometro)
});

$(".zerar").addEventListener("click",function(){
  
  clearInterval(cronometro);
  [segundos,minutos,horas] = [1,0,0];
  relogio.innerText = "00:00:00";
  relogio.style.color = "black";
})


