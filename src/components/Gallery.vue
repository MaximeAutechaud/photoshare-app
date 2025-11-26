<script setup lang="ts">
import { ref } from 'vue'
import type { Media } from '@/interfaces/media.ts'
import api from '@/lib/axios.ts'
import ConfirmModal from '@/components/ConfirmModal.vue'

const props = defineProps<{
  medias: Media[]
}>()

const lightboxActive = ref<boolean>(false)
const currentIndex = ref<number>(0)
const showModal = ref<boolean>(false)

function handleDelete(media: Media) {
  console.log('✅ Élément supprimé')
  destroy(media.id)
  showModal.value = false
}

function openLightbox(index: number) {
  currentIndex.value = index
  lightboxActive.value = true
}

function closeLightbox() {
  lightboxActive.value = false
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function next() {
  if (currentIndex.value < props.medias.length - 1) {
    currentIndex.value++
  }
}

function confirmeDestroy(media: Media) {
  if (confirm('Voulez-vous vraiment supprimer ' + media.name + " ?")) {
    destroy(media.id)
  }
}

function destroy(media_id: number) {
  api.delete('destroy-file/' + media_id
  )
}
</script>

<template>
  <div v-for="(media, index) in props.medias" v-bind:key="media.id">
    <div
      v-if="media.mime_type.startsWith('image')"
      class="overflow-hidden rounded-2xl shadow-md group"
      @click="openLightbox(index)"
    >
      <p>{{ media.name }}</p>
      <div class="relative group">
        <img
          :src="media.s3_url"
          alt="Image"
          class="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
        />
        <div
          class="group absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <button
            @click.stop="showModal = true"
            class="bg-white text-gray-800 px-2 py-1 text-sm rounded shadow hover:bg-gray-100"
          >
            ✕
          </button>
          <ConfirmModal :visible="showModal" @confirm="handleDelete(media)" @cancel="showModal = false" /> />
        </div>
      </div>
    </div>
    <div v-else>
      <p>{{ media.name }}</p>
      <video
        controls
        class="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
      >
        <source :src="media.s3_url" :type="media.mime_type" />
      </video>
    </div>
  </div>

  <!-- Lightbox -->
  <div
    v-if="lightboxActive"
    class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
    @click.self="closeLightbox"
  >
    <img
      v-if="medias[currentIndex].mime_type.startsWith('image')"
      :src="medias[currentIndex].s3_url"
      class="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl transition-opacity duration-300"
      :alt="medias[currentIndex].name"
    />
    <video
      v-else
      controls
      class="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
    >
      <source :src="medias[currentIndex].s3_url" :type="medias[currentIndex].mime_type" />
    </video>
    <button class="absolute top-4 right-4 text-white text-2xl font-bold" @click="closeLightbox">
      ✕
    </button>

    <!-- Navigation -->
    <button v-if="currentIndex > 0" class="absolute left-4 text-white text-3xl" @click.stop="prev">
      ‹
    </button>
    <button
      v-if="currentIndex < medias.length - 1"
      class="absolute right-4 text-white text-3xl"
      @click.stop="next"
    >
      ›
    </button>
  </div>
</template>

<style scoped></style>
