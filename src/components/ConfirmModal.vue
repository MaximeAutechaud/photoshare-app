<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm transform transition-all scale-100"
      >
        <h2 class="text-lg font-semibold text-gray-800 mb-4">
          Confirmation
        </h2>
        <p class="text-gray-600 mb-6">
          Êtes-vous sûr de vouloir supprimer cet élément ?
        </p>
        <div class="flex justify-end gap-3">
          <button
            @click="cancel"
            class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Annuler
          </button>
          <button
            @click="confirmAction"
            class="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()

function confirmAction() {
  emit('confirm')
}

function cancel() {
  emit('cancel')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
