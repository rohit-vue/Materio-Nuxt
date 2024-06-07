<script setup lang="ts">
import type { CustomInputContent } from '@core/types'
import registerMultiStepIllustration from '@images/pages/register-multi-step-illustration.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

definePageMeta({
  layout: 'blank',

})

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: '0',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: '99',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: '499',
  },
]

const items = [
  {
    title: 'Account',
    subtitle: 'Account Details',
  },
  {
    title: 'Personal',
    subtitle: 'Enter Information',
  },
  {
    title: 'Billing',
    subtitle: 'Payment Details',
  },
]

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  link: '',
  firstName: '',
  lastName: '',
  mobile: '',
  pincode: '',
  address: '',
  landmark: '',
  city: '',
  state: null,
  selectedPlan: '0',
  cardNumber: '',
  cardName: '',
  expiryDate: '',
  cvv: '',
})

const onSubmit = () => {
  // eslint-disable-next-line no-alert
  alert('Submitted..!!')
}
</script>

<template>
  <NuxtLink to="/">
    <div class="auth-logo d-flex align-center gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </NuxtLink>

  <VRow
    no-gutters
    class="auth-wrapper"
  >
    <VCol
      md="4"
      class="d-none d-md-flex"
    >
      <!-- here your illustration -->

      <div
        class="d-flex align-center w-100 h-100 justify-end pa-10"
        :class="$vuetify.locale.isRtl ? 'pe-10 ps-0' : 'pe-0'"
      >
        <VImg
          max-width="359"
          :src="registerMultiStepIllustration"
          class="auth-illustration"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      md="8"
      class="auth-card-v2 d-flex align-center justify-center pa-10"
      style="background-color: rgb(var(--v-theme-surface));"
    >
      <VCard
        flat
        class="mt-12 mt-sm-0"
      >
        <AppStepper
          v-model:current-step="currentStep"
          :items="items"
          :direction="$vuetify.display.smAndUp ? 'horizontal' : 'vertical'"
          class="mb-12"
        />

        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
          style="max-inline-size: 650px;"
        >
          <VForm>
            <VWindowItem>
              <h4 class="text-h4">
                Account Information
              </h4>
              <p class="mb-5">
                Enter Your Account Details
              </p>

              <VRow>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.username"
                    label="Username"
                    placeholder="Johndoe"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.email"
                    label="Email"
                    placeholder="johndoe@email.com"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.password"
                    label="Password"
                    placeholder="············"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.confirmPassword"
                    label="Confirm Password"
                    placeholder="············"
                    :type="isConfirmPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isConfirmPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                    @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                  />
                </VCol>

                <VCol cols="12">
                  <VTextField
                    v-model="form.link"
                    label="Profile Link"
                    placeholder="https://profile.com/johndoe"
                    type="url"
                  />
                </VCol>
              </VRow>
            </VWindowItem>

            <VWindowItem>
              <h4 class="text-h4">
                Personal Information
              </h4>
              <p class="mb-5">
                Enter Your Personal Information
              </p>

              <VRow>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.firstName"
                    label="First Name"
                    placeholder="John"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.lastName"
                    label="Last Name"
                    placeholder="Doe"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.mobile"
                    type="number"
                    label="Mobile"
                    placeholder="+1 123 456 7890"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.pincode"
                    type="number"
                    label="Pincode"
                    placeholder="123456"
                  />
                </VCol>

                <VCol cols="12">
                  <VTextField
                    v-model="form.address"
                    label="Address"
                    placeholder="1234 Main St, New York, NY 10001, USA"
                  />
                </VCol>

                <VCol cols="12">
                  <VTextField
                    v-model="form.landmark"
                    label="Landmark"
                    placeholder="Near Central Park"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.city"
                    label="City"
                    placeholder="New York"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="form.state"
                    label="State"
                    placeholder="Select State"
                    :items="['New York', 'California', 'Florida', 'Washington', 'Texas']"
                  />
                </VCol>
              </VRow>
            </VWindowItem>

            <VWindowItem>
              <h4 class="text-h4">
                Select Plan
              </h4>
              <p class="mb-5">
                Select plan as per your requirement
              </p>

              <CustomRadiosWithIcon
                v-model:selected-radio="form.selectedPlan"
                :radio-content="radioContent"
                :grid-column="{ sm: '4', cols: '12' }"
              >
                <template #default="{ item }">
                  <div class="text-center">
                    <h6 class="text-h6 mb-2">
                      {{ item.title }}
                    </h6>
                    <p class="clamp-text text-body-2 mb-2">
                      {{ item.desc }}
                    </p>

                    <div class="d-flex align-center justify-center">
                      <div class="text-primary mb-2">
                        $
                      </div>
                      <h4 class="text-h4 text-primary">
                        {{ item.value }}
                      </h4>
                      <div class="text-body-2 text-disabled mt-2">
                        /month
                      </div>
                    </div>
                  </div>
                </template>
              </CustomRadiosWithIcon>

              <h4 class="text-h4 mt-12">
                Payment Information
              </h4>
              <p class="mb-5">
                Enter your card information
              </p>

              <VRow>
                <VCol cols="12">
                  <VTextField
                    v-model="form.cardNumber"
                    type="number"
                    label="Card Number"
                    placeholder="1234 1234 1234 1234"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.cardName"
                    label="Name on Card"
                    placeholder="John Doe"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="3"
                >
                  <VTextField
                    v-model="form.expiryDate"
                    label="Expiry"
                    placeholder="MM/YY"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="3"
                >
                  <VTextField
                    v-model="form.cvv"
                    type="number"
                    label="CVV"
                    placeholder="123"
                  />
                </VCol>
              </VRow>
            </VWindowItem>
          </VForm>
        </VWindow>

        <div class="d-flex flex-wrap justify-space-between gap-x-4 gap-y-2 mt-5">
          <VBtn
            color="secondary"
            variant="outlined"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="ri-arrow-left-line"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="items.length - 1 === currentStep"
            color="success"
            append-icon="ri-check-line"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="ri-arrow-right-line"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
