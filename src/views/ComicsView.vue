<template>
  <div class="comics">
    <h1 class="white">Choose your favorite.</h1>
  </div>
  <div class="row mx-5">
    <div v-for="(item,index) in $store.state.comicsList" :key=index class="col-12 col-xs-4 col-md-4 col-lg-4 col-xl-2 my-3">
      <router-link :to="`/comic/${item.id}`" @click="this.$store.dispatch('clearComics')">
    
      <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" :alt="`${item.title}`" :title="`${item.title}`">
      <p class="pt-1">{{item.title}}</p>
      </router-link>
    </div>
  </div>
  <div>
    <button @click="addLimit">More comics</button>
  </div>
</template>

<script>
//import characterComp from '@/components/characterComp.vue';
import {mapGetters, } from 'vuex';

export default {
  name:'ComicsView',
  components:{
   // characterComp
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
        this.$store.dispatch('paginateComics',{limit,offset});

      }
    },
  mounted(){
   
     let limit=this.limit;
     let offset=this.offset;
     this.$store.dispatch('paginateComics',{limit,offset});
    console.log(this.$store.state.comicsList);
    
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
