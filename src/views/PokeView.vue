<template>
   <p v-if="loading">Cargando información....</p>
   <div class="alert alert-danger" v-if="error">{{error}}</div>
  <div v-if="data">
    <img :src="data.sprites?.front_default" alt="">
    <h1>Poke name:{{$route.params.name}} </h1>
  </div>  
    <h1 v-else>No existe Pokemon</h1>
    <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>

<script setup>
import { useGetData} from '../composable/getData'; 
import {useRoute, useRouter} from 'vue-router';

const router = useRouter();
const route = useRoute();

const {getData, 
      data,
      loading} = useGetData();

const back = () => {
    router.push('/pokemons')
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>