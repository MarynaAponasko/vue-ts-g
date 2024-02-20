<template>
  <div class="notification-container" :class="{ show: isVisible }">
    <p>Ви вже вводили цей символ</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
const open = () => {
  isVisible.value = true
}
const close = () => {
  isVisible.value = false
}

defineExpose({
  open,
  close
})
</script>
