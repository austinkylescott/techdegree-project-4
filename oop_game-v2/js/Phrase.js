/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	//Creates HTML structure to add individual letters to game board
	addPhraseToDisplay() {
		const phraseDiv = document.createElement('div');
		const ul = document.createElement('ul');
		phraseDiv.id = 'phrase';
		phraseDiv.className = 'section';

		if (this.phrase.match(/[a-z]/i)) {
			// alphabet letters found
			[ ...this.phrase ].forEach((char) => {
				let li = document.createElement('li');

				//Ensures char is either a space or a letter. ONLY appends letters.
				if (char === ' ') {
					//If space character
					li.className = 'space';
					li.textContent = `${char}`;
					ul.appendChild(li);
				} else if (char.match(/[a-z]/)) {
					li.className = `hide letter ${char}`;
					li.textContent = `${char}`;
					ul.appendChild(li);
				}
			});
		}

		phraseDiv.appendChild(ul);
		document.querySelector('#phrase').innerHTML = phraseDiv.innerHTML;
	}

	//Checks if letter exists within phrase and returns true or false
	checkLetter(letter) {
		let isMatch = false;
		[ ...this.phrase ].forEach((char) => {
			if (char === letter) {
				isMatch = true;
			}
		});
		return isMatch;
	}
	//Shows all instances of a matched letter
	showMatchedLetter(event) {
		const letters = document.querySelectorAll('.letter');
		letters.forEach((letter) => {
			if (letter.textContent === event.target.textContent) {
				letter.classList.add('show');
				letter.classList.remove('hide');
			}
		});
	}
}
