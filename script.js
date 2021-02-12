const container = document.querySelector('.container');
const gridsize = document.querySelector('#gridsize')
const resetbutton = document.querySelector('#reset')
let newGrid = 16;

function createGrid(amount) {
for (i = 0; i < amount * amount; i++) {
    let box = document.createElement('div');
    box.className = "grid";
    box.addEventListener("mouseover", hoverin);

    function hoverin() {
   box.setAttribute("style", "background-color:black;")
}
    let amountPx = "repeat(" + amount + ", auto)";
    container.style.gridTemplateColumns = amountPx;
    container.appendChild(box);
    newGrid = amount;
}
}

function askAmount() {
let gridNum = window.prompt("Reset with how many squares per side? (16-100)", "16");
parseInt(gridNum);
if (gridNum > 100 || gridNum < 16 || isNaN(gridNum)) {
    window.alert("Please enter a number between 16 and 100");
    return;
    } 
removeGrid()
createGrid(gridNum);
}


function resetGrid() {
    removeGrid()
    createGrid(newGrid);
}

function removeGrid() {
while (container.hasChildNodes()) {  
    container.removeChild(container.firstChild);
    }
}



createGrid(newGrid);

gridsize.addEventListener('click', askAmount)
resetbutton.addEventListener('click', resetGrid)