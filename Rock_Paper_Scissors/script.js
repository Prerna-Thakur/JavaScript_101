const totalScore={computer:0,player:0}
function getComputerChoice() {
  const rpsChoice=['Rock','Paper','Scissors']
  const computerChoice=rpsChoice[Math.floor(Math.random()*3)]
  return computerChoice
}
function getResult(playerChoice, computerChoice) {
  let score
  if(playerChoice==computerChoice){
  score=0
  }
  else if(playerChoice=='Rock' && computerChoice=='Scissors'){
  score=1
  }
  else if(playerChoice=='Scissors' && computerChoice=='Paper'){
  score=1
  }
  else if(playerChoice=='Paper' && computerChoice=='Rock'){
  score=1
  }
  else{
  score=-1
  }
  return score
}

function showResult(score, playerChoice, computerChoice) {
  let resultDiv=document.getElementById('result')
  let handsDiv=document.getElementById('hands')
  let playerScore=document.getElementById('player-score')
  if(score==-1){
  	resultDiv.innerText="You Lose!"
  }else if(score==0){
  resultDiv.innerText="It's a Tie!"
  }else{
  resultDiv.innerText="You Won!"
  }
   playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}
function onClickRPS(playerChoice) {
  const computerChoice=getComputerChoice()
  const score=getResult(playerChoice.value,computerChoice)
  showResult(score, playerChoice.value, computerChoice)
}
function playGame() {
	let rpsButtons=document.querySelectorAll('.rpsButton')
	rpsButtons.forEach(rpsButton=>{
	rpsButton.onclick=()=>onClickRPS(rpsButton)})
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}
function endGame() {
  const resultDiv=document.getElementById('result')
  const handsDiv=document.getElementById('hands')
  const playerScore=document.getElementById('player-score')
  
  resultDiv.innerText=''
  handsDiv.innerText=''
  playerScore.innerText=''
}

playGame()
