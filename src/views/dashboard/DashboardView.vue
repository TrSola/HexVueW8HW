<script setup>
import axios from 'axios'
import Swal from 'sweetalert2'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})

const router = useRouter()

const checkLogin = () => {
  const { VITE_APP_URL } = import.meta.env
  axios
    .post(`${VITE_APP_URL}/api/user/check`)
    .then(() =>
      Toast.fire({
        icon: 'success',
        title: '驗證身分成功'
      })
    )
    .catch((err) => {
      alert(err.response.data.message)
      router.push('/')
    })
}
const logOut = () => {
  const { VITE_APP_URL } = import.meta.env
  axios
    .post(`${VITE_APP_URL}/logout`)
    .then(() => {
      Toast.fire({
        icon: 'success',
        title: '登出成功'
      })
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
  <RouterView />
</template>
