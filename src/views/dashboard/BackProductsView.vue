<script setup>
import axios from 'axios'
import { ref } from 'vue'

import ProductModal from '@/components/ProductModal.vue'
import DelProductModal from '@/components/DelProductModal.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
const productModal2 = ref(null)
const delProductModal2 = ref(null)
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

const apiAdmin = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin`

const status = ref(false)
const productList = ref([])
const tempProduct = ref({
  imagesUrl: []
})
const pagination = ref({})
const isLoading = ref(false)

const getData = (page = 1) => {
  isLoading.value = true
  axios
    .get(`${apiAdmin}/products?page=${page}`)
    .then((res) => {
      productList.value = res.data.products
      pagination.value = res.data.pagination
      isLoading.value = false
    })
    .catch((err) => alert(err.response.data.message))
}

const openModal = (arg, product) => {
  if (arg === 'new') {
    tempProduct.value = {
      imagesUrl: []
    }
    status.value = 'new'
    productModal2.value.openModal()
  } else if (arg === 'edit') {
    tempProduct.value = { ...product }
    status.value = 'edit'
    productModal2.value.openModal()
  } else if (arg === 'delete') {
    tempProduct.value = { ...product }
    delProductModal2.value.openModal()
  }
}

const confirmUpdate = () => {
  if (status.value === 'new') {
    axios
      .post(`${apiAdmin}/product`, { data: tempProduct.value })
      .then((res) => {
        alert(res.data.message)
        productModal2.value.hideModal()
        getData()
      })
      .catch((err) => alert(err))
  } else if (status.value === 'edit') {
    axios
      .put(`${apiAdmin}/product/${tempProduct.value.id}`, {
        data: tempProduct.value
      })
      .then((res) => {
        alert(res.data.message)
        productModal2.value.hideModal()
        getData()
      })
      .catch((err) => alert(err.response.data.message))
  }
}

const confirmDelete = () => {
  axios
    .delete(`${apiAdmin}/product/${tempProduct.value.id}`)
    .then((res) => {
      alert(res.data.message)
      delProductModal2.value.hideModal()
      getData()
    })
    .catch((err) => alert(err))
}

getData()
</script>

<template>
  <div>
    <div class="container">
      <div class="text-end mt-4">
        <button class="btn btn-primary" @click="openModal('new')" type="button">
          建立新的產品
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productList" :key="product.id">
            <td>{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td class="text-end">{{ product.origin_price }}</td>
            <td class="text-end">{{ product.price }}</td>
            <td>
              <span class="text-success" v-if="product.is_enabled">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('edit', product)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete', product)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- page -->
      <PaginationComponent
        :pages="pagination"
        @emit-pages="getData"
      ></PaginationComponent>
      <!-- page -->
    </div>
    <!-- Modal -->
    <ProductModal
      :status="status"
      :temp-product="tempProduct"
      @get-data="getData"
      ref="productModal2"
      @confirm-update="confirmUpdate"
    ></ProductModal>
    <DelProductModal
      :temp-product="tempProduct"
      @get-data="getData"
      ref="delProductModal2"
      @confirm-delete="confirmDelete"
    ></DelProductModal>
    <!-- Modal -->
  </div>
</template>
