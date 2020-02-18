var body = document.querySelector('body');
var button = document.getElementById('button');
var colors = ['powderblue', 'red', 'pink', 'yellow', 'brown'];

function changeColor () {
	var color = colors.shift();
	body.style.backgroundColor = color;
}

button.addEventListener("click", changeColor)

