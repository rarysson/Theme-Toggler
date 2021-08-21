function randomNumber(min, max) {
	return Math.floor(min + Math.random() * (max - min));
}

const input = document.querySelector("input");

function toggleTheme({ target: { checked } }) {
	document.body.dataset.theme = checked ? "white" : "dark";
}

input.addEventListener("input", toggleTheme);

input.checked = false;
