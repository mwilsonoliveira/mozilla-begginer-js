var fade = document.getElementById("p-fade");
var testNoFade = 28;

function clicaAlert(){
  alert("Hahahahah! Aconteceu!");
  var link = document.getElementById("alerta");
  link.textContent  = "Já era, aconteceu!";
}

function clicaFade(){
  alert("fadeou! " + testNoFade);
  fade.hidden = false;
}