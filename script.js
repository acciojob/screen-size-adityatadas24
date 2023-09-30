//your JS code here. If required.
function allSizes () {
const size1 = document.getElementById("size");
const widthSize = window.innerWidth;
const heigthSize = window.innerHeight;

size1.textContent = `width: ${widthSize} and height: ${heigthSize}`
}
allSizes();


setInterval(allSizes);