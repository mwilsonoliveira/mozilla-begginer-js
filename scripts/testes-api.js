var ajax = document.getElementById('cidades');
var cidade = document.createElement('p');
var estado = document.createElement('p');

axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/4318705')
    .then(function(response){
        cidade.textContent = response.data.nome;
        estado.textContent = response.data.microrregiao.mesorregiao.UF.nome;
        ajax.appendChild(cidade);
        ajax.appendChild(estado);
    })
    .catch(function(error){
        console.log(error)
    });

function searchCep () {
    // Inicia o preloader
    startPreloader();

    // Recupera o value do input cep
    let cep = document.getElementById('cep').value

    // Inicia requisição AJAX com o axios
    axios.get(`http://api.postmon.com.br/v1/cep/${cep}`, {})
            .then(response => {
                showResults(response.data)
            })
            .catch(error => {
                // Mostra a div com o erro
                document.getElementById('error').style.display = 'block'
        
                // Mostra a mensagem
                document.getElementById('error').innerHTML = 'Erro inesperado'
            })
            .finally(() => endPreloader ())

        event.preventDefault()
}

function showResults (address) {
    // Mostra a div com o resultado
    document.getElementById('results').style.display = "block"
 
    // Mostra os resultados:
    document.getElementById('results').innerHTML = `
        <p><b>Bairro: </b> ${address.bairro} </p>
        <p><b>Cidade: </b> ${address.cidade} </p>
        <p><b>Logradouro: </b> ${address.logradouro} </p>
        <p><b>Cep: </b> ${address.cep} </p>
    `
}

function startPreloader () {
    // Ocultar a div de erro
    document.getElementById('error').style.display = 'none'

    // Exibe a div de preloader
    document.getElementById('preloader').style.display = 'block'
    
    // Limpa os dados do resultado:
    document.getElementById('results').innerHTML = ''
 
    // Oculta a div com o resultado
    document.getElementById('results').style.display = 'none'
}
 
function endPreloader () {
    // Oculta a div de preloader
    document.getElementById('preloader').style.display = 'none'
}