var ajax = document.getElementById('ajax');
var conteudo = document.createElement('p');

//Jeito melhor de fazer o que foi feito acima.
var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/mwilsonoliveira');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    }
  });
}

minhaPromise()
  .then(function(response) {
    conteudo.textContent = JSON.stringify(response.login);
    ajax.appendChild(conteudo);
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });