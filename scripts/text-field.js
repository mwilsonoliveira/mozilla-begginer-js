var paragrafo = document.getElementById("meu-paragrafo")
var botao = document.getElementById("meu-botao")
var input = document.querySelector("#meu-input text")

botao.addEventListener("click", ativaParagrafo)

function ativaParagrafo(){
  paragrafo.innerHTML = "Teste"
}

