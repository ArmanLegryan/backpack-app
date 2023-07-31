<template>
  <div class="item" :class="backlight">
    <span class="tooltip">{{ name }}</span>
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

const backlight = computed(() => {
  if (props.type === 'armor') return 'bg-blue'
  if (props.type === 'weapon') return 'bg-purple'
  return null
})
</script>

<style scoped>
.item {
  position: relative;
  border: 1px solid #454545;
  background-color: var(--dark-tertiary);
  font-family: 'JetBrains Mono', monospace;
}

.item .tooltip {
  opacity: 0;
  position: absolute;
  background-color: black;
  color: white;
  top: 0;
  left: 0;
}

.item:hover .tooltip {
  opacity: 1;
  z-index: 10;
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
</style>
