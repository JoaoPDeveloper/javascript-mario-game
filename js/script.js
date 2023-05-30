const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

document.getElementById('gif_mario').draggable = false
document.getElementById('pipe_game').draggable = false
document.getElementById('cloud_game').draggable = false
document.getElementById('mario_logo').draggable = false

let pontuacao = 0;
let justCount = true;

function capturarTecla(event) {
  if (justCount) {
    pontuacao++;
    exibirPontuacao();
    novaPontuacao();
    IncrivelPontuacao();
    justCount = false;
    setTimeout(resetContagem, 1000); 
    verificarPontuacao();
    verificarNovaPontuacao();
    verificarIncrivel();
  }
}
function resetContagem() {
  justCount = true;
}

function exibirPontuacao() {
  const pontuacaoElement = document.getElementById('pontuacao');
  pontuacaoElement.textContent = pontuacao;
}

function novaPontuacao() {
  const pontuacaoElement = document.getElementById('pontuacao');
  pontuacaoElement.textContent = pontuacao;
}

function IncrivelPontuacao() {
  const pontuacaoElement = document.getElementById('pontuacao');
  pontuacaoElement.textContent = pontuacao;
}

function verificarPontuacao() {
  if (pontuacao > 4) {
    exibirParabens();
  }
}
function verificarNovaPontuacao() {
  if(pontuacao >= 9){
    novoParabens();
  }
}
function verificarIncrivel () { 
  if(pontuacao > 15){
    incrivelParabens();
  }
 }

function exibirParabens() {
const mensagemParabens = document.getElementById('mensagemParabens');
mensagemParabens.style.display = 'block'
setTimeout(function() {
  mensagemParabens.style.display = 'none'
}, 5000);
}
function novoParabens() {
  const novaMensagemParabens = document.getElementById('novaMensagemParabens');
  novaMensagemParabens.style.display = 'block'
  setTimeout(function() {
    novaMensagemParabens.style.display = 'none'
  }, 4000);
  }
function incrivelParabens() {
    const mensagemTotalParabens = document.getElementById('mensagemTotalParabens');
    mensagemTotalParabens.style.display = 'block'
    setTimeout(function() {
      mensagemTotalParabens.style.display = 'none'
    }, 4000);
    }

document.onkeydown = capturarTecla;

exibirPontuacao();
novaPontuacao();
IncrivelPontuacao();

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 110 && pipePosition > 40 && marioPosition < 20) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.style.bottom 
    mario.src = "/images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";
    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keypress", jump);

var btn = document.createElement("recarregarAPagina")

btn.innerHTML = "Restart Game";
btn.addEventListener("click", function () {
  })

  var recarregarAPagina = document.getElementById('recarregarAPagina');
  recarregarAPagina.appendChild(btn);  

