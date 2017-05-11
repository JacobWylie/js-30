// Get Our Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullscreen = player.querySelector('.fullscreen');
const ranges = player.querySelectorAll('.player__slider')

// Build Out Functions
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() {
	const icon = this.paused ? '►' : '॥';
	toggle.textContent = icon;
	// if (video.paused) {
	// 	toggle.innerHTML = '►';
	// } else {
	// 	toggle.innerHTML = '॥';
	// }
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function goFullscreen() {
	if (video.requestFullscreen) {
        video.requestFullscreen();
    }
    else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    }
    else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
    else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

// Hook up the Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
fullscreen.addEventListener('click', goFullscreen);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);




















