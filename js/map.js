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
var polygon1 = L.polygon([
    [-6.219591, 106.996571],[-6.21977, 106.996847],[-6.219916, 106.996914],
    [-6.220231, 106.997046],[-6.220738, 106.997153],[-6.220858, 106.997108],
    [-6.221026, 106.99686],[-6.221055, 106.996839],[-6.221098, 106.996818],
    [-6.221735, 106.996815],[-6.221811, 106.996855],[-6.221833, 106.996826],
    [-6.221852, 106.996472],[-6.221089, 106.99618],[-6.220786, 106.996024],
    [-6.220005, 106.995616],[-6.219557, 106.995404],[-6.219356, 106.995351],
    [-6.21905, 106.995828],[-6.219023, 106.995917],[-6.219012, 106.995992],
    [-6.219023, 106.996174],[-6.219002, 106.996413]
], {color: '#5bc7d2'}).addTo(map);

var polygon2 = L.polygon([
    [-6.221973, 107.003416],[-6.220869, 107.00303],[-6.22026, 107.003022],
    [-6.219505, 107.002842],[-6.219002, 107.002684], [-6.217551, 107.002641],
    [-6.215497, 107.00314],[-6.214361, 107.003644],[-6.214533, 107.004191],
    [-6.214866, 107.004084],[-6.214938, 107.00399],[-6.215136, 107.003896],
    [-6.215476, 107.00392],[-6.215794, 107.003741],[-6.216493, 107.00351],
    [-6.216851, 107.003349],[-6.21777, 107.003212],[-6.218274, 107.003379],
    [-6.218402, 107.003325],[-6.218607, 107.003081],[-6.218781, 107.002984],
    [-6.219018, 107.00299],[-6.219247, 107.003081],[-6.219467, 107.003282],
    [-6.219885, 107.003818],[-6.220066, 107.003894],[-6.220482, 107.003894],
    [-6.221154, 107.003818],[-6.221556, 107.003749],[-6.22189, 107.003789],
    [-6.221936, 107.003711]
], {color: '#5bc7d2'}).addTo(map)

polygon.on('click', map.fitbounds(bounds))
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

L.control.locate(OPTIONS).addTo(map);

var lc = L.control
  .locate({
    position: "topright",
    strings: {
      title: "Show me where I am, yo!"
    }
  })
  .addTo(map);
