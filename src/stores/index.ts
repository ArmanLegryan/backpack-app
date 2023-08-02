import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IItem } from '../models/item'
import { EFilters } from '@/enums/filters'

export const useItemsStore = defineStore('items', () => {
  let allItems = ref<Array<IItem>>([])

  const fetchItems = async (customCase: string = '1'): Promise<Array<IItem>> => {
    try {
      if (customCase) {
        const response = await axios.get('', {
          params: {
            case: customCase
          }
        })
        return (allItems.value = response.data.inventory)
      } else if (!customCase) {
        const response = await axios.get('')
        return (allItems.value = response.data.inventory)
      }
    } catch (error) {
      console.log(error)
    }

    return allItems.value
  }

  const armors = computed<Array<IItem>>(() => {
    return allItems.value.filter((item) => item.type === EFilters.ARMOR.toLowerCase())
  })

  const weapons = computed<Array<IItem>>(() => {
    return allItems.value.filter((item) => item.type === EFilters.WEAPON.toLowerCase())
  })

  const miscs = computed<Array<IItem>>(() => {
    return allItems.value.filter((item) => item.type === EFilters.MISC.toLowerCase())
  })

  return {
    allItems,
    fetchItems,
    armors,
    weapons,
    miscs
  }
})
