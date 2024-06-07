<script setup lang="ts">
import type { PersonalDetails } from './types'
import type { CustomInputContent } from '@core/types'

const props = defineProps<{
  formData: PersonalDetails
}>()

const emit = defineEmits<{
  (e: 'update:formData', value: PersonalDetails): void
}>()

const propertyRadioContent: CustomInputContent[] = [
  {
    title: 'I am the builder',
    desc: 'List property as Builder, list your project and get highest reach fast.',
    icon: 'ri-home-6-line',
    value: 'builder',
  },
  {
    title: 'I am the owner',
    desc: 'Submit property as an Individual. Lease, Rent or Sell at the best price.',
    icon: 'ri-user-3-line',
    value: 'owner',
  },
  {
    title: 'I am the broker',
    desc: 'Earn highest commission by listing your clients properties at best price.',
    value: 'broker',
    icon: 'ri-money-dollar-circle-line',
  },
]

const formData = ref<PersonalDetails>(props.formData)

watch(formData, () => {
  emit('update:formData', formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <VCol cols="12">
        <!-- 👉 User Type  -->
        <CustomRadiosWithIcon
          v-model:selected-radio="formData.userType"
          :radio-content="propertyRadioContent"
          :grid-column="{ cols: '12', sm: '4' }"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 First Name -->
        <VTextField
          v-model="formData.firstName"
          class="text-center"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Last Name -->
        <VTextField
          v-model="formData.lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Username -->
        <VTextField
          v-model="formData.username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Password -->
        <VTextField
          v-model="formData.password"
          autocomplete="on"
          type="password"
          label="Password"
          placeholder="············"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Email -->
        <VTextField
          v-model="formData.email"
          type="email"
          label="Email"
          placeholder="john.doe@email.com"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Contact -->
        <VTextField
          v-model="formData.contact"
          type="number"
          label="Contact"
          placeholder="+1 123 456 7890"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
