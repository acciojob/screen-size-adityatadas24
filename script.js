function allSizes () {
	const size1 = document.getElementById("size");
	const widthSize = window.innerWidth;
	const heightSize = window.innerHeight;

	size1.textContent = `width: ${widthSize} and height: ${heightSize}`;
}
 allSizes();
setInterval(allSizes);


