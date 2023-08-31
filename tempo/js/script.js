//variavel com acesso a minha chave da api
const key = ""
//dom
const inputCidade = document.querySelector(".input-cidade")
const botaoBusca = document.querySelector(".botao-busca")
const cidade = document.querySelector(".cidade")
const temp = document.querySelector(".temp")
const textoPrevisao = document.querySelector(".texto-previsao")
const imgPrevisao = document.querySelector(".img-previsao")

//Eventos
botaoBusca.addEventListener('click', clickBotao)


//funções
function clickBotao(){
    //pegar os dados digitados no campo input
    const valorDigitado = inputCidade.value
    //console.log(valorDigitado)
    buscarCidade(valorDigitado)

}
//async é usado para funções assíncronas
async function buscarCidade(valorDigitado){
    //await é usado para esperar a resposta
    const dados = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${valorDigitado}&appid=${key}&units=metric&lang={pt_br}`
    ).then(resposta=>resposta.json())
    //then é usado para traduzir para alguma linguagem

    //console.log(dados)

    mostrarNaTela(dados)
}

function mostrarNaTela(dados){
    cidade.textContent = "Tempo em " + dados.name
    temp.innerHTML = Math.floor(dados.main.temp) + "°C"
    imgPrevisao.src = `https://openweathermap.org/img/wn/${dados.weather.icon[0]}.png`
    textoPrevisao.innerHTML = dados.main.weather.array

}
