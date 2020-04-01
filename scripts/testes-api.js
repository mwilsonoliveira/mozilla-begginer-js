var ajax = document.getElementById('cidades');
var cidade = document.createElement('p');
var estado = document.createElement('p');

axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/4318705')
    .then(function(response){
        cidade.textContent = response.data.nome;
        estado.textContent = response.data.microrregiao.mesorregiao.UF.nome;
        ajax.appendChild(cidade);
        ajax.appendChild(estado);
        console.log(response.data);
        console.log(response.data.microrregiao.mesorregiao.UF.nome);
    })
    .catch(function(error){
        console.warn(error);
    });