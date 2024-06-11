// Leaflet JS
var map = L.map('map').setView([-6.21957,106.99970], 16);
map.removeControl(map.zoomControl);
// tile
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// marker
var marker = L.marker([-6.21957,106.99970]).addTo(map);
// circle
// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);
// polygon
var polygon = L.polygon([
    [-6.219591, 106.996571],[-6.21977, 106.996847],[-6.219916, 106.996914],
    [-6.220231, 106.997046],[-6.220738, 106.997153],[-6.220858, 106.997108],
    [-6.221026, 106.99686],[-6.221055, 106.996839],[-6.221098, 106.996818],
    [-6.221735, 106.996815],[-6.221811, 106.996855],[-6.221833, 106.996826],
    [-6.221852, 106.996472],[-6.221089, 106.99618],[-6.220786, 106.996024],
    [-6.220005, 106.995616],[-6.219557, 106.995404],[-6.219356, 106.995351],
    [-6.21905, 106.995828],[-6.219023, 106.995917],[-6.219012, 106.995992],
    [-6.219023, 106.996174],[-6.219002, 106.996413]

    
]).addTo(map);
// popups
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
// standalone popup
// var popup = L.popup()
//     .setLatLng([-6.21957,106.99970])
//     .setContent("I am a standalone popup.")
//     .openOn(map);
// popup event
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
