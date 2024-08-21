<template>
    </br>
    <div class="body3">
        <h1>Welcome {{ username }}</h1>
    </div>
</template>


<script>

//import { Vue } from 'vue';

const username = localStorage.getItem('data');
export default {
    name: 'Home',
    
    data() {
        return {username}
    },
};
</script>

<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f9fc;
        }
        .body3 {
            
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
</style>