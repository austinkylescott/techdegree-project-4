/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const startButton = document.querySelector('#btn__reset');
const keyGroup = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key');

startButton.addEventListener('click', (event) => {
	game.startGame();
});
/*Add click event listeners to each of the onscreen keyboard buttons,
    so that clicking a button calls the handleInteraction() method 
    on the Game object. Event delegation can also be used in order to
    avoid having to add an event listener to each individual keyboard button. 
    Clicking the space between and around the onscreen keyboard buttons should 
    not result in the handleInteraction() method being called.
*/

keyGroup.addEventListener('click', (event) => {
	if (event.target.className === 'key') {
		game.handleInteraction(event.target);
	}
});

document.addEventListener('keyup', (event) => {
	const overlay = document.querySelector('#overlay');

	/*Only acts on keyup when
	 *overlay is hidden
     *the key is enabled
    **/

	for (let i = 0; i < keys.length; i++) {
		if (overlay.style.display == 'none') {
			if (keys[i].disabled == false) {
				if (event.key === keys[i].textContent) {
					game.handleInteraction(keys[i]);
				}
			}
		}
	}
});
