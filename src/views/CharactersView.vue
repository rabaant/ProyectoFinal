<template>
  <div class="characters">
    <h1 class="white">Choose your favorite.</h1>
  </div>
  <div class="row mx-5">
    <div v-for="(item,index) in $store.state.charactersList" :key=index class="col-12 col-xs-4 col-md-4 col-lg-4 col-xl-2 my-3">
      <router-link :to="`/character/${item.id}`" @click="this.$store.dispatch('clearCharacters')">
    
      <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" :alt="`${item.name}`" :title="`${item.name}`">
      <p class="pt-1">{{item.name}}</p>
      </router-link>
    </div>
  </div>
  <div>
    <button @click="addLimit">More characters</button>
  </div>
</template>

<script>
import characterComp from '@/components/characterComp.vue';
import {mapGetters, } from 'vuex';

export default {
  name:'CharactersView',
  components:{
    characterComp
  },
   computed:{
        ...mapGetters({
            limit:'limit',
            offset:'offset',
        }),
       
    },
    methods:{
      addLimit:function(){
        this.$store.dispatch('limit');
         let limit=this.limit;
         let offset=this.offset;
        this.$store.dispatch('paginateCharacters',{limit,offset});

      }
    },
  mounted(){
   
     let limit=this.limit;
     let offset=this.offset;
     this.$store.dispatch('paginateCharacters',{limit,offset});
    
    
  }
}
</script>

<style scoped>
.width{
  width: 20%;
}
img{
  height: 18rem;
  width:14rem;
}
p{
  color:gray
  }
  .white{
    color:white;
  }
  button{
    background-color: red;
    padding:8px 13px;
    border-radius: 20px;
    color:white;
    font-size: 1.3rem;
}
a{
  color:red;
}
</style>
