/*MAPBOX*/
mapboxgl.accessToken = 'pk.eyJ1IjoicmVhcHo5NyIsImEiOiJja3lxMzc2cnMwZnBiMnBtdjhwdjBhbmJiIn0.lb0KHUK75tBITFx465GVew';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/reapz97/ckuh4pwsc56q818rz2xbs4mn5', // style URL
    center: [14.2526, 48.1890], // starting position [lng, lat]
    zoom: 14 // starting zoom
});