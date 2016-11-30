function toCelsius () {
	// math to convert from fahrenheit to celcius
	var temp_c = (temp_input - 32) * (5/9)
	return temp_c;
}

function toFahrenheit () {
	// math to convert celcius to fahrenheit
	var temp_f = (temp_input * (9/5)) + 32;
	return temp_f; 
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	var temp = document.getElementById('temp_input').value;
	if (document.getElementById('fahrenheit').checked) {
		toFahrenheit(temp);
	} else if (document.getElementById('celcius').checked) {
		toCelsius(temp);
	} else {
		alert("Select a unit to convert to.")
	}
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);