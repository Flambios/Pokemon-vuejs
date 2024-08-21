<template>
</br>
<div class="body3">
        <h1>Votre liste de Pokémon {{ username }}</h1>
    </div>
<div class="body2">
<div class="grid-container" ></br>
<div class="card" v-for="item in list" v-bind:key="item.id">
    <img src="../assets/img/favicon.ico" :alt="item.name">
    <div class="number">N°{{ item.id }}</div>
    <div class="name">{{ item.name }}</div>
    <div v-for="type in item.types" :class="'type ' + type.toLowerCase()" class="type">{{ type }}</div>
</div>
</div>
</div>

</template>


<script>
import { createApp } from 'vue'
//import { Vue } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp({})
app.use(VueAxios, axios)
let token = localStorage.getItem('token')
const username = localStorage.getItem('data');
export default {
name: 'Pokedex',

data() {
    return {list:undefined, username}
},

    mounted() {

        app.axios.get(
            'https://agile-wildwood-73358-b78a110f353a.herokuapp.com/api/pokemons',{
                headers: {
                    'Accapt': 'application/json',
                    'authorization' : token,
                },
            })
            .then((data) =>{this.list=data.data.data})
    }
}
</script>

<style>

    .body3 {  
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .body2 {
        
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        margin: 0;
    }
    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .card {
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 20px;
        transition: transform 0.2s;
    }
    .card:hover {
        transform: translateY(-10px);
    }
    .card img {
        width: 50px;
        height: center;
    }
    .card .number {
        font-weight: bold;
        color: #888;
    }
    .card .name {
        font-size: 1.2em;
        margin: 10px 0;
    }
    .card .type {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.9em;
        margin: 5px 2px;
    }
    .plante { background-color: #78c850; color: white; }
    .feu { background-color: #f08030; color: white; }
    .eau { background-color: #6890f0; color: white; }
    .electrik { background-color: #ebfc32; color: white; }
    .insecte { background-color: #228B22; color: white; }
    .normal { background-color: #b8b8d0; color: white; }
    .vol { background-color: #00BFFF; color: white; }
    .fée { background-color: #ea3d99; color: white; }
    .poison {background-color: #663399; color: white; }
</style>