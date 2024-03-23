<script setup>
import axios from 'axios'

import '@/assets/main.css'
import { ref } from 'vue'

import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import { SwalHandle } from '@/stores/sweetAlertStore'

const couponModalRef = ref(null)
const delModalRef = ref(null)

const coupons = ref({})
const tempCoupon = ref({
  title: '',
  is_enabled: 0,
  percent: 100,
  code: ''
})
const isNew = ref(false)
const isLoading = ref(false)
const pagination = ref({})
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

const openCouponModal = (status, item) => {
  isNew.value = status
  if (isNew.value) {
    tempCoupon.value = {
      due_date: new Date().getTime() / 1000
    }
  } else {
    tempCoupon.value = { ...item }
  }
  couponModalRef.value.openModal()
}

const openDelCouponModal = (item) => {
  tempCoupon.value = { ...item }
  delModalRef.value.openModal()
}

const getCoupons = (page = 1) => {
  const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupons?page=${page}`
  isLoading.value = true
  axios
    .get(url)
    .then((response) => {
      coupons.value = response.data.coupons
      pagination.value = response.data.pagination
      SwalHandle.showSuccessMsg('已取得優惠券資料')
    })
    .catch((err) => {
      SwalHandle.showErrorMsg(err.response.data.message)
    })
    .finally(() => {
      isLoading.value = false
    })
}

const updateCoupon = (tempCoupon) => {
  isLoading.value = true
  let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon`
  let httpMethods = 'post'
  let data = tempCoupon

  if (!isNew.value) {
    url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${tempCoupon.id}`
    httpMethods = 'put'
    data = tempCoupon
  }

  axios[httpMethods](url, { data })
    .then(() => {
      isLoading.value = false
      getCoupons()
      couponModalRef.value.hideModal()
      if (httpMethods === 'post') {
        SwalHandle.showSuccessMsg('已新增優惠券資料')
      } else if (httpMethods === 'put') {
        SwalHandle.showSuccessMsg('已更新優惠券資料')
      }
    })
    .catch((err) => {
      isLoading.value = false
      SwalHandle.showErrorMsg(err.response.data.message)
    })
}

const delCoupon = () => {
  const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${tempCoupon.value.id}`
  isLoading.value = true
  axios
    .delete(url)
    .then(() => {
      isLoading.value = false
      SwalHandle.showSuccessMsg('已刪除優惠券資料')
      const delComponent = delModalRef.value
      delComponent.hideModal()
      getCoupons()
    })
    .catch((err) => {
      isLoading.value = false
      SwalHandle.showErrorMsg(err.response.data.message)
    })
}

getCoupons()
</script>

<template>
  <div>
    <VueLoading :active="isLoading" :z-index="1060" />
    <div class="text-end mt-4">
      <button
        class="btn btn-primary"
        type="button"
        @click="openCouponModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal(false, item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelCouponModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComponent
      :pages="pagination"
      @emit-pages="getCoupons"
    ></PaginationComponent>
    <CouponModal
      :coupon="tempCoupon"
      :is-new="isNew"
      ref="couponModalRef"
      @update-coupon="updateCoupon"
    />
    <DelModal :item="tempCoupon" ref="delModalRef" @del-item="delCoupon" />
  </div>
</template>
