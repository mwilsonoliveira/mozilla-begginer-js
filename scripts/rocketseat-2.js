//Exercício #1 e #2

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

//captura uma parte do documento pra eu jogar coisa nele
var btnCriaBoxes = document.getElementById('criaBoxes');
var boxesElement = document.getElementById('boxes');

btnCriaBoxes.onclick = function () {
  //cria a caixa
  var box = document.createElement('div');
  //estiliza a caixa, que já é uma div
  box.style.margin = '5px';
  box.style.width = '100px';
  box.style.height = '100px';
  box.style.backgroundColor = '#f00';
  //quando o mouse tiver em cima desse bagulho que
  //to instanciando ele pega e chama a função que 
  //pega uma cor aleatória e joga numa estilização
  //desse bagulho.
  box.onmouseover = function () {
    box.style.backgroundColor = getRandomColor();
  }
  //joga 'append' o bagulho onde eu quero.
  //no caso dentro da div 'boxes'
  boxesElement.appendChild(box);
};

//Exercício #3

//arreio de nomes
var nomes = ["Wilson", "Wilson o the best", "Marcão das taquareira"];
//pega a div que vai abrigar os troço
var listaUls = document.getElementById('lista');

//for que percorre os itens do array
for(i=0;i<nomes.length;i++) {
  //cria um elemento UL e joga numa var item
  var item = document.createElement('ul');
  //pega a propriedade textContent da var item
  //e joga o nome na 'i' pra dentro dela
  item.textContent = nomes[i];
  //joga na div os uls criados
  listaUls.appendChild(item);
};

/* Também pode se fazer assim, que diga-se de passagem
é muito mais massa com esse "for" diferente!

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

for (nome of nomes) {
  var liElement = document.createElement('li');
  var textElement = document.createTextNode(nome);
  
  liElement.appendChild(textElement);
  listElement.appendChild(liElement);
}

*/

//Exercício #4

function adicionarNome() {
  //Pega o input e joga numa variavel
  var nome = document.getElementById('campo');
  //Pega atributo value e dá um push no array
  nomes.push(nome.value);
  
  //Cria um UL e joga na variavel item
  var item = document.createElement('ul');
  //Pega o conteudo do input e joga nesse conteudo da UL.
  item.textContent = nome.value;
  //Joga o item com os parâmetros na div lista
  listaUls.appendChild(item);
  //Limpa o campo
  nome.value = '';
}

/* Também pode se fazer assim

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function adicionar() {
  addItem(inputElement.value);
  inputElement.value = "";
}
for (nome of nomes) {
  addItem(nome);
}

*/