<template>
  <v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <v-flex xs6>
        <h2>How to use the search tool</h2>
        <p>The search tool lets you enter the name of the pests, diease or the name of the hosts that it infects. It displays the most relevant results. On selecting one of the options, it shows information related to: </p>
        <ul>
          <li>Name / Identity of the pests</li>
          <li>List of host plants associated with it</li>
          <li>Description of the Symptoms</li>
          <li>Means of Spread</li>
        </ul>
       <p>For more advanced search options<router-link to="/search" tag="span" style="cursor: pointer" class="blue--text"> go here</router-link></p>
      </v-flex>

      <v-flex xs6>
        <img class="img-fluid rounded" src="static/pests.jpg" alt="pests">
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
};
</script>
