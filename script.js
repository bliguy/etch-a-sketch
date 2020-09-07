// Create 16 x 16 grid of square divs within a container created in the HTML
createGrid(16)
function createGrid(gridsize) {
    // first, clear out the container
    document.getElementById("sketch-container").innerHTML = ""
    // for loop creates divs based on "gridsize" input
    for (let i = 0; i < gridsize * gridsize; i++) {
        var newDiv = document.createElement("div");
        // set the size and color of each newly created div
        newDiv.style.width = `${100 / gridsize}%`;
        newDiv.style.height = `${100 / gridsize}%`;
        newDiv.style.color = "white";
        // Add event listener to listen for mouseover
        newDiv.addEventListener("mouseover", function (event) {
            // If no background color exists, assign one. If one exists, use RegEx to find numbers in the string and assign them to an array (matches)
            if (event.target.style.backgroundColor != false) {
                let oldRGB = event.target.style.backgroundColor
                let matches = oldRGB.match(/[0-9]{1,3}/g)
                console.log(matches)
                // Use .map function to cycle through the array and replace each number with a lower number [I chose 80% of the original number], which will eventually turn the div black (i.e. will get close enough to RGB 0,0,0 to appear black)
                let newRGB = matches.map(function (item) {
                    return item * .8
                })
                event.target.style.backgroundColor = "rgb(" + newRGB[0] + ", " + newRGB[1] + ", " + newRGB[2] + ")"
            } else {
                event.target.style.backgroundColor = getColor()
            }
            // }
        })
        document.getElementById("sketch-container").appendChild(newDiv);
    }
}
// function to pick a random RGB color
function getColor() {
    rgb1 = Math.floor(Math.random() * 255)
    rgb2 = Math.floor(Math.random() * 255)
    rgb3 = Math.floor(Math.random() * 255)
    randomColor = "rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")"
    console.log(randomColor)
    return randomColor
}
// add functionality for when button is clicked
document.getElementById("reset-grid").addEventListener("click", function () {
    var size = prompt("How many boxes in the grid? (Enter a number 2 - 100)")
    let intSize = parseInt(size)
    createGrid(intSize)
})