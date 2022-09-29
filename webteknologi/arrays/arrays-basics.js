//How many times are we printing?
const friends = 11;

for (let i = 0; i < 5; i++) {
    if(friends >= 10){
        // console.log("Hey guys 2");
    }
}

// Creating an array
fruits = ["apple", "banana", "orange","pineapple"];
console.log(fruits.length);
console.log(fruits);

// Pushing an element
let newFruit = "kiwi";
fruits.push(newFruit);
console.log(fruits.length)
console.log(fruits)

// Referring to an element
let singleFruit = fruits[1];
console.log(singleFruit);

// Iterate through an array using a for loop
    // print each value
for(let counter = 0; counter < fruits.length ; counter ++){
    console.log(`The counter value is ${counter}`);
    console.log(fruits[counter]);
}

//Getting last element
const moreNames = ['Peter', 'Susan', 'Charlotte', 'Abdullah'];
const lastElementInTheArray2 = moreNames[moreNames.length-1];
console.log(lastElementInTheArray2); // Abdullah

// Summing or counting
scoreboard = [1,2,3,4,5,6];
let sum = 0;

for (let i = 0; i < scoreboard.length; i++) {
   sum += scoreboard[i];
}

console.log(sum);