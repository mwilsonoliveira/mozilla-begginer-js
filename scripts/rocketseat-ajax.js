/* Isso aqui é um ajax raiz. Ele tá abrindo um XML request
e jogando em uma variável qualquer chamada xhr.
*/
var xhr = new XMLHttpRequest();

//Pronto, agora já podemos acessar as propriedades da função,
//primeiro pegando um link da API do github no meu usuário.
xhr.open('GET', 'https://api.github.com/users/mwilsonoliveira');
//Nessa requisição sempre é necessário mandar algo, nesse caso
//foi um null pra ele.
xhr.send(null);

/*Agora na propriedade "onreadystatechange" jogamos uma função.
Essa função verifica se o estado é '4' ou seja, se está ok,
e aí então retorna em forma de JSON, o texto que veio desse 
request */
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}