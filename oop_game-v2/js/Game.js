/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [
			'Back up, kid!',
			'I am angry',
			'That smells funny',
			'I learned it from Treehouse',
			'Smile at the camera'
		];
		this.activePhrase = null;
	}

	startGame() {
		//HIDE OVERLAY
		const overlay = document.querySelector('#overlay');
		overlay.style.display = 'none';

		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	getRandomPhrase() {
		const index = Math.floor(Math.random() * this.phrases.length);
		return new Phrase(this.phrases[index]);
	}

	handleInteraction(event) {
		const letter = event.target.textContent;
		const isMatch = this.activePhrase.checkLetter(letter); //Check if letter exists in phrase
		if (isMatch) {
			this.activePhrase.showMatchedLetter(event); //Show all instances of matched letter
		} else {
			this.removeLife();
		}
	}

	removeLife() {}

	checkForWin() {}

	gameOver() {}
}
