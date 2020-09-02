//     Create 16 x 16 grid of square divs within a container created in the HTML
createGrid(16)
function createGrid(gridsize) {
    document.getElementById("sketch-container").innerHTML = ""
    for (let i = 0; i < gridsize * gridsize; i++) {
        var newDiv = document.createElement("div");
        newDiv.style.width = `${100 / gridsize}%`;
        newDiv.style.height = `${100 / gridsize}%`;
        newDiv.style.color = "white";
        newDiv.addEventListener("mouseover", function (event) {
            console.log(event.target.style.backgroundColor)
            for (i = 0; i < 10; i++) {
                if (event.target.style.backgroundColor != false) {
                    let newRGB = randomColor.replace(rgb1, (rgb1 * .9)).replace(rgb2, (rgb2 * .9)).replace(rgb3, (rgb3 * .9))
                    // let rgb = event.target.style.backgroundColor
                    // let newRGB = rgb.replace(/\d/g, `0`);
                    event.target.style.backgroundColor = newRGB
                } else {
                    event.target.style.backgroundColor = getColor()
                }
            }
        })
        document.getElementById("sketch-container").appendChild(newDiv);
    }
}
let rgb1 = 0
let rgb2 = 0
let rgb3 = 0
let rgbARR = [rgb1, rgb2, rgb3]
let randomColor = ""

function getColor() {
    rgb1 = Math.floor(Math.random() * 255)
    rgb2 = Math.floor(Math.random() * 255)
    rgb3 = Math.floor(Math.random() * 255)
    randomColor = "rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")"
    console.log(randomColor)
    return randomColor
    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // return "#" + randomColor;
}
document.getElementById("reset-grid").addEventListener("click", function () {
    var size = prompt("How many boxes in the grid? (Enter a number 2 - 100)")
    let intSize = parseInt(size)
    createGrid(intSize)
})
//next, use a loop to create 16

// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad.

// HINT: Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// HINT: Also check out prompts
// HINT: You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used

// (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.