console.log('I am running!');
// Utwórz mapę i ustaw na Polskę
var map = L.map('map').setView([52.2297, 21.0122], 13);

// Dodaj płytki OSM jako tło mapy
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// Dodaj znacznik z lokalizacją użytkownika
function onLocationFound(e) {
    L.marker(e.latlng).addTo(map);
}

// Wyświetl komunikat o braku dostępu do lokalizacji
function onLocationError(e) {
    alert(e.message);
}

// Wywołaj metodę, która pobiera lokalizację użytkownika
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
map.locate({setView: true, maxZoom: 16});