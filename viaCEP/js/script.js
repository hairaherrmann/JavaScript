const botao = document.querySelector("#botao")


//evento
botao.addEventListener('click', consultaEndereco)

//funcoes


function consultaEndereco(){
    let cep = document.querySelector("#cep").value
    let url = `https://viacep.com.br/ws/${cep}/json/`

    if (cep.length !== 8){
        alert ('CEP INVÁLIDO!');
        return;
    }

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarEndereco(data)
            })
        });
    }


function mostrarEndereco(dados){
    let resultado = document.querySelector("#resultado");

    if (dados.erro) {
        resultado.innerHTML = "Não foi possível localizar endereço!!"
    } else {
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemeto}</p>
                            <p>Bairro: ${dados.bairro}</p>          
                            <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
    }
}

