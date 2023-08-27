//Dom
const lampada = document.querySelector("#lampada")
const acender = document.querySelector("#acender")
const apagar = document.querySelector("#apagar")

//Eventos
lampada.addEventListener('dblclick', quebrarLampada)
acender.addEventListener('click', acenderLampada)
apagar.addEventListener('click', apagarLampada)

//Função
function quebrarLampada(){
    lampada.src="images/quebrada.jpg"
}
function acenderLampada(){
    lampada.src="images/acesa.gif"
}
function apagarLampada(){
    lampada.src="images/apagada.gif"
}
