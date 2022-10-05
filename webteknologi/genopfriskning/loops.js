//Printing 1-10
for(let i = 0; i < 10; i++){
    console.log(i);
}

//Nested loops
for (let i = 0; i < 5; i++) {
    console.log("Ude i det ydre loop");
    for (let j = 0; j < 5; j++){
        console.log("Inde i det indre loop");
    }
}

//Foreach
const artists = ["Britney Spears", "Bruno Mars", "Pop Smoke"];

artists.forEach(element => console.log(element));

for (let i = 0; i < artists.length; i++) {
    console.log(artists[i]);
}