<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="wrapper">
    <NavbarComponent />
    <RouterView />
  </div>
  <div class="footerComponent"><FooterComponent /></div>
</template>

<style>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footerComponent {
  margin-top: auto;
}
</style>
