"use strict"

//Default starting location
let startingLat = 29.97;
let startingLon = -90.08;

let map = initMap(startingLon, startingLat);

//Function to create map
function initMap(lon, lat) {
    mapboxgl.accessToken = MAP_key;
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        maxZoom: 12,
        minZoom: 5,
        zoom: 10,
        center: [lon, lat]
    });
}