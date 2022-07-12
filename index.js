// define element to be manipulated
var dodger = document.getElementById("dodger");

// define left movement
function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) { dodger.style.left = `${left - 1}px`; }
}

// define right movement
function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    if (left > 0) { dodger.style.left = `${left + 1}px`; }
}

// listen for left keypress event
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") { moveDodgerLeft(); }
});

// listen for right keypress event
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") { moveDodgerRight(); }
});