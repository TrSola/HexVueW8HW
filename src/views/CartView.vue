<template>
  <div class='container'>
       <div class='mt-4'>
         <!-- 產品列表 -->
         <user-product-modal
           ref='userProductModalRef'
           :product='product'
           @add-to-cart='addToCart'
         ></user-product-modal>
         <table class='table align-middle'>
           <thead>
             <tr>
               <th>圖片</th>
               <th>商品名稱</th>
               <th>價格</th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             <tr v-for='item in products' :key='item.id'>
               <td style='width: 200px'>
                 <div
                   style='
                     height: 100px;
                     background-size: cover;
                     background-position: center;
                   '
                   :style='{backgroundImage: `url(${item.imageUrl})`}'
                 ></div>
               </td>
               <td>{{ item.title }}</td>
               <td>
                 <div class='h5' v-if='!item.price'>
                   {{ item.origin_price }} 元
                 </div>
                 <del class='h6' v-if='item.price'
                   >原價 {{ item.origin_price }} 元</del
                 >
                 <div class='h5' v-if='item.price'>
                   現在只要 {{ item.price }} 元
                 </div>
               </td>
               <td>
                 <div class='btn-group btn-group-sm'>
                   <button
                     type='button'
                     class='btn btn-outline-secondary'
                     @click='getProduct(item.id)'
                     :disabled='loadingStatus.loadingItem === item.id || !item.is_enabled'
                   >
                     <i
                       class='fas fa-spinner fa-pulse'
                       v-if='loadingStatus.loadingItem === item.id'
                     ></i>
                     查看更多
                   </button>
                   <button
                     type='button'
                     class='btn btn-outline-danger'
                     @click='addToCart(item.id)'
                     :disabled='loadingStatus.loadingItem === item.id || !item.is_enabled'
                   >
                     <i
                       class='fas fa-spinner fa-pulse'
                       v-if='loadingStatus.loadingItem === item.id'
                     ></i>
                     加到購物車
                   </button>
                 </div>
               </td>
             </tr>
           </tbody>
         </table>
         <!-- 購物車列表 -->
         <template v-if="carts.carts && carts.carts.length === 0">
           <div class='text-end'>
           <h2>試試放一項商品到購物車中吧</h2>
         </div>
         </template>
        <template v-else>
         <div class='text-end'>
           <button
             class='btn btn-outline-danger'
             type='button'
             @click='deleteAllCarts'
           >
             清空購物車
           </button>
         </div>
        </template>
         <table class='table align-middle' v-if="carts.carts && carts.carts.length !== 0">
           <thead>
             <tr>
               <th></th>
               <th>品名</th>
               <th style='width: 150px'>數量/單位</th>
               <th>單價</th>
             </tr>
           </thead>
           <tbody>
             <template v-if='carts.carts'>
               <tr v-for='cartItem in carts.carts' :key='cartItem.id'>
                 <td>
                   <button
                     type='button'
                     class='btn btn-outline-danger btn-sm'
                     @click='removeCartItem(cartItem.id)'
                     :disabled='loadingStatus.loadingItem === cartItem.id'
                   >
                     <i
                       class='fas fa-spinner fa-pulse'
                       v-if='loadingStatus.loadingItem === cartItem.id'
                     ></i>
                     x
                   </button>
                 </td>
                 <td>
                   {{ cartItem.product.title }}
                   <div class='text-success' v-if='cartItem.coupon'>
                     已套用優惠券
                   </div>
                 </td>
                 <td>
                   <div class='input-group input-group-sm'>
                     <div class='input-group mb-3'>
                       <input
                         v-model.number='cartItem.qty'
                         @blur='updateCart(cartItem)'
                         :disabled='loadingStatus.loadingItem === cartItem.id'
                         min='1'
                         type='number'
                         class='form-control'
                       />
                       <span class='input-group-text' id='basic-addon2'
                         >{{ cartItem.product.unit }}</span
                       >
                     </div>
                   </div>
                 </td>
                 <td class='text-end'>
                   <small
                     v-if='carts.final_total !== carts.total'
                     class='text-success'
                     >折扣價：</small
                   >
                   {{ Math.floor(carts.final_total) }}
                 </td>
               </tr>
             </template>
           </tbody>
           <tfoot>
             <tr>
               <td colspan='3' class='text-end'>總計</td>
               <td class='text-end'>{{ carts.total }}</td>
             </tr>
             <tr v-if='carts.final_total !== carts.total'>
               <td colspan='3' class='text-end text-success'>折扣價</td>
               <td class='text-end text-success'>{{ Math.floor(carts.final_total) }}</td>
             </tr>
           </tfoot>
         </table>
         <div class="input-group mb-3 input-group-sm" v-if="carts.carts && carts.carts.length !== 0">
        <input type="text" class="form-control" v-model="couponCode" placeholder="請輸入優惠碼" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
            套用優惠碼
          </button>
        </div>
      </div>
         <div class="d-flex justify-content-end mb-5" v-if="carts.carts && carts.carts.length !== 0">
     <router-link to="/checkOut" class="btn btn-primary">去結帳</router-link></div>
       </div>
     </div>
</template>

<script setup>
import userProductModal from '../components/userProductModal.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { SwalHandle } from '../stores/sweetAlertStore'
import Swal from 'sweetalert2'
import { useCartStore } from '../stores/cartStore'
import { storeToRefs } from 'pinia'
const { VITE_APP_URL: apiUrl, VITE_APP_PATH: apiPath } = import.meta.env

const userProductModalRef = ref(null)
const loadingStatus = ref({
  loadingItem: ''
})
const products = ref([])
const product = ref({})
const couponCode = ref('')

// const cart = ref({})
const cartStoreFromPinia = useCartStore()
const { carts } = storeToRefs(cartStoreFromPinia)
// product
const getProducts = () => {
  const url = `${apiUrl}/api/${apiPath}/products`
  axios
    .get(url)
    .then((response) => {
      products.value = response.data.products
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
}

const getProduct = (id) => {
  const url = `${apiUrl}/api/${apiPath}/product/${id}`
  loadingStatus.value.loadingItem = id
  axios
    .get(url)
    .then((response) => {
      loadingStatus.value.loadingItem = ''
      product.value = response.data.product
      userProductModalRef.value.openModal()
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
}

// cart

const addToCart = (id, qty = 1) => {
  const url = `${apiUrl}/api/${apiPath}/cart`
  loadingStatus.value.loadingItem = id
  const cartData = {
    product_id: id,
    qty
  }

  userProductModalRef.value.hideModal()
  axios
    .post(url, { data: cartData })
    .then(() => {
      loadingStatus.value.loadingItem = ''
      getCart()
      SwalHandle.showSuccessMsg('已加入購物車')
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
}

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
      loadingStatus.value.loadingItem = ''
      getCart()
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
  }).then((result) => {
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
  }).catch(() => {
    alert('伺服器錯誤')
  })
  const url = `${apiUrl}/api/${apiPath}/carts`
}
const getCart = () => {
  const url = `${apiUrl}/api/${apiPath}/cart`
  axios
    .get(url)
    .then((response) => {
      carts.value = response.data.data
    })
    .catch((err) => {
      alert(err.response.data.message)
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
          loadingStatus.value.loadingItem = ''
          getCart()
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

// watch(
//   () => cart.value,
//   (newCart) => {
//     console.log('Cart updated:', newCart)
//   }
// )+

const addCouponCode = () => {
  const url = `${apiUrl}/api/${apiPath}/coupon`
  const coupon = {
    code: couponCode.value
  }
  loadingStatus.value.loadingItem = ''
  axios.post(url, { data: coupon }).then((response) => {
    SwalHandle.showSuccessMsg('已加入優惠券')
    getCart()
    loadingStatus.value.loadingItem = ''
  }).catch(() => {
    loadingStatus.value.loadingItem = ''
    SwalHandle.showErrorMsg('加入優惠券失敗')
    getCart()
  })
}

onMounted(() => {
  getProducts()
  getCart()
})

</script>
