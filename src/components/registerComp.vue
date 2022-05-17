<template>
    
    <form @submit.prevent="register">
         <h2 class="white">Register</h2>
        <span v-if="message" class="wrong py-2 px-4 ">{{message}}</span><br>
        <input type="email" name="email" v-model="email" placeholder="Enter your email" class="my-4"><br>
        <input type="password" name="pass" v-model="password" placeholder="Enter your password" class="mb-4"><br>
        <button type="submit">Register</button>
    </form>

</template>
<script>
import {mapGetters, } from 'vuex';

export default {
   name:'RegisterComp',
   data(){
       return {
            email:'',
            password:'',
            arrayUsersMarvel:[],
            message:''
       }
      
   },
   methods:{
       register(){
           if(localStorage.getItem('arrayUsersMarvel')){
               this.arrayUsersMarvel=JSON.parse(localStorage.getItem('arrayUsersMarvel'));
           }
           

           if( this.arrayUsersMarvel){
               let exists =this.arrayUsersMarvel.find(e=>e.email==this.email);
               if(!exists){
                    this.arrayUsersMarvel.push({email:this.email,pass:this.password});
                  
               }else{
                    this.message='User already exists'
               }
              
           }else{
               this.arrayUsersMarvel={email:this.email,pass:this.password};
               
           }
           localStorage.setItem('arrayUsersMarvel',JSON.stringify(this.arrayUsersMarvel));
            this.$router.push('/login');
           console.log(this.arrayUsersMarvel);
       }
   }
}
</script>
<style scoped>
button{
    background-color: red;
    padding:8px 13px;
    border-radius: 20px;
    color:white;
    font-size: 1.3rem;
}
.wrong{
    background-color: red;
    color:white;
    border-radius: 2px;
}
.white{
    color:white;
}
</style>