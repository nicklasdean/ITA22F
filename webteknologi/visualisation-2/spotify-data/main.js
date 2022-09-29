console.log(spotifyPlays);

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

const showPosition = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    // Your code here
}
const showError = (error) => console.log(error);

getLocation();