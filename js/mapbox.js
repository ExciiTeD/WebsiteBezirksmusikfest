/*MAPBOX*/
mapboxgl.accessToken = 'pk.eyJ1IjoicmVhcHo5NyIsImEiOiJja3lxMzc2cnMwZnBiMnBtdjhwdjBhbmJiIn0.lb0KHUK75tBITFx465GVew';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/reapz97/ckuh4pwsc56q818rz2xbs4mn5', // style URL
    center: [14.25279, 48.18571], // starting position [lng, lat] 48,18571° N, 14,25279° E
    zoom: 14.2 // starting zoom
});
map.scrollZoom.disable();


//MAP MARKER GEODATA
const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [14.250094, 48.185203] //48.185203, 14.250094
        },
        properties: {
          title: 'Festzelt',
          description: 'Standort Festzelt'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [14.254946, 48.186700] //48.186700, 14.254946
        },
        properties: {
          title: 'Wertungsplatz',
          description: 'Standort Wertungsplatz'
        }
      }
    ]
};

// create the popups
const popup_marching = new mapboxgl.Popup({ offset: 25 }).setText(
    'Wertungsplatz'
    );

const popup_tent = new mapboxgl.Popup({ offset: 25 }).setText(
    'Festzelt!'
    );

//add markers
var el = document.createElement('div');
el.className = 'marker_tent_3';
new mapboxgl.Marker(el)
    .setLngLat(geojson.features[0].geometry.coordinates)
    .setPopup(popup_tent)
    .addTo(map);

el = document.createElement('div');
el.className = 'marker_marching';
new mapboxgl.Marker(el)
    .setLngLat(geojson.features[1].geometry.coordinates)
    .setPopup(popup_marching) // sets a popup on this marker
    .addTo(map);

