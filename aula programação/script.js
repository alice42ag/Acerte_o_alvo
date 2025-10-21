//Variáveis criada para o jogo; valores podem ser alterados
let score = 0; //Pontuação do jogador
let time = 30; //Tempo do jogo em segundos
let gameInterval; //Vai guardar o temporizador do tempo
let moveInterval; //Vai guardar o temporizador do movimento do alvo

//Elemntos do HTML guardaos em variáveis; valores não podem ser alterados
const target = document.getElementById("target"); //Obtém a <div> do alvo que está no HTML
const scoreDisplay = document.getElementById("score"); //Obtém o <span> onde exebimos a pontuação no HTML
const timeDisplay = document.getElementById("time"); //Obtém o <span> onde exebimos o tempo no HTML
const startBtn = document.getElementById("start-btn"); //Obtém o botão de iniciar/reiniciar do HTML

//Iniciar o jogo 
function startGame() {  //Declara a função que prepara tudo para começar uma nova partida

    //Zera os valores
    score = 0; //Zera a pontuação para o jogo iniciar
    time = 30; //Recomeça o tempo para 30 segundos
    scoreDisplay.textContent = score; //Mostra a pontuação zerada na tela
    timeDisplay.textContent = time; //Mostra o tempo inicial na tela

    //Limpa intervalos antigos (caso esteja reiniciando)
    clearInterval(gameInterval); //Para qualquer contagem regressiva que ainda esteja ativa
    clearInterval(moveInterval); //Para qualquer movimentação automática do alvo que ainda esteja ativa

    moveTarget(); //Posiciona e exibe o alvo imediatamente ao iniciar

    moveInterval = setInterval(moveTarget, 1000); //Move o alvo a cada 1 segundo
    gameInterval = setInterval(countdown, 1000); //Chama a função de contagem regressiva a cada 1 segundo

}

startBtn.onclick = startGame; //Código de acionamento do botão (chama a função de inicio de jogo)


//Função para mover o alvo para posição aleatória
function moveTarget() { //Declara a função responsável por posicionar o alvo em posições aleatórias
    const gameArea = document.getElementById("game-area"); //Pega a área do jogo para saber seus limites

    //Pega o tamanho máximo para não deixar o alvo sair dessa área
    const maxX = gameArea.clientWidth - target.clientWidth; //Calcula a maior posição x possível (largura área - largura alvo)
    const maxY = gameArea.clientHeight - target.clientHeight; //Calcula a maior posição y possível (altura área - altura alvo)

    //Gera posições aleatórias dentro da área
    const randonX = Math.floor(Math.random() * maxX); //Gera um número inteiro aleatório entre 0 e maxX
    const randomY = Math.floor(Math.random() * maxY); //Gera um número inteiro aleatório entre 0 e maxY

    //Coloca o alvo na posição sorteada 
    target.style.left = randonX + "px"; //Atualiza a posição horizontal (esquerda) do alvo em pixels
    target.style.top = randomY + "px"; //Atualiza a posição vertical do alvo em pixels

    //Faz o alvo aparecer (se estava escondido)
    target.style.display = "block"; //Garante que o alvo esteja visível durante o jogo
}