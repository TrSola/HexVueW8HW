<template>
  <!-- <RouterLink to="/">首頁</RouterLink> |
  <RouterLink to="/about">關於我們</RouterLink> |
  <RouterLink to="/cart">購物車列表</RouterLink> |
  <br>d
  <RouterLink to="/login">登入</RouterLink> |
  <br>
  <RouterLink to="/admin">後台快速通關(全部製作完成記得刪掉)</RouterLink> | -->
  <NavbarComponent></NavbarComponent>
  <RouterView/>
  <FooterComponent></FooterComponent>
</template>

<script setup>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>
