let lsmap = L.map('lsmap').setView([50.706806477737544, 4.25039255269548], 20);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(lsmap);

let marker = L.marker([50.706806477737544, 4.25039255269548]).addTo(lsmap);

marker.bindPopup("LSystemus<br>Dokter Spitaelslaan 438 <br> B-1502 Halle").openPopup();