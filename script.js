//Initial values
const pokemon = ["Charmander", "Squirtirle", "Bulbasaur"];
let playerWins;
let playerScore = 0;
let computerScore = 0;


//Selecting user pokemon
const charmander = document.querySelector(".charmander");
const squirtirle = document.querySelector(".squirtirle");
const bulbasaur = document.querySelector(".bulbasaur");

const playerScoreMark = document.querySelector(".player-score");
const computerScoreMark = document.querySelector(".computer-score");
const result = document.querySelector(".result");
const container = document.querySelector(".container");
const btnRestart = document.querySelector(".btn-restart");
//Capaz que si pongo para que chekkee cual es la clase y ahi darle la seleccion del jugador

charmander.addEventListener("click", (e) => {
	const playerSelection = pokemon[0];
	const computerChoosen = computerPlay();
	playRound(playerSelection, computerChoosen);
	game();
})

squirtirle.addEventListener("click", (e) => {
    const playerSelection = pokemon[1];
	const computerChoosen = computerPlay();
	playRound(playerSelection, computerChoosen);
	game();
})

bulbasaur.addEventListener("click", (e) => {
    const playerSelection = pokemon[2];
	const computerChoosen = computerPlay();
	playRound(playerSelection, computerChoosen);
	game();
})

btnRestart.addEventListener("click", () => {
	playerWins = undefined;
	playerScore = 0;
	computerScore = 0;
	result.textContent = "";
	playerScoreMark.textContent = `Player score: ${playerScore}`;
	computerScoreMark.textContent = `Computer score: ${computerScore}`;
	btnRestart.style.display = "none";
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
		//Gana squirtrle
		container.style.background = "#58dae8";
	} else if (playerSelection === "Charmander" && computerSelection === "Bulbasaur") {
		//Gana Charmander
		playerWins = true;
		result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
		container.style.background = "#ff851a";
	}  else if (playerSelection === "Squirtirle" && computerSelection === "Bulbasaur") {
		//Gana Bulbasaur
		playerWins = false;
		result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
		container.style.background = "#5bb541";
	} else if (playerSelection === "Squirtirle" && computerSelection === "Charmander") {
		//Gana Squirtirle
		playerWins = true;
		result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
		container.style.background = "#58dae8";
	}  else if (playerSelection === "Bulbasaur" && computerSelection === "Charmander") {
		//Gana Charmander
		playerWins = false;
		result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
		container.style.background = "#ff851a";
	} else if (playerSelection === "Bulbasaur" && computerSelection === "Squirtirle") {
		//Gana bulbasaur
		result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
		playerWins = true;
		container.style.background = "#5bb541";
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
		btnRestart.style.display = "flex";

	} else if (computerScore === 5) {
		result.textContent = "You lose the game";
		btnRestart.style.display = "flex";
	}
		//else {
		//console.log("It's a draw");
	//}
}  


