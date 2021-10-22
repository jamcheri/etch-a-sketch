let userInput = 16;

//function that make a grid of dimension gridSide x gridSide
function makeGrid(gridSide) {
    gridSide = userInput;
    let divNum = gridSide * gridSide;  //number of grid divs to make
    let minWidth = 100/gridSide;        //css style parameters
    let minHeight = 100/gridSide;       

    const container = document.querySelector("#container"); //select container HTML element

    //checks if there are already children in container, if so deletes them.
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //loop to create grid items
    for (i=0; i<divNum; i++) {
        const gridDiv = document.createElement("div");  //create div HTML element
        gridDiv.classList.add("grid");                  //add class "grid" to element so that it can be manipulated with css
        gridDiv.style.minWidth = minWidth + "%";        //set div height equal to 1/gridSide. 
        gridDiv.style.minHeight = minHeight + "%";
    
        gridDiv.addEventListener("mouseover", () => {   //event listener for mouseover
            gridDiv.classList.add("hover")
        });
    
        /*gridDiv.addEventListener("mouseout", () => {  //no mouseout as this is etch-a-sketch
            gridDiv.classList.remove("hover")
        });*/   
    
        container.appendChild(gridDiv);                 //attach div to container
    }    
}

const button = document.querySelector("#button");       //button to reset 
button.addEventListener('click', () => {
    userInput = prompt("What dimensions should the new grid be? X number by X number:");

    while (userInput > 100) {                           //don't let grid get larger than 100x100
        userInput = prompt("Grid dimension cannot be larger than 100, please enter a lower dimension:")
    }

    makeGrid(userInput);
});

makeGrid();     //run main function on startup


// could also use gridDiv.setAttribute("style")

//could also use 
//gridDiv.style.cssText = "min-width = " + gridSide; 
//gridDiv.style.cssText = "min-width = " + gridSide;

//could also use this
//document.getElementById('grid').style.gridDiv.


//button on 1. resets the grid and 2. prompts to ask how many grid items to make
