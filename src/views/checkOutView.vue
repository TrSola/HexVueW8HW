<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3">結帳頁面</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-4" v-if="cart.carts && cart.carts.length !== 0">
          <div class="border p-4 mb-4">
            <div class="d-flex mt-2" v-for="cartItem in cart.carts" :key="cartItem.id">
              <img :src="cartItem.product.imageUrl" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100 mb-2">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{ cartItem.product.title }}</p>
                  <p class="mb-0">NT${{ cartItem.product.price }}</p>
                </div>
                <p class="mb-0 fw-bold">x{{ cartItem.qty }}</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{ Math.floor(cart.final_total) }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計</p>
              <p class="mb-0 h4 fw-bold">NT${{ Math.floor(cart.final_total) }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4" v-else><h2>再去選購一些商品吧！</h2></div>
        <div class="col-md-6">
         <v-form
           ref='formRef'
           v-slot='{ errors }'
           @submit='createOrder'
         >
           <div class='mb-3'>
             <label for='email' class='form-label'>電子郵件</label>
             <v-field
               id='email'
               name='email'
               type='email'
               class='form-control'
               :class="{ 'is-invalid': errors['email'] }"
               placeholder='請輸入 Email'
               rules='email|required'
               v-model='form.user.email'
             ></v-field>
             <error-message
               name='email'
               class='invalid-feedback'
             ></error-message>
           </div>

           <div class='mb-3'>
             <label for='name' class='form-label'>收件人姓名</label>
             <v-field
               id='name'
               name='姓名'
               type='text'
               class='form-control'
               :class="{ 'is-invalid': errors['姓名'] }"
               placeholder='請輸入姓名'
               rules='required'
               v-model='form.user.name'
             ></v-field>
             <error-message
               name='姓名'
               class='invalid-feedback'
             ></error-message>
           </div>

           <div class='mb-3'>
             <label for='tel' class='form-label'>收件人電話</label>
             <v-field
               id='tel'
               name='電話'
               type='text'
               class='form-control'
               :class="{ 'is-invalid': errors['電話'] }"
               placeholder='請輸入電話'
               rules='required|min:8|max:10'
               v-model='form.user.tel'
             ></v-field>
             <error-message
               name='電話'
               class='invalid-feedback'
             ></error-message>
           </div>

           <div class='mb-3'>
             <label for='address' class='form-label'>收件人地址</label>
             <v-field
               id='address'
               name='地址'
               type='text'
               class='form-control'
               :class="{ 'is-invalid': errors['地址'] }"
               placeholder='請輸入地址'
               rules='required'
               v-model='form.user.address'
             ></v-field>
             <error-message
               name='地址'
               class='invalid-feedback'
             ></error-message>
           </div>

           <div class='mb-3'>
             <label for='message' class='form-label'>留言</label>
             <textarea
               name=''
               id='message'
               class='form-control'
               cols='30'
               rows='10'
               v-model='form.message'
             ></textarea>
           </div>
         </v-form>
         <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
            <router-link to="/cart" class="text-dark mt-md-0 mt-3"><i class="fas fa-chevron-left me-2"></i>回到購物車</router-link>
            <button type='submit' class='btn btn-danger' @click="createOrder">送出訂單</button>
          </div>
        </div>
       </div>
      </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { SwalHandle } from '../stores/sweetAlertStore'

const router = useRouter()
const cart = ref({})
const { VITE_APP_URL: apiUrl, VITE_APP_PATH: apiPath } = import.meta.env
const formRef = ref(null)
const form = ref({
  user: {
    name: '',
    email: '',
    tel: '',
    address: ''
  },
  message: ''
})

const createOrder = () => {
  if (cart.value.carts.length === 0) {
    alert('購物車內沒有品項')
  } else {
    const url = `${apiUrl}/api/${apiPath}/order`
    const order = form.value
    axios
      .post(url, { data: order })
      .then((response) => {
        SwalHandle.showSuccessMsg('結帳成功!')
        formRef.value.resetForm()
        getCart()
        router.push('/checkOutSuccess')
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }
}

const getCart = () => {
  const url = `${apiUrl}/api/${apiPath}/cart`
  axios
    .get(url)
    .then((response) => {
      cart.value = response.data.data
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
}

onMounted(() => {
  window.scrollTo(0, 0)
  getCart()
})
</script>
