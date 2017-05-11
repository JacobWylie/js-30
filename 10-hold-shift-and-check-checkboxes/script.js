const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
	// Check if shift key is held down
	// And check that they are checking it
	let inBetween = false;
	if(e.shiftKey && this.checked) {
		// loop over each checkbox
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}

			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}

	lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));