var map = L.map('map').setView([4.616239, -74.083886], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.612017, -74.083955]).addTo(map);

var polygon = L.polygon([
    [4.612283, -74.089293],
    [4.616052, -74.086013],
    [4.617944, -74.088317],
    [4.614158, -74.091560]
]).addTo(map);

var circle = L.circle([4.615326, -74.088624], {
    color: 'green',
    fillColor: '#f09',
    fillOpacity: 0.4,
    radius: 1500
}).addTo(map);