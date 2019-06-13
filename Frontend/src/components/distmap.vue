<template>
  <div style="height:400px;width:100%">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-geo-json
        :geojson="geojson"
      />
    </l-map>
  </div>
</template>
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker,LGeoJson  } from "vue2-leaflet";
import mapserver from '@/services/mapserver'
export default {
  name: "App",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LGeoJson    
  },
  data() {
    return {
      geojson:null,
      zoom: 8.2,
      center: latLng( 27.450556,90.485558),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },
  mounted: function() {
    this.getdzo();
  },
  methods: {
    async getdzo(){
      try{
        let res=await mapserver.getdzo()
        this.geojson=res.data;
        console.log("loaded the map")
      }catch(error){
        console.log(error);
      }
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  }
};
</script>


