<script setup>
const props = defineProps({
  currentStep: {
    type: Number,
    required: false,
  },
  checkoutData: {
    type: null,
    required: true,
  },
})

const emit = defineEmits([
  'update:currentStep',
  'update:checkout-data',
])

const prop = __props
const checkoutPaymentDataLocal = ref(prop.checkoutData)
const selectedPaymentMethod = ref('card')

const cardFormData = ref({
  cardNumber: null,
  cardName: '',
  cardExpiry: '',
  cardCvv: null,
  isCardSave: true,
})

const giftCardFormData = ref({
  giftCardNumber: null,
  giftCardPin: null,
})

const selectedDeliveryAddress = computed(() => {
  return checkoutPaymentDataLocal.value.addresses.filter(address => {
    return address.value === checkoutPaymentDataLocal.value.deliveryAddress
  })
})

const updateCartData = () => {
  emit('update:checkout-data', checkoutPaymentDataLocal.value)
}

const nextStep = () => {
  updateCartData()
  emit('update:currentStep', prop.currentStep ? prop.currentStep + 1 : 1)
}

watch(() => prop.currentStep, updateCartData)
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="8"
    >
      <!-- 👉 Offers alert -->
      <VAlert
        color="success"
        variant="tonal"
        icon="ri-percent-line"
        closable
        class="mb-6"
      >
        <VAlertTitle class="text-success mb-1">
          Available Offers
        </VAlertTitle>

        <p class="mb-0">
          - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards
        </p>
        <p class="mb-0">
          - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA
        </p>
      </VAlert>

      <VTabs
        v-model="selectedPaymentMethod"
        class="v-tabs-pill"
      >
        <VTab value="card">
          Card
        </VTab>
        <VTab value="cash-on-delivery">
          Cash on Delivery
        </VTab>
        <VTab value="gift-card">
          Gift Card
        </VTab>
      </VTabs>

      <VWindow
        v-model="selectedPaymentMethod"
        class="pt-6"
        style="max-inline-size: 600px;"
      >
        <VWindowItem value="card">
          <VForm>
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="cardFormData.cardNumber"
                  type="number"
                  label="Card Number"
                  placeholder="1234 5678 9012 3456"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cardFormData.cardName"
                  label="Name"
                  placeholder="John Doe"
                />
              </VCol>

              <VCol
                cols="6"
                md="3"
              >
                <VTextField
                  v-model="cardFormData.cardExpiry"
                  label="Expiry"
                  placeholder="MM/YY"
                />
              </VCol>

              <VCol
                cols="6"
                md="3"
              >
                <VTextField
                  v-model="cardFormData.cardCvv"
                  label="CVV"
                  placeholder="123"
                  type="number"
                >
                  <template #append-inner>
                    <VTooltip
                      text="Card Verification Value"
                      location="bottom"
                    >
                      <template #activator="{ props: tooltipProps }">
                        <VIcon
                          v-bind="tooltipProps"
                          size="20"
                          icon="ri-question-line"
                        />
                      </template>
                    </VTooltip>
                  </template>
                </VTextField>
              </VCol>

              <VCol cols="12">
                <VSwitch
                  v-model="cardFormData.isCardSave"
                  label="Save Card for future billing?"
                />

                <div class="mt-4">
                  <VBtn
                    class="me-4"
                    @click="nextStep"
                  >
                    Save Changes
                  </VBtn>
                  <VBtn
                    variant="outlined"
                    color="secondary"
                  >
                    Reset
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="cash-on-delivery">
          <p class="text-base text-high-emphasis my-6">
            Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance.
          </p>

          <VBtn @click="nextStep">
            Pay on delivery
          </VBtn>
        </VWindowItem>

        <VWindowItem value="gift-card">
          <h6 class="text-base font-weight-medium my-6">
            Enter Gift Card Details
          </h6>
          <VForm>
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="giftCardFormData.giftCardNumber"
                  label="Gift Card Number"
                  placeholder="1234 5678 9012 3456"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="giftCardFormData.giftCardPin"
                  label="Gift Card Pin"
                  placeholder="1234"
                />
              </VCol>

              <VCol cols="12">
                <VBtn @click="nextStep">
                  Redeem Gift Card
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VCard
        flat
        variant="outlined"
      >
        <VCardText>
          <h6 class="text-h6 mb-4">
            Price Details
          </h6>

          <div class="d-flex justify-space-between text-sm mb-2">
            <div class="text-body-1 text-high-emphasis">
              Order Total
            </div>
            <div class="text-body-1">
              ${{ checkoutPaymentDataLocal.orderAmount }}.00
            </div>
          </div>

          <div class="d-flex justify-space-between text-sm">
            <div class="text-high-emphasis text-body-1">
              Delivery Charges
            </div>
            <div
              v-if="checkoutPaymentDataLocal.deliverySpeed === 'free'"
              class="d-flex align-center"
            >
              <div class="text-body-1 text-disabled me-2">
                $5.00
              </div>
              <VChip
                color="success"
                size="small"
              >
                FREE
              </VChip>
            </div>
            <div v-else>
              <span>${{ checkoutPaymentDataLocal.deliveryCharges }}</span>
            </div>
          </div>
        </VCardText>

        <VDivider />

        <VCardText>
          <div class="d-flex justify-space-between text-base mb-2">
            <div class="text-high-emphasis font-weight-medium">
              Total
            </div>
            <h6 class="text-h6 text-medium-emphasis">
              ${{ checkoutPaymentDataLocal.orderAmount + checkoutPaymentDataLocal.deliveryCharges }}.00
            </h6>
          </div>

          <div class="d-flex justify-space-between text-base mb-4">
            <h6 class="text-h6">
              Deliver to:
            </h6>
            <VChip
              color="primary"
              size="small"
              class="text-capitalize"
            >
              {{ checkoutPaymentDataLocal.deliveryAddress }}
            </VChip>
          </div>

          <template
            v-for="item in selectedDeliveryAddress"
            :key="item.value"
          >
            <h6 class="text-h6">
              {{ item.title }}
            </h6>
            <p class="text-body-1 mb-1">
              {{ item.desc }}
            </p>
            <p class="text-base mb-4">
              Mobile : {{ item.subtitle }}
            </p>
          </template>

          <a
            href="javascript:void(0)"
            class="font-weight-medium text-base d-inline-block"
          >Change address</a>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
