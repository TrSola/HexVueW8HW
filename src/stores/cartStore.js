import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../assets/main.css'
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
const { VITE_APP_URL: apiUrl, VITE_APP_PATH: apiPath } = import.meta.env
export const useCartStore = defineStore('cartStore', () => {
  const carts = ref([])
  const finalTotal = ref(0)
  const total = ref(0)
  const getCart = () => {
    const url = `${apiUrl}/api/${apiPath}/cart`
    axios
      .get(url)
      .then((res) => {
        carts.value = res.data.data
        finalTotal.value = res.data.data.final_total
        total.value = res.data.data.total
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }
  const addToCart = (id, qty = 1) => {
    const url = `${apiUrl}/api/${apiPath}/cart`
    const cartData = {
      product_id: id,
      qty
    }
    axios
      .post(url, { data: cartData })
      .then(() => {
        Toast.fire({
          icon: 'success',
          title: '加入購物車成功'
        })
        getCart()
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }
  return {
    carts,
    finalTotal,
    total,
    getCart,
    addToCart
  }
})
