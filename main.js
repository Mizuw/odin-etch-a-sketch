const grid = document.getElementById("grid");
const slider = document.getElementById("SliderElement");
const ParaSlider = document.getElementById("ParaSlider");
const UserColor = document.getElementById("UserColor");

let currentMode;
let size = slider.value; // the size of the grid is defined by the slider

slider.oninput = resizeGrid; // the grid will reload after the slider moves
ParaSlider.textContent = slider.value + " x " + slider.value;

function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows =  `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) { // creates the div's based on the slider's size (default: 16)
        const gridElement = document.createElement('div');
        gridElement.classList.add('GridElement');

        gridElement.addEventListener("mouseenter", function(e) {
            if (currentMode == "rainbowMode") { // we generate three random numbers, so we can set them into RGB. This is then used by the rainbow mode
                const RGBred = Math.floor(Math.random() * 255) + 1; 
                const RGBgreen = Math.floor(Math.random() * 255) + 1; 
                const RGByellow = Math.floor(Math.random() * 255) + 1; 
                e.target.style.backgroundColor = `rgb(${RGBred}, ${RGBgreen}, ${RGByellow})`;

            } else if (currentMode === "colorMode") {
                e.target.style.backgroundColor = UserColor.value;
            } else if (currentMode === "eraserMode") {
                e.target.style.backgroundColor = "#e0e0e0";
            }
        })
        grid.appendChild(gridElement);
    }
}

function resizeGrid() {
    ParaSlider.textContent = this.value + " x " + this.value;
    size = this.value;
    clearGrid();
}

function clearGrid() {
    grid.innerHTML = "";
    createGrid(); 
}

function selectMode() {
        if (this.document.activeElement.classList.contains("activeButton")) {
            this.document.activeElement.classList.remove("activeButton");
            currentMode = "";
        } else {
            for (let i = 0; i < 3; i++) { // loops throug the array, which are the buttons
                document.querySelectorAll("button")[i].classList.remove("activeButton"); // removes the active Button style so only the currently active is indicated
            }
            currentMode = this.document.activeElement.getAttribute("id"); 
            this.document.activeElement.classList.add("activeButton");
        }
    }
window.onload = createGrid(); // creates a grid after the page was loaded