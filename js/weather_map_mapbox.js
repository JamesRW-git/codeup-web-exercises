"use strict"

//Default starting location
let mapLat = 29.97;
let mapLon = -90.08;

mapboxgl.accessToken = MAP_key;
let map = initMap(mapLon, mapLat);
let marker;
let currentLocation = [mapLon, mapLat];
let placeName;


marker = createMarker(currentLocation);

//Function to create map
function initMap(lon, lat) {
    mapboxgl.accessToken = MAP_key;
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        maxZoom: 17,
        minZoom: 5,
        zoom: 10,
        center: [lon, lat]
    });
}

function createMarker(coordinates) {
    if (marker) {
        marker.remove();
    }
    return new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
}

$("#changeLocation").click(function () {
    console.log('Change Location Mapbox Clicked')
    geocode($("#newLocation").val(), MAP_key).then(function (result) {
        map.setCenter(result);
        map.setZoom(10);
        currentLocation.pop();
        currentLocation.pop();
        currentLocation.unshift(result[1]);
        currentLocation.unshift(result[0]);
        lat = currentLocation[1];
        lon = currentLocation[0];
        geoCoderSearch = {lat: lat, lon: lon}
        // reverseGeocode(geoCoderSearch, MAP_key).then(function (result) {
        //     console.log(result)
        //     if(result.length !== 0) {
        //         placeName = result;
        //     } else {
        //         placeName = 'Location'
        //     }
        // })
        marker = createMarker({lat, lon});
        $('#forecast').html("");
        $('#locationName').html("");
        getData(lat, lon);
    })
});


map.on('click', function (e) {
    marker = createMarker([e.lngLat.lng, e.lngLat.lat]);
    getData(e.lngLat.lat, e.lngLat.lng);
    geoCoderSearch = {lat: e.lngLat.lat, lng: e.lngLat.lng};
    // reverseGeocode(geoCoderSearch, MAP_key).then(function (result) {
    //     if(result.length !== 0) {
    //         placeName = result;
    //     } else {
    //         placeName = 'Location'
    //     }
    //     }
    // )
})


