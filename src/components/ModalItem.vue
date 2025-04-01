<script setup lang="ts">
import { defineProps, defineEmits, ref, useTemplateRef } from 'vue'

const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['modal-close'])

const target = ref(null)
const dropContainer = useTemplateRef<HTMLLabelElement>('drop-container')
const fileInput = useTemplateRef<HTMLInputElement>('file-input')

defineExpose({
  dropContainer, fileInput
});
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="flex items-center justify-end" @click.stop="emit('modal-close')">
          <div class="exit">
            <span>X</span>
          </div>
        </div>
        <label ref="drop-container" for="images" class="drop-container" id="drop-container">
          <span class="drop-title">Déposer vos fichiers</span>
          ou
          <input ref="file-input" type="file" id="images[]" accept="image/*" multiple>
        </label>
        <div class="modal-footer">
          <slot name="footer"></slot>
          <div>
            <button
              type="button"
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              @click.stop="emit('modal-close')"
            >
              Submit
            </button>
          </div>
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
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  z-index: 9999;
}
.exit {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border: 2px solid red;
  border-radius: 25%;
  font-weight: bolder;
  font-size: 1rem;
}

.drop-container {
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed #555;
  color: #444;
  cursor: pointer;
  transition: background .2s ease-in-out, border .2s ease-in-out;
}

.drop-container:hover {
  background: #eee;
  border-color: #111;
}
</style>
