<script >
import logo from '@/assets/img/logo.png';
import Login from './Login.vue';
import Home from './Home.vue'

</script>
<template>
  <body class="bg-gray-100">
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-4">
            <ul class="flex justify-around items-center py-4">
                <li class="text-gray-500 hover:text-gray-700">
                    <a href="/">
                        <img src="../assets/img/home.png" alt="Home" class="inline-block w-6 h-6">
                        <span class="ml-2">Home</span>
                    </a>
                </li>
                <li class="text-gray-500 hover:text-gray-700">
                    <a href="#" class="flex items-center">
                        <img src="../assets/img/pokedex.png" alt="Pokedex" class="inline-block w-6 h-6">
                        <span class="ml-2">Pokedex</span>
                    </a>
                </li>
                <li class="text-gray-500 hover:text-gray-700">
                    <a href="Login" class="flex items-center">
                        <img src="https://example.com/news-icon.png" alt="News" class="inline-block w-6 h-6">
                        <span class="ml-2">Login</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  </body>
</template>