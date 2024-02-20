<template>
  <div v-show="isVisible" class="popup-container">
    <div class="popup">
      <h2 v-if="gameStatus === 'win'">Вітаю, ви перемогли! 😃</h2>
      <template v-else>
        <h2>Ви програли. 😕</h2>
        <h3>...ім'я: {{ word }}</h3>
      </template>

      <button @click="emit('restart')">Грати еще раз</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { GameStatus } from '../types/GameStatus'

interface Props {
  word: string
}

defineProps<Props>()

const gameStatus = ref<GameStatus | null>()

const isVisible = ref(false)

const open = (status: GameStatus) => {
  gameStatus.value = status
  isVisible.value = true
}
const close = () => {
  isVisible.value = false
}

defineExpose({
  open,
  close
})

const emit = defineEmits<{
  (e: 'restart'): void
}>()
</script>
