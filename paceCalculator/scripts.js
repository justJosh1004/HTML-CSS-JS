

function calculate() {
	var h = 0;
	var m = 0;
	var s = 0;
	var pace = 0;
	var totalS = 0;

	var distance = document.getElementById('distance').value;
	var dType = document.getElementById('distanceType').value;
	if (document.getElementById('hour').value) {
		h = document.getElementById('hour').value;
	}
	if (document.getElementById('min').value) {
		m = document.getElementById('min').value;
	}
	if (document.getElementById('sec').value) {
		s = document.getElementById('sec').value;
	}

	console.log(`${distance} ${dType} was run in ${h}:${m}:${s}`);

	totalS = totalSeconds(h, m, s);
	console.log(totalSeconds(h, m, s));
	// console.log(totalSeconds);

	if (dType === 'miles') {
		pace = (totalS / distance) / 60;
		console.log(`You ran ${pace} min/mile`);
	}
};

function totalSeconds(h, m, s) {
	var seconds = 0;

	for (var i = 0; i < h; i++) {
		seconds += 3600;
	}
	for (var i = 0; i < m; i++) {
		seconds += 60;
	}
	seconds += Number(s);

	// console.log(seconds);
	return seconds;
}