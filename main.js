
//create 16 div elements
for (let i=0; i<16; i++) {
    const container = document.querySelector("#container"); //select container HTML element
    const gridDiv = document.createElement("div");          //create div HTML element
    gridDiv.classList.add("grid");  
    gridDiv.textContent = "Hello World!";                           //add class "grid" to element so that it can be manipulated with css
    container.appendChild(gridDiv);
}


