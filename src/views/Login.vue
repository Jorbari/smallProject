<template>
  <div class="container">
    <header>
      <h2>KINGS</h2>
    </header>
    <main>
      <form action="">
        <div class="header">
          Log in
        </div>
        <div class="item">
          <input type="text" name="" id="" placeholder="Your email address" />
        </div>
        <div class="item">
          <input type="password" name="" id="" placeholder="Your password" />
          <img src="../assets/icons/Lock.svg" alt="lock" class="lock" />
        </div>
        <div class="item">
          <input type="checkbox" name="" id="" />
          <label for="">Keep me signed in</label>
        </div>
        <div class="item">
          
          <!-- <router-link to="/Product"> -->
            <button type="button" @click="login()">Log in</button>
          <!-- </router-link> -->
        </div>
        <div class="item">
          <p>Forgot Password?</p>
        </div>
      </form>
    </main>
  </div>
</template>

<script>

import jwt_decode from "jwt-decode";
import {postRequestWithoutAuth} from '../service/httpClient';

export default {
  name: "Login",
  props: {
    msg: String,
  },
  methods: {

    login() {
      const url = 'admin/login';
      const data = {
        email: "admin@rewardgateway.com",
        password: "password"
      }
      postRequestWithoutAuth(url, data).then(
        res => {
          const token = res.data.data.token;
          const decoded_data = jwt_decode(token)
          localStorage.setItem('user_profile', JSON.stringify(decoded_data));
          localStorage.setItem('token', token);
          this.$router.push('/Product')
        }
      ).catch(
        err => console.log(err)
      )
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100%;
  font-size: 18px;
  line-height: 26px;
  color: #0f0f0f;
}

header {
  text-align: center;
  padding: 50px 0;
}
header h1 {
  font-size: 25px;
}
main {
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  padding: 6rem;
  max-width: 564px;
  width: 100%;
}
form .header {
  font-weight: bold;
  font-size: 41px;
  line-height: 26px;
  margin-bottom: 56px;
}
form .item {
  margin-bottom: 18px;
  position: relative;
}
form .item .lock {
  position: absolute;
  top: 12px;
  right: 0;
}
form .item input:not(input[type="checkbox"]) {
  padding: 18px 0 18px 24px;
  width: 100%;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
}
form .item input[type="checkbox"] {
  margin-right: 14px;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
}
form .item label,
p {
  font-size: 16px;
}
form .item input::placeholder {
  color: #d1d1d1;
}
form button {
  width: 100%;
  padding: 18px 0;
  border: none;
  background: #ffd600;
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}
</style>
