<template>
  <div class="cooldown-container" v-if="cooldownTimer">
    <CooldownIcon class="svg" />
    <p class="timer">{{ cooldownTimer }}s</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import CooldownIcon from './icons/CooldownIcon.vue'

const props = defineProps<{
  timer: number
}>()

const cooldownTimer = ref(props.timer)

const startCooldown = () => {
  const interval = setInterval(() => {
    if (props.timer > 0) {
      cooldownTimer.value--
    }
    if (cooldownTimer.value === 0) clearInterval(interval)
  }, 1000)
}

onMounted(() => {
  startCooldown()
})
</script>

<style scoped>
.cooldown-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: 'Archivo Black', sans-serif;
}

.svg {
  margin-bottom: 6px;
}

.timer {
  font-size: 9px;
}
</style>
