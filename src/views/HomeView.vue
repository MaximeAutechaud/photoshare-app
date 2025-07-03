<script setup lang="ts">
import ModalItem from '@/components/ModalItem.vue'
import { ref, onMounted, useTemplateRef, onUpdated } from 'vue'
import { useUserStore } from '@/stores/user.ts'
import axios from 'axios'

const isModalOpened = ref<boolean>(false)

const store = useUserStore();
const user = store.getUser;
let medias = [];

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
  fetchGallery();
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
function fetchGallery() {
  axios.get('http://127.0.0.1:8000/api/fetch-gallery', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': store.getBearerToken,
    }
  })
    .then(function (response) {
      medias = response.data;
      console.log(response.data)
  }).catch(function (error) {
    console.log(error);
  })
}
</script>

<template>
  <div class="mt-20">
    <h2 class="text-3xl">This is Home view</h2>
    <p>Bonjour {{ user.name }}</p>
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
    <div v-for="media in medias" v-bind:key="media.id">
      <div v-if="media.mime_type.startsWith('image')" >
        <p>{{ media.name }}</p>
        <img :src="media.s3_url" alt="Image" class="rounded shadow mb-2 w-full max-w-md">
      </div>
      <div v-else>
        <p>{{ media.name }}</p>
        <video controls class="rounded shadow w-full max-w-sm">
          <source :src="media.s3_url" :type="media.mime_type" />
        </video>
      </div>
    </div>
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
