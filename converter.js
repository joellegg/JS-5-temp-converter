// This function should determine which conversion should happen based on which radio button is selected.
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
}

// submit for when enter key is pressed in input field
function enterKeyPressed (e) {
	var keyPressed = e.keyCode; 
	if (keyPressed === 13) {
		determineConverter();
	}
}

function toCelsius (temp) {
	// math to convert temp(input) from fahrenheit to celcius
	var result_C = (temp - 32) * (5/9)
	var temperature_celcius = document.getElementById('temp_C');
	temperature_celcius.innerHTML = "";
	if (result_C > 32) {
		temperature_celcius.style.color = "red";
		temperature_celcius.innerHTML = temp + " degrees fahrenheit is " + result_C + " degrees celcius!";
	} else if (result_C < 0) {
		temperature_celcius.style.color = "blue";
		temperature_celcius.innerHTML = temp + " degrees fahrenheit is " + result_C + " degrees celcius!";
	} else {
		temperature_celcius.style.color = "green";
		temperature_celcius.innerHTML = temp + " degrees fahrenheit is " + result_C + " degrees celcius!";
	}
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

// This function clears the input 
function clean_UP () {
	var temp = document.getElementById('temp_input');
	temp.value = "";
	document.getElementById('fahrenheit').checked = false;
	document.getElementById('celcius').checked = false;
	document.getElementById('temp_F').innerHTML = "";
	document.getElementById('temp_C').innerHTML = "";
}


// calculate conversion button & 
// Assign a function to be executed when the button is clicked
var button = document.getElementById("converter");
button.addEventListener("click", determineConverter);
	

// clear input button & 
// Assign a function to be executed when the button is clicked
var clear = document.getElementById("clear_Input");
clear.addEventListener("click", clean_UP);

//	Add an event handler to the input field that checks if the user pressed the enter key, 
// and if that happens, perform the conversion.
var input_TempField = document.getElementById('temp_input');
input_TempField.addEventListener('keypress', enterKeyPressed);
