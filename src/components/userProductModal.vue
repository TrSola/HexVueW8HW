<template>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
           aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modalRef">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="exampleModalLabel">
                <span>{{ props.product.title }}</span>
            </h5>
              <button type="button" class="btn-close"
                      data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-6">
                  <img class="img-fluid" :src="img" alt="" v-for="img in props.product.imagesUrl" :key="img.id" style=" height: 200px ;width: 200px;
                      background-size: cover; padding-right: 5px;">
            </div>
                <div class="col-sm-6">
                  <span class="badge bg-primary rounded-pill">{{ props.product.category }}</span>
                  <p>商品描述：{{ props.product.description }}</p>
                  <p>商品內容：{{ props.product.content }}</p>
                  <div class="h5" v-if="!props.product.price">{{ props.product.origin_price }} 元</div>
                  <del class="h6" v-if="props.product.price">原價 {{ props.product.origin_price }} 元</del>
                  <div class="h5" v-if="props.product.price">現在只要 {{ props.product.price }} 元</div>
                  <div>
                    <div class="input-group">
                      <input type="number" class="form-control"
                      v-model.number="qty"
                             min="1">
                      <button type="button" class="btn btn-primary" @click="addToCart">加入購物車(內)</button>
            </div>
            </div>
            </div>
                <!-- col-sm-6 end -->
            </div>
            </div>
            </div>
            </div>
            </div>
</template>

<script setup>
import useModal from '@/hooks/useModal'
import { defineProps, defineEmits, ref } from 'vue'
const { openModal, hideModal, modalRef } = useModal()
const props = defineProps(['product'])
const emit = defineEmits(['add-to-cart'])
const qty = ref(1)
const addToCart = () => {
  emit('add-to-cart', props.product.id, qty.value)
  qty.value = 1
}
defineExpose({
  openModal,
  hideModal
})
</script>
