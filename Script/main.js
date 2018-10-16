//Global Variables
const container = document.querySelector("#container")

const gridPixelSize = 500.0;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//adds num grids to the container
function makeGrid(num) {

	let pixelSize = gridPixelSize/num;

	for (let i = 0; i < num*num; i++) {
	
		//Make Child
		let child = document.createElement('div');
		child.setAttribute('id', "grid");

		child.setAttribute('style', `width: ${pixelSize}px; height: ${pixelSize}px`);

		console.log(`height: " ${pixelSize}px`);

		//Listener for child
		child.addEventListener('mouseover', (e) => {

			const checkbox_colored = document.getElementById("checkbox");
			console.log(checkbox_colored.checked);
			if(checkbox_colored.checked) {
				child.style.background = rgbToHex(getRandomInt(255),getRandomInt(255),getRandomInt(255));
			} else {
				child.style.background = "#000";
			}
		});

		// Apend child
		container.appendChild(child);
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

const clear_button = document.querySelector("#button_clear");

clear_button.addEventListener('click', (e) => {

	let pixelWidth = prompt("Pleae enter pixel width and height between 10 and 100:");

	while (pixelWidth > 100 || pixelWidth < 10) {
		pixelWidth = prompt("Pleae enter pixel width and height between 10 and 100:");

	}

	deleteGrid();
	makeGrid(pixelWidth);
});