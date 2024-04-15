<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { SwalHandle } from '@/stores/sweetAlertStore'
const checkSuccess = ref(false)
const router = useRouter()

const checkLogin = () => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)WillyToken\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
  if (token) {
    const { VITE_APP_URL } = import.meta.env
    axios
      .post(`${VITE_APP_URL}/api/user/check`)
      .then((res) => {
        if (res.data.success) {
          checkSuccess.value = true
        } else {
          alert('驗證失敗')
          router.push('/login')
        }
      })
      .catch((err) => {
        alert(err.response.data.message)
        router.push('/login')
      })
  } else {
    alert('請先登入')
    router.push('/login')
  }
}
const logOut = () => {
  const { VITE_APP_URL } = import.meta.env
  axios
    .post(`${VITE_APP_URL}/logout`)
    .then(() => {
      SwalHandle.showSuccessMsg('登出成功')
      document.cookie = 'WillyToken=;expires='
      router.push('/')
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
}
onMounted(() => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)WillyToken\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
  axios.defaults.headers.common.Authorization = token

  checkLogin()
})
</script>

<template>
  <h2>後台</h2>
  <nav>
    <RouterLink to="/">回到前台</RouterLink> |
    <RouterLink to="/admin/order">訂單頁面</RouterLink> |
    <RouterLink to="/admin/backProducts">產品管理頁面</RouterLink> |
    <RouterLink to="/admin/AdminCoupons">優惠券管理頁面</RouterLink> |
    <a href="#" @click.prevent="logOut">登出</a>
  </nav>
  <RouterView v-if="checkSuccess" />
</template>
