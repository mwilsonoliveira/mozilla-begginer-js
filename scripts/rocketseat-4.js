var inputElement = document.getElementById('input');
var listElement = document.getElementById('ulRepo');

function renderizaRepo(repos) {
  for(repo of repos){
    const textElement = document.createTextNode(repo.name);
    const liElement = document.createElement('li');
    
    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

function renderizaLoading() {
  listElement.innerHTML = '';

  const textElement = document.createTextNode('Carregando...');
  const loadingElement = document.createElement('p');
  
  loadingElement.id = "loading";
  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function renderizaErro() {
  const textElement = document.createTextNode('Repositório não encontrado!');
  const errElement = document.createElement('p');

  errElement.style.color = "#F00";

  errElement.appendChild(textElement);
  listElement.appendChild(errElement);
}

function listaRepo() {
  listElement.innerHTML = '';
  var user = inputElement.value;

  renderizaLoading();

  axios.get("https://api.github.com/users/"+user+"/repos")
    .then(function(response){
      renderizaRepo(response.data);
      listElement.removeChild(loading);
    })
    .catch(function(error){
      renderizaErro();
      listElement.removeChild(loading);
    });
}