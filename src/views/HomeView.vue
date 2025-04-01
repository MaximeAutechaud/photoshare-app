<script setup lang="ts">
import ModalItem from '@/components/ModalItem.vue'
import { ref, onMounted, useTemplateRef, onUpdated } from 'vue'

const isModalOpened = ref<boolean>(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const submitHandler = () => {
  //here you do whatever
}
const modalRef = useTemplateRef("modal-ref")
onMounted(() => {
})
onUpdated(() => {
  if (modalRef.value?.dropContainer) {
    modalRef.value.dropContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
    }, false);
    modalRef.value.dropContainer.addEventListener('dragenter', () => {
      modalRef.value.dropContainer.classList.add('drag-active');
    })
    modalRef.value.dropContainer.addEventListener('dragenter', () => {
      modalRef.value.dropContainer.classList.remove('drag-active');
    })
    if (modalRef.value?.fileInput) {
      modalRef.value.dropContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        modalRef.value.dropContainer.classList.remove('drag-active');
        modalRef.value.fileInput = e.dataTransfer.files;
      })
    }
  }
})

</script>

<template>
  <div class="mt-20">
    <h2 class="text-3xl">This is Home view</h2>
    <div class="text-center">
      <button
        @click="openModal"
        type="button"
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Upload des photos
      </button>
    </div>
    <ModalItem
      :is-open="isModalOpened"
      @modal-close="closeModal"
      @submit="submitHandler"
      name="first-modal"
      ref="modal-ref"
    >
    </ModalItem>
  </div>
</template>
<style>
input[type=file] {
  color: #222245;
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #222245;
}
input[type=file]::file-selector-button {
  margin-right: 8px;
  border: none;
  background: #084cdf;
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
}


</style>
