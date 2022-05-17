<template>
<div v-if="character" class="container">
    <h1 class="red bold">{{character.name}}</h1>
    <div class="row mt-5">
        <div class="col-12 col-md-5">
            <img class="w-50" :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" :alt="`${character.name}`" :title="`${character.name}`">
        </div>
         <div class="col-12 col-md-5">
            <p class="white" v-if="character.description">Description: {{ character.description}}</p>
            <p v-else class="h4 my-5 red white">Description: There's no description available.</p>
            <h2 class="red">Comic book appearances</h2>
            <p class="red">Available comics: {{character.comics.available}}</p>
                    
        </div>
    </div>
    <div class="row mx-5 mt-4">
        <div v-for="(item,index) in character.comics.items" :key="index" class="col-12 col-md-6 col-lg-6 col-xl-3">
            <comicComp :url="item.resourceURI" :index="index"/> 
        </div>
         
    </div>
 </div>   
</template>
<script>
import {mapGetters, } from 'vuex';
import comicComp from '@/components/comicComp.vue';

export default {
   name:'characterComp',
   components:{
        comicComp,
   },
    computed:{
        ...mapGetters({
            character:'character',
            arrayComics:'arrayComics',
        }),
       
    },
  
    mounted(){
        this.$store.dispatch('getCharacter',this.$route.params.id);
      
    }
}
</script>

<style scoped>
.red{
    color:red;
}
.bold{
    font-weight: 800;
}
.white{
    color: white;
    font-size:1.2rem;
}
</style>