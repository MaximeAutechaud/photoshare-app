<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

type FileWithMeta = {
  file: File
  preview: string | null
  progress: number
}

const props = defineProps<{
  multiple?: boolean
  accept?: string
}>()

const emit = defineEmits<{
  (e: 'update:files', files: File[]): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const files = ref<FileWithMeta[]>([])
const isDragging = ref(false)
const intervals: number[] = []

function openFileDialog(): void {
  inputRef.value?.click()
}

function onFileChange(event: Event): void {
  const target = event.target as HTMLInputElement
  if (target.files) {
    handleFiles(Array.from(target.files))
  }
}

function onDragOver(): void {
  isDragging.value = true
}

function onDragLeave(): void {
  isDragging.value = false
}

function onDrop(event: DragEvent): void {
  isDragging.value = false
  if (event.dataTransfer?.files) {
    handleFiles(Array.from(event.dataTransfer.files))
  }
}

function handleFiles(selected: File[]): void {
  files.value = selected.map((file) => ({
    file,
    preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
    progress: 0
  }))

  emit('update:files', selected)

  // Simulate upload progress
  files.value.forEach((fileObj, index) => {
    const id = window.setInterval(() => {
      if (fileObj.progress >= 100) {
        clearInterval(id)
      } else {
        fileObj.progress += 5
      }
    }, 100)
    intervals.push(id)
  })
}

function formatSize(bytes: number): string {
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const size = (bytes / Math.pow(1024, i)).toFixed(1)
  return `${size} ${sizes[i]}`
}

function removeFile(index: number) {
  files.value.splice(index, 1)
}

// Cleanup previews and intervals
onUnmounted(() => {
  files.value.forEach(f => f.preview && URL.revokeObjectURL(f.preview))
  intervals.forEach(id => clearInterval(id))
})
</script>

<template>
  <div>
    <!-- Zone de drop -->
    <div
      class="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center cursor-pointer transition-colors hover:bg-gray-50"
      :class="{ 'bg-blue-50 border-blue-400': isDragging }"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
      @click="openFileDialog"
    >
      <div class="flex flex-col items-center space-y-2">
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 16l4-4a4 4 0 015.657 0l2.343 2.343a2 2 0 002.828 0L21 9m-9 11v-6" />
        </svg>
        <p class="text-gray-600">
          Glissez vos fichiers ici ou <span class="text-blue-600 underline">cliquez</span>
        </p>
        <input
          ref="inputRef"
          type="file"
          class="hidden"
          :multiple="multiple"
          :accept="accept"
          @change="onFileChange"
        />
      </div>
    </div>

    <!-- Fichiers sélectionnés -->
    <div v-if="files.length" class="mt-4 max-h-[40vh] space-y-4 text-sm text-gray-700 overflow-y-auto flex-1">
      <div
        v-for="(fileObj, index) in files"
        :key="index"
        class="flex items-start gap-4 bg-gray-100 p-3 rounded-xl shadow-sm max-h-[500px]"
      >
        <!-- Thumbnail -->
        <div class="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white border">
          <img
            v-if="fileObj.preview"
            :src="fileObj.preview"
            alt="preview"
            class="object-cover w-full h-full"
          />
          <div v-else class="flex items-center justify-center h-full text-gray-400 text-xs">
            No preview
          </div>
        </div>

        <!-- File Info -->
        <div class="flex-1">
          <div class="flex justify-between">
            <span class="font-medium truncate">{{ fileObj.file.name }}</span>
            <span class="text-xs text-gray-500">{{ formatSize(fileObj.file.size) }}</span>
            <span class="text-xs text-gray-500 cursor-pointer" @click="removeFile(index)">X</span>
          </div>

          <!-- Progress Bar -->
          <div class="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              class="bg-blue-500 h-full transition-all duration-300"
              :style="{ width: fileObj.progress + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

