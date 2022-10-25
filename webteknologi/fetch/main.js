//console.log(1)
fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(function (yesOrNoData) {
        //console.log(2);
        //console.log(yesOrNoData.answer);
        renderYesOrNo(yesOrNoData)

    });

function renderYesOrNo(dataFromApi) {
    console.log(dataFromApi);
    const h1 = document.querySelector('h1');
    h1.innerHTML = dataFromApi.answer;

    const img = document.querySelector('img');
    img.src = dataFromApi.image;
}


/*const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log("button clicked");
});*/


/*fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(astronautsData => {
        console.log(astronautsData);
    })*/

