<template>
  <div class="items-container">
    <p class="title">{{ title }}</p>
    <div class="scroll">
      <div class="items-section">
        <app-item
          v-for="item in itemsToShaw"
          :key="item.id"
          :id="item.id"
          :type="item.type"
          :name="item.name"
          :image-url="item.imageUrl"
          :count="item.count"
          :charges="item.charges"
          :max-charges="item.maxCharges"
          :cooldown="item.cooldown"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IItem } from '@/models/item'
import AppItem from './AppItem.vue'

defineProps<{
  title: string
  itemsToShaw: Array<IItem>
}>()
</script>

<style scoped>
.items-container {
  padding: 14px;
  background-color: var(--dark-primary);
}

.title {
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.scroll {
  height: 95%;
  overflow-y: scroll;
}

.items-section {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
}
</style>
