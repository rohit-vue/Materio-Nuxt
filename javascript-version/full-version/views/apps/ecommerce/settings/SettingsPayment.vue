<script setup>
import { ref } from 'vue'
import paypal from '@images/cards/paypal-primary.png'

const isAddPaymentMethodsDialogVisible = ref(false)
const isPaymentProvidersDialogVisible = ref(false)
</script>

<template>
  <div>
    <!-- 👉 Payment Providers  -->
    <VCard
      class="mb-6"
      title="Payment providers"
    >
      <VCardText>
        <p>
          Providers that enable you to accept payment methods at a rate set by the third-party. An additional fee will apply to new orders once you select a plan.
        </p>
        <VBtn
          variant="outlined"
          @click="isPaymentProvidersDialogVisible = !isPaymentProvidersDialogVisible"
        >
          Choose a provider
        </VBtn>
      </VCardText>
    </VCard>

    <!-- 👉 Supported Payment Methods -->
    <VCard
      title="Supported payment methods"
      subtitle="Payment methods that are available with one of Vuexy's approved payment providers."
      class="mb-6"
    >
      <VCardText>
        <h6 class="text-h6 mb-5">
          Default
        </h6>
        <div class="rounded bg-var-theme-background pa-5 mb-6">
          <div class="d-flex justify-space-between align-center mb-6">
            <VAvatar
              variant="elevated"
              color="#ffffff"
              rounded
              class="px-1"
            >
              <VImg
                :src="paypal"
                height="21"
                width="21"
              />
            </VAvatar>

            <VBtn variant="text">
              Activate PayPal
            </VBtn>
          </div>

          <VDivider />

          <div class="d-flex justify-space-between flex-wrap mt-6 gap-x-4">
            <div>
              <div class="text-body-2 mb-2">
                Provider
              </div>
              <h6 class="text-h6">
                PayPal
              </h6>
            </div>

            <div>
              <div class="text-body-2 mb-2">
                Status
              </div>
              <VChip
                color="warning"
                size="small"
              >
                Inactive
              </VChip>
            </div>

            <div>
              <div class="text-body-2 mb-2">
                Transaction Fee
              </div>
              <h6 class="text-h6">
                2.99%
              </h6>
            </div>
          </div>
        </div>
        <VBtn
          variant="outlined"
          @click="isAddPaymentMethodsDialogVisible = !isAddPaymentMethodsDialogVisible"
        >
          Add Payment Method
        </VBtn>
      </VCardText>
    </VCard>

    <!-- 👉 Manual Payment Methods -->
    <VCard
      title="Manual payment methods"
      class="mb-6"
    >
      <VCardText>
        <p>Payments that are made outside your online store. When a customer selects a manual payment method such as cash on delivery, you'll need to approve their order before it can be fulfilled.</p>

        <VBtnGroup
          v-show="$vuetify.display.smAndUp"
          divided
          density="compact"
          variant="outlined"
          color="primary"
        >
          <VBtn>
            Add Manual Payment Methods
          </VBtn>
          <VBtn>
            <VIcon
              size="20"
              icon="ri-arrow-down-s-line"
            />
            <VMenu activator="parent">
              <VList>
                <VListItem
                  v-for="(item, index) in ['Create custom payment method', 'Bank Deposit', 'Money Order', 'Cash on Delivery(COD)']"
                  :key="index"
                  :value="index"
                >
                  <VListItemTitle>{{ item }}</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </VBtnGroup>

        <VBtn
          variant="outlined"
          class="d-block d-sm-none"
        >
          Add Manual Payment Methods
          <VMenu activator="parent">
            <VList>
              <VListItem
                v-for="(item, index) in ['Create custom payment method', 'Bank Deposit', 'Money Order', 'Cash on Delivery(COD)']"
                :key="index"
                :value="index"
              >
                <VListItemTitle>{{ item }}</VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </VBtn>
      </VCardText>
    </VCard>

    <div class="d-flex justify-end gap-x-4">
      <VBtn
        color="secondary"
        variant="outlined"
      >
        Discard
      </VBtn>
      <VBtn>Save Changes</VBtn>
    </div>
  </div>

  <AddPaymentMethodDialog v-model:is-dialog-visible="isAddPaymentMethodsDialogVisible" />
  <PaymentProvidersDialog v-model:is-dialog-visible="isPaymentProvidersDialogVisible" />
</template>
