/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const startButton = document.querySelector('#btn__reset');
const keys = document.querySelector('#qwerty');

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

keys.addEventListener('click', (event) => {
	if (event.target.className === 'key') {
		game.handleInteraction(event);
	}
});
