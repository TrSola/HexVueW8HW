<script setup>
import axios from 'axios'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref({
  username: '',
  password: ''
})
const { VITE_APP_URL } = import.meta.env

const login = () => {
  const apiUrl = `${VITE_APP_URL}/admin/signin`
  axios
    .post(apiUrl, user.value)
    .then((res) => {
      const { expired, token } = res.data
      document.cookie = `WillyToken=${token};expires=${new Date(expired)};`
      router.push('/admin')
    })
    .catch((err) => alert(err.response.data.message))
}

const backToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 text-center">請先登入</h1>
      <div class="col-8">
        <form class="form-signin" @submit.prevent>
          <div class="form-floating">
            <input
              type="email"
              class="form-control mb-3"
              id="email"
              required
              v-model="user.username"
              placeholder="xxx@gmail.com"
            />
            <label for="email">請輸入帳號</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="user.password"
              placeholder="password"
              required
            />
            <label for="password">請輸入密碼</label>
          </div>
          <button
            class="btn btn-dark btn-lg w-100 mt-3"
            type="button"
            @click.prevent="login"
          >
            登入
          </button>
          <button
            class="btn btn-light btn-lg w-100 mt-3"
            type="button"
            @click.prevent="backToHome"
          >
            回首頁
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
