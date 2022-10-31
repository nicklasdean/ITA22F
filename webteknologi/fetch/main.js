//console.log(1)

fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(function (yesOrNoData) {
        console.log(yesOrNoData);
    });


/*const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log("button clicked");
});*/


