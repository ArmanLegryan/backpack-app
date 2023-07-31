<template>
  <div class="filter-container">
    <button class="btn btn-filter" @click="emits('filter-by', EFilters.ALL_ITEMS)">
      <AllItemsIcon :fill-opacity="EFilters.ALL_ITEMS === activeFilter ? 1 : 0.5" />
    </button>
    <button class="btn btn-filter" @click="emits('filter-by', EFilters.ARMOR)">
      <ArmorIcon :fill-opacity="EFilters.ARMOR === activeFilter ? 1 : 0.5" />
    </button>
    <button class="btn btn-filter" @click="emits('filter-by', EFilters.WEAPON)">
      <WeaponIcon :fill-opacity="EFilters.WEAPON === activeFilter ? 1 : 0.5" />
    </button>
    <button class="btn btn-filter" @click="emits('filter-by', EFilters.MISC)">
      <MiscIcon :fill-opacity="EFilters.MISC === activeFilter ? 1 : 0.5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import AllItemsIcon from './icons/AllItemsIcon.vue'
import ArmorIcon from './icons/ArmorIcon.vue'
import WeaponIcon from './icons/WeaponIcon.vue'
import MiscIcon from './icons/MiscIcon.vue'

const enum EFilters {
  ALL_ITEMS = 'All Items',
  ARMOR = 'Armor',
  WEAPON = 'Weapon',
  MISC = 'Misc'
}

defineProps<{
  activeFilter: string
}>()

const emits = defineEmits<{
  (e: 'filter-by', value: EFilters): void
}>()
</script>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: column;
  max-width: 80px;
  width: 100%;
  background-color: var(--dark-secondary);
  padding-top: 14px;
}

.btn-filter {
  color: var(--white);
  background-color: transparent;
}

.btn-filter:not(:last-child) {
  margin-bottom: 24px;
}
</style>
