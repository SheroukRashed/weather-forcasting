mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlcm91azIwMjE5NCIsImEiOiJja3VrMmR3bzExOHg0MnFteW8wZndjM3dvIn0.-Dd1BVk_UoL4AgL6Fsg0Vw';
var map = new mapboxgl.Map({
container: 'map-container',
style: 'mapbox://styles/mapbox/streets-v11'
});


map.on('style.load', function() {
    map.on('dblclick', function(e) {
        var coordinates = e.lngLat;
        var longitude = coordinates.lng;
        var latitude = coordinates.lat;
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML('you clicked here: <br/>' + coordinates)
        .addTo(map);
        window.location.href = "weather?longitude=" + longitude + "&latitude=" + latitude;
    });
  });