<template>
   
    <div v-if="comic" class="card mb-5 mx-auto" style="width: 16rem;">
        <div v-if="comic.index==this.id">    
        <img class="card-img-top" :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" :alt="`${comic.title}`">
        <div class="card-body">
            <h6 class="card-title">{{comic.title}}</h6>
            <p v-if="comic.description" class="card-text red description">{{comic.description}}</p>
            <p v-else class="card-text red description">There's no description available.</p>
            <a :href="`${comic.urls[0].url}`" class="btn btn-red">Marvel's official page </a>
        </div> 
        </div>
    </div>   
</template>
<script>
import {mapGetters, } from 'vuex';

export default {
   name:'comicComp',
   data(){
       return this.comic;
   },
   props:[
       'url',
       'index',
   ],
    computed:{
        ...mapGetters({
            arrayComics:'arrayComics',
        }),
        comic(){
            console.log(this.arrayComics);
            console.log(this.index);
           if(this.arrayComics[this.index]){
                return this.comic=this.arrayComics[this.index];
           }else{
               return null;
           }
               
        }
       
    },
  
    mounted(){
        let url=this.url;
        let index=this.index
        let id=this.$route.params.id;
        console.log(this.index);
         console.log(this.url);
        this.$store.dispatch('getComic',{url,index,id});
    }
}
</script>

<style scoped>
.btn-red{
    background:black;
    color:red;
}
.description{
    height: 100px;
    overflow-y: scroll;
    font-size: 0.8rem;
}
img{
    min-height: 383px;
    max-height: 383px;
}
.card-title{
    height: 100px;
}
.card{
    background-color:white;
}
</style>