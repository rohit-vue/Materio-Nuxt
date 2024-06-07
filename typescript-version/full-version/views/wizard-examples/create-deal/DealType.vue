<script setup lang="ts">
import type { DealType } from './types'
import ShoppingGirl from '@images/pages/shopping-girl.png'

const props = defineProps<{
  formData: DealType
}>()

const emit = defineEmits<{
  (e: 'update:formData', value: DealType): void
}>()

const discountOffers = [
  {
    icon: 'ri-percent-line',
    title: 'Percentage',
    desc: 'Create a deal which offer uses some % off (i.e 5% OFF) on total.',
    value: 'percentage',
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Flat Amount',
    desc: 'Create a deal which offer uses some flat amount (i.e $5 OFF) on total.',
    value: 'flat',
  },
  {
    icon: 'ri-user-line',
    title: 'Prime member',
    desc: 'Create prime member only deal to encourage the prime members.',
    value: 'prime',
  },
]

const formData = ref<DealType>(props.formData)

watch(formData, () => {
  emit('update:formData', formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <!-- 👉 Shopping girl image -->
      <VCol cols="12">
        <VImg
          :src="ShoppingGirl"
          max-height="240"
          class="border rounded"
        />
      </VCol>

      <VCol cols="12">
        <CustomRadiosWithIcon
          v-model:selected-radio="formData.Offer"
          :radio-content="discountOffers"
          :grid-column="{ cols: '12', sm: '4' }"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          v-model="formData.discount"
          type="number"
          label="Discount"
          placeholder="10%"
          hint="Enter the discount percentage. 10 = 10%"
          persistent-hint
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VSelect
          v-model="formData.region"
          label="Region"
          :items="['Asia', 'Europe', 'Africa', 'Australia', 'North America', 'South America']"
          placeholder="Select Region"
          hint="Select applicable regions for the deal."
          persistent-hint
        />
      </VCol>
    </VRow>
  </VForm>
</template>
