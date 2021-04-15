var text = document.getElementById("p-fade"),
    linkFade = document.getElementById("linkFade"),
    testNoFade = 28;

function clicaAlert(){
  alert("Hahahahah! Aconteceu!");
  var link = document.getElementById("alerta");
  link.textContent  = "Já era, aconteceu!";
}

// classes show e hide estão no CSS, o JavaScript utiliza elas

function fadeIn(el) {
  el.classList.add('show');
  el.classList.remove('hide');
}

function fadeOut(el) {
  el.classList.add('hide');
  el.classList.remove('show');
}

linkFade.addEventListener('click', function() {
  if (text.className.indexOf('hide') !== -1) {
    fadeIn(text);
    this.innerHTML = 'Fade Out';
  } else {
    fadeOut(text);
    this.innerHTML = 'Fade In';
  }
});