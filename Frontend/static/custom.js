function showmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([90.485558, 27.450556]),
    zoom: 8.2
  })
});

var vectorSource = new ol.source.Vector({});
var places = [
  [89.3938, 26.8603],
  [90.4927, 26.8725],
  [89.8797, 27.5921],
  [91.5039, 26.8036],
  [91.5523, 27.3325],
  [89.4164, 27.4287],
];

for (var i = 0; i < places.length; i++) {
  var marker = new ol.Feature({
    geometry: new ol.geom.Point(
      ol.proj.fromLonLat([places[i][0], places[i][1]])
    )
  });

  marker.setStyle(new ol.style.Style({
        image: new ol.style.Icon(({
            //color: '#ffcd46',
            crossOrigin: 'anonymous',
            src: 'https://img.icons8.com/color/48/000000/hornet.png'
        }))
  }));
  vectorSource.addFeature(marker);
}
var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
  updateWhileAnimating: true,
  updateWhileInteracting: true,
});
map.addLayer(markerVectorLayer);
