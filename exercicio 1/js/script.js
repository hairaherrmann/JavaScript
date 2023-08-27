const resultado = document.querySelector("#resultado")

var nota1 = 7.3
var nota2 = 6.6
var nota3 = 7.1

var mediaFinal = (nota1+nota2+nota3)/3
if (mediaFinal >= 7) {
    resultado.innerHTML = "APROVADO"
} else if (mediaFinal < 4) {
    resultado.innerHTML = "REPROVADO"
} else {
    resultado.innerHTML = "PROVA FINAL"
}
//Imprimi algo na variavel selecionada
//resultado.innerHTML = soma
