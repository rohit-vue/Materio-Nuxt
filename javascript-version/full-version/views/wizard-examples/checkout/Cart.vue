<script setup>
import emptyCartImg from '@images/pages/empty-cart.png'

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

const checkoutCartDataLocal = ref(props.checkoutData)

const removeItem = item => {
  checkoutCartDataLocal.value.cartItems = checkoutCartDataLocal.value.cartItems.filter(i => i.id !== item.id)
}

const totalCost = computed(() => {
  return checkoutCartDataLocal.value.orderAmount = checkoutCartDataLocal.value.cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
})

const updateCartData = () => {
  emit('update:checkout-data', checkoutCartDataLocal.value)
}

const nextStep = () => {
  updateCartData()
  emit('update:currentStep', props.currentStep ? props.currentStep + 1 : 1)
}

watch(() => props.currentStep, updateCartData)
</script>

<template>
  <VRow v-if="checkoutCartDataLocal">
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
      >
        <VAlertTitle class="text-success mb-1">
          Available Offers
        </VAlertTitle>

        <p class="mb-0">
          - 0% Instant Discount on Bank of America Corp Bank Debit and Credit cards
        </p>
        <p class="mb-0">
          - 50% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA
        </p>
      </VAlert>

      <h5 class="text-h5 my-4">
        My Shopping Bag ({{ checkoutCartDataLocal.cartItems.length }} Items)
      </h5>

      <!-- 👉 Cart items -->
      <div
        v-if="checkoutCartDataLocal.cartItems.length"
        class="border rounded"
      >
        <template
          v-for="(item, index) in checkoutCartDataLocal.cartItems"
          :key="item.name"
        >
          <div
            class="d-flex align-center gap-3 pa-5 position-relative flex-column flex-sm-row"
            :class="index ? 'border-t' : ''"
          >
            <IconBtn
              size="x-small"
              class="checkout-item-remove-btn"
              color="disabled"
              @click="removeItem(item)"
            >
              <VIcon
                size="18"
                icon="ri-close-line"
              />
            </IconBtn>

            <div>
              <VImg
                width="140"
                :src="item.image"
              />
            </div>

            <div
              class="d-flex w-100"
              :class="(($vuetify.display.width <= 1280 && $vuetify.display.width >= 960) || $vuetify.display.width <= 700) ? 'flex-column' : 'flex-row'"
            >
              <div>
                <h6 class="text-h6 mb-2">
                  {{ item.name }}
                </h6>
                <div class="d-flex align-center text-no-wrap gap-2 text-base">
                  <span class="text-disabled">Sold by:</span>
                  <span class="text-primary">{{ item.seller }}</span>
                  <VChip
                    :color="item.inStock ? 'success' : 'error'"
                    size="small"
                  >
                    {{ item.inStock ? 'In Stock' : 'Out of Stock' }}
                  </VChip>
                </div>

                <div class="my-2">
                  <VRating
                    :model-value="item.rating"
                    size="24"
                  />
                </div>

                <VTextField
                  v-model="item.quantity"
                  type="number"
                  density="compact"
                  style="inline-size: 7.5rem;"
                />
              </div>

              <VSpacer />

              <div
                class="d-flex flex-column mt-5"
                :class="(($vuetify.display.width <= 1280 && $vuetify.display.width >= 960) || $vuetify.display.width <= 700) ? 'text-start' : 'text-end'"
              >
                <p class="text-base">
                  <span class="text-primary">${{ item.price }}</span>
                  <span>/</span>
                  <span class="text-decoration-line-through">${{ item.discountPrice }}</span>
                </p>

                <div>
                  <VBtn
                    size="small"
                    variant="outlined"
                  >
                    move to wishlist
                  </VBtn>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- 👉 Empty Cart -->
      <div v-else>
        <VImg :src="emptyCartImg" />
      </div>

      <!-- 👉 Add more from wishlist -->
      <div
        class="d-flex align-center justify-space-between border rounded px-5 text-base mt-4"
        style="padding-block:7px"
      >
        <a
          href="javascript:void(0)"
          class="font-weight-medium"
        >Add more products from wishlist</a>
        <VIcon
          icon="ri-arrow-right-line"
          class="flip-in-rtl"
          size="16"
          color="primary"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VCard
        flat
        variant="outlined"
      >
        <!-- 👉 payment offer -->
        <VCardText>
          <h6 class="text-h6 mb-4">
            Offer
          </h6>

          <div class="d-flex align-center gap-4">
            <VTextField
              v-model="checkoutCartDataLocal.promoCode"
              placeholder="Enter Promo Code"
              density="compact"
            />

            <VBtn
              variant="outlined"
              @click="updateCartData"
            >
              Apply
            </VBtn>
          </div>

          <!-- 👉 Gift wrap banner -->
          <div class="bg-var-theme-background rounded pa-5 mt-4">
            <h6 class="text-h6">
              Buying gift for a loved one?
            </h6>

            <p class="my-2 text-body-1">
              Gift wrap and personalized message on card, Only for $2.
            </p>

            <a
              href="javascript:void(0)"
              class="font-weight-medium d-inline-block"
            >Add a gift wrap</a>
          </div>
        </VCardText>

        <VDivider />

        <!-- 👉 Price details -->
        <VCardText>
          <h6 class="text-h6 mb-4">
            Price Details
          </h6>

          <div class="text-sm text-high-emphasis">
            <div class="d-flex justify-space-between mb-2">
              <div class="text-body-1 text-high-emphasis">
                Bag Total
              </div>
              <div class="text-body-1">
                ${{ totalCost }}.00
              </div>
            </div>

            <div class="d-flex justify-space-between mb-2">
              <div class="text-body-1 text-high-emphasis">
                Coupon Discount
              </div>
              <a
                href="javascript:void(0)"
                class="text-base d-inline-block"
              >Apply Coupon</a>
            </div>

            <div class="d-flex justify-space-between mb-2">
              <div class="text-body-1 text-high-emphasis">
                Order Total
              </div>
              <div class="text-body-1">
                ${{ totalCost }}.00
              </div>
            </div>

            <div class="d-flex justify-space-between">
              <div class="text-body-1 text-high-emphasis">
                Delivery Charges
              </div>

              <div class="d-flex gap-x-2">
                <div class="text-decoration-line-through text-body-1 text-disabled">
                  $5.00
                </div>
                <VChip
                  size="small"
                  color="success"
                >
                  Free
                </VChip>
              </div>
            </div>
          </div>
        </VCardText>

        <VDivider />

        <VCardText class="d-flex justify-space-between py-4">
          <h6 class="text-h6">
            Total
          </h6>
          <h6 class="text-h6">
            ${{ totalCost }}.00
          </h6>
        </VCardText>
      </VCard>

      <VBtn
        block
        class="mt-4"
        @click="nextStep"
      >
        Place Order
      </VBtn>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.checkout-item-remove-btn {
  position: absolute;
  inset-block-start: 10px;
  inset-inline-end: 10px;
}
</style>
