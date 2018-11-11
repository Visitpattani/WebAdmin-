<template>
    <div class="sign-up">
        <p>Let's create a new account!</p>
        <input type ="text" v-model="email" placeholder="Email"><br>
        <input type ="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signUp">SignUp</button>
        <span>or go back to <router-link to="/login">login</router-link></span>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name :'signUp',
    data: function(){
        return{
            email:'',
            password:''
        }
    },methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                function(user){
                    alert('Your acc has been create ! ')
                },
                function(err){
                    alert('Oops. '+err.message)
                }
            )
        }
    }

}
</script>
<style scoped>
.signUp{
    margin-top:40px;

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
span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>


