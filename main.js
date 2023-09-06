const grid = document.getElementById("grid");
const slider = document.getElementById("SliderElement");
const ParaSlider = document.getElementById("ParaSlider");
const UserColor = document.getElementById("UserColor");

let size = slider.value;

slider.oninput = resizeGrid;
ParaSlider.textContent = "Grid Size: " + slider.value;

function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows =  `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('GridElement');
        gridElement.addEventListener("mouseenter", function(e) {
            e.target.style.backgroundColor = UserColor.value;
        })
        grid.appendChild(gridElement);
    }
}

function resizeGrid() {
    ParaSlider.textContent = "Grid Size: " + this.value;
    size = this.value;
    clearGrid();
}

function clearGrid() {
    grid.innerHTML = "";
    createGrid();
}

window.onload = createGrid()