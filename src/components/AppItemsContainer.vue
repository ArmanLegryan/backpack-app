<template>
  <div class="items-container">
    <p class="title">{{ title }}</p>
    <div class="scroll">
      <div class="items-section">
        <div v-for="i in 40" :key="i" class="item-wrapper">
          <app-item
            v-if="itemsToShaw[i - 1]"
            :id="itemsToShaw[i - 1].id"
            :type="itemsToShaw[i - 1].type"
            :name="itemsToShaw[i - 1].name"
            :image-url="itemsToShaw[i - 1].imageUrl"
            :count="itemsToShaw[i - 1].count"
            :charges="itemsToShaw[i - 1].charges"
            :max-charges="itemsToShaw[i - 1].maxCharges"
            :cooldown="itemsToShaw[i - 1].cooldown"
          />
        </div>
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

.item-wrapper {
  border: 1px solid #454545;
  background-color: var(--dark-tertiary);
  height: 94px;
  width: 94px;
}
</style>
