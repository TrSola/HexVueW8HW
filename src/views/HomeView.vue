<template>
  <div class="position-relative">
      <div class="position-absolute" style="top:0; bottom:0; left:0; right:0; background-image: url(https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=2500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8em9vfGVufDB8fDB8fHww);
      background-position: center center; opacity: 0.2; z-index: -1"></div>
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center">
            <h2>歡迎光臨首席動物園</h2>
            <p class="text-muted mb-0">這裡是一個充滿生機和活力的地方，您可以看到各種各樣的動物，從溫馴可愛的小動物，如夜久小羊，到雄偉壯麗的大型動物，如凱傑老虎，每一個都展現著自己獨特的魅力和生命力。</p>
            <router-link to="/products" class="btn btn-dark rounded-0 mt-6 router-link-active">去逛逛</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5" v-if="animalProducts.length > 0">
        <div class="col-md-4 mt-md-4">
          <RouterLink :to="`/product/${animalProducts[0].id}`">
          <div class="card border-0 mb-4">
            <img
              :src="animalProducts[0].imageUrl"
              class="card-img-top rounded-0 object-fit-cover"
              style="height: 350px"
              alt="產品圖片1"
            />
            <div class="card-body text-center">
              <h4>{{ animalProducts[0].title }}</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  {{ animalProducts[0].description }}
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
        </div>
        <div class="col-md-4 mt-md-4">
          <RouterLink :to="`/product/${animalProducts[1].id}`">
          <div class="card border-0 mb-4">
            <img
              :src="animalProducts[1].imageUrl"
              class="card-img-top rounded-0 object-fit-cover"
              style="height: 350px"
              alt="產品圖片1"
            />
            <div class="card-body text-center">
              <h4>{{ animalProducts[1].title }}</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  {{ animalProducts[1].description }}
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
        </div>
        <div class="col-md-4 mt-md-4">
          <RouterLink :to="`/product/${animalProducts[2].id}`">
          <div class="card border-0 mb-4">
            <img
              :src="animalProducts[2].imageUrl"
              class="card-img-top rounded-0 object-fit-cover"
              style="height: 350px"
              alt="產品圖片1"
            />
            <div class="card-body text-center">
              <h4>{{ animalProducts[2].title }}</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  {{ animalProducts[2].description }}
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
        </div>
      </div>
    </div>
    <div class="bg-light mt-7">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>除了可愛的動物 還有好吃的食品哦</h3>
                  <p class="my-5">同時，我們還提供了豐富多彩的美食體驗，從地道的當地美食到國際風味的精緻料理，每一道菜品都是精心製作而成，讓您的味蕾享受到極致的愉悅。</p>
                  <p><small>無論您是來欣賞動物、品嚐美食，還是放鬆心情，這裡都能滿足您的所有需求，讓您度過一個充滿歡樂和美好回憶的時光！</small></p>
                </div>
              </div>
            </div>
            <!-- <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div> -->
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls"  role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="container my-7" v-if="foodProducts.length > 0">
      <RouterLink :to="`/product/${foodProducts[0].id}`">
      <div class="row">
        <div class="col-md-6">
            <img :src="foodProducts[0].imageUrl" alt="" class="img-fluid object-fit-cover" style="height: 450px; width: 100%">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">{{ foodProducts[0].title }}</h4>
          <p class="text-muted">{{ foodProducts[0].description }}</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink :to="`/product/${foodProducts[1].id}`">
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img :src="foodProducts[1].imageUrl" alt="" class="img-fluid object-fit-cover" style="height: 450px; width: 100%">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">{{ foodProducts[1].title }}</h4>
          <p class="text-muted">{{ foodProducts[1].description }}</p>
        </div>
      </div>
    </RouterLink>
    </div>
</template>

<script setup>
import '../assets/all.css'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const animalProducts = ref([])
const pagination = ref({})
const foodProducts = ref({})

const getAnimalData = (page = 1) => {
  axios
    .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=動物&page=${page}`)
    .then((res) => {
      animalProducts.value = res.data.products
      pagination.value = res.data.pagination
    })
    .catch((err) => alert(err.response.data.message))
}

const getFoodData = (page = 1) => {
  axios
    .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=食物&page=${page}`)
    .then((res) => {
      foodProducts.value = res.data.products
      pagination.value = res.data.pagination
    })
    .catch((err) => alert(err.response.data.message))
}

onMounted(() => {
  // const token = document.cookie.replace(
  //   /(?:(?:^|.*;\s*)WillyToken\s*=\s*([^;]*).*$)|^.*$/,
  //   '$1'
  // )
  // axios.defaults.headers.common.Authorization = token
  getAnimalData()
  getFoodData()
})

</script>
