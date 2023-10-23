function getComputerChoice() {
  const choices = ["scissor", "paper", "rock"];
  let randumNumb = Math.floor(Math.random() * 3);
  let choice = choices[randumNumb]
  return choice
}

function playRound(playerSelect, computerSelect) {
  let display;
  if (playerSelect === computerSelect) {
    display = "It's a tie";
  } else if(playerSelect === 'scissor') {
    if (computerSelect === 'paper') {
      display = "You Win!";
    } else {
      display = "You Lose!";
    }
  } else if(playerSelect === 'paper') {
    if (computerSelect === 'rock') {
      display = 'You win!';
    } else {
      display = 'You Lose';
    } 
  } else if(playerSelect === 'rock') {
    if (computerSelect === 'scissor') {
      display = 'You Win!';
    } else {
      display = 'You Lose!';
    } 
  } else {
    display = 'invalid selection';
  }
  const displayResult = document.querySelector('.display');
  displayResult.textContent = display;
}

const btn = document.querySelectorAll('button');

btn.forEach( (item) => { 
  item.addEventListener('click', (e)=> {
      let playerClicked = e.target.getAttribute('id');
    
      const computerChoice = getComputerChoice();
      const playerChoice = playerClicked;

      playRound(playerChoice, computerChoice);
    }
  ) 
});