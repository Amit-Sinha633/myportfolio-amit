
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


let tempC = 25;
let tempF = 77;

console.log(`${tempC}°C is equal to ${celsiusToFahrenheit(tempC).toFixed(2)}°F`);
console.log(`${tempF}°F is equal to ${fahrenheitToCelsius(tempF).toFixed(2)}°C`);