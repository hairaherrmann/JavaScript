//Dom
const alvo = document.querySelector("#alvo")
const brasil = document.querySelector("#brasil")
const inglaterra = document.querySelector("#inglaterra")
const italia = document.querySelector("#italia")
const usa = document.querySelector("#usa")
const franca = document.querySelector("#franca")

//eventos
//addEventListener (evento, função)
brasil.addEventListener('click', bandBrasil)
inglaterra.addEventListener('click', bandInglaterra)
italia.addEventListener('click', bandItalia)
usa.addEventListener('click', bandUsa)
franca.addEventListener('click', bandFranca)

//funções
function bandBrasil() {
    alvo.src="images/01.jpg"
}
function bandInglaterra() {
    alvo.src="images/02.jpg"
}
function bandItalia() {
    alvo.src="images/03.jpg"
}
function bandUsa() {
    alvo.src="images/04.jpg"
}
function bandFranca() {
    alvo.src="images/05.png"
}


