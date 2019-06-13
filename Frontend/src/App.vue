<template>
  <v-app>
    <navbar/>
    <br><br><br><br>
    <router-view/>
  </v-app>
</template>

<script>
import navbar from '@/components/navbar.vue';
export default {
  name: 'App',
  components: {
    navbar,
  },
};
</script>
<style>
  @import "../node_modules/leaflet/dist/leaflet.css";
  .leaflet-fake-icon-image-2x {
  background-image: url(../node_modules/leaflet/dist/images/marker-icon-2x.png);
  }
  .leaflet-fake-icon-shadow {
    background-image: url(../node_modules/leaflet/dist/images/marker-shadow.png);
  }

</style>
