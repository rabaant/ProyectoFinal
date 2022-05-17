<template>
    <form @submit.prevent="login">
        <h2 class="white">Log in</h2>
        <span v-if="message" class="wrong  px-4">{{message}}</span><br>
         <span v-if="messageSuccess" class="success py-2 px-4">{{messageSuccess}}</span><br>
        <input type="email" name="email" v-model="email" placeholder="Enter your email" class="mb-4"><br>
        <input type="password" name="pass" v-model="password" placeholder="Enter your password" class="mb-4"><br>
        <button type="submit">Log in</button>
    </form>
</template>
<script>
import {mapGetters, } from 'vuex';

export default {
   name:'loginComp',
   data(){
       return {
            email:'',
            password:'',
            arrayUsersMarvel:[],
            message:'',
            messageSuccess:''
       }
      
   },
    computed:{
        ...mapGetters({
            logged:'logged',
        }),
    },
   methods:{
       login(){
           if(localStorage.getItem('arrayUsersMarvel')){
               this.arrayUsersMarvel=JSON.parse(localStorage.getItem('arrayUsersMarvel'));
           }else{
               this.message="There are no registered users yet";
           }
           

           if( this.arrayUsersMarvel){
               let exists =this.arrayUsersMarvel.find(e=>e.email==this.email);
               if(!exists){
                   this.message='You are not registered yet'
                  
               }else{
                   this.$store.dispatch('login');
                   this.messageSuccess='You are logged in!!';
                   this.$router.push('/');
                    console.log(this.logged);
               }
              
           }
          
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
.success{
    background-color: green;
    color:white;
    border-radius: 2px;
}
.white{
    color:white;
}
</style>
