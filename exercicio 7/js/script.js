//dom
const sbruto = document.querySelector("#sbruto")
const calcular = document.querySelector("#calcular")
const resultado = document.querySelector("#resultado")
const nome = document.querySelector("#nome")

//função

calcular.addEventListener('click', ()=>{

    if (!nome.value || !sbruto.value) {
        alert("Preencha todos os campos");
        return; // Sai da função se algum campo estiver vazio
    }
    
    //new date
/*  let dados = new Date()
    let h = dados.getHours()
    const sbrutoValue = parseFloat(sbruto.value);

    if (h > 0 && h < 13){
        saudacao.innerHTML = `Bom dia, ${nome.value}!`
    } else if (h > 12 &&  h < 19){
        saudacao.innerHTML = `Bom dia, ${nome.value}!`
    } else {
        saudacao.innerHTML = `Bom dia, ${nome.value}!`
    } */

    //calculo salário
    const sbrutoValue = parseFloat(sbruto.value);
    let sliquido
    if (sbrutoValue > 3500){
        sliquido = (sbrutoValue - (sbrutoValue * 0.18))
        sliquido = sliquido - (sbrutoValue * 0.05)
    } else {
        sliquido = (sbrutoValue - (sbrutoValue * 0.08))
        sliquido = sliquido - (sbrutoValue * 0.05)
    }
       
    resultado.innerHTML = `${sliquido.toFixed(2)}`;
        
})

function setTheme(){
    const data = new Date();
    const hora = data.getHours();
    const body = document.body;

    if (hora >= 5 && hora <= 17) {
        body.classList.remove('modo-escuro');
        body.classList.add('modo-claro');
        } else {
            body.classList.remove('modo-claro');
            body.classList.add('modo-escuro');
        }
    }

        // Verificar o modo com base na hora atual
        setTheme();
