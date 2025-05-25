mapboxgl.accessToken = 'pk.eyJ1IjoiYXBlcmVtZW4iLCJhIjoiY2p2M2g3N2Y4MDk2bDRlcDJ2Y3R0dnNocCJ9.oMUpX3SDvmCFGW1o9qkzoQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aperemen/clog1wi9x006r01qs0w08843z',
    zoom: 9,
    center: [34.764706, 31.530903]
});

// Wait until the map has finished loading.
map.on('load', () => {
    map.addSource('museums', {
        type: 'vector',
        url: 'mapbox://mapbox.2opop9hr'
    });
    map.addLayer({
        'id': 'museums',
        'type': 'circle',
        'source': 'museums',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': 8,
            'circle-color': 'rgba(55,148,179,1)'
        },
        'source-layer': 'none'
    });

    map.addSource('articles', {
        type: 'vector',
        url: 'mapbox://aperemen.3udmgcyl'
    });
    map.addLayer({
        'id': 'articles',
        'type': 'circle',
        'source': 'articles',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'circle-radius': 6,
            'circle-color': 'rgba(245, 183, 39, 0.8)'
        },
        'source-layer': 'Otef_articles_v1-2fhm0c'
    });

    map.addSource('academic projects', {
        type: 'vector',
        url: 'mapbox://aperemen.82wtlhsi'
    });
map.addLayer({
            'id': 'projects',
            'type': 'circle',
            'source': 'academic projects',
            'layout': {
                // Make the layer visible by default.
                'visibility': 'none'
            },
            'paint': {
                'circle-radius': 6,
                'circle-color': 'rgba(59, 37, 128, 0.8)'
            },
            'source-layer': 'Students_projects_v4-6j3wy5'
        });
        
        
        
      //add Layer link-point from mapbox
         map.addSource('link-point', {
            type: 'vector',
            url: 'mapbox://aperemen.clp5h8ryd04ev1lpksm4lh2j2-3p5dj'
        });
        map.addLayer({
            'id': 'link-point',
            'type': 'circle',
            'source': 'link-point',
            'layout': {
                // Make the layer visible by default.
                'visibility': 'none'
            },
            'paint': {
                'circle-radius': 8,
                'circle-color': 'rgba(55,148,179,1)'
            },
            'source-layer': 'link-point'
        });
        
        //add Layer 3d model Points from mapbox
         map.addSource('3D_models', {
            type: 'vector',
            url: 'mapbox://aperemen.clpgoxkgh6p6j1zo0f4pj5evy-4esh9'
        });
        map.addLayer({
            'id': 'models',
            'type': 'circle',
            'source': '3D_models',
            'layout': {
                // Make the layer visible by default.
                'visibility': 'none'
            },
            'paint': {
                'circle-radius': 6,
                'circle-color': 'rgba(222,28,102,0.77)'
            },
            'source-layer': '3D_models'
        });
        
        
        //add Layer link-poligon from mapbox
         map.addSource('link-polygon', {
            type: 'vector',
            url: 'mapbox://aperemen.clp6mbrmd4mco1nt7z79qx767-24p4x'
        });
        map.addLayer({
            'id': 'link-polygon',
            'type': 'fill',
            'source': 'link-polygon',
            'layout': {
                // Make the layer visible by default.
                'visibility': 'none'
            },
            'paint': {
                'fill-color': '#f08',
                'fill-opacity': 0.4
            },
            'source-layer': 'link-polygon'
        });
        
        
        //add Mames of yeshuvim from mapbox
         map.addSource('YeshuvName-2vtfqt', {
            type: 'vector',
            url: 'mapbox://aperemen.4ywc99k2'
        });
        map.addLayer({
            'id': 'YeshuvName',
            'type': 'circle',
            'source': 'YeshuvName-2vtfqt',
            'layout': {
                'visibility': 'none'
            },
            'paint': {
                'circle-radius': 5,
                'circle-color': 'rgba(217, 124, 55, 0.8)'
            },
            'source-layer': 'YeshuvName-2vtfqt'
        });
        
        
        // Add the Mapbox Terrain v2 vector tileset. Read more about
        // the structure of data in this tileset in the documentation:
        // https://docs.mapbox.com/vector-tiles/reference/mapbox-terrain-v2/

        map.addSource('contours', {
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-terrain-v2'
        });
        map.addLayer({
            'id': 'contours',
            'type': 'line',
            'source': 'contours',
            'source-layer': 'contour',
            'layout': {
                // Make the layer visible by default.
                'visibility': 'none',
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#877b59',
                'line-width': 1
            }
        });
        
    });

    // After the last frame rendered before the map enters an "idle" state.
    map.on('idle', () => {
        // If these two layers were not added to the map, abort
        if (!map.getLayer('contours') || !map.getLayer('museums')) {
            return;
        }

        
        
        // const contours = 'קווי גובה'
        // const link_point = 'נקודה לדוגמה'
        // const YeshuvName = 'שמות ישובים'
        // const link_polygon = 'פוליגון לדוגמה'
        // const models = 'מודלים תלת מימד'
        
        const gaza_1948 = 'רצועת עזה 1948'
        const ofakim = 'אופקים 1958'
        const sderot_1968 = 'שדרות 1968'
        const netivot_1968 = 'נתיבות 1968'
        const ofakim_1968 = 'אופקים 1968'   
        const netivot_taza = 'נתיבות תצ"א 2015'
        const gaza_1928 = 'עזה 1928'


       
        // Enumerate ids of the layers.
        const toggleableLayerIds = ['contours', 'link-point' , 'YeshuvName' ,'link-polygon','models','articles','projects',gaza_1928,netivot_taza,gaza_1948,ofakim,ofakim_1968,sderot_1968,netivot_1968];

        // Set up the corresponding toggle button for each layer.
        for (const id of toggleableLayerIds) {
            // Skip layers that already have a button set up.
            if (document.getElementById(id)) {
                continue;
            }

            // Create a link.
            const link = document.createElement('a');
            link.id = id;
            link.href = '#';
            link.textContent = id;
            link.className = 'none';

            // Show or hide layer when the toggle is clicked.
            link.onclick = function (e) {
                const clickedLayer = this.textContent;
                e.preventDefault();
                e.stopPropagation();

                const visibility = map.getLayoutProperty(
                    clickedLayer,
                    'visibility'
                );

                // Toggle layer visibility by changing the layout object's visibility property.
                if (visibility === 'visible') {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                    this.className = '';
                } else {
                    this.className = 'active';
                    map.setLayoutProperty(
                        clickedLayer,
                        'visibility',
                        'visible'
                    );
                }
            };

            const layers = document.getElementById('menu');
            layers.appendChild(link);
        }
    });
    
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('slider-value');

     
     
     
   //////////////////////////////////////// RASTER-START////////////////////////////
    
    const ofakim = 'אופקים 1958'
    const gaza_1948 = 'רצועת עזה 1948'
    const sderot_1968 = 'שדרות 1968'
    const netivot_1968 = 'נתיבות 1968'
    const ofakim_1968 = 'אופקים 1968'
    const netivot_taza = 'נתיבות תצ"א 2015'
    const gaza_1928 = 'עזה 1928'
    
    
    //Add raster image from geotiff layer-Start
    map.on('load', () => {
        map.addSource('ofakim', {
        'type': 'raster',
        'url': 'mapbox://aperemen.28maqa7z'
        });
        map.addLayer({
        'id': ofakim ,
        'source': 'ofakim',
        'type': 'raster',
        'layout': {
                'visibility': 'none'
            }
        
        });
        
         
        slider.addEventListener('input', (e) => {
        // Adjust the layers opacity. layer here is arbitrary - this could
        // be another layer name found in your style or a custom layer
        // added on the fly using `addSource`.
        map.setPaintProperty(
        ofakim,
        'raster-opacity',
        parseInt(e.target.value, 10) / 100
        );
    
        // Value indicator
        sliderValue.textContent = e.target.value + '%';
        });
    });
    //Add raster image from geotiff layer-End
    
    
     //Add raster image from gaza 1928 layer-Start
    map.on('load', () => {
        map.addSource('gaza_1928', {
        'type': 'raster',
        'url': 'mapbox://aperemen.ctoqr4ap'
        });
        map.addLayer({
        'id': gaza_1928 ,
        'source': 'gaza_1928',
        'type': 'raster',
        'layout': {
                'visibility': 'none'
            }
        
        });
        
         
        slider.addEventListener('input', (e) => {
        // Adjust the layers opacity. layer here is arbitrary - this could
        // be another layer name found in your style or a custom layer
        // added on the fly using `addSource`.
        map.setPaintProperty(
        gaza_1928,
        'raster-opacity',
        parseInt(e.target.value, 10) / 100
        );
    
        // Value indicator
        sliderValue.textContent = e.target.value + '%';
        });
    });
    //Add raster image from geotiff layer-End
    
    
    
    //Add raster image GAZA ROADS from geotiff layer-Start
    map.on('load', () => {
        map.addSource('gaza roads', {
        'type': 'raster',
        'url': 'mapbox://aperemen.59a6fxvh'
        });
        map.addLayer({
        'id': gaza_1948,
        'source': 'gaza roads',
        'type': 'raster',
        'layout': {
                'visibility': 'none'
            }
        
        });
        
         
        slider.addEventListener('input', (e) => {
        // Adjust the layers opacity. layer here is arbitrary - this could
        // be another layer name found in your style or a custom layer
        // added on the fly using `addSource`.
        map.setPaintProperty(
        gaza_1948,
        'raster-opacity',
        parseInt(e.target.value, 10) / 100
        );
    
        // Value indicator
        sliderValue.textContent = e.target.value + '%';
        });
    });
    //Add raster image from geotiff layer-End
    
    
    //Add raster image SHDEROT from geotiff layer-Start
    map.on('load', () => {
        map.addSource('sderot 1968', {
        'type': 'raster',
        'url': 'mapbox://aperemen.5q74b7on'
        });
        map.addLayer({
        'id': sderot_1968,
        'source': 'sderot 1968',
        'type': 'raster',
        'layout': {
                'visibility': 'none'
            }
        
        });
        
        slider.addEventListener('input', (e) => {
        map.setPaintProperty(
        sderot_1968,
        'raster-opacity',
        parseInt(e.target.value, 10) / 100
        );
    
        sliderValue.textContent = e.target.value + '%';
        });
    });
    //Add raster image SHDEROT from geotiff layer-End
    
    
    //Add raster image netivot from geotiff layer-Start
    map.on('load', () => {
        map.addSource('netivot 1968', {
        'type': 'raster',
        'url': 'mapbox://aperemen.7951xnfr'
        });
        map.addLayer({
        'id': netivot_1968,
        'source': 'netivot 1968',
        'type': 'raster',
        'layout': {
                'visibility': 'none'
            }
        
        });
        
        slider.addEventListener('input', (e) => {
        map.setPaintProperty(
        netivot_1968,
        'raster-opacity',
        parseInt(e.target.value, 10) / 100
        );
    
        sliderValue.textContent = e.target.value + '%';
        });
    });
    //Add raster image netivot from geotiff layer-End
    
    
    //Add raster image ofakim 1968 from geotiff layer-Start
    map.on('load', () => {
        map.addSource('ofakim 1968', {
        'type': 'raster',
        'url': 'mapbox://aperemen.dviunmvy'
        });
        map.addLayer({
        'id': ofakim_1968,
        'source': 'ofakim 1968',
        'type': 'raster',
        'layout': {
                'visibility': 'none'
            }
        
        });
        
        slider.addEventListener('input', (e) => {
        map.setPaintProperty(
        ofakim_1968,
        'raster-opacity',
        parseInt(e.target.value, 10) / 100
        );
    
        sliderValue.textContent = e.target.value + '%';
        });
    });
    //Add raster image ofakim 1968 from geotiff layer-End
    
    
    
    //Add raster image netivot_taza from geotiff layer-Start
    map.on('load', () => {
        map.addSource('netivot taza', {
        'type': 'raster',
        'url': 'mapbox://aperemen.b467g7tw'
        });
        map.addLayer({
        'id': netivot_taza,
        'source': 'netivot taza',
        'type': 'raster',
        'layout': {
                'visibility': 'none'
            }
        
        });
        
        slider.addEventListener('input', (e) => {
        map.setPaintProperty(
        netivot_taza,
        'raster-opacity',
        parseInt(e.target.value, 10) / 100
        );
    
        sliderValue.textContent = e.target.value + '%';
        });
    });
    //Add raster image netivot_taza from geotiff layer-End
    
    

    
    
    //////////////////////////////////////// RASTER-END////////////////////////////   
    
    
    
    
    
    
    
    
    //Add points Popup-strat
    // map.on('load', () => {
    //     map.addSource('places', {
    //         'type': 'geojson',
    //         'data': {
    //             'type': 'FeatureCollection',
    //             'features': [
    //                 {
    //                     'type': 'Feature',
    //                     'properties': {
    //                         'description':
    //                             '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
    //                     },
    //                     'geometry': {
    //                         'type': 'Point',
    //                         'coordinates': [34.53510869559606 , 31.47057853475016]
    //                     }
    //                 },
    //                 {
    //                     'type': 'Feature',
    //                     'properties': {
    //                         'description':
    //                             '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>'
    //                     },
    //                     'geometry': {
    //                         'type': 'Point',
    //                         'coordinates': [34.516,31.453]
    //                     }
    //                 },
    //                 {
    //                     'type': 'Feature',
    //                     'properties': {
    //                         'description':
    //                             '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.</p>'
    //                     },
                        
    //                     'geometry': {
    //                         'type': 'Point',
    //                         'coordinates': [34.491,31.424]
    //                     }
    //                 }
    //             ]
    //         }
    //     });
    //     // Add a layer showing the places.
    //     map.addLayer({
    //         'id': 'places',
    //         'type': 'circle',
    //         'source': 'places',
    //         'paint': {
    //             'circle-color': '#4264fb',
    //             'circle-radius': 6,
    //             'circle-stroke-width': 2,
    //             'circle-stroke-color': '#ffffff'
    //         }
    //     });

    //     // Create a popup, but don't add it to the map yet.
    //     const popup = new mapboxgl.Popup({
    //         closeButton: false,
    //         closeOnClick: false
    //     });

    //     map.on('mouseenter', 'places', (e) => {
    //         // Change the cursor style as a UI indicator.
    //         map.getCanvas().style.cursor = 'pointer';

    //         // Copy coordinates array.
    //         const coordinates = e.features[0].geometry.coordinates.slice();
    //         const description = e.features[0].properties.description;

    //         // Ensure that if the map is zoomed out such that multiple
    //         // copies of the feature are visible, the popup appears
    //         // over the copy being pointed to.
    //         while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //             coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    //         }

    //         // Populate the popup and set its coordinates
    //         // based on the feature found.
    //         popup.setLngLat(coordinates).setHTML(description).addTo(map);
    //     });

    //     map.on('mouseleave', 'places', () => {
    //         map.getCanvas().style.cursor = '';
    //         popup.remove();
    //     });
    // });
    //Add points Popup-end
    
     
    //open dots popup - start 
     map.on('click', (event) => {
        const features = map.queryRenderedFeatures(event.point, {
          layers: ['link-point']
        });
        if (!features.length) {
          return;
        }
        const feature = features[0];

        const popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p><p><a href=${feature.properties.link}  target="_blank">${feature.properties.link}</a></p>`
          )
          .addTo(map);
      });
    //open dots popup - End
    
    
    //open 3d models popup - start 
     map.on('click', (event) => {
        const features = map.queryRenderedFeatures(event.point, {
          layers: ['models']
        });
        if (!features.length) {
          return;
        }
        const feature = features[0];

        const popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p><p><a href=${feature.properties.link}  target="_blank">${'קישור לתיקייה'}</a></p>`
          )
          .addTo(map);
      });
    //3d nodels Points - End
  
  
  //open articles popup - start 
     map.on('click', (event) => {
        const features = map.queryRenderedFeatures(event.point, {
          layers: ['articles']
        });
        if (!features.length) {
          return;
        }
        const feature = features[0];

        const popup = new mapboxgl.Popup({ offset: [0, -25] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h3>${'----------------'}</h3><h3>${feature.properties.kotert}</h3><p>${feature.properties.description}</p><p><a href=${feature.properties.link}  target="_blank">${' קישור לכתבה'}</a></p>`
          )
          .addTo(map);
      });
    //articles Points - End
    
    
    //open projects popup - start 
     map.on('click', (event) => {
        const features = map.queryRenderedFeatures(event.point, {
          layers: ['projects']
        });
        if (!features.length) {
          return;
        }
        const feature = features[0];

        const popup = new mapboxgl.Popup({ offset: [0, -25] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h3>${'----------------'}</h3>
                <p>${feature.properties.student}</p>
                <p>${feature.properties.description}</p>
                <p><img src=${feature.properties.image} width="300" height="400"></p>
                <p><a href=${feature.properties.link} target="_blank">
                ${'קישור לפרויקט'}
                </a></p>`
          )
          .addTo(map);
      });
    //articles projects - End
  
   //open dots popup - start 
     map.on('click', (event) => {
        const features = map.queryRenderedFeatures(event.point, {
          layers: ['YeshuvName']
        });
        if (!features.length) {
          return;
        }
        const feature = features[0];

        const popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h3>${'-----------'}</h3><h3>${feature.properties.SHEM_YISHU}</h3>`
          )
          .addTo(map);
      });
    //open dots popup - End
    
     //open Polygon popup - start 
     // When a click event occurs on a feature in the states layer,
        // open a popup at the location of the click, with description
        // HTML from the click event's properties.
        map.on('click', 'link-polygon', (e) => {
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(e.features[0].properties.title)
                .addTo(map);
        });

        // Change the cursor to a pointer when
        // the mouse is over the states layer.
        map.on('mouseenter', 'link-polygon', () => {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change the cursor back to a pointer
        // when it leaves the states layer.
        map.on('mouseleave', 'link-polygon', () => {
            map.getCanvas().style.cursor = '';
        });
    //open Polygon popup - End
    
});
