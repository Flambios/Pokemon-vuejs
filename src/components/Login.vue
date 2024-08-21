<template>
    <container class="body4">
<div class="login-container">
    <h2>Welcome back</h2>
    <p>Please sign in below</p>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="username" id="user_username" v-model="user.username" placeholder="Username" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="user_password" v-model="user.password" placeholder="Password" required>
      </div>
      <button type="submit" class="sign-in-btn">Sign in</button>
    </form>
  </div>
</container>
<!--<div class="wrapper body4">
    <h1>Login</h1>
    <div class="login">
        <input type="text" id="user_username" v-model="user.username" placeholder="Username" required>

        <input type="password" id="user_password" v-model="user.password" placeholder="Password" required>

        <button class="button" type="submit">Login</button>

    </div>
</div>-->

</template>

<script>
import axios from 'axios';

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

        async login() {
      try {
        const response = await axios.post('https://agile-wildwood-73358-b78a110f353a.herokuapp.com/api/login', {   
            username: this.user.username,
            password: this.user.password,
        })

        // Handle successful login
        localStorage.setItem('token', response.data.token); // Store token if needed
        localStorage.setItem('data', response.data.data.username);
        this.$router.push('/'); // Redirect to dashboard or another route
      } catch (error) {
        // Handle login error
        if (error.response && error.response.data) {
            console.log(this.errorMessage = error.response.data.message || 'Login failed. Please try again.');
        } else {
            console.log(error.message)
            console.log(this.errorMessage = 'An unexpected error occurred. Please try again.');
          
        }
      }
    }
        /*login() {
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
                    window.location.href = '/';
                })
                .catch(err => console.log(err))
        }*/
    },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.body4 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.login-container {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  margin-bottom: 10px;
  font-size: 24px;
}

p {
  margin-bottom: 20px;
  color: #666;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-weight: bold;
}

input[type="username"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="checkbox"] {
  margin-right: 5px;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.forgot-password {
  color: #6C63FF;
  text-decoration: none;
}

.sign-in-btn {
  width: 100%;
  padding: 10px;
  background-color: #6C63FF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
}

.sign-in-btn:hover {
  background-color: #5b52e6;
}



</style>