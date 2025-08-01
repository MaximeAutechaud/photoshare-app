<script setup lang="ts">
import Resumable from 'resumablejs'
import { defineProps, defineEmits, ref, useTemplateRef, watch } from 'vue'
import { useAuthStore } from '@/stores/auth.ts'
import InputFile from '@/components/InputFile.vue'

const props = defineProps({
  isOpen: Boolean,
})

const files = ref<File[]>([])
const auth = useAuthStore()
const selectedFiles = ref<File[]>([])

function onFilesSelected(files: File[]) {
  console.log('Fichiers sélectionnés :', files)
  selectedFiles.value = files
}

//const emit = defineEmits(['modal-close', (e: "changed", file: File[]): void])
const emit = defineEmits<{
  (e: 'changed', file: File[]): void
  (e: 'modal-close'): void
}>()

watch(files, (newFile) => {
  emit('changed', newFile)
})
const target = ref(null)
const dropContainer = useTemplateRef<HTMLLabelElement>('drop-container')
const fileInput = useTemplateRef<HTMLInputElement>('file-input')

function upload() {
  const filesAsArray = Array.from(selectedFiles.value || [])
  for (let i = 0; i < filesAsArray.length; i++) {
    const file = filesAsArray[i]
    const r = new Resumable({
      headers: {
        Authorization: auth.getBearerToken,
      },
      target: 'http://127.0.0.1:8000/api/upload-files',
      chunkSize: 1024 * 1024,
      testChunks: false,
    })
    r.addFile(file)
    r.on('fileAdded', () => {
      r.upload()
    })
  }
}

defineExpose({
  dropContainer,
  fileInput,
})
</script>

<template>
  <div v-if="props.isOpen" class="modal-mask">
    <div class="modal-wrapper" >
      <div class="modal-container rounded-xl" ref="target">
        <div class="flex items-center justify-end" @click.stop="emit('modal-close')">
          <div class="exit mb-4 cursor-pointer text-right font-600 text-xl">
            <span>X</span>
          </div>
        </div>
        <InputFile accept="image/*" :multiple="true" @update:files="onFilesSelected" />
        <div class="modal-footer">
          <slot name="footer">
            <div class="text-center mt-8">
              <button
                type="button"
                class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                @click.stop="emit('modal-close')"
                @click.prevent="upload"
              >
                Uploader
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  width: 50%;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  z-index: 9999;
}

</style>
