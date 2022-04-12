
const pokemon = ["Charmander", "Squirtirle", "Bulbasaur"];
let playerWins;

function computerPlay() {
	let numb = Math.floor(Math.random() * (3 - 0) + 0);
	return pokemon[numb];
}

function playRound (playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		console.log(`It's a draw, you choose the same ${playerSelection}`);
	}
	else if (playerSelection === "Charmander" && computerSelection === "Squirtirle" ) {
		playerWins = false;
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
	} else if (playerSelection === "Charmander" && computerSelection === "Bulbasaur") {
		playerWins = true;
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
	}  else if (playerSelection === "Squirtirle" && computerSelection === "Bulbasaur") {
		playerWins = false;
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
	} else if (playerSelection === "Squirtirle" && computerSelection === "Charmander") {
		playerWins = true;
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
	}  else if (playerSelection === "Bulbasaur" && computerSelection === "Charmander") {
		playerWins = false;
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
	} else if (playerSelection === "Bulbasaur" && computerSelection === "Squirtirle") {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
		playerWins = true;
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {	
		const numb = parseInt(prompt(`Choose a pokemon(enter the number):\n1: Charmander \n2: Squirtirle\n3: Bulbasaur`));
		const playerSelection = pokemon[numb - 1];
		const computerChoosen = computerPlay();
		playRound(playerSelection, computerChoosen);
		if (playerWins === true){
			playerScore ++;
		} else if (playerWins === false) {
			computerScore++;
		} 
	}
	if (playerScore > computerScore) {
		console.log("You won");
	} else if (playerScore < computerScore) {
		console.log("You lose");
	}
		else {
		console.log("It's a draw");
	}
}  

game();
