var contadorNovoItem = 1
var minhaLista = document.querySelector("#minha-lista")
//var minhaLista = document.getElementById("minha-lista")
var meuBotao = document.getElementById("meu-botao")
var meuCabecalho = document.getElementById("meu-cabecalho")
var itensLista = document.querySelectorAll("#minha-lista li")
//var itensLista = document.getElementById("minha-lista").getElementsByTagName("li")

minhaLista.addEventListener("click", ativaItem)

function ativaItem(e){
  if(e.target.nodeName == "LI"){
    meuCabecalho.innerHTML = e.target.innerHTML
  }
}

meuBotao.addEventListener("click", criaNovoItem)

function criaNovoItem(){
  minhaLista.innerHTML += "<a href='#'><li>Novo Item " + contadorNovoItem + "</li></a>"
  contadorNovoItem++
}