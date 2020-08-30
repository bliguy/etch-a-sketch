//     Create 16 x 16 grid of square divs within a container created in the HTML
// First, create one div and test
createGrid(16)
function createGrid(gridsize){
    // let gridsize = 5
    document.getElementById("sketch-container").innerHTML=""
    for (let i = 0; i < gridsize*gridsize; i++) {
        var div = document.createElement("div");
        div.style.width =`${100/gridsize}%`;
        div.style.height =`${100/gridsize}%`;
        div.style.color = "white";
        div.addEventListener("mouseover", function (event) {
            console.log(event.target.style.backgroundColor)
            event.target.style.backgroundColor = getColor()
        })
        document.getElementById("sketch-container").appendChild(div);
    }
}

function getColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}
document.getElementById("reset-grid").addEventListener("click", function(){
    var size = prompt("How many boxes in the grid?")
    let intSize = parseInt(size)
    createGrid(intSize)
})
//next, use a loop to create 16

// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad.

// HINT: Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// HINT: Also check out prompts
// HINT: You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used

// (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.