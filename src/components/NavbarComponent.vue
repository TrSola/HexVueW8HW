<template>
        <nav class="navbar navbar-expand-lg navbar-light position-fixed w-100 z-3 bg-light top-0 ps-4">
          <RouterLink class="nav-item nav-link me-4" to="/">首頁</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <RouterLink class="nav-item nav-link me-4" to="/login">登入頁面</RouterLink>
              <RouterLink class="nav-item nav-link me-4" to="/">首頁<span class="sr-only">(目前頁面)</span></RouterLink>
              <RouterLink class="nav-item nav-link me-4" to="/products">產品頁面</RouterLink>
              <RouterLink class="nav-item nav-link me-4 position-relative" to="/cart">
                <i class="bi bi-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{ carts?.carts?.length }}
  </span>
              </RouterLink>
            </div>
          </div>
        </nav>
</template>

<script setup>
// import axios from 'axios'
import '../assets/all.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cartStore'
const cartStoreFromPinia = useCartStore()
const { carts } = storeToRefs(cartStoreFromPinia)
const { getCart } = cartStoreFromPinia
onMounted(() => {
  getCart()
})
</script>
