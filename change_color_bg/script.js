var body = document.querySelector('body');
var button = document.getElementById('button');
var colors = ['powderblue', 'red', 'pink', 'yellow', 'brown'];
var i = 0;

function changeColor () {

body.style.backgroundColor = colors[i];
i++;
if(i === colors.length){
	i=0;
}
}

button.addEventListener("click", changeColor)

