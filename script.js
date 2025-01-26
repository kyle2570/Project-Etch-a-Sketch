


const container = document.querySelector("#container");
let gridSize = 16; //Initial grid size
let grid = [];
let CONTAINER_SIZE = 960;  //Pixels per side
let gridPixel = CONTAINER_SIZE / gridSize;

createCanvas();

const button = document.querySelector("#button");

button.addEventListener("click",()=>{

    let newGridSize = prompt("Enter number of grids per side(max 100): ");

    if (newGridSize > 100){
        alert("Exceeded maximum.");
    }else if (newGridSize!=null){
        gridSize = newGridSize;
        deleteCanvas();
        createCanvas();    
    }
})


function createCanvas(){

for (let i = 0;i < gridSize**2; i++){

    grid[i] = document.createElement("div");
    grid[i].style.outline  = "1px solid grey";
    grid[i].style.height  =  `${CONTAINER_SIZE / gridSize}px`;
    grid[i].style.width  =  `${CONTAINER_SIZE / gridSize}px`;
    grid[i].style.backgroundColor  =  "silver";
 
    container.appendChild(grid[i]);

    grid[i].addEventListener("mouseenter", ()=> {
    grid[i].style.backgroundColor = "orange";
   

    })
}

}

function deleteCanvas(){
    const container = document.querySelector("#container");

    while (container.firstChild){
        container.removeChild(container.firstChild);
    }


}
