<script setup>
import { ref } from 'vue'
import { useLoading } from 'vue-loading-overlay' // 參照下方解說 (1)

const fullPage = ref(true)
const onCancel = ref(false)
const formContainer = ref(null)
const $loading = useLoading({
  // options
})
// or use inject without importing useLoading
// const $loading =  inject('$loading')

const submit = () => {
  const loader = $loading.show({
    // 參照下方解說 (2)
    // Optional parameters
    container: fullPage.value ? null : formContainer.value,
    canCancel: true,
    onCancel: onCancel.value
  })
  // simulate AJAX
  setTimeout(() => {
    loader.hide() // 參照下方解說 (3)
  }, 5000)
}
</script>

<template>
  <form @submit.prevent="submit" class="vl-parent" ref="formContainer">
    <!-- your form inputs goes here-->
    <label><input type="checkbox" v-model="fullPage" />Full page?</label>
    <button type="button">Login</button>
  </form>
</template>
