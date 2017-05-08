const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
	speed.textContent = data.coords.speed;
	aarow.style.transform = `rotate(${data.coords.heading}deg`;
}, (err) => {
	console.err(err);
	alert('You failed to allow your location');
});