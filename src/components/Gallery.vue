<script setup lang="ts">
import { ref } from 'vue'
import type { Media } from '@/interfaces/media.ts'

const props = defineProps<{
  medias: Media[]
}>()

const lightboxActive = ref<boolean>(false)
const currentIndex = ref<number>(0)

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
</script>

<template>
  <div v-for="(media, index) in props.medias" v-bind:key="media.id">
    <div
      v-if="media.mime_type.startsWith('image')"
      class="overflow-hidden rounded-2xl shadow-md group"
      @click="openLightbox(index)"
    >
      <p>{{ media.name }}</p>
      <img
        :src="media.s3_url"
        alt="Image"
        class="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
      />
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
