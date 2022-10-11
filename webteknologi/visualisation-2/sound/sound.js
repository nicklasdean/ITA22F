
const data = [10,11,12,15];
document.querySelector('button').addEventListener('click', () => {
    setInterval(() => {
        playHighNotes();
        playLowNotes();
    }, 800);
    playHighNotes();
    playLowNotes();

});

function playLowNotes() {
    let delay = 300;
    for(let i = 0; i < data.length; i++) {
        const dataPoint = data[i];
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        // play a tone based on data for the duration of a 12th note every second
        const timeBetweenNotesInSeconds = 0.4;
        const tone = dataPoint * 10;
        console.log(tone);
        synth.triggerAttackRelease(tone, "12n", now + (i * timeBetweenNotesInSeconds));
    }
}


function playHighNotes() {
    let delay = 300;
    for(let i = 0; i < data.length; i++) {
        const dataPoint = data[i];
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        // play a tone based on data for the duration of a 12th note every second
        const timeBetweenNotesInSeconds = 0.2;
        const tone = dataPoint * 100;
        console.log(tone);
        synth.triggerAttackRelease(tone, "12n", now + (i * timeBetweenNotesInSeconds));
    }
}






/*

document.querySelector('button').addEventListener('click', () => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();
    //play a tone with 200 hz for an 8th notes time
    synth.triggerAttackRelease(200, "8n");
    // after 3 seconds play 400 hz
    const now = Tone.now();
    synth.triggerAttackRelease(400, "8n", now + 1);
});



 */


