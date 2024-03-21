<template>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px"
  >
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1617110668704-3992ecde48ff?w=1950&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHpvbyUyMGZyaWVuZHxlbnwwfHwwfHx8MA%3D%3D);
        background-position: center center;
        opacity: 0.1;
      "
    ></div>
    <h2 class="fw-bold">挑選一些自己喜歡的商品吧！</h2>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">sideUl</h4>
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <RouterLink
                      :to="`/products`"
                      class="py-2 d-block text-muted"
                      >全部商品</RouterLink
                    >
                  </li>
                  <li v-for="item in categories" :key="'categories' + item">
                    <RouterLink
                      :to="`/products?category=${item}`"
                      class="py-2 d-block text-muted"
                      >{{ item }}</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <template v-if="!products.length">
          <div>載入中</div>
        </template>
        <template v-else>
          <div>
            {{ `此頁有 ${products.length} 項產品` }}
          </div>
        </template>
        <div class="row">
          <div class="col-md-6" v-for="product in products" :key="product.id">
            <RouterLink class="mb-0 mt-3" :to="`/product/${product.id}`">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  :src="product.imageUrl"
                  class="card-img-top rounded-0 object-fit-cover"
                  alt="商品圖片"
                  height="500"
                />
                <a href="#" class="text-dark">
                  <!-- <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i> -->
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    {{ product.title }}
                  </h4>
                  <p class="card-text mb-0">
                    NT${{ product.price }}
                    <span class="text-muted"
                      ><del>NT${{ product.origin_price }}</del></span
                    >
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <nav class="d-flex justify-content-center">
        <ul class="pagination">
          <pagination-component
            :pages="pagination"
            @emit-pages="getData"
          ></pagination-component>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import '../assets/all.css'
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import PaginationComponent from '../components/PaginationComponent.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const products = ref([])
const pagination = ref({})
const categories = ref(['動物', '食物'])

const getData = (page = 1) => {
  const { category = '' } = route.query
  axios
    .get(
      `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=${category}&page=${page}`
    )
    .then((res) => {
      products.value = res.data.products
      pagination.value = res.data.pagination
    })
    .catch((err) => alert(err.response.data.message))
}

onMounted(() => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)WillyToken\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
  axios.defaults.headers.common.Authorization = token
  getData()
})

watch(
  () => route.query,
  () => {
    getData()
  }
  // { deep: true }
)
</script>
