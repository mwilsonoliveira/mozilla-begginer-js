// exercício #1
//Retorna uma string com a descrição abaixo
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
 };

function retornaValor(param1) {
  var retorno;

  retorno = "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + " '" + endereco.rua + "' " + " com nº " + endereco.numero + "."

  return retorno;
}

var exibe1 = retornaValor(endereco);

document.getElementById("exercicio-1").innerHTML = exibe1;

// exercício #2
//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
var intervalo = [];

function pares(x, y) {
  // código aqui
  for(var i=x; i<=y; i++){
    if(i % 2 === 0){
      intervalo.push([i]);
    }
  }
}

pares(32, 44);

document.getElementById("exercicio-2").innerHTML = intervalo;

// exercício #3
//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
  // código aqui
  return skills.indexOf("Javascript") !== -1;
}
var skills = ["Javascript", "ReactJS", "React Native"];

document.getElementById("exercicio-3").innerHTML = temHabilidade(skills);

// exercício #4
//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
    if(anos <= 1)
      return "Iniciante";
    if(anos > 1 && anos <= 3)
      return "Intermediário";
    if(anos > 3 && anos <= 6)
      return "Avançado";
    else
      return "Jedi Master";
}
var anosEstudo = 3;
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
document.getElementById("exercicio-4").innerHTML = experiencia(anosEstudo);

// exercício #5

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function retornaOrganizado(){
  var group = []
  for(user of usuarios){
    group.push("O " + user.nome + " possui as habilidades: " + user.habilidades.join(", "));
  }
  return group;
}

console.log(retornaOrganizado(usuarios));
document.getElementById("exercicio-5").innerHTML = retornaOrganizado(usuarios);