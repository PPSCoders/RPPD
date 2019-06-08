<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
        <v-img 
          :src="require('@/assets/Blogo.png')"
          max-height ="60px"
          max-width="60px"
          min-height ="40px"
          min-width="60px">
        </v-img>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>

</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data(){
    return {
      appTitle: 'Regulated Plant Pest and Diseases of Bhutan',
      sidebar: false,
      menuItems: [
          // { title: 'Home', path: '/home', icon: 'home' },
          // { title: 'Sign Up', path: '/signup', icon: 'face' },
          // { title: 'Sign In', path: '/signin', icon: 'lock_open' }
          { title: 'Home', path: '/'},
          { title: 'Search', path: '/search'},
          { title: 'FAQ', path: '/faq'},
          { title: 'Login', path: '/login'},
     ]
    }
  },
};
</script>
<style>

</style>
