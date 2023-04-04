const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');


function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function convertCelsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function convertKelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function convertFahrenheitToKelvin(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

function convertKelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

celsiusInput.addEventListener("input", () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = convertCelsiusToFahrenheit(celsius);
  const kelvin = convertCelsiusToKelvin(celsius);

  fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2);
  kelvinInput.value = isNaN(kelvin) ? "" : kelvin.toFixed(2);
});

fahrenheitInput.addEventListener("input", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = convertFahrenheitToCelsius(fahrenheit);
  const kelvin = convertFahrenheitToKelvin(fahrenheit);

  celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(2);
  kelvinInput.value = isNaN(kelvin) ? "" : kelvin.toFixed(2);
});

kelvinInput.addEventListener("input", () => {
  const kelvin = parseFloat(kelvinInput.value);
  const celsius = convertKelvinToCelsius(kelvin);
  const fahrenheit = convertKelvinToFahrenheit(kelvin);

  celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(2);
  fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2);
});
