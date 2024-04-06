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
    denyButtonText: '再想想好了',
    confirmButtonColor: 'gray',
    denyButtonColor: 'black'
  })
    .then((result) => {
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
    denyButtonText: '再想想好了',
    confirmButtonColor: 'gray',
    denyButtonColor: 'black'
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
    .then(() => {
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

const addCartItemQty = (cartItem) => {
  cartItem.qty++
  updateCart(cartItem)
}

const minusCartItemQty = (cartItem) => {
  cartItem.qty--
  updateCart(cartItem)
}

onMounted(() => {
  getCart()
})
</script>

<template>
  <VueLoading :active="isLoading" :z-index="1060" />
  <div class="container">
    <div class="mt-6">
      <div class="row">
        <template v-if="carts.carts && carts.carts.length === 0">
          <div class="text-end">
            <h2 class="pt-7 mt-6 h1" style="font-size: 58px">
              <strong>試試放一項商品到購物車中吧</strong>
            </h2>
            <div class="pb-7"></div>
            <div class="pb-7"></div>
            <div class="pb-7"></div>
            <div class="pb-5"></div>
          </div>
        </template>
        <template v-else>
          <div class="text-end">
            <button
              class="btn btn-outline-dark"
              type="button"
              @click="deleteAllCarts"
            >
              清空購物車
            </button>
          </div>
          <h3 class="mt-3 mb-5">購物車</h3>
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0">商品</th>
                  <th scope="col" class="border-0 ps-3">商品數量</th>
                  <th scope="col" class="border-0">價格</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-bottom border-top"
                  v-for="cartItem in carts.carts"
                  :key="cartItem.id"
                >
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img
                      :src="cartItem.product.imageUrl"
                      alt="商品圖片"
                      style="width: 52px; height: 52px; object-fit: cover"
                    />
                    <p class="mb-0 fw-bold d-inline-block">
                      {{ cartItem.product.title }}
                    </p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <button
                          class="btn btn-outline-dark border-0 py-2"
                          type="button"
                          id="button-addon1"
                          @click="minusCartItemQty(cartItem)"
                          :disabled="cartItem.qty === 1"
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                      <input
                        v-model.number="cartItem.qty"
                        type.prevent="number"
                        @blur="updateCart(cartItem)"
                        :disabled="loadingStatus.loadingItem === cartItem.id"
                        class="form-control border-0 text-center my-auto shadow-none"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        min="1"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-outline-dark border-0 py-2"
                          type="button"
                          id="button-addon2"
                          @click="addCartItemQty(cartItem)"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle">
                    <p class="mb-0 ms-auto">
                      {{ cartItem.product.price * cartItem.qty }}
                    </p>
                  </td>
                  <td
                    class="border-0 align-middle"
                    @click="removeCartItem(cartItem.id)"
                    :disabled="loadingStatus.loadingItem === cartItem.id"
                    style="cursor: pointer"
                  >
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="input-group w-50 mb-3">
              <input
                type="text"
                class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none"
                placeholder="請輸入優惠碼"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                v-model="couponCode"
              />
              <div class="input-group-append">
                <button
                  @click="addCouponCode"
                  class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
            <p class="text-muted">
              2025/7/31前輸入優惠碼「迷你奧利給」全站商品享5折優惠
            </p>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="fw-bold mb-4">訂單資料</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      class="border-0 px-0 pt-4 font-weight-normal"
                    >
                      小計
                    </th>
                    <td class="text-end border-0 px-0 pt-4">
                      {{ carts.total }}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                    >
                      付款方式
                    </th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                  </tr>
                </tbody>
              </table>
              <div
                class="d-flex justify-content-between mt-4"
                v-if="carts.final_total === carts.total"
              >
                <p class="mb-0 h4 fw-bold">總計</p>
                <p class="mb-0 h4 fw-bold">
                  NT$
                  {{ carts.total }}
                </p>
              </div>

              <div v-else>
                <div class="d-flex justify-content-between mt-4">
                  <p
                    class="mb-0 h4 fw-bold text-del"
                    style="text-decoration: line-through"
                  >
                    總計
                  </p>
                  <p
                    class="mb-0 h4 fw-bold"
                    style="text-decoration: line-through"
                  >
                    NT$
                    {{ carts.total }}
                  </p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="text-end text-muted mb-0 h4 fw-bold">折扣價</p>
                  <p class="mb-0 h4 fw-bold">
                    NT$
                    {{ Math.floor(carts.final_total) }}
                  </p>
                </div>
              </div>
              <router-link to="/checkOut" class="btn btn-dark w-100 mt-4">
                去結帳</router-link
              >
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
