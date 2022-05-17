<template>
  <div class="welcome container text-center">
      <div class="row">
        <h1>{{ msg }}</h1>
        <p> <router-link :to="`/login`">Log in</router-link> or
            <router-link :to="`/register`">Register</router-link>
            to acess the App.
        </p>
    
        <div class="col-12 " >
          <img alt="Marvel" src="../assets/img/home.jpg">
        </div>
      </div>
  </div>
 
</template>

<script>
export default {
  name: 'homeComp',
  props: {
    msg: {type:String,},
    msg2:{type:String,},
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,p {
  color:white;
}
a{
 text-decoration: none;
 color:red;
}

img{
  max-width: 100%;
}

</style>
