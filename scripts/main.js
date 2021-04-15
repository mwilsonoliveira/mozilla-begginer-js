/* MUDANDO O CABEÇALHO COM JAVASCRIPT

var meuCabecalho = document.querySelector('#h1-teste');
meuCabecalho.innerHTML = 'Hello world!';

*/


var myImage = document.querySelector('#firefox-image');
// Armazenando uma referência ao elemento de imagem na variável myImage

myImage.onclick = function(){
  // Fazendo o evento onclick dessa variável receber uma função anônima.
  var mySrc = myImage.getAttribute('src');
  // Salvando o valor do atributo src (Caminho) da imagem numa variável.
  if(mySrc === 'images/firefox-icon.png'){
  // Usando uma condicional para checar se o valor src é igual ao caminho da imagem original
    myImage.setAttribute('src','images/firefox2.png');
  /* Se for, nós mudamos o valor do src para o caminho da segunda imagem, 
    forçando a outra imagem a ser carregada dentro do elemento <image> */
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  /* Se não é (significando que já mudou), nós mudamos o valor src 
    de volta ao caminho da imagem original, para voltarmos ao que era antes. */
  }
}


var myButton = document.querySelector('#meu-botao');
// Armazenando uma referência ao elemento botão
var myHeading = document.querySelector('#h1-teste');
// Armazenando uma referência ao elemento H1

function setUserName(){
  var myName = prompt('Please enter your name');
  /* A função prompt() abre uma caixa de diálogo como o Alert e guarda 
    os dados inseridos quando o botão OK é pressionado */
  localStorage.setItem('name', myName);
  /* Agora, nós invocamos uma API chamada localStorage, 
    o que nos permite guardar dados no navegador para usarmos mais tarde.
    Nós usamos a função setItem() do localStorage para criar e guardar um item de dado chamado 'name', 
    e relaciona seu valor à variável  myName que contem o nome que o usuário digitou.  */
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  // Finalmente, nós associamos o innerHTML do cabeçalho a uma string, mais o nome do usuário.
}

if(!localStorage.getItem('name')){
  /* Primeiramente, esse bloco usa o operador de negação (NOT lógico representado pelo !) para checar
    se o dado name existe — se não existir, a função setUserName() executa para criá-lo */
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  /* Se ele já existir (isto é, se o usuário já tiver digitado quando visitou o site anteriormente), 
    nós recuperamos o nome guardado usando getItem() 
    O localStorage se refere ao item (name) ser salvo na máquina */
  myHeading.innerHTML = 'Mozilla is cool ' + storedName;
  /* Associamos o innerHTML do cabeçalho a uma string, mais o nome do usuário, 
    assim como fizemos dentro de setUserName() */
}

myButton.onclick = function(){
  setUserName();
  /* Finalmente, colocando o gerenciador de evento onclick no botão, para que quando clicado, 
    ele execute a função setUserName(). Isso permite ao usuário dar um novo nome 
    sempre que quiserem ao pressionar o botão */
}