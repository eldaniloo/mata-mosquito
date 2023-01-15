let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
  //1500
  criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
  //1000
  criaMosquitoTempo = 1000
}else if(nivel === 'superdificil'){
  //750
  criaMosquitoTempo = 700
}

//Adaptador da janela do navegador
function adaptScreenGameSize() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}
adaptScreenGameSize();

let cronometro = setInterval(function(){
  tempo -= 1

  if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
  }else{[
    document.getElementById('cronometro').innerHTML = tempo
  ]}
  
  
}, 1000)

//Posição aleátoria Mosquito
function randomPosition() {

  //remover mosquito anterior(se existir)
  if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3){
          window.location.href = 'fim-de-jogo.html'
        }else{
          document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'

          vidas++
  }}
        

  let positionX = Math.floor(Math.random() * largura) - 90;
  let positionY = Math.floor(Math.random() * altura) - 90;

  //Limitador de altura e largura
  if (positionX < 0) {
    positionX = 0
  } else {
    positionX
  }
  if (positionY < 0) {
    positionY = 0
  } else {
    positionY
  }

  //criar o elemento html
  let mosquito = document.createElement("img");
  mosquito.src = "img/mosquito.png";
  mosquito.className = randomSize() + ' ' + randomSide();
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = 'mosquito'
  mosquito.onclick = function () {
    this.remove()
  }

  document.body.appendChild(mosquito);
}

let criaMosquito = setInterval(function () {
  randomPosition();
}, criaMosquitoTempo)

//Tamanho aleátorio do mosquito
function randomSize() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}
//Move o mosquito de lado  
function randomSide() {
  let classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}


