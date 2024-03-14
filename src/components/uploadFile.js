import axios from 'axios'
import { fileInputRef, fileStatus, tempProductInProductModal, Toast } from './ProductModal.vue'

export const uploadFile = () => {
  const uploadedFile = fileInputRef.value.files[0]
  const formData = new FormData()
  formData.append('file-to-upload', uploadedFile)
  const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
  const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`
  fileStatus.value.fileUploading = true

  axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((response) => {
    fileStatus.value.fileUploading = false
    tempProductInProductModal.value.imageUrl = response.data.imageUrl
    fileInputRef.value.value = ''
    Toast.fire({
      icon: 'success',
      title: '圖片上傳結果',
      content: response.data.message
    })
  }).catch((error) => {
    fileStatus.value.fileUploading = false
    Toast.fire({
      icon: 'danger',
      title: '圖片上傳結果',
      content: error.response.data.message
    })
  })
}
