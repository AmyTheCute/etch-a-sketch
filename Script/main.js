//Global Variables
const container = document.querySelector("#container")
const gridPixelSize = 500.0;
//adds num grids to the container
function makeGrid(num) {
	for (let i = 0; i < num; i++) {
		for (var j = 0; j < num; j++) {

			//Make Child
			let child = document.createElement('div');
			child.setAttribute('id', "grid");

			const pixelSize = gridPixelSize/num;

			child.setAttribute('style', `width: ${pixelSize}px; height: ${pixelSize}px`);

			console.log(`height: " ${pixelSize}px`);

			//Listener for child
			child.addEventListener('mouseover', (e) => {
				child.style.background = "#000";
			});

			// Apend child
			container.appendChild(child);
		}
	}

}

function deleteGrid() {
	let grids = document.querySelectorAll('#grid');
	grids.forEach((grid) => {
		container.removeChild(grid);
	});
}

//Code starts here
makeGrid(10);

const checkbox_colored = document.querySelector("#checkbox_colored")

const clear_button = document.querySelector("#button_clear");

clear_button.addEventListener('click', (e) => {
	let numberDivs = prompt("Enter number of grids on each row: ");
	deleteGrid();
	makeGrid(numberDivs);
});