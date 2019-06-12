<template>
  <v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <div id="detailContainer" class="container bg-light" style="padding-left: 50px;padding-right: 50px; padding-top: 30px">
    
    <h1 id="pest_name" class="text-secondary"><b>{{name}}</b></h1>
    <br>

    <h3 id="scientificname">Scientific Name</h3>
    <p>{{scientificname}}</p>
    <br><br>

    <h3 id="casualorganism">Casual Organism</h3>
    <p>{{casualorganism}}</p>
    <br><br>

    <h3 id="host">Hosts</h3>
    <p>{{host}}</p>
    <br><br>

    <h3 id="biology">Biology</h3>
    <p>{{biology}}</p>
    <br><br>

    <h3 id="symptoms">Symptoms</h3>
    <p>{{symptoms}}</p>
    <br><br>
    
    <h3 id="distribution">Distribution</h3>
    <p>{{distribution}}</p>
    <br><br>

    <h3 id="spreadmeans">Means of Spread</h3>
    <p>{{spreadmeans}}</p>
    <br><br>

    <h3 id="phytosanitaryrisk">Phytosanitary Risks</h3>
    <p>{{phytosanitaryrisk}}</p>
    <br><br>

    <h3 id="phytosanitarymeasures">Phytosanitary Measures</h3>
    <p>{{phytosanitarymeasures}}</p>
    <br><br>
    

    <!-- section displaying the maps -->
    <div id="map" class="map"></div>  


  </div>    
    
    </v-layout>
  </v-container>
</template>
<script>
import database from '@/services/database'

export default {
  name:'page',
  props:['id'],
  data() {
    return{
      pests:[],
      name:'Not Avaliable',
      scientificname:'',
      casualorganism:'',
      host:'',
      biology:'',
      symptoms:'',
      distribution:'',
      spreadmeans:'',
      phytosanitaryrisk:'',
      phytosanitarymeasures:'',
    }
  },
  created: function(){
      this.testing()
      this.getdata()
  },
  methods:{
    async getdata() {
      try{
        if(this.$route.params.id){
          let res=await database.getdata(this.$route.params.id)
          this.name=res.data.data.name
          this.scientificname=res.data.data.scientificname
          this.casualorganism=res.data.data.casualorganism
          this.host=res.data.data.host
          this.biology=res.data.data.biology
          this.symptoms=res.data.data.symptoms
          this.distribution=res.data.data.distribution
          this.spreadmeans=res.data.data.spreadmeans
          this.phytosanitaryrisk=res.data.data.phytosanitaryrisk
          this.phytosanitarymeasures=res.data.data.phytosanitarymeasures
        }
      }catch(error){
        console.log(error)
      }
    },
    async testing(){
      console.log(this.$route.params.id)
    },
  }
}
</script>