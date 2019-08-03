// Selectors
let button = document.getElementById('generator-btn');
let quoteDisplay = document.getElementById('quoteDisplay');
let url = 'http://quotes.stormconsultancy.co.uk/random.json';

function fetchInfo() {
	// Create XHR Object
	let request = new XMLHttpRequest();
	// Open Method (HTTP Method, url, async)
	request.open('GET', url, true);
	// Function when request completes
	request.onload = function() {
		if (this.status === 200) {
			let response = JSON.parse(this.responseText);
			quoteDisplay.innerHTML = '"' + response.quote + '"';
			quoteAuthor.innerHTML = '-' + response.author;
		} else if (this.status === 404) {
				console.error('Error 404');
		}
	};
	// Send request
	request.send();
};

button.addEventListener('click', fetchInfo); 
window.onload = fetchInfo();