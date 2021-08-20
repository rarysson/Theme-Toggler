const canvasToggle = document.getElementById("toggle-effect");
const contextToggle = canvasToggle.getContext("2d");
const numberOfStars = 7;
const togglePadding = 5;

function drawStars() {
	const minX = Math.floor(canvasToggle.width / 2);
	const maxX = canvasToggle.width - togglePadding;
	const minY = togglePadding;
	const maxY = canvasToggle.height - togglePadding;

	for (let i = 0; i < numberOfStars; i++) {
		contextToggle.beginPath();
		contextToggle.arc(
			randomNumber(minX, maxX),
			randomNumber(minY, maxY),
			randomNumber(1, 4),
			0,
			2 * Math.PI
		);
		contextToggle.fillStyle = "white";
		contextToggle.fill();
	}
}

drawStars();
