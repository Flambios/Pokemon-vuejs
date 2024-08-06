<template>
<h1>Home page</h1>
<form @submit.prevent="home">
    <button class="button" type="submit">home</button>
</form>
</template>

<script>
import axios from 'axios'
let token = localStorage.getItem('token')

export default {
    name: 'Home',
    
methods: {
        home() {

            axios(
                'https://agile-wildwood-73358-b78a110f353a.herokuapp.com/api/pokemons',{
                    headers: {
                        'Accapt': 'application/json',
                        'authorization' : token,
                    },
                })
                .then(data => console.log(data, this.token))
                .catch(err => console.log(err))
        }
    }
}
</script>