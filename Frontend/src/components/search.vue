<template>
  <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <h2>Regulated Plant Pests and Diseases Table</h2>
        </v-flex>
        <hr>
        <v-flex xs12 text-xs-right>
          <v-text-field
            class="text-xs-right"
            v-model="search"
            append-icon="search"
            label="Search pests, diseases or hosts"
            single-line
            hide-details
            outline
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-data-table
            :headers="headers"
            :items="pests"
            :search="search"
            :rows-per-page-items="rowsPerPageItems"
            :pagination.sync="pagination"
            class="elevation-1" >
            <template v-slot:items="props">
              <!-- <tr @click="showAlert()"> -->
              <!-- <router-link to="{name: 'page',params:{prop.item.id}}" tag="tr" style="cursor: pointer">  -->
              <router-link :to="{name:'page', params:{id: props.item.id}}" tag="tr" style="cursor: pointer"> 
              <td>{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.scientificname }}</td>
              <td class="text-xs-left">{{ props.item.casualorganism }}</td>
              <td class="text-xs-left">{{ props.item.host }}</td>
              <!-- </tr> -->
              </router-link>
            </template>
          </v-data-table>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import database from '@/services/database'
  export default {
    // methods: {
    //   showAlert(a){
    //     if (event.target.classList.contains('btn__content')) return;
    //     alert('Alert! \n' + a.name);
    //     // console.log("testing success");
    //   }
    // },
    data () {
      return {
        search:'',
        rowsPerPageItems: [5,10, 25,-1],
        pagination: {
            rowsPerPage: 10
        },
        headers: [
          {text: 'Name',value: 'name'},
          { text: 'Scientific Name', value: 'scientificname' },
          { text: 'Causal Organism', value: 'casualorganism' },
          { text: 'Host', value: 'host' },
        ],
        pests:[],
      }
    },
    mounted: function(){
      this.getGist();
    },
    methods: {
      async getGist(){  
          try{
              const res=await database.getGist()
              this.pests=res.data.data
              console.log("testing")
          }catch(error){
              console.log(error);
          } 
      }
    },
  }
</script>
<style>
    table th + th { border-left:1px solid #dddddd; }
    table td + td { border-left:1px solid #dddddd; }
</style>
