import { ref, onMounted } from 'vue'
import BsModal from 'bootstrap/js/dist/modal'

export default () => {
  const modalRef = ref(null)

  const modal = ref(null)

  onMounted(() => {
    modal.value = new BsModal(modalRef.value)
  })

  const openModal = () => {
    modal.value.show()
  }

  const hideModal = () => {
    modal.value.hide()
  }

  return {
    modalRef,
    openModal,
    hideModal
  }
}
