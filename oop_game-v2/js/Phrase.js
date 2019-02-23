/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	addPhraseToDisplay() {
		const phraseDiv = document.createElement('div');
		const ul = document.createElement('ul');
		phraseDiv.id = 'phrase';
		phraseDiv.className = 'section';

		[ ...this.phrase ].forEach((char) => {
			let li = document.createElement('li');

			if (char === ' ') {
				//If space character
				li.className = 'space';
			} else {
				li.className = `hide letter ${char}`;
			}
			li.textContent = `${char}`;
			ul.appendChild(li);
		});

		phraseDiv.appendChild(ul);
		document.querySelector('#phrase').innerHTML = phraseDiv.innerHTML;
		console.log(document.body);
	}

	checkLetter() {}

	showMatchedLetter() {}
}
