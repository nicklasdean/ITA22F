console.log("script initiated");

const button = document.querySelector('button')
button.addEventListener('click', function() {
    const input = document.querySelector('input');
    const userWrittenNumber = input.value;
    const doubledNumber = userWrittenNumber*2;
    const pTag = document.querySelector('p');
    pTag.innerHTML = doubledNumber;
});

