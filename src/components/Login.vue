<template>
    <form @submit.prevent="login">
<div class="wrapper">
    <h1>Login</h1>
    <div class="login">
        <input type="text" id="user_username" v-model="user.username" placeholder="Username" required>

        <input type="password" id="user_password" v-model="user.password" placeholder="Password" required>

        <button class="button" type="submit">Login</button>

    </div>
</div>
</form>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            fetch(
                'https://agile-wildwood-73358-b78a110f353a.herokuapp.com/api/login',{
                    headers: {
                        'Accapt': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(this.user)    
        })
                .then(blob => blob.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('token', data.token)
                    this.$router.push('/')
                })
                .catch(err => console.log(err))
        }
    }
}
</script>
