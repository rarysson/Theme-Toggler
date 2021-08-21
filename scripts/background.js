const canvasBackground = document.getElementById("meteor-shower");
const contextBackground = canvasBackground.getContext("2d");

canvasBackground.width = window.innerWidth;
canvasBackground.height = window.innerHeight;

function clearBackgroundCanvas() {
	contextBackground.clearRect(
		0,
		0,
		canvasBackground.width,
		canvasBackground.height
	);
}

class Meteor {
	constructor(x = 0, y = 0, width = 15) {
		this.initialX = x;
		this.initialY = y;
		this.positionX = x;
		this.positionY = y;
		this.width = width;
	}

	draw() {
		contextBackground.beginPath();
		contextBackground.moveTo(
			this.positionX - this.width,
			this.positionY - this.width
		);
		contextBackground.lineTo(this.positionX, this.positionY);
		contextBackground.shadowBlur = 10;
		contextBackground.shadowColor = "red";
		contextBackground.strokeStyle = "white";
		contextBackground.lineCap = "round";
		contextBackground.stroke();
	}

	update() {
		this.positionX += this.width;
		this.positionY += this.width;

		if (
			this.positionX > canvasBackground.width &&
			this.positionY > canvasBackground.height
		) {
			this.positionX = this.initialX;
			this.positionY = -this.width;
		}
	}
}

class RainDrop {
	constructor(x = 0, y, width = 15) {
		this.positionX = x;
		this.positionY = y;
		this.width = width;
	}

	draw() {
		contextBackground.beginPath();
		contextBackground.moveTo(this.positionX, this.positionY - this.width);
		contextBackground.lineTo(this.positionX, this.positionY);
		contextBackground.strokeStyle = "blue";
		contextBackground.lineCap = "round";
		contextBackground.stroke();
	}

	update() {
		this.positionY += this.width;

		if (this.positionY > canvasBackground.height) {
			this.positionY = -this.width;
		}
	}
}

const canvasHalfHeight = Math.floor(canvasBackground.height / 2);
const meteors = [...Array(30)].map(
	() =>
		new Meteor(
			randomNumber(-canvasBackground.width, canvasBackground.width),
			randomNumber(-canvasHalfHeight, canvasHalfHeight)
		)
);
const rainDrops = [...Array(50)].map(
	() =>
		new RainDrop(
			randomNumber(0, canvasBackground.width),
			randomNumber(-canvasHalfHeight, canvasHalfHeight)
		)
);

function meteorShower() {
	meteors.forEach((meteor) => meteor.update());
	clearBackgroundCanvas();
	meteors.forEach((meteor) => meteor.draw());

	if (!input.checked) window.requestAnimationFrame(meteorShower);
}

function rain() {
	rainDrops.forEach((rainDrop) => rainDrop.update());
	clearBackgroundCanvas();
	rainDrops.forEach((rainDrop) => rainDrop.draw());

	if (input.checked) window.requestAnimationFrame(rain);
}

function handleAnimationChange() {
	if (input.checked) {
		window.cancelAnimationFrame(meteorShower);
		window.requestAnimationFrame(rain);
	} else {
		window.cancelAnimationFrame(rain);
		window.requestAnimationFrame(meteorShower);
	}
}

input.addEventListener("input", handleAnimationChange);

if (input.checked) {
	rain();
} else {
	meteorShower();
}
