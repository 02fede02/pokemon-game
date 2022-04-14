
const pokemon = ["Charmander", "Squirtirle", "Bulbasaur"];
let playerWins;
let playerScore = 0;
let computerScore = 0;

const charmander = document.querySelector(".charmander");
const squirtirle = document.querySelector(".squirtirle");
const bulbasaur = document.querySelector(".bulbasaur");

const playerScoreMark = document.querySelector(".player-score");
const computerScoreMark = document.querySelector(".computer-score");
const result = document.querySelector(".result");

charmander.addEventListener("click", () => {
    const playerSelection = pokemon[0];
	const computerChoosen = computerPlay();
	playRound(playerSelection, computerChoosen);
	game();
})

squirtirle.addEventListener("click", () => {
    const playerSelection = pokemon[1];
	const computerChoosen = computerPlay();
	playRound(playerSelection, computerChoosen);
	game();
})

bulbasaur.addEventListener("click", () => {
    const playerSelection = pokemon[2];
	const computerChoosen = computerPlay();
	playRound(playerSelection, computerChoosen);
	game();
})

function computerPlay() {
	let numb = Math.floor(Math.random() * (3 - 0) + 0);
	return pokemon[numb];
}

function playRound (playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		playerWins = undefined;
		result.textContent = `It's a draw, you choose the same ${playerSelection}`;
	}
	else if (playerSelection === "Charmander" && computerSelection === "Squirtirle" ) {
		playerWins = false;
		result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
	} else if (playerSelection === "Charmander" && computerSelection === "Bulbasaur") {
		playerWins = true;
		result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
	}  else if (playerSelection === "Squirtirle" && computerSelection === "Bulbasaur") {
		playerWins = false;
		result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
	} else if (playerSelection === "Squirtirle" && computerSelection === "Charmander") {
		playerWins = true;
		result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
	}  else if (playerSelection === "Bulbasaur" && computerSelection === "Charmander") {
		playerWins = false;
		result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
	} else if (playerSelection === "Bulbasaur" && computerSelection === "Squirtirle") {
		result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
		playerWins = true;
	}
}

function game() {
	//let playerScore = 0;
	//let computerScore = 0;
	//for (let i = 0; i < 5; i++) {	
		//const numb = parseInt(prompt(`Choose a pokemon(enter the number):\n1: Charmander \n2: Squirtirle\n3: Bulbasaur`));
		//const playerSelection = pokemon[numb - 1];
		//const computerChoosen = computerPlay();
		//playRound(playerSelection, computerChoosen);
		if (playerWins === true){
			playerScore ++;
            playerScoreMark.textContent = `Player score: ${playerScore}`;
		} else if (playerWins === false) {
			computerScore++;
            computerScoreMark.textContent = `Computer score: ${computerScore}`
		} 
		console.log(playerWins, playerScore, computerScore)
	// Habria que cerrar el for con } 
	if (playerScore === 5) {
		result.textContent = "You won the game";
	} else if (computerScore === 5) {
		result.textContent = "You lose the game";
	}
		//else {
		//console.log("It's a draw");
	//}
}  


