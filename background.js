const canvasMeteor = document.getElementById("meteor-shower");
const contextMeteor = canvasMeteor.getContext("2d");

canvasMeteor.width = window.innerWidth;
canvasMeteor.height = window.innerHeight;

class Meteor {
	constructor(x = 0, y = 0, width = 15) {
		this.initialX = x;
		this.initialY = y;
		this.positionX = x;
		this.positionY = y;
		this.width = width;
	}

	draw() {
		contextMeteor.beginPath();
		contextMeteor.moveTo(
			this.positionX - this.width,
			this.positionY - this.width
		);
		contextMeteor.lineTo(this.positionX, this.positionY);
		contextMeteor.strokeStyle = "yellow";
		contextMeteor.stroke();
	}

	update() {
		this.positionX += this.width;
		this.positionY += this.width;

		if (
			this.positionX > canvasMeteor.width &&
			this.positionY > canvasMeteor.height
		) {
			this.positionX = this.initialX;
			this.positionY = this.initialY;
		}
	}
}

const meteors = [...Array(15)].map(
	() => new Meteor(randomNumber(-canvasMeteor.width, canvasMeteor.width))
);

function meteorShower() {
	meteors.forEach((meteor) => meteor.update());
	contextMeteor.clearRect(0, 0, canvasMeteor.width, canvasMeteor.height);
	meteors.forEach((meteor) => meteor.draw());

	window.requestAnimationFrame(meteorShower);
}

meteorShower();
