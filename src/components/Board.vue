
<template>

  <div id="App" class="container">
    
    <div class = "page-header">
      <h1 align="center">Visit Pattani</h1>
      <div>
        <h2>ผลการเก็บข้อมูลจากการ Check In </h2>
        
      <div class="row">
<div class="col-sm-2"><h1><b-form-select  v-model="selected2" :options="options2" class="mb-3"  /></h1></div>
<div class="col-sm-2"> <h1><b-form-select  v-model="selected1" :options="options1" class="mb-3" /></h1></div>
<div class="col-sm-2"> <h1><b-form-select v-model="selected" :options="options" class="mb-3" /></h1></div>

  <button  v-on:click="calculate">Search</button>
  <button  v-on:click="goMap">MapMarker</button>
</div>

      </div>
    </div>
    <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Place Ratings</h3>
        </div>
        <div class="panel-body">
          <table class="table table striped">
            <thead>
              <tr>
                <th>
                  Places
                </th>
                <th>
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="book in books" :key="book.id">
                <td>
                 <a v-bind:href="book.url">{{book.name}}</a>
                </td>
                <td>
                {{book.rate}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Firebase,{ functions, database } from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


let config = {
   apiKey: "AIzaSyCPOSwMdKirDt3Dw0prP4tv7S5vk12xpRg",
    authDomain: "projectfi-635a2.firebaseapp.com",
    databaseURL: "https://projectfi-635a2.firebaseio.com",
    projectId: "projectfi-635a2",
    storageBucket: "projectfi-635a2.appspot.com",
    messagingSenderId: "913713500929"
}
let app = Firebase.initializeApp(config);
let db = app.database();
var day='5';
let booksRef = db.ref('books').child('null');

export default {
  name: 'app',
 firebase:{
        books:booksRef
      },
   data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Day' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: '7' },
        { value: '8', text: '8' },
        { value: '9', text: '9' },
        { value: '10', text: '10' },
        { value: '11', text: '11' },
        { value: '12', text: '12' },
        { value: '13', text: '13' },
        { value: '14', text: '14' },
        { value: '15', text: '15' },
        { value: '16', text: '16' },
        { value: '17', text: '17' },
        { value: '18', text: '18' },
        { value: '19', text: '19' },
        { value: '20', text: '20' },
        { value: '21', text: '21' },
        { value: '22', text: '22' },
        { value: '23', text: '23' },
        { value: '24', text: '24' },
        { value: '25', text: '25' },
        { value: '26', text: '26' },
        { value: '27', text: '27' },
        { value: '28', text: '28' },
        { value: '29', text: '29' },
        { value: '30', text: '30' },
        { value: '31', text: '31' },
      ],
      selected1: null,
      options1: [
        { value: null, text: 'Month' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: '7' },
        { value: '8', text: '8' },
        { value: '9', text: '9' },
        { value: '10', text: '10' },
        { value: '11', text: '11' },
        { value: '12', text: '12' }
      ],
    selected2: null,
      options2: [
        { value: null, text: 'Year' },
        { value: '2018', text: '2018' },
        { value: '2019', text: '2019' },
        { value: '2020', text: '2020' },
        { value: '2021', text: '2021' },
        { value: '2022', text: '2022' },
        { value: '2023', text: '2023' },
        { value: '2024', text: '2024' },
        { value: '2025', text: '2025' },
        { value: '2026', text: '2026' },
        { value: '2027', text: '2027' },
        { value: '2029', text: '2029' },
        { value: '2030', text: '2030' }
      ]
    }
  },methods:{
    calculate(){
       day=this.selected+this.selected1+this.selected2
       //booksRef.push({name:'testt',rate:'7'})
      console.log(day)
      this.$unbind('books')
      this.$bindAsArray('books',db.ref('books').orderByChild('timestamp').equalTo(day))
      booksRef.orderByChild('day').equalTo(day).on('child_added',snapshot=>{
        console.log(snapshot.val())
        
      })
     
    },
    goMap(){
        this.$router.replace('map')
    },
    
  }
  


}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
button{
  margin-left: 200px;
   margin: 1px 0;
    width: 5%;
    height: 5%;
    cursor: pointer;
}
.row{
  padding-top: 5%;
  width: 150%;
  font-size: 13px;
 
}
.panel{
  width: 100%;
  height: 50%;
  font-size: 15px;
}.col-sm-2{
  font-size: 90px;
}

</style>
