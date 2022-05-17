<template>
  <div class="home container-fluid">
    
    <homeComp msg="Welcome to my Marvel's App"/>
    
   
  </div>
</template>

<script>

import homeComp from '@/components/homeComp.vue';


export default {
  name: 'HomeView',
  components: {
    homeComp,
   
  }
}
</script>
