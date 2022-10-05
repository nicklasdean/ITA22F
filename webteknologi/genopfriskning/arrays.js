const arr = ["sort","lilla","blå","grøn","gul","fart"];
console.log(arr[0]);
console.log(arr[4]);

const prices = [100, 300, 489, 532, 34, 23, 32];
console.log(prices[prices.length - 1]);

const firstElement = prices[0];
const lastElement = prices[prices.length - 1];

if(firstElement > lastElement){
    console.log("First is bigger");
}

let sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}
console.log(sum);
const average = sum / prices.length;
console.log(average);