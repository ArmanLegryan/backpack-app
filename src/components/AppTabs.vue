<template>
  <div class="tab-container">
    <div class="tab-buttons">
      <button
        @click="onTabChange(ETabs.BACKPACK)"
        :class="{ active: activeTab === ETabs.BACKPACK }"
        class="btn"
      >
        BACKPACK
      </button>
      <button
        @click="onTabChange(ETabs.NEXUS)"
        :class="{ active: activeTab === ETabs.NEXUS }"
        class="btn"
      >
        NEXUS
      </button>
    </div>
    <button type="button" class="btn btn-close">
      <CloseIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CloseIcon from './icons/CloseIcon.vue'

const enum ETabs {
  BACKPACK = 'BACKPACK',
  NEXUS = 'NEXUS'
}

const activeTab = ref<ETabs>(ETabs.BACKPACK)

const emits = defineEmits<{
  (e: 'change-tab', value: ETabs): void
}>()

const onTabChange = (tab: ETabs) => {
  emits('change-tab', tab)
  activeTab.value = tab
}
</script>

<style>
.tab-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tab-buttons {
  display: flex;
  align-items: center;
  width: 100%;
}

.tab-buttons button {
  width: 100%;
  background-color: var(--dark-secondary);
  color: #989898;
  border: 1px solid black;
  font-size: 24px;
}

.tab-buttons button.active {
  background-color: var(--dark-primary);
  color: #fff;
}

.btn-close {
  background-color: var(--dark-primary);
  color: #fff;
  border: 1px solid black;
}
</style>
