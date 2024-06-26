<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '../stores/cartStore'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/vue'

const { VITE_APP_URL: apiUrl, VITE_APP_PATH: apiPath } = import.meta.env
const route = useRoute()
const product = ref({})
const products = ref({})
const pagination = ref({})
const cartStoreFromPinia = useCartStore()
const { addToCart } = cartStoreFromPinia
const router = useRouter()
const isLoading = ref(false)

router.afterEach(() => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
  location.reload()
})

const getProduct = () => {
  const { id } = route.params
  const url = `${apiUrl}/api/${apiPath}/product/${id}`
  axios
    .get(url)
    .then((res) => {
      product.value = res.data.product
      product.value.num = 1
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
}

const getData = (page = 1) => {
  isLoading.value = true
  const { category = '' } = route.query
  axios
    .get(`${apiUrl}/api/${apiPath}/products?category=${category}&page=${page}`)
    .then((res) => {
      products.value = res.data.products
      pagination.value = res.data.pagination
    })
    .catch((err) => alert(err.response.data.message))
    .finally(() => {
      isLoading.value = false
    })
}

const filteredProducts = computed(() => {
  if (!Array.isArray(products.value)) {
    return []
  }

  return products.value.filter((item) => item.id !== product.value.id)
})

const refreshPage = () => {
  location.reload()
}

const addToCartAndNumToZero = () => {
  addToCart(product.value.id, product.value.num)
  product.value.num = 1
}

onMounted(() => {
  getProduct()
  getData()
  window.scrollTo(0, 0)
})
</script>

<template>
  <VueLoading :active="isLoading" :z-index="1060" />
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                :src="product.imageUrl"
                class="d-block w-100 object-fit-cover"
                alt="商品圖片"
                height="550"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <h2 class="fw-bold h1 mb-1 mt-5">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end">${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon1"
                  @click="product.num--"
                  :disabled="product.num <= 1"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type.prevent="number"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder="請輸入數量"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                v-model.number="product.num"
                value="1"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                  @click="product.num++"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <a
              class="text-nowrap btn btn-dark w-100 py-2"
              @click.prevent="addToCartAndNumToZero"
              >加到購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <p>{{ product.description }}</p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">{{ product.content }}</p>
      </div>
    </div>

    <h3 class="fw-bold">看看更多商品圖(可左右滑動)</h3>
    <div>
      <div class="swiper-container-wrapper">
        <div class="swiper-container mt-4 mb-5">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <swiper :slides-per-view="3" :space-between="25">
                <swiper-slide v-for="item in filteredProducts" :key="item.id">
                  <RouterLink
                    class="mb-0 mt-3"
                    :to="`/product/${item.id}`"
                    @click="refreshPage"
                  >
                    <div
                      class="card border-0 mb-4 position-relative position-relative"
                      v-if="item.id !== product.id"
                    >
                      <img
                        :src="item.imageUrl"
                        class="card-img-top rounded-0 object-fit-cover"
                        alt="更多商品圖片"
                        height="350"
                      />
                      <a href="#" class="text-dark"> </a>
                      <div class="card-body p-0">
                        <h4 class="mb-0 mt-3">
                          {{ item.title }}
                        </h4>
                        <p class="card-text mb-0">
                          <strong> ${{ item.price }} </strong>
                          <span class="text-muted ps-2"
                            ><del>${{ item.origin_price }}</del></span
                          >
                        </p>
                        <p class="text-muted mt-3"></p>
                      </div>
                    </div>
                  </RouterLink>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
