//O jeito mais simples de se fazer XMLHttp Requests, é pelo
//axios. Olha como fica a sintaxe utilizando ele. Bem reduzida.
var ajax = document.getElementById('ajax');
var conteudo = document.createElement('p');

axios.get('https://api.github.com/users/mwilsonoliveira')
  .then(function(response) {
    conteudo.textContent = response.data.login;
    ajax.appendChild(conteudo);
  })
  .catch(function(error) {
    console.warn(error);
  });