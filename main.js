const DEFAULT_SIZE = 2;
const DEFAULT_COLOR = '#000000';

let size = DEFAULT_SIZE;
currentColor = DEFAULT_COLOR;

const grid = document.getElementById("grid");

function createGrid() {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('GridElement');
        gridElement.addEventListener("mouseenter", function(e) {
            e.target.style.backgroundColor = currentColor
            console.log("Test");
        })
        grid.appendChild(gridElement);
    }
}

function clearGrid() {
    grid.innerHTML = "";
    createGrid();
}