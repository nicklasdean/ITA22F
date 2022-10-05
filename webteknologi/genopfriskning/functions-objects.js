//A function without a return value
function helloWorld(){
    console.log("Hello World");
}

//A function that returns the average of an array of numbers
function calculateAverageOfArray(arrayFromArgument){
    let sum = 0;
    for (let i = 0; i < arrayFromArgument.length; i++) {
        sum += arrayFromArgument[i];
    }
    console.log(sum);
    const average = sum / arrayFromArgument.length;
    console.log(average);
}
const prices = [100, 300, 489, 532, 34, 23, 32];
calculateAverageOfArray(prices);

//A car object
const car1 = {
    licensePlate : "AF 77 299",
    brand : "Hyundai",
    year : 2013,
    stick : true
}

console.log(car1.licensePlate);

//A function that returns if a car is rental

//Multiple cars

//A loop that determines how many cars are rental