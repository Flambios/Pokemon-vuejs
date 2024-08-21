<script >
import logo from '@/assets/img/logo.png';
import Login from './Login.vue';
import Home from './Home.vue';
import Pokedex from './Pokedex.vue';
let token = localStorage.getItem('token')
let isConnected;
export default {
data(){
    if(!token || token=="undefined")
        return {isConnected:false}
    else
        return {isConnected:true}
},
methods: {
    disconnect() {
       localStorage.removeItem('token');
       localStorage.removeItem('data');
       this.token = '';
       this.$router.push('/');
    }
}
}

</script>
<template>
  <body class="bg-gray-100">
    <nav class="bg-white shadow-md">
        <div id="app"class="container mx-auto px-4">
            <ul class="flex justify-around items-center py-4">
                <li class="text-gray-500 hover:text-gray-700">
                    <a href="/">
                        <img src="../assets/img/home.png" alt="Home" class="inline-block w-6 h-6">
                        <span class="ml-2">Home</span>
                    </a>
                </li>
                <li class="text-gray-500 hover:text-gray-700">
                    <a href="Pokedex" class="flex items-center">
                        <img src="../assets/img/pokedex.png" alt="Pokedex" class="inline-block w-6 h-6">
                        <span class="ml-2">Pokedex</span>
                    </a>
                </li>
                <li v-if="!isConnected" class="text-gray-500 hover:text-gray-700">
                    <a href="Login" class="flex items-center">
                        <img src="../assets/img/pokedex.png" alt="News" class="inline-block w-6 h-6">
                        <span  class="ml-3">Login</span>
                    </a>
                </li>
                <li v-if="isConnected" class="text-gray-500 hover:text-gray-700">
                    <a href="/" class="flex items-center">
                        <img src="../assets/img/pokedex.png" alt="News" class="inline-block w-6 h-6">
                        <span  @click="disconnect" class="ml-2">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</body>
</template>