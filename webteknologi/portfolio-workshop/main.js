//console.log(1)

fetch('http://localhost:3000/api/wishes')
    .then(response => response.json())
    .then(function (wishes) {
        console.log(wishes)
    });





