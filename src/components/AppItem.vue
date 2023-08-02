<template>
  <div class="item" :class="backlight" @mousemove="showTooltip($event)">
    <span class="tooltip" ref="tooltip">{{ name }}</span>
    <span v-if="charges && maxCharges" class="charges">{{ charges }} / {{ maxCharges }}</span>
    <img :src="imageUrl" :alt="name" class="image" />
    <span v-if="count" class="count">x{{ count }}</span>
    <Cooldown v-if="cooldown" :timer="cooldown" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { IItem } from '@/models/item'
import Cooldown from './Cooldown.vue'

const props = defineProps<IItem>()

const tooltip = ref<HTMLSpanElement | null>(null)

const backlight = computed(() => {
  if (props.type === 'armor') return 'bg-blue'
  if (props.type === 'weapon') return 'bg-purple'
  return null
})

const showTooltip = (event: MouseEvent) => {
  let x = event.clientX
  let y = event.clientY
  tooltip.value!.style.top = y + 10 + 'px'
  tooltip.value!.style.left = x + 10 + 'px'
}
</script>

<style scoped>
.item {
  position: relative;
  font-family: 'JetBrains Mono', monospace;
  height: 100%;
  width: 100%;
}

.item .image {
  position: absolute;
  max-width: 74px;
  max-height: 74px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.item .charges {
  position: absolute;
  top: -2px;
  left: 3px;
}

.item .count {
  position: absolute;
  bottom: -5px;
  right: 4px;
}

.bg-blue {
  background-image: url('../assets/icons/bg-blue.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: initial;
}

.bg-purple {
  background-image: url('../assets/icons/bg-purple.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: initial;
}

.tooltip {
  display: none;
  z-index: 9;
  padding: 6px 20px;
  background-color: var(--dark-primary);
  border: 2px solid var(--dark-secondary);
  border-radius: 24px;
}

.item:hover .tooltip {
  display: block;
  position: fixed;
}
</style>
