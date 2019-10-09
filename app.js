let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const actionMessage = result_div.children[0];
const result_p1 = result_div.children[1];
const result_p2 = result_div.children[2];
const smallVsWord = 'vs.'.fontsize(3);

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function convertToImage(letter) {
  if (letter === 'r') {
    return `<img src="./assets/images/rock2.png" alt="">`;
  }
  if (letter === 'p') {
    return `<img src="./assets/images/paper2.png" alt="">`;
  } else {
    return `<img src="./assets/images/scissor2.png" alt="">`;
  }
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p1.classList.remove('hide');
  result_p2.classList.remove('hide');
  result_p1.innerHTML = `${convertToImage(
    user,
    )} ${smallVsWord} ${convertToImage(computer)}`;
    result_p2.innerHTML = `You win!`;
  scoreBoard_div.classList.add('green-glow');
  actionMessage.classList.add('hide');
  setTimeout(() => {
    scoreBoard_div.classList.remove('green-glow');
    result_p1.classList.add('hide');
    result_p2.classList.add('hide');
    actionMessage.classList.remove('hide');
  }, 2000);
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p1.classList.remove('hide');
  result_p2.classList.remove('hide');
  result_p1.innerHTML = `${convertToImage(
    user,
  )} ${smallVsWord} ${convertToImage(computer)}`;
  result_p2.innerHTML = `You lost...`;
  scoreBoard_div.classList.add('red-glow');
  actionMessage.classList.add('hide');
  setTimeout(() => {
    scoreBoard_div.classList.remove('red-glow');
    result_p1.classList.add('hide');
    result_p2.classList.add('hide');
    actionMessage.classList.remove('hide');
  }, 2000);
}

function draw(user, computer) {
  result_p1.classList.remove('hide');
  result_p2.classList.remove('hide');
  result_p1.innerHTML = `${convertToImage(
    user,
  )} ${smallVsWord} ${convertToImage(computer)}`;
  result_p2.innerHTML = `It's a draw.`;
  scoreBoard_div.classList.add('gray-glow');
  actionMessage.classList.add('hide');
  setTimeout(() => {
    actionMessage.classList.remove('hide');
    scoreBoard_div.classList.remove('gray-glow');
    result_p1.classList.add('hide');
    result_p2.classList.add('hide');
    actionMessage.classList.remove('hide');
  }, 2000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  const rock_div = document.getElementById('r');
  const paper_div = document.getElementById('p');
  const scissors_div = document.getElementById('s');
  rock_div.addEventListener('click', () => game('r'));
  paper_div.addEventListener('click', () => game('p'));
  scissors_div.addEventListener('click', () => game('s'));
}

function resetScore() {
  const button = document.getElementById('bt');
  button.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
  });
}

main();
resetScore();
