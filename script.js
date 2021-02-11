const container = document.querySelector('.container');
const button = document.querySelector('.reset')

function createGrid(amount) {
for (i = 0; i < amount * amount; i++) {
    let box = document.createElement('div');
    box.className = "grid";
    box.addEventListener("mouseover", hoverin);

    function hoverin()
{
   box.setAttribute("style", "background-color:black;")
   box.classList.add("hover")
}
    let amountPx = "repeat(" + amount + ", auto)";
    container.style.gridTemplateColumns = amountPx;
    console.log(amountPx);
    container.appendChild(box);
}
}

function askAmount() {
let gridNum = window.prompt("Pressing OK will reset the grid. Please specify how many squares per side.", "16");
parseInt(gridNum);

while (container.hasChildNodes()) {  
    container.removeChild(container.firstChild);
  }

createGrid(gridNum);
}

createGrid(16);

button.addEventListener('click', askAmount)