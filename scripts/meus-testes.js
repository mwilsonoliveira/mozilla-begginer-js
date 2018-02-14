var fade = document.getElementById("p-fade");

function clicaAlert(){
  alert("Hahahahah! Aconteceu!");
  var link = document.getElementById("alerta");
  link.textContent  = "Já era, aconteceu!";
}

function clicaFade(){
  fade.hidden = false;
}