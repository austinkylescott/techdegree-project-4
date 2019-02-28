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
		//Ensures all hearts have been refilled
		let hearts = document.querySelectorAll('.tries img');
		hearts.forEach((heart) => {
			heart.src = 'images/liveHeart.png';
		});

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

	handleInteraction(target) {
		const letter = target.textContent;
		const isMatch = this.activePhrase.checkLetter(letter); //Check if letter exists in phrase

		target.disabled = true;

		//Take action depending on whether or not selected letter matches a phrase letter
		if (isMatch) {
			this.activePhrase.showMatchedLetter(target); //Show all instances of matched letter
			target.classList.add('chosen');
		} else {
			this.removeLife();
			target.classList.add('wrong');
		}

		//Check for win after every letter is selected
		if (this.checkForWin() || this.missed >= 5) {
			this.gameOver();
		}
	}

	//Removes heart and ticks the missed counter
	removeLife() {
		this.missed++;

		const hearts = document.querySelectorAll('.tries img'); //Selects all hearts
		let targetHeart = hearts[hearts.length - this.missed]; //Targets last full heart
		targetHeart.classList.add('animated', 'fast', 'heartBeat');

		targetHeart.addEventListener('animationend', () => {
			targetHeart.classList.remove('animated', 'fast', 'heartBeat');
			targetHeart.src = 'images/lostHeart.png';
		});
	}

	checkForWin() {
		const container = document.querySelector('#phrase');
		const phraseLetters = container.querySelectorAll('.letter');

		let allShown = true;

		//IF just one letter is hidden, return a false value
		phraseLetters.forEach((letter) => {
			if (letter.classList.contains('hide')) {
				allShown = false;
			}
		});

		return allShown;
	}

	gameOver() {
		const overlay = document.querySelector('#overlay');
		const keys = document.querySelectorAll('.key');
		const winner = this.checkForWin();
		let hearts = document.querySelectorAll('.tries img');

		//CLEAN UP FOR NEW GAME
		//Enable and reset all keys before next game begins
		keys.forEach((key) => {
			key.disabled = false;
			key.className = 'key';
		});

		//Clears old phrase from game
		document.querySelector('#phrase').innerHTML = '';

		//Reset missed counter
		this.missed = 0;

		//Displays overlay and adjusts class and message accordingly
		overlay.style.display = '';

		if (winner) {
			overlay.className = 'win';
			overlay.querySelector('#game-over-message').textContent = 'Great job, you guessed it!';
		} else {
			overlay.className = 'lose';
			overlay.querySelector('#game-over-message').textContent = 'Sorry, try again!';
		}
		/*
		//Restore all hearts WILL NOT RESTORE THE FIRST HEART
        //Added to startGame() to solve issues
        hearts.forEach((heart) => {
			heart.src = 'images/liveHeart.png';
        });
        */
	}
}

function animateCSS(element, animationName, callback) {
	const node = document.querySelector(element);
	node.classList.add('animated', animationName);

	function handleAnimationEnd() {
		node.classList.remove('animated', animationName);
		node.removeEventListener('animationend', handleAnimationEnd);

		if (typeof callback === 'function') callback();
	}

	node.addEventListener('animationend', handleAnimationEnd);
}
