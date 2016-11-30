function toCelsius (temp) {
	// math to convert temp(input) from fahrenheit to celcius
	var temp_c = (temp - 32) * (5/9)
	return temp_c;
}

function toFahrenheit (temp) {
	// math to convert temp(input) from celcius to fahrenheit
	var temp_f = (temp * (9/5)) + 32;
	return temp_f; 
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.addEventListener("click", 
	// This function should determine which conversion should
	// happen based on which radio button is selected.
	function determineConverter () {
	// define temp within determineConverter function so it will be defined for the function and passed on
	var temp = document.getElementById('temp_input').value;	
	if (document.getElementById('fahrenheit').checked) {
		toFahrenheit(temp);
	} else if (document.getElementById('celcius').checked) {
		toCelsius(temp);
	} else {
		alert("Select a unit to convert to.")
	}
})

// write results to h1 with class conv_temp


// add clear input button



