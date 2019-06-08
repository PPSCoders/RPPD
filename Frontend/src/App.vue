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
