<script setup>
import useModal from '@/hooks/useModal'
import { watch, ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})

const tempProductInProductModal = ref({})
const props = defineProps(['status', 'tempProduct'])
const emit = defineEmits(['confirm-update'])

const { openModal, hideModal, modalRef } = useModal()

const fileInputRef = ref(null)
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const fileStatus = ref({
  fileUploading: false
})

const createImages = () => {
  tempProductInProductModal.value.imagesUrl = []
  tempProductInProductModal.value.imagesUrl.push('')
}

watch(
  () => props.tempProduct,
  (value) => {
    tempProductInProductModal.value = value
    if (!tempProductInProductModal.value.imagesUrl) {
      tempProductInProductModal.value.imagesUrl = []
    }
    if (!tempProductInProductModal.value.imageUrl) {
      tempProductInProductModal.value.imageUrl = ''
    }
  }
)

const uploadFile = () => {
  const uploadedFile = fileInputRef.value.files[0]
  const formData = new FormData()
  formData.append('file-to-upload', uploadedFile)

  const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`
  fileStatus.value.fileUploading = true

  axios
    .post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      fileStatus.value.fileUploading = false
      tempProductInProductModal.value.imageUrl = response.data.imageUrl
      fileInputRef.value.value = ''
      Toast.fire({
        icon: 'success',
        title: '圖片上傳成功'
      })
    })
    .catch((error) => {
      fileStatus.value.fileUploading = false
      Toast.fire({
        icon: 'error',
        title: error.response.data.message
      })
    })
}

defineExpose({
  openModal,
  hideModal
})
</script>

<template>
  <div>
    <div>
      <div
        id="productModal"
        ref="modalRef"
        class="modal fade"
        tabindex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
                <span v-if="status.value === 'new'">新增產品</span>
                <span v-else>編輯產品</span>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-2">
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">
                        輸入圖片網址
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                        v-model="tempProductInProductModal.imageUrl"
                      />
                    </div>
                    <img
                      class="img-fluid"
                      :src="tempProductInProductModal.imageUrl"
                      alt="主要圖片"
                    />
                    <div class="mb-3">
                      <label for="customFile" class="form-label"
                        >或 上傳圖片
                        <i
                          class="fas fa-spinner fa-spin"
                          v-if="fileStatus.fileUploading"
                        ></i>
                      </label>
                      <input
                        type="file"
                        id="customFile"
                        class="form-control"
                        ref="fileInputRef"
                        @change="uploadFile"
                      />
                    </div>
                  </div>
                  <h3>新增更多圖片</h3>
                  <template
                    v-if="Array.isArray(tempProductInProductModal.imagesUrl)"
                  >
                    <div
                      v-for="(
                        moreImg, i
                      ) in tempProductInProductModal.imagesUrl"
                      :key="moreImg + i"
                      class="mb-3"
                    >
                      <label :for="moreImg + i" class="form-label">
                        更多圖片網址
                      </label>
                      <input
                        type="text"
                        v-model="tempProductInProductModal.imagesUrl[i]"
                        :id="moreImg + i"
                        class="form-control"
                      />
                      <img
                        :src="tempProductInProductModal.imagesUrl[i]"
                        class="img-fluid"
                      />
                    </div>
                    <!-- 沒長度 = 空陣列 -->
                    <div
                      v-if="
                        !tempProductInProductModal.imagesUrl.length ||
                        tempProductInProductModal.imagesUrl[
                          tempProductInProductModal.imagesUrl.length - 1
                        ]
                      "
                    >
                      <button
                        class="btn btn-outline-primary btn-sm d-block w-100"
                        @click="tempProductInProductModal.imagesUrl.push('')"
                        type="button"
                      >
                        新增圖片
                      </button>
                    </div>
                    <div v-else>
                      <button
                        class="btn btn-outline-danger btn-sm d-block w-100"
                        @click="tempProductInProductModal.imagesUrl.pop()"
                        type="button"
                      >
                        刪除圖片
                      </button>
                    </div>
                  </template>
                  <template v-else>
                    <div>
                      <button
                        class="btn btn-outline-primary btn-sm d-block w-100"
                        @click="createImages"
                        type="button"
                      >
                        新增圖片
                      </button>
                    </div>
                  </template>
                </div>
                <div class="col-sm-8">
                  <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <input
                      id="title"
                      type="text"
                      class="form-control"
                      placeholder="請輸入標題"
                      v-model="tempProductInProductModal.title"
                    />
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="category" class="form-label">分類</label>
                      <input
                        id="category"
                        type="text"
                        class="form-control"
                        placeholder="請輸入分類"
                        v-model="tempProductInProductModal.category"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="unit" class="form-label">單位</label>
                      <input
                        id="unit"
                        type="text"
                        class="form-control"
                        placeholder="請輸入單位"
                        v-model="tempProductInProductModal.unit"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label">原價</label>
                      <input
                        id="origin_price"
                        type="number"
                        min="0"
                        class="form-control"
                        placeholder="請輸入原價"
                        v-model.number="tempProductInProductModal.origin_price"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">售價</label>
                      <input
                        id="price"
                        type="number"
                        min="0"
                        class="form-control"
                        placeholder="請輸入售價"
                        v-model.number="tempProductInProductModal.price"
                      />
                    </div>
                  </div>
                  <hr />

                  <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea
                      id="description"
                      type="text"
                      class="form-control"
                      placeholder="請輸入產品描述"
                      v-model="tempProductInProductModal.description"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea
                      id="description"
                      type="text"
                      class="form-control"
                      placeholder="請輸入說明內容"
                      v-model="tempProductInProductModal.content"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        id="is_enabled"
                        class="form-check-input"
                        type="checkbox"
                        :true-value="1"
                        :false-value="0"
                        v-model="tempProductInProductModal.is_enabled"
                      />
                      <label class="form-check-label" for="is_enabled">
                        是否啟用
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                取消
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="emit('confirm-update')"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
  </div>
</template>
