<script setup>
import 'bootstrap/dist/js/bootstrap.min.js'
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cartStore'
import Collapse from 'bootstrap/js/dist/collapse'
import { useRoute } from 'vue-router'

const route = useRoute()
const headerCollapse = ref(null)

const cartStoreFromPinia = useCartStore()
const { carts } = storeToRefs(cartStoreFromPinia)
const { getCart } = cartStoreFromPinia

watch(route, () => {
  if (headerCollapse.value) {
    toggleNav()
  }
})

const toggleNav = () => {
  headerCollapse.value.toggle()
}

onMounted(() => {
  getCart()
  headerCollapse.value = new Collapse(headerCollapse.value, { toggle: false })
})
</script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-light position-fixed w-100 z-3 bg-light top-0 py-3"
  >
    <div class="container">
      <RouterLink class="nav-item nav-link me-4" to="/">SOUXI</RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNav()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
        ref="headerCollapse"
      >
        <div class="navbar-nav">
          <RouterLink class="nav-item nav-link me-4" to="/products"
            >販售處</RouterLink
          >
          <RouterLink class="nav-item nav-link me-4" to="/login"
            >登入</RouterLink
          >
          <RouterLink
            class="nav-item nav-link me-4 position-relative"
            to="/cart"
          >
            <i class="bi bi-cart"></i>
            <span
              class="position-absolute start-100 translate-middle badge rounded-pill bg-danger rwdNav"
              style="font-size: 0.55rem"
            >
              {{ carts?.carts?.length }}
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
@media (max-width: 991px) {
  .rwdNav {
    top: 50%;
  }
}

@media (min-width: 992px) {
  .rwdNav {
    top: 0;
  }
}
</style>
