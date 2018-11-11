<template>
  <div class="login">
    <h3>Sign In</h3>
<input type ="text" v-model="email" placeholder="Email"><br>
<input type ="password"  v-model="password" placeholder="Password"><br>
<button v-on:click="login">Connecttion</button>
<p>You dont have any acc ?<router-link to="/signup">create one</router-link></p>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data:function(){
      return{
          email:'',
          password:''
      }
  },methods:{
      login:function(){
          firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
              (user)=>{
                  this.$router.replace('rating')
              },
              function(err){
                  alert(err.message)
              }
          )
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    margin-top: 40px;
}
input{
   margin-top: 20px;
   width: 20%;
   padding: 15px;
   font-size: 15px;
   
}
button{
   margin: 10px 0;
    width: 5%;
    height: 5%;
    cursor: pointer;
}
p{
     margin-top: 40px;
    font-size: 15px;

}
p a{
    text-decoration: underline;
    cursor: pointer;
  
}
h3{
    font-size: 35px;
    margin-top: 250px;
}
</style>
