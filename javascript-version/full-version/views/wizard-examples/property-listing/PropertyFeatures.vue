<script setup>
const props = defineProps({
  formData: {
    type: null,
    required: true,
  },
})

const emit = defineEmits(['update:formData'])

const formData = ref(props.formData)

watch(formData, () => {
  emit('update:formData', formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Bedrooms -->
        <VTextField
          v-model="formData.bedroomCount"
          label="Bedrooms"
          placeholder="3"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Floor No -->
        <VTextField
          v-model="formData.floorNo"
          label="Floor No"
          placeholder="12"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Bathrooms -->
        <VTextField
          v-model="formData.bathroomCount"
          label="Bathroom"
          placeholder="4"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Furnished Status -->
        <VSelect
          v-model="formData.furnishedStatus"
          label="Furnished Status"
          placeholder="Select Furnished Status"
          :items="['Fully Furnished', 'Furnished', 'Semi-Furnished', 'Unfurnished']"
        />
      </VCol>
      <VCol cols="12">
        <!-- 👉 Furnishing Details -->
        <VSelect
          v-model="formData.furnishingDetails"
          label="Furnishing Details"
          placeholder="Select Furnishing Details"
          multiple
          chips
          closable-chips
          :items="['TV', 'AC', 'RO', 'Bed', 'Fridge', 'Wi-Fi', 'Sofa', 'Cupboard', 'Microwave', 'Dining Table', 'Washing Machine']"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 xCommon Area? -->
        <VRadioGroup v-model="formData.isCommonArea1">
          <template #label>
            <div>
              Is There Any Common Area?
            </div>
          </template>
          <VRadio
            label="Yes"
            value="true"
          />
          <VRadio
            label="No"
            value="false"
          />
        </VRadioGroup>
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Common Area? -->
        <VRadioGroup v-model="formData.isCommonArea2">
          <template #label>
            <div>
              Is There Any Common Area?
            </div>
          </template>
          <VRadio
            label="Yes"
            value="true"
          />
          <VRadio
            label="No"
            value="false"
          />
        </VRadioGroup>
      </VCol>
    </VRow>
  </VForm>
</template>
