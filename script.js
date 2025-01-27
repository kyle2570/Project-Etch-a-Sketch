let containerSize = 960;  //Actual pixels per side of the canvas container
let gridSize = 16; //Initial grid size
let grid = [];

const container = document.querySelector("#container");
const button = document.querySelector("#button");

container.style.width = `${containerSize}px`;;

createCanvas();


button.addEventListener("click",()=>{

    let newGridSize = prompt("Enter number of grids per side(max 100): ");

    if (isNaN(newGridSize) || newGridSize < 0 || newGridSize > 100){
        alert("Invalid input.");
    }else if (newGridSize != null) {

        gridSize = newGridSize;
        deleteCanvas();
        createCanvas();    
    }
})



function createCanvas(){

for (let i = 0;i < gridSize**2; i++){
    grid[i] = document.createElement("div");

    grid[i].style.outline  = "1px solid grey";
    grid[i].style.height  =  `${containerSize / gridSize}px`;
    grid[i].style.width  =  `${containerSize / gridSize}px`;
    grid[i].style.backgroundColor  =  "silver";
 
    container.appendChild(grid[i]);

    grid[i].addEventListener("mouseenter", ()=> {
    grid[i].style.backgroundColor = randomColor();
    })
}
}


function deleteCanvas(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}


function randomColor(){

    let red,blue, green;

    red = Math.min(255*Math.random(),255);
    blue = Math.min(255*Math.random(),255);
    green = Math.min(255*Math.random(),255);

    return `rgb(${red}, ${blue},${green})`;
}