const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const dia = document.querySelector("#dia");

//const tempo = setInterval(relogio, 1000)
//setInterval(função, tempo em milisegundo)
setInterval(relogio, 1000);

function relogio() {

  //como precisa acessar a cada segundo tem que ser declarado dentro da função
  let dados = new Date();
  let h = dados.getHours();
  let m = dados.getMinutes();
  let s = dados.getSeconds();

  //Para descobrir a quantidade de dias que faltam
  //new Date(ano, mes, dia)
  let diferenca = dados - new Date(2023, 0, 1);
  let diasTotais = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  
    h = 24 - h
    m = 59 - m
    s = 59 - s

    if (h < 10) {
        h = "0" + h; 
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

  horas.textContent =  h;
  minutos.textContent = m;
  segundos.textContent = s;
  dia.textContent = 365 - diasTotais;
  
  }

