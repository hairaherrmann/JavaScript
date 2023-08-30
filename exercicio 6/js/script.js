//dom
const nota1 = document.querySelector("#nota1")
const nota2 = document.querySelector("#nota2")
const nota3 = document.querySelector("#nota3")
const calcular = document.querySelector("#calcular")
const fechar = document.querySelector("#fechar")
const resultado = document.querySelector("#resultado")
const modal = document.querySelector(".modal")
const entrada = document.querySelector('#entrada');
const nome = document.querySelector("#nome")
const saudacao = document.querySelector('#saudacao')

//função

calcular.addEventListener('click', ()=>{

    if (!nome.value || !nota1.value || !nota2.value || !nota3.value) {
        alert("Preencha todos os campos");
        return; // Sai da função se algum campo estiver vazio
    }
    
    entrada.style.display = 'none';
    modal.style.display = 'block';
    //new date
    let dados = new Date()
    let h = dados.getHours()

    if (h > 0 && h < 13){
        saudacao.innerHTML = `Bom dia, ${nome.value}!`
    } else if (h > 12 &&  h < 19){
        saudacao.innerHTML = `Bom dia, ${nome.value}!`
    } else {
        saudacao.innerHTML = `Bom dia, ${nome.value}!`
    }

        const nota1Value = parseFloat(nota1.value);
        const nota2Value = parseFloat(nota2.value);
        const nota3Value = parseFloat(nota3.value);
        const media = (nota1Value + nota2Value + nota3Value) / 3;
    
        if (media >= 7) {
            resultado.innerHTML = `Você foi aprovado(a) com média ${media.toFixed(2)}`;
        } else if (media < 4) {
            resultado.innerHTML = `Você foi reprovado(a) com média ${media.toFixed(2)}`;
        } else {
            resultado.innerHTML = `Você foi para prova final com média ${media.toFixed(2)}`;
        }
})

fechar.addEventListener('click', ()=>{
    entrada.style.display = 'block';
    modal.style.display = 'none';

})