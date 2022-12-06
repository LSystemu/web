let lsmap = L.map('lsmap').setView([50.7068352341879, 4.24997673652956], 20);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(lsmap);

let marker = L.marker([50.7068012340879, 4.24997673652956]).addTo(lsmap);

marker.bindPopup("LSystemus<br>Dokter Spitaelslaan 438 <br> B-1502 Halle").openPopup();