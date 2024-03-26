<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { SwalHandle } from '@/stores/sweetAlertStore'
import Swal from 'sweetalert2'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'
const { VITE_APP_URL: apiUrl, VITE_APP_PATH: apiPath } = import.meta.env

const loadingStatus = ref({
  loadingItem: ''
})
const couponCode = ref('')
const isLoading = ref(false)

const cartStoreFromPinia = useCartStore()
const { carts } = storeToRefs(cartStoreFromPinia)
// product

const updateCart = (data) => {
  loadingStatus.value.loadingItem = data.id
  const url = `${apiUrl}/api/${apiPath}/cart/${data.id}`
  const cartData = {
    product_id: data.product_id,
    qty: data.qty
  }
  axios
    .put(url, { data: cartData })
    .then(() => {
      SwalHandle.showSuccessMsg('已更新購物車')
      getCart()
      loadingStatus.value.loadingItem = ''
    })
    .catch((err) => {
      alert(err.response.data.message)
      loadingStatus.value.loadingItem = ''
    })
}

const deleteAllCarts = () => {
  Swal.fire({
    title: '是否清空購物車?',
    showDenyButton: true,
    confirmButtonText: '確認清空',
    denyButtonText: '再想想好了'
  })
    .then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        SwalHandle.showSuccessMsg('刪除成功')
        axios
          .delete(url)
          .then(() => {
            getCart()
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      } else if (result.isDenied) {
        SwalHandle.showErrorMsg('已為您保留購物車')
      }
    })
    .catch(() => {
      alert('伺服器錯誤')
    })
  const url = `${apiUrl}/api/${apiPath}/carts`
}
const getCart = () => {
  isLoading.value = true
  const url = `${apiUrl}/api/${apiPath}/cart`
  axios
    .get(url)
    .then((response) => {
      carts.value = response.data.data
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
    .finally(() => {
      isLoading.value = false
    })
}

const removeCartItem = (id) => {
  Swal.fire({
    title: '確認要刪除',
    showDenyButton: true,
    confirmButtonText: '確認刪除',
    denyButtonText: '再想想好了'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      loadingStatus.value.loadingItem = id
      SwalHandle.showSuccessMsg('刪除成功')
      axios
        .delete(url)
        .then(() => {
          getCart()
          loadingStatus.value.loadingItem = ''
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    } else if (result.isDenied) {
      SwalHandle.showErrorMsg('已為您保留該品項')
    }
  })
  const url = `${apiUrl}/api/${apiPath}/cart/${id}`
}

const addCouponCode = () => {
  const url = `${apiUrl}/api/${apiPath}/coupon`
  const coupon = {
    code: couponCode.value
  }
  axios
    .post(url, { data: coupon })
    .then((response) => {
      SwalHandle.showSuccessMsg('已加入優惠券')
      getCart()
      loadingStatus.value.loadingItem = ''
    })
    .catch(() => {
      SwalHandle.showErrorMsg('加入優惠券失敗')
      getCart()
      loadingStatus.value.loadingItem = ''
    })
}

onMounted(() => {
  getCart()
})
</script>

<template>
  <VueLoading :active="isLoading" :z-index="1060" />
  <div class="container">
    <div class="mt-4">
      <!-- 購物車列表 -->
      <template v-if="carts.carts && carts.carts.length === 0">
        <div class="text-end">
          <h2>試試放一項商品到購物車中吧</h2>
        </div>
      </template>
      <template v-else>
        <div class="text-end">
          <button
            class="btn btn-outline-danger"
            type="button"
            @click="deleteAllCarts"
          >
            清空購物車
          </button>
        </div>
      </template>
      <table
        class="table align-middle"
        v-if="carts.carts && carts.carts.length !== 0"
      >
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="carts.carts">
            <tr v-for="cartItem in carts.carts" :key="cartItem.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(cartItem.id)"
                  :disabled="loadingStatus.loadingItem === cartItem.id"
                >
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === cartItem.id"
                  ></i>
                  x
                </button>
              </td>
              <td>
                {{ cartItem.product.title }}
                <div class="text-success" v-if="cartItem.coupon">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm mb-1 mt-1">
                  <div class="input-group">
                    <input
                      v-model.number="cartItem.qty"
                      @blur="updateCart(cartItem)"
                      :disabled="loadingStatus.loadingItem === cartItem.id"
                      min="1"
                      type="number"
                      class="form-control"
                    />
                    <span class="input-group-text" id="basic-addon2">{{
                      cartItem.product.unit
                    }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <small
                  v-if="carts.final_total !== carts.total"
                  class="text-success"
                  >折扣價：</small
                >
                {{ Math.floor(carts.final_total) }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ carts.total }}</td>
          </tr>
          <tr v-if="carts.final_total !== carts.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">
              {{ Math.floor(carts.final_total) }}
            </td>
          </tr>
        </tfoot>
      </table>
      <div
        class="input-group mb-3 input-group-sm"
        v-if="carts.carts && carts.carts.length !== 0"
      >
        <input
          type="text"
          class="form-control"
          v-model="couponCode"
          placeholder="請輸入優惠碼"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="addCouponCode"
          >
            套用優惠碼
          </button>
        </div>
      </div>
      <p class="text-muted">輸入優惠碼"迷你奧利給"全站商品享5折優惠</p>
      <div
        class="d-flex justify-content-end mb-5"
        v-if="carts.carts && carts.carts.length !== 0"
      >
        <router-link to="/checkOut" class="btn btn-dark"
          >現在去結帳</router-link
        >
      </div>
    </div>
  </div>
</template>
