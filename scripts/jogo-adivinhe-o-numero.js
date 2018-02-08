// Selecionando os elementos HTML, pegando seus valores e inserindo nas variáveis 

var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.guesses');
var ultimoResultado = document.querySelector('.lastResult');
var baixoOuAlto = document.querySelector('.lowOrHi');

var envioPalpite = document.querySelector('.guessSubmit');
var campoPalpite = document.querySelector('.guessField');

var contagemPalpites = 1;
var botaoReinicio;

// Função que confere o número do palpite inserido

function conferirPalpite() {
  // Coloca o valor do "campoPalpite" garantido como um número, na variável "palpiteUsuario"
  var palpiteUsuario = Number(campoPalpite.value);
  // Se esse número for igual a 1 (já tiver sido gerado uma vez) escreve o texto no <p> de "guesses"
  if (contagemPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: ';
  }
  // Adiciona o próximo palpite e um espaço, cada vez que passar pela função
  palpites.textContent += palpiteUsuario + ' ';
  // Se o palpite for o número correto, já finaliza com mensagem de parabéns
  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = 'Parabéns! Você acertou!';
    ultimoResultado.style.backgroundColor = 'green';
    baixoOuAlto.textContent = '';
    // Chama a função fim de jogo
    configFimDeJogo();
  // Se a contagem de palpites chegar a 10, termina as chances e finaliza
  } else if (contagemPalpites === 10) {
    ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
    baixoOuAlto.textContent = '';
    // Chama a função fim de jogo
    configFimDeJogo();
  // Se não for as coisas anteriores, é sinal que é uma tentativa  
  } else {
    // Pinta o resultado de vermelho com mensagem de "erro"
    ultimoResultado.textContent = 'Errado!';
    ultimoResultado.style.backgroundColor = 'red';
    // Se o palpite for menor que o número, avisa que está baixo
    if(palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
    // Se for maior que o número, avisa que está alto
    } else if(palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito alto!';
    }
  }
  // Aumenta uma contagem de tentativas, zera o valor do campo e dá foco nele
  contagemPalpites++;
  campoPalpite.value = '';
  campoPalpite.focus();
}
/* Esse evento é acionado quando o usuário clica (recebe como parâmetro), 
e aciona a função "conferirPalpite" em resposta */
envioPalpite.addEventListener('click', conferirPalpite);
// Essa função configura o final do aplicativo
function configFimDeJogo() {
  // Seta o campo de palpites como desabilitado
  campoPalpite.disabled = true;
  // Seta o botão de envio como desabilitado
  envioPalpite.disabled = true;
  // Cria um elemento Botão para reiniciar o jogo e joga na variável "botaoReinicio"
  botaoReinicio = document.createElement('button');
  // No elemento texto do novo botão criado, insere o texto abaixo
  botaoReinicio.textContent = 'Iniciar novo jogo';
  // Pega esse botão e joga no corpo do documento
  document.body.appendChild(botaoReinicio);
  // Adiciona um evento nesse botão recém criado, que ao clicar chama a função "reiniciarJogo"
  botaoReinicio.addEventListener('click', reiniciarJogo);
}
// Função que reinicia o jogo de fato
function reiniciarJogo(){
  // Seta a variável contagemPalpites para 1
  contagemPalpites = 1;
  /* Pega os elementos <p> da div "resultadoParas" e joga numa variável 
  "que é um array desses elementos" */
  var reiniciarParas = document.querySelectorAll('.resultadoParas p');
  /* Agora com os <p> selecionados em um array, ele percorre esse array e "limpa" 
  as propriedades de texto deles*/
  for(var i = 0; i < reiniciarParas.length; i++){
    reiniciarParas[i].textContent = '';
  }
  // Remove o botão de reset do documento
  botaoReinicio.parentNode.removeChild(botaoReinicio);

  // Habilita novamente o campo
  campoPalpite.disabled = false;
  // Volta à vida o botão de envio
  envioPalpite.disabled = false;
  // Limpa o campo de palpite
  campoPalpite.value = '';
  // Dá foco novamente ao campo
  campoPalpite.focus();
  // Bota o estilo de fundo do resultado pra branco
  ultimoResultado.style.backgroundColor = 'white';
  // Joga um novo número aleatório na variável "numeroAleatorio"
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}