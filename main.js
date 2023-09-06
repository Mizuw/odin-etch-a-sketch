const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';

let size = DEFAULT_SIZE;
currentColor = DEFAULT_COLOR;

const grid = document.getElementById("grid");

function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows =  `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('GridElement');
        gridElement.addEventListener("mouseenter", function(e) {
            e.target.style.backgroundColor = currentColor
        })
        grid.appendChild(gridElement);
    }
}

function clearGrid() {
    grid.innerHTML = "";
    createGrid();
}

window.onload = createGrid()