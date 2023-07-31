import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IItem } from '../models/item'

export const useItemsStore = defineStore('items', () => {
  let allItems = ref<Array<IItem>>([])
  let armors = ref<Array<IItem>>([])
  let weapons = ref<Array<IItem>>([])
  let miscs = ref<Array<IItem>>([])

  const fetchItems = async (customCase: string = '1'): Promise<Array<IItem>> => {
    try {
      if (customCase) {
        const response = await axios.get('', {
          params: {
            case: customCase
          }
        })
        allItems.value = response.data.inventory
      } else if (!customCase) {
        const response = await axios.get('')
        allItems.value = response.data.inventory
      }
    } catch (error) {
      console.log(error)
    }

    return allItems.value
  }

  const armorItems = async (customCase: string = '1') => {
    try {
      const response = await fetchItems(customCase)
      armors.value = response.filter((item) => item.type === 'armor')
    } catch (error) {
      console.log(error)
    }

    return armors.value
  }

  const weaponItems = async (customCase: string = '1') => {
    try {
      const response = await fetchItems(customCase)
      weapons.value = response.filter((item) => item.type === 'weapon')
    } catch (error) {
      console.log(error)
    }

    return weapons.value
  }

  const miscItems = async (customCase: string = '1') => {
    try {
      const response = await fetchItems(customCase)
      miscs.value = response.filter((item) => item.type === 'misc')
    } catch (error) {
      console.log(error)
    }

    return miscs.value
  }

  return { allItems, fetchItems, armors, armorItems, weapons, weaponItems, miscs, miscItems }
})
