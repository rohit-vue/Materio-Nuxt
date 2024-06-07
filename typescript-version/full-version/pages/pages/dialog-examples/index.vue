<script setup lang="ts">
const isCardAddDialogVisible = ref(false)
const isPricingPlanDialogVisible = ref(false)
const isEditAddressDialogVisible = ref(false)
const isTwoFactorDialogOpen = ref(false)
const isUserInfoEditDialogVisible = ref(false)
const isShareProjectDialogVisible = ref(false)
const isReferAndEarnDialogVisible = ref(false)
const isPaymentProvidersDialogVisible = ref(false)
const isAddPaymentMethodsDialogVisible = ref(false)
const isCreateAppVisible = ref(false)

const userData = {
  id: 110,
  fullName: 'Salena Kyle',
  company: 'Wayne Enterprises',
  firstName: 'Selena',
  lastName: 'Kyle',
  username: 'charwomen1940',
  role: 'Admin',
  currentPlan: 'Pro',
  country: 'USA',
  contact: '(829) 537-0057',
  email: 'salenakyle@gmail.com',
  isBillingAddress: true,
  status: 'active',
  taxId: 'Tax-8894',
  language: ['English'],
}
</script>

<template>
  <VRow>
    <!-- 👉 Share Project Dialog -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-file-pdf-line"
          />
          <h5 class="text-h5">
            Share Project
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Quickly collect the credit card details, built in input mask and form validation support.
          </p>

          <VBtn @click="isShareProjectDialogVisible = !isShareProjectDialogVisible">
            Show
          </VBtn>
        </VCardText>

        <ShareProjectDialog v-model:isDialogVisible="isShareProjectDialogVisible" />
      </VCard>
    </VCol>

    <!-- 👉 Add New Card Dialog -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-bank-card-line"
          />
          <h5 class="text-h5">
            Add New Card
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Quickly collect the credit card details, built in input mask and form validation support.
          </p>

          <VBtn @click="isCardAddDialogVisible = !isCardAddDialogVisible">
            Show
          </VBtn>
        </VCardText>

        <CardAddEditDialog v-model:isDialogVisible="isCardAddDialogVisible" />
      </VCard>
    </VCol>

    <!-- 👉 Pricing Dialog -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-money-dollar-circle-line"
          />
          <h5 class="text-h5">
            Pricing
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Elegant pricing options dialog popup example, easy to use in any page.
          </p>

          <VBtn @click="isPricingPlanDialogVisible = !isPricingPlanDialogVisible">
            Show
          </VBtn>
        </VCardText>

        <!-- 👉 plan and pricing dialog -->
        <PricingPlanDialog v-model:is-dialog-visible="isPricingPlanDialogVisible" />
      </VCard>
    </VCol>

    <!-- 👉 Refer And Earn Dialog -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-gift-line"
          />
          <h5 class="text-h5">
            Refer & Earn
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague.
          </p>

          <VBtn @click="isReferAndEarnDialogVisible = !isReferAndEarnDialogVisible">
            Show
          </VBtn>
        </VCardText>

        <!-- 👉 plan and pricing dialog -->
        <ReferAndEarnDialog v-model:is-dialog-visible="isReferAndEarnDialogVisible" />
      </VCard>
    </VCol>

    <!-- 👉 Add New Address Dialog -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-home-3-line"
          />
          <h5 class="text-h5">
            Add New Address
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Ready to use form to collect user address data with validation and custom input support.
          </p>

          <VBtn @click="isEditAddressDialogVisible = !isEditAddressDialogVisible">
            Show
          </VBtn>
        </VCardText>

        <!-- 👉 Edit Address dialog -->
        <AddEditAddressDialog v-model:isDialogVisible="isEditAddressDialogVisible" />
      </VCard>
    </VCol>

    <!-- 👉 Create app dialog -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-box-3-line"
          />
          <h5 class="text-h5">
            Create App
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Provide application data with this form to create the app dialog popup example, easy to use in any page.
          </p>

          <VBtn @click="isCreateAppVisible = !isCreateAppVisible">
            Show
          </VBtn>
        </VCardText>
      </VCard>
      <CreateAppDialog v-model:is-dialog-visible="isCreateAppVisible" />
    </VCol>

    <!-- 👉 Two Factor Auth Dialog -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-lock-line"
          />
          <h5 class="text-h5">
            Two Factor Auth
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Enhance your application security by enabling two factor authentication.
          </p>

          <VBtn @click="isTwoFactorDialogOpen = !isTwoFactorDialogOpen">
            Show
          </VBtn>
        </VCardText>

        <!-- 👉 Enable One Time Password Dialog -->

        <TwoFactorAuthDialog v-model:isDialogVisible="isTwoFactorDialogOpen" />
      </VCard>
    </VCol>

    <!-- 👉 Edit User Info Dialog -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-user-line"
          />
          <h5 class="text-h5">
            Edit User Info
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Enhance your application security by enabling two factor authentication.
          </p>

          <VBtn @click="isUserInfoEditDialogVisible = !isUserInfoEditDialogVisible">
            Show
          </VBtn>
        </VCardText>

        <!-- 👉 Edit user info dialog -->
        <UserInfoEditDialog
          v-model:isDialogVisible="isUserInfoEditDialogVisible"
          :user-data="userData"
        />
      </VCard>
    </VCol>

    <!-- 👉 Payment Providers Dialog -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-bank-card-line"
          />
          <h5 class="text-h5">
            Payment Providers
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Elegant payment options modal popup example, easy to use in any page.
          </p>

          <VBtn @click="isPaymentProvidersDialogVisible = !isPaymentProvidersDialogVisible">
            Show
          </VBtn>
        </VCardText>

        <!-- 👉 plan and pricing dialog -->
        <PaymentProvidersDialog v-model:is-dialog-visible="isPaymentProvidersDialogVisible" />
      </VCard>
    </VCol>

    <!-- 👉 Add Payment Methods -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard class="text-high-emphasis text-center">
        <VCardText class="d-flex flex-column align-center gap-2">
          <VIcon
            size="28"
            icon="ri-bank-card-2-line"
          />
          <h5 class="text-h5">
            Add Payment Methods
          </h5>
        </VCardText>

        <VCardText>
          <p class="text-base clamp-text">
            Elegant payment methods modal popup example, easy to use in any page.
          </p>

          <VBtn @click="isAddPaymentMethodsDialogVisible = !isAddPaymentMethodsDialogVisible">
            Show
          </VBtn>
        </VCardText>

        <!-- 👉 plan and pricing dialog -->
        <AddPaymentMethodDialog v-model:is-dialog-visible="isAddPaymentMethodsDialogVisible" />
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.pricing-dialog {
  .pricing-title {
    font-size: 1.5rem !important;
  }
}
</style>
