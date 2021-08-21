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

function drawCloud() {
	const x = Math.floor((canvasToggle.width / 2) * 0.8);
	const y = Math.floor(canvasToggle.height * 0.7);

	contextToggle.beginPath();
	contextToggle.arc(x, y, 7, Math.PI * 0.5, Math.PI * 1.5);
	contextToggle.arc(x + 5, y - 5, 7, Math.PI * 1, Math.PI * 1.85);
	contextToggle.arc(x + 10, y - 3, 7, Math.PI * 1.37, Math.PI * 1.91);
	contextToggle.arc(x + 15, y, 7, Math.PI * 1.5, Math.PI * 0.5);
	contextToggle.fillStyle = "white";
	contextToggle.fill();
}

function clearToggleCanvas() {
	contextToggle.clearRect(0, 0, canvasToggle.width, canvasToggle.height);
}

function drawEffect() {
	if (input.checked) {
		drawCloud();
	} else {
		drawStars();
	}
}

function handleToggleChange() {
	clearToggleCanvas();
	drawEffect();
}

input.addEventListener("input", handleToggleChange);

drawEffect();
