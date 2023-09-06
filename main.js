const grid = document.getElementById("grid");
const slider = document.getElementById("SliderElement");
const ParaSlider = document.getElementById("ParaSlider");
const UserColor = document.getElementById("UserColor");

let currentMode = "colorMode";
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
            if (currentMode == "rainbowMode") {
                const RGBred = Math.floor(Math.random() * 255) + 1; 
                const RGBgreen = Math.floor(Math.random() * 255) + 1; 
                const RGByellow = Math.floor(Math.random() * 255) + 1; 
                e.target.style.backgroundColor = `rgb(${RGBred}, ${RGBgreen}, ${RGByellow})`;
            } else if (currentMode === "colorMode") {
                e.target.style.backgroundColor = UserColor.value;
            } else if (currentMode === "eraserMode") {
                e.target.style.backgroundColor = "#e0e0e0"
            }
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

function selectMode() {
    if (this.document.activeElement.getAttribute("id") == "rainbowMode" || "eraserMode" || "colorMode") {
        currentMode = this.document.activeElement.getAttribute("id")
    }
}

window.onload = createGrid()