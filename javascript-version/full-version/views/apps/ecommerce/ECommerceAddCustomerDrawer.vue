<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isDrawerOpen'])

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}

const refVForm = ref()
const name = ref()
const email = ref()
const mobile = ref()
const addressLine1 = ref()
const addressLine2 = ref()
const town = ref()
const state = ref()
const postCode = ref()
const country = ref()
const isBillingAddress = ref(false)

const resetForm = () => {
  refVForm.value?.reset()
  emit('update:isDrawerOpen', false)
}
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    temporary
    location="end"
    width="370"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Header -->
    <AppDrawerHeaderSection
      title="Add a Customer"
      @cancel="$emit('update:isDrawerOpen', false)"
    />
    <VDivider />

    <VCard flat>
      <PerfectScrollbar
        :options="{ wheelPropagation: false }"
        class="h-100"
      >
        <VCardText style="block-size: calc(100vh - 5rem);">
          <VForm
            ref="refVForm"
            @submit.prevent=""
          >
            <VRow>
              <VCol>
                <div class="text-body-1 font-weight-medium text-high-emphasis">
                  Basic Information
                </div>
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="name"
                  label="Full Name"
                  :rules="[requiredValidator]"
                  placeholder="John Doe"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="email"
                  label="Email Address"
                  :rules="[requiredValidator, emailValidator]"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="mobile"
                  label="Mobile Number"
                  type="number"
                  :rules="[requiredValidator]"
                  placeholder="+(123) 456-7890"
                />
              </VCol>

              <VCol>
                <div class="text-body-1 font-weight-medium text-high-emphasis">
                  Shipping Information
                </div>
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="addressLine1"
                  label="Address Line 1*"
                  :rules="[requiredValidator]"
                  placeholder="45, Rocker Terrace"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="addressLine2"
                  placeholder="Empire Heights,"
                  :rules="[requiredValidator]"
                  label="Address Line 2*"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="town"
                  label="Town*"
                  :rules="[requiredValidator]"
                  placeholder="New York"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="state"
                  placeholder="Texas"
                  :rules="[requiredValidator]"
                  label="State/Province*"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="postCode"
                  label="Post Code*"
                  type="number"
                  :rules="[requiredValidator]"
                  placeholder="982347"
                />
              </VCol>

              <VCol cols="12">
                <VSelect
                  v-model="country"
                  placeholder="United States"
                  :rules="[requiredValidator]"
                  label="Country"
                  :items="['United States', 'United Kingdom', 'Canada']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-space-between">
                  <div class="d-flex flex-column gap-y-1">
                    <h6 class="text-h6">
                      Use as a billing address?
                    </h6>
                    <span class="text-sm">Please check budget for more info</span>
                  </div>
                  <VSwitch v-model="isBillingAddress" />
                </div>
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-start">
                  <VBtn
                    type="submit"
                    color="primary"
                    class="me-4"
                  >
                    Add
                  </VBtn>
                  <VBtn
                    color="error"
                    variant="outlined"
                    @click="resetForm"
                  >
                    Discard
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </PerfectScrollbar>
    </VCard>
  </VNavigationDrawer>
</template>

<style lang="scss">
.v-navigation-drawer__content {
  overflow-y: hidden !important;
}
</style>
