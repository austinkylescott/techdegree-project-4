/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	constructor() {
		let missed = 0;
		let phrases = [];
		let activePhrase = null;
		const phrase = new Phrase('how are you');
		phrase.addPhraseToDisplay();
	}

	startGame() {
		//HIDE OVERLAY
		const overlay = document.querySelector('#overlay');
		overlay.style.display = 'none';

		getRandomPhrase();
	}

	getRandomPhrase() {}

	handleInteraction() {
		console.log('been clicked');
	}

	removeLife() {}

	checkForWin() {}

	gameOver() {}
}
