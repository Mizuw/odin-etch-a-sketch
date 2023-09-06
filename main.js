const DEFAULT_SIZE = 16
let size = DEFAULT_SIZE

const grid = document.getElementById("grid");

function createGrid() {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}