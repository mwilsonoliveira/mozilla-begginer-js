/* Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário tiver mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch */
var container = document.getElementById('container');
var idade = document.createElement('p');

function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() { 
      if(idade >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

checaIdade(28)
  .then(function(response) {
    idade.textContent = "Maior que 18";
    container.appendChild(idade);
    console.log("Maior que 18");
    console.log(idade);
  })
  .catch(function(error) {
    idade.textContent = "Menor que 18";
    container.appendChild(idade);
    console.log("Menor que 18");
  });
   