
mapboxgl.accessToken = '____________';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aperemen/clog1wi9x006r01qs0w08843z',
    zoom: 9,
    center: [34.764706, 31.530903]
});

map.on('load', () => {
    map.addSource('museums', {
        type: 'vector',
        url: 'mapbox://mapbox.2opop9hr'
    });
    map.addLayer({
        id: 'museums',
        type: 'circle',
        source: 'museums',
        layout: { visibility: 'visible' },
        paint: { 'circle-radius': 8, 'circle-color': 'rgba(55,148,179,1)' },
        'source-layer': 'none'
    });

    map.addSource('articles', {
        type: 'vector',
        url: 'mapbox://aperemen.3udmgcyl'
    });
    map.addLayer({
        id: 'articles',
        type: 'circle',
        source: 'articles',
        layout: { visibility: 'none' },
        paint: { 'circle-radius': 6, 'circle-color': 'rgba(245, 183, 39, 0.8)' },
        'source-layer': 'Otef_articles_v1-2fhm0c'
    });

    map.addSource('academic projects', {
        type: 'vector',
        url: 'mapbox://aperemen.82wtlhsi'
    });
    map.addLayer({
        id: 'projects',
        type: 'circle',
        source: 'academic projects',
        layout: { visibility: 'none' },
        paint: { 'circle-radius': 6, 'circle-color': 'rgba(59, 37, 128, 0.8)' },
        'source-layer': 'Students_projects_v4-6j3wy5'
    });
});
