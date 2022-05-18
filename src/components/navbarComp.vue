<template>
    <div >
        <div class="d-flex inline-block pt-5">
            <div class="col-1 col-md-4"></div>
            <div class="col-4 text-right ">
                <img id="logo" alt="logo Marvel" src="../assets/img/logo.png">
            </div>
            
            <div class="col-5 mt-3" v-if="this.$store.state.logged!=true">
                <ul>
                    <router-link :to="`/login`" class="me-3">Log in</router-link>
                    <router-link :to="`/register`">Register</router-link>
                </ul>
            </div>
        </div>

        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/characters" @click="this.$store.dispatch('clearCharacter')">Characters</router-link> |
             <router-link to="/comics" @click="this.$store.dispatch('clearComic')">Comics</router-link>
        </nav>
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'navbarComp',
    }   
</script>

<style scoped>
div{
    background-color: black;
  
}
#logo{
    width: 7rem;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: red;
}
div ul a{
 text-decoration: none;
 color:red;
}

div ul a.router-link-exact-active{
font-weight: 700;
font-size: 1.2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color:white;
}

</style>
