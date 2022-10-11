
const user = {
  name: "benjamin"
};

console.log(user.name);

const map = L.map("map").setView([56, 11.6], 6);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
L.circle([ufoSightingsLatLng[0].lat, ufoSightingsLatLng[0].lng]).addTo(map);

for (let i = 0; i < ufoSightingsLatLng.length; i++) {
    L.circle([ufoSightingsLatLng[i].lat, ufoSightingsLatLng[i].lng]).addTo(map);
    console.log(i);
}

console.log(ufoSightingsLatLng);
console.log(ufoSightingsLatLng[0])
console.log(ufoSightingsLatLng[0].lat)
console.log(ufoSightingsLatLng[0].lng)
