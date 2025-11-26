<script setup lang="ts">
import ModalItem from '@/components/ModalItem.vue'
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.ts'
import api from '@/lib/axios.ts'
import Gallery from '@/components/Gallery.vue'
import type { Media } from '@/interfaces/media.ts'

const isModalOpened = ref<boolean>(false)

const auth = useAuthStore();
const user = auth.getUser;
const medias = ref<Media[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const submitHandler = () => {
  //here you do whatever
}
onMounted(async() => {
  fetchGallery();
})

function fetchGallery() {
  api.get('fetch-gallery')
    .then(function (response) {
      medias.value = response.data;
      console.log(response.data)
  }).catch(function (error) {
    error.value = 'Erreur lors du chargement des données'
    console.log(error);
  }).finally(function () {
    loading.value = false
    })
}
</script>

<template>
  <div class="mt-10">
    <h2 class="text-3xl text-center mb-10">Bonjour {{ user.name }} !</h2>
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
    <div>
      <div v-if="loading">Chargement...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          <Gallery :medias="medias"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
