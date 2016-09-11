var Temperature = {
    toFahrenheit (celsius) {
        var fahrenheit;
        fahrenheit = celsius * (9/5) + 32;
        return fahrenheit;
    },
    toCelsius (fahrenheit) {
        var celsius;
        celsius = (fahrenheit - 32) * (5/9);
        return celsius;
    }
};
var tempToday = 82;
var tempInCelsius = Temperature.toCelsius(tempToday);
var message = "Today’s temperature is " + tempToday +"°F, which is " + tempInCelsius + "°C.";

console.log(message);