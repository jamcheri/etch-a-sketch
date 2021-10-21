
//create 16 div elements
for (let i=0; i<16; i++) {
    const container = document.querySelector("#container"); //select container HTML element
    const gridDiv = document.createElement("div");          //create div HTML element
    gridDiv.classList.add("grid");                          //add class "grid" to element so that it can be manipulated with css
    gridDiv.textContent = "Hello World!";  

    gridDiv.addEventListener("mouseover", () => {
        gridDiv.classList.add("hover")
    });

    gridDiv.addEventListener("mouseout", () => {
        gridDiv.classList.remove("hover")
    });

    container.appendChild(gridDiv);
}


