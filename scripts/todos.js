//Pega os elementos no HTML
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
//Grava em uma variável um JSON em local storage, ou seja,
//uma lista local chamada 'list_todos' ou, se não der, traz vazio.
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//Função que renderiza o array todos
function renderTodos() {
  //Limpa a lista primeiramente
  listElement.innerHTML = '';
  //Percorre o array para cada 'todo' de 'todos'
  for (todo of todos) {
    //Cria um elemento list item no HTML e joga numa variável
    var todoElement = document.createElement('li');
    //Cria um text node com a posição do array e joga numa variável
    var todoText = document.createTextNode(todo);
    //Cria um elemento a e joga numa variável
    var linkElement = document.createElement('a');
    //Seta o atributo do a para o href como # pra não navegar
    linkElement.setAttribute('href', '#');
    //Pega a posição todo do array e joga em uma variável
    var pos = todos.indexOf(todo);
    //Seta o atributo onclick com a função deleteTodo(posição) do link
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    //Cria um texto 'Excluir' e joga numa variável
    var linkText = document.createTextNode('Excluir');

    //Pega todas as variáveis e instancia tudo no HTML
    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

//Renderiza o array
renderTodos();

//Função para adicionar todos
function addTodo() {
  //Pega o elemento value do input e joga numa variável
  var todoText = inputElement.value;

  //Dá um push no array com o texto pego no input
  todos.push(todoText);
  //Seta o valor do input para branco
  inputElement.value = '';
  //Renderiza o array
  renderTodos();
  //Chama a função para salvar o que foi feito no local
  saveToStorage();
}

//Joga a função para adicionar todos na propriedade Onclick do botão
buttonElement.onclick = addTodo;

//Função para deletar todo (pega uma posição)
function deleteTodo(pos) {
  //Essa função splice remove (1) item na posição informada
  todos.splice(pos, 1);
  //Renderiza o array
  renderTodos();
  //Chama a função para salvar o que foi feito no local
  saveToStorage();
}

//Função para salvar o que foi feito no local
function saveToStorage(){
  
  /*A localStorage é uma função do javascript, tu pega o item
  E joga via JSON porque JSON é um objeto Javascript, só que
  string! aí tu da um stringify no array que tu quer.
  Se tu acessar no navegador a aba "Application > Local Storage"
  Tu consegue ver essa bagaça*/

  localStorage.setItem('list_todos', JSON.stringify(todos));
}