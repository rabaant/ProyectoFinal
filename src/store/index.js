import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    charactersList:[],
    comicsList:[],
    imagesList:[],
    character:'',
    arrayComics:[],
    paginate:0,
    logged:false,
    limit:20,
    offset:0,
   
  },

  getters: {
    charactersList(state){
      return state.charactersList
    },
    comicsList(state){
      return state.comicsList
    },
    imagesList(state){
      return state.imagesList
    },
    character(state){
      return state.character
    },
    arrayComics(state){
      return state.arrayComics
    },
    logged(state){
      return state.logged
    },
    limit(state){
      return state.limit
    },
    offset(state){
      return state.offset
    },
   
  },
  mutations: {
    addCharactersList(state,x){
      state.charactersList.push(...x);
     
    },
    addComicsList(state,x){
      state.comicsList.push(...x);
     
    },
    addCharacter(state,x){
      state.character=x[0];
     
    },
    addComic(state,{x,index}){
      state.arrayComics[index]=x;
      
    },
    login(state){
      state.logged=true;
    },
    clearCharacters(state){
      state.charactersList=[];
     
    },
    clearCharacter(state){
      state.character='';
      state.arrayComics=[];
    },
    clearComics(state){
      state.comicsList=[];
     
    },
    clearComic(state){
     // state.character='';
      state.arrayComics=[];
    },
    limit(state){
      state.offset+=20;
    },

  },
  actions: {
    getCharacters: async function({commit}){
     
      let url='https://gateway.marvel.com:443/v1/public/characters?apikey=cd736e843f8df807f0edaf2cf0ed12c8';
      let response = await axios.get(`${url}`);
      let x =response.data.data.results;
     
      commit('addCharactersList',x);
    },
    getComics: async function({commit}){
     
      let url='https://gateway.marvel.com:443/v1/public/comics?apikey=cd736e843f8df807f0edaf2cf0ed12c8';
      let response = await axios.get(`${url}`);
      let x =response.data.data.results;
     
      commit('addComicsList',x);
    },
    paginateCharacters:async function({commit},{limit,offset}){
      let url=`https://gateway.marvel.com:443/v1/public/characters?apikey=cd736e843f8df807f0edaf2cf0ed12c8&offset=${offset}&limit=${limit}`;
      let response = await axios.get(`${url}`);
      let x =response.data.data.results;
     
      commit('addCharactersList',x);
    },
    paginateComics:async function({commit},{limit,offset}){
      let url=`https://gateway.marvel.com:443/v1/public/comics?apikey=cd736e843f8df807f0edaf2cf0ed12c8&offset=${offset}&limit=${limit}`;
      let response = await axios.get(`${url}`);
      let x =response.data.data.results;
     
      commit('addComicsList',x);
    },
    getCharacter: async function({commit},id){
       
        let url=`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=cd736e843f8df807f0edaf2cf0ed12c8`;
        let response = await axios.get(`${url}`);
        let x =response.data.data.results;
        commit('addCharacter',x);
      },
      getComic:async function({commit},{url,index}){
        
        let array=url.split('/');
        let id=array[array.length-1];
        
        let response= await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=cd736e843f8df807f0edaf2cf0ed12c8`);
        let x= response.data.data.results[0];
        commit('addComic',{x,index});
      },
      getComic:async function({commit},{url='',index,id=0}){
        
        if(url !=''){
           let array=url.split('/');
           id=array[array.length-1];
        }
       
        
        let response= await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=cd736e843f8df807f0edaf2cf0ed12c8`);
        let x= response.data.data.results[0];
        commit('addComic',{x,index});
      },
      login:function({commit}){
        this.commit('login');
      },
      clearCharacters:function(){
        this.commit('clearCharacters');
      },
      clearCharacter:function(){
        this.commit('clearCharacter');
      },
      clearComics:function(){
        this.commit('clearComics');
      },
      clearComic:function(){
        this.commit('clearComic');
      },
      limit:function(){
        this.commit('limit');
      }
    
  },
  modules: {
  }
})

