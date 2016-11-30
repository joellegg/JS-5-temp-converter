function toCelsius (temp) {
	// math to convert temp(input) from fahrenheit to celcius
	var result_C = (temp - 32) * (5/9)
	var temperature_celcius = document.getElementById('temp_C');
	temperature_celcius.innerHTML = "";
	temperature_celcius.innerHTML = temp + " degrees fahrenheit is " + result_F + " degrees celcius!";
	return result_C;
}

function toFahrenheit (temp) {
	// math to convert temp(input) from celcius to fahrenheit
	var result_F = (temp * (9/5)) + 32;
	// write results to h1 with class conv_temp
	var temperature_fahrenheit = document.getElementById('temp_F');
	temperature_fahrenheit.innerHTML = "";
	temperature_fahrenheit.innerHTML = temp + " degrees celcius is " + result_F + " degrees fahrenheit!"; 
	return result_F;
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

// add clear input button
var clear = document.getElementById("clear_Input");
clear.addEventListener("click", function clear () {
	var temp = document.getElementById('temp_input');
	temp.value = "";
})


