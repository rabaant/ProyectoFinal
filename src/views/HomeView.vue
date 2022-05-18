<template>
  <div class="home container-fluid">
    
    <homeComp msg="Welcome to Marvel's Universe"/>
    
   
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
