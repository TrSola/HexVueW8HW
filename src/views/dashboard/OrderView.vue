<script setup>
import axios from 'axios'

import { ref } from 'vue'

import DelModal from '@/components/DelModal.vue'
import OrderModal from '@/components/OrderModal.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import '@/assets/main.css'
import { SwalHandle } from '@/stores/sweetAlertStore'

const orderModalRef = ref(null)
const delModalRef = ref(null)

const orders = ref({})
const isNew = ref(false)
const pagination = ref({})
const isLoading = ref(false)
const tempOrder = ref({})
const tempProduct = ref({})
const currentPage = ref(1)
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

const getOrders = (currentPage = 1) => {
  const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=${currentPage}`
  isLoading.value = true
  axios
    .get(url, tempProduct)
    .then((response) => {
      orders.value = response.data.orders
      pagination.value = response.data.pagination
      SwalHandle.showSuccessMsg('已取得訂單資料')
    })
    .catch((err) => {
      SwalHandle.showErrorMsg(err.response.data.message)
    })
    .finally(() => {
      isLoading.value = false
    })
}

const openModal = (item) => {
  tempOrder.value = { ...item }
  isNew.value = false
  orderModalRef.value.openModal()
}

const openDelOrderModal = (item) => {
  tempOrder.value = { ...item }
  delModalRef.value.openModal()
}

const updatePaid = (item) => {
  const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${item.id}`
  const paid = {
    is_paid: item.is_paid
  }
  isLoading.value = true
  axios
    .put(api, { data: paid })
    .then((response) => {
      isLoading.value = false
      orderModalRef.value.hideModal()
      getOrders(currentPage.value)
      SwalHandle.showSuccessMsg('修改付款狀態成功')
    })
    .catch((err) => {
      isLoading.value = false
      SwalHandle.showErrorMsg(err.response.data.message)
    })
}

const delOrder = () => {
  const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${tempOrder.value.id}`
  isLoading.value = true
  axios
    .delete(url)
    .then((response) => {
      isLoading.value = false
      delModalRef.value.hideModal()
      getOrders(currentPage.value)
      SwalHandle.showSuccessMsg('刪除訂單成功')
    })
    .catch((err) => {
      isLoading.value = false
      SwalHandle.showErrorMsg(err.response.data.message)
    })
}

getOrders()
</script>

<template>
  <VueLoading :active="isLoading" :z-index="1060" />
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in orders" :key="item.id">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in item.products" :key="product.id">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openModal(item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-warning btn-sm"
                type="button"
                @click="openDelOrderModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal
    :order="tempOrder"
    ref="orderModalRef"
    @update-paid="updatePaid"
  />
  <DelModal :item="tempOrder" ref="delModalRef" @del-item="delOrder" />
  <PaginationComponent :pages="pagination" @emit-pages="getOrders" />
</template>
