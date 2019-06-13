<template>
  <v-container grid-list-md text-xs-left>
    <v-layout row wrap sytle="backgroud: grey">
      <v-flex xs12>
        <!-- <h1 class="text-xs-left green--text">Welcome to the Regulated Plants Pests and Diseases Database</h1><br> -->
      </v-flex>
      <!-- <v-flex xs12 class="text-xs-center">
       <img class="img-fluid rounded" src="static/field.jpg" alt="pests">
      </v-flex> -->
      <v-flex xs3>
        <h2 class="blue--text">Pests and Diseases</h2>
        <br>
        <ul class="" style="list-style: none;">
          <li>
            <img src="https://img.icons8.com/color/48/000000/forest.png">
            <router-link to="/search" tag="span" style="cursor: pointer">
              Hortricultural
            </router-link>
          </li>
          <li>
            <img src="https://img.icons8.com/color/48/000000/apple.png">
              <router-link to="/search" tag="span" style="cursor: pointer">
                Agricultural
              </router-link>
          </li>
          <li>
            <img src="https://img.icons8.com/color/48/000000/corn.png">
              <router-link to="/search" tag="span" style="cursor: pointer">
                Forestry
              </router-link>
          </li>
        </ul>
      </v-flex>
      <v-flex xs9 >
        <h2  class="blue--text">Regulated Plant Pests and Diseases</h2><br>
        
        <h3>Objectives and Scope of Regulated Plant Pests and Diseases Database (PQPD)</h3>
         <p>The Biosecurity Policy of the Kingdom of Bhutan 20 I 0 designates BAFRA as the National Competent Authority to coordinate all the biosecurity related activities in Bhutan. And for strengthening the plant biosecurity measures in the country, one essential component is to maintain the Regulated Plant Pests and Diseases Database. Such database not only serves the purpose for information exchange among various stakeholders, but also to assist movement of plants and planting materials between Bhutan and outside world. It will help to enhance trade in plant and planting materials and make it safe for agricultural development mainly by ensuring that serious pests, diseases and weeds are not introduced to pest free areas, and also export such problems to other countries are prevented.<span id="dots">...</span></p>
         <span id="more">
         <p>The primary aim of this database is to assist Plant Quarantine Inspectors with pests, diseases, and weeds information to improve their knowledge and make them more effective and efficient to implement tasks of plants and planting materials inspection at the point of entry and in the areas where internal quarantine measures are implemented. In addition, it is also expected to serve as a data repository wherein hosts of emerging or potential plant quarantine pests, diseases and weeds information can be updated and made available as and when necessary by the National Plant Protection Organization.</p>
         <p>Bhutan has been witnessing increased trade volume of plants and plant materials over the years. Such trade has associated risks with it as they may serve as a pathway for introduction and spread of exotic plant pests and diseases. As per the definition of the International Plant Protection Convention (IPPC),a quarantine pest is a pest of potential economic importance to the area endangered thereby and not yet present there, or present but not widely distributed and being officially controlled. The Plant Quarantine Pest Database contains list of pest, disease or weed mostly not present in the country and a few pests that are under official regulation in the country which are of quarantine importance.PQPDis the basic online database management system maintained by Bhutan Agriculture and Food Regulatory Authority (BAFRA) under Ministry of Agriculture and Forests. </p> </span>
         
         <button onclick="showmore()" id="myBtn">Read more</button>
      </v-flex>
      <v-flex xs12 >
        <faq/>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>
<script>
import faq from '@/components/faq.vue';

export default {
  components: {
    faq,
  },
};
</script>
