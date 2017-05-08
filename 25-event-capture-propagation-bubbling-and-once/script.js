const divs = document.querySelectorAll('div');
const button = document.querySelector('button');
function logText(e) {
	e.stopPropagation();
	console.log(this)
}

divs.forEach(div => div.addEventListener('click', logText, {capture: false}));
button.addEventListener('click', logText, {once: true})