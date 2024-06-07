<script setup>
import tree1 from '@images/misc/pricing-tree-1.png'
import tree2 from '@images/misc/pricing-tree-2.png'
import tree3 from '@images/misc/pricing-tree-3.png'

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  cols: {
    type: [
      Number,
      String,
    ],
    required: false,
  },
  sm: {
    type: [
      Number,
      String,
    ],
    required: false,
  },
  md: {
    type: [
      String,
      Number,
    ],
    required: false,
  },
  lg: {
    type: [
      String,
      Number,
    ],
    required: false,
  },
  xl: {
    type: [
      String,
      Number,
    ],
    required: false,
  },
})

const annualMonthlyPlanPriceToggler = ref(true)

const pricingPlans = [
  {
    name: 'Basic',
    tagLine: 'A simple start for everyone',
    logo: tree1,
    monthlyPrice: 0,
    yearlyPrice: 0,
    isPopular: false,
    current: true,
    features: [
      '100 responses a month',
      'Unlimited forms and surveys',
      'Unlimited fields',
      'Basic form creation tools',
      'Up to 2 subdomains',
    ],
  },
  {
    name: 'Standard',
    tagLine: 'For small to medium businesses',
    logo: tree2,
    monthlyPrice: 42,
    yearlyPrice: 460,
    isPopular: true,
    current: false,
    features: [
      'Unlimited responses',
      'Unlimited forms and surveys',
      'Instagram profile page',
      'Google Docs integration',
      'Custom “Thank you” page',
    ],
  },
  {
    name: 'Enterprise',
    tagLine: 'Solution for big organizations',
    logo: tree3,
    monthlyPrice: 84,
    yearlyPrice: 690,
    isPopular: false,
    current: false,
    features: [
      'PayPal payments',
      'Logic Jumps',
      'File upload with 5GB storage',
      'Custom domain support',
      'Stripe integration',
    ],
  },
]
</script>

<template>
  <!-- 👉 Title and subtitle -->
  <div class="text-center mb-6">
    <slot name="heading">
      <h3 class="text-h3 pricing-title pb-2">
        {{ props.title ? props.title : 'Pricing Plans' }}
      </h3>
    </slot>
    <slot name="subtitle">
      <p class="mb-0">
        All plans include 40+ advanced tools and features to boost your product.
        <br>
        Choose the best plan to fit your needs.
      </p>
    </slot>
  </div>

  <!-- 👉 Annual and monthly price toggler -->
  <div class="d-flex align-center justify-center mx-auto pt-sm-9 pb-sm-8 py-4">
    <VLabel
      for="pricing-plan-toggle"
      class="me-2 font-weight-medium"
    >
      Monthly
    </VLabel>

    <div class="position-relative">
      <div class="pricing-save-chip position-absolute d-sm-block d-none">
        <VIcon
          start
          icon="ri-corner-left-down-fill"
          size="24"
          class="text-disabled flip-in-rtl mt-1"
        />
        <VChip
          size="small"
          color="primary"
          class="mt-n2"
        >
          Save up to 10%
        </VChip>
      </div>

      <VSwitch
        id="pricing-plan-toggle"
        v-model="annualMonthlyPlanPriceToggler"
      >
        <template #label>
          <div class="text-body-1 font-weight-medium">
            Annually
          </div>
        </template>
      </VSwitch>
    </div>
  </div>

  <!-- SECTION pricing plans -->
  <VRow>
    <VCol
      v-for="plan in pricingPlans"
      :key="plan.logo"
      v-bind="props"
    >
      <!-- 👉  Card -->
      <VCard
        flat
        border
        :class="plan.isPopular ? 'border-primary border-opacity-100' : ''"
      >
        <VCardText
          class="text-end pt-4"
          style="block-size: 3.75rem;"
        >
          <!-- 👉 Popular -->
          <VChip
            v-show="plan.isPopular"
            color="primary"
            size="small"
          >
            Popular
          </VChip>
        </VCardText>

        <!-- 👉 Plan logo -->
        <VCardText class="text-center">
          <VImg
            :height="120"
            :src="plan.logo"
            class="mx-auto mb-5"
          />

          <!-- 👉 Plan name -->
          <h4 class="text-h4 mb-1">
            {{ plan.name }}
          </h4>
          <p class="mb-0 text-body-1">
            {{ plan.tagLine }}
          </p>
        </VCardText>

        <!-- 👉 Plan price  -->
        <VCardText class="position-relative text-center">
          <div>
            <div class="d-flex justify-center align-center">
              <span class="text-body-1 font-weight-medium align-self-start">$</span>
              <h1 class="text-h1 font-weight-medium text-primary">
                {{ annualMonthlyPlanPriceToggler ? Math.floor(Number(plan.yearlyPrice) / 12) : plan.monthlyPrice }}
              </h1>
              <span class="text-body-1 font-weight-medium align-self-end">/month</span>
            </div>

            <!-- 👉 Annual Price -->
            <div
              v-show="annualMonthlyPlanPriceToggler"
              class="text-caption"
            >
              {{ plan.yearlyPrice === 0 ? 'free' : `USD ${plan.yearlyPrice}/Year` }}
            </div>
          </div>
        </VCardText>

        <!-- 👉 Plan features -->
        <VCardText class="pt-2">
          <VList class="card-list pb-5">
            <VListItem
              v-for="feature in plan.features"
              :key="feature"
            >
              <template #prepend />

              <VListItemTitle class="text-body-1 d-flex align-center">
                <VIcon
                  :size="14"
                  icon="ri-circle-line"
                  class="me-2"
                />
                <div class="text-truncate">
                  {{ feature }}
                </div>
              </VListItemTitle>
            </VListItem>
          </VList>

          <!-- 👉 Plan actions -->
          <VBtn
            :active="false"
            block
            :color="plan.current ? 'success' : 'primary'"
            :variant="plan.isPopular ? 'elevated' : 'outlined'"
            :to="{ name: 'front-pages-payment' }"
          >
            {{ plan.yearlyPrice === 0 ? 'Your Current Plan' : 'Upgrade' }}
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
  <!-- !SECTION  -->
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1rem;
}

.pricing-save-chip {
  display: flex;
  inset-block-start: -2.625rem;
  inset-inline-end: -6.5rem;
}
</style>
