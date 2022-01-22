/*MAPBOX*/
mapboxgl.accessToken = 'pk.eyJ1IjoicmVhcHo5NyIsImEiOiJja3lxMzc2cnMwZnBiMnBtdjhwdjBhbmJiIn0.lb0KHUK75tBITFx465GVew';

//MAP MARKER GEODATA
const geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [14.2570868, 48.19331649999999]
        },
        properties: {
            title: 'Lists creation',
            description: 'KGW3'
        }
    }]
};

navigator.geolocation.getCurrentPosition(position => {

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/reapz97/ckuh4pwsc56q818rz2xbs4mn5', // style URL
        center: [14.2526, 48.1890], // starting position [lng, lat]
        zoom: 14 // starting zoom
    });

    //add location to map
    // create a HTML element for each feature
    //const el = document.createElement('div');
    //el.className = 'user-location';

    // make a marker for each feature and add to the map
    //new mapboxgl.Marker(el).setLngLat([position.coords.longitude, position.coords.latitude]).addTo(map);
    /*new mapboxgl.Marker(el)
        .setLngLat([position.coords.longitude, position.coords.latitude])
        .addTo(map);*/

    // add markers to map
    for (const { geometry, properties }
        of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);

        new mapboxgl.Marker(el)
            .setLngLat(geometry.coordinates)
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(`<h6>${properties.title}</h6><p>${properties.description}</p>`)
            )
            .addTo(map);
    }
});