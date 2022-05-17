<template>
  <navbarComp/>
  <footerComp/>
</template>
<script>
  import navbarComp from '@/components/navbarComp.vue';
  import footerComp from '@/components/footerComp.vue';

  export default {
    name: 'App',
    components: {navbarComp,footerComp}
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
