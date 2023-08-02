<template>
  <div class="backpack-container">
    <app-tabs class="tabs" @change-tab="changeTab" />
    <app-filters class="filters" :active-filter="filterName" @filter-by="filterBy" />
    <app-items-container class="items" :title="filterName" :items-to-shaw="itemsToShaw" />
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useItemsStore } from '@/stores'
import { EFilters } from '@/enums/filters'
import AppTabs from './AppTabs.vue'
import AppFilters from './AppFilters.vue'
import AppItemsContainer from './AppItemsContainer.vue'

const route = useRoute()
const store = useItemsStore()
const { allItems, armors, weapons, miscs } = storeToRefs(store)
const { fetchItems } = store

let query = route.query.case?.toString()
const itemsToShaw = ref(toRaw(allItems))

const tab = ref('')
let filterName = ref(EFilters.ALL_ITEMS)

const changeTab = (tabName: string) => {
  tab.value = tabName
  filterName.value = EFilters.ALL_ITEMS
}

const filterBy = async (filterBy: EFilters) => {
  filterName.value = filterBy
}

watch(
  () => route.query,
  async (newValue) => {
    query = newValue?.case?.toString()
    await fetchItems(query?.toString())
  }
)

watch(
  () => filterName.value,
  async (newVal) => {
    switch (newVal) {
      case EFilters.ARMOR:
        await fetchItems(query)
        itemsToShaw.value = armors.value
        break
      case EFilters.WEAPON:
        await fetchItems(query)
        itemsToShaw.value = weapons.value
        break
      case EFilters.MISC:
        await fetchItems(query)
        itemsToShaw.value = miscs.value
        break
      default:
        await fetchItems(query)
        itemsToShaw.value = allItems.value
        break
    }
  }
)
</script>

<style scoped>
.backpack-container {
  max-width: 562px;
  width: 100%;
  height: 864px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.2fr 1.8fr;
  grid-template-rows: 0.1fr 1.9fr;
  gap: 0px 0px;
  grid-template-areas:
    'tabs tabs'
    'filters items'
    'filters items';
}

.filters {
  grid-area: filters;
}
.items {
  grid-area: items;
}
.tabs {
  grid-area: tabs;
}
</style>
