<script setup>
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import poseFs9 from '@images/pages/pose-fs-9.png'

definePageMeta({
  layout: 'blank', 
})

const features = [
  {
    feature: '14-days free trial',
    starter: true,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'No user limit',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Product Support',
    starter: false,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Email Support',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: true,
      enterprise: false,
    },
  },
  {
    feature: 'Integrations',
    starter: false,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Removal of Front branding',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: true,
      enterprise: false,
    },
  },
  {
    feature: 'Active maintenance & support',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Data storage for 365 days',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
]

const faqs = [
  {
    question: 'What counts towards the 100 responses limit?',
    answer: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
  },
  {
    question: 'How do you process payments?',
    answer: 'We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure.',
  },
  {
    question: 'Do you have a money-back guarantee?',
    answer: '2Checkout accepts all types of credit and debit cards.',
  },
  {
    question: 'I have more questions. Where can I get help?',
    answer: 'Yes. You may request a refund within 30 days of your purchase without any additional explanations.',
  },
]
</script>

<template>
  <div class="pricing-page">
    <Navbar />

    <VCard class="pricing-card">
      <!-- 👉 App Pricing components -->
      <VContainer>
        <div class="pricing-section">
          <AppPricing
            md="4"
            cols="12"
          >
            <template #heading>
              <h2 class="text-h2 pb-2">
                Pricing Plans
              </h2>
            </template>
          </AppPricing>
        </div>
      </VContainer>

      <!-- 👉 Free trial Banner -->
      <div class="page-pricing-free-trial-banner-bg">
        <VContainer>
          <div class="d-flex align-center flex-md-row flex-column position-relative">
            <div class="text-center text-md-start py-10 px-10 px-sm-0">
              <h4 class="text-h4 text-primary mb-2">
                Still not convinced? Start with a 14-day FREE trial!
              </h4>
              <p class="text-body-1">
                You will get full access to all the features for 14 days.
              </p>
              <VBtn
                class="mt-4"
                :to="{ name: 'front-pages-payment' }"
              >
                Start-14-day FREE trial
              </VBtn>
            </div>
            <div class="free-trial-illustrator">
              <VImg
                :src="poseFs9"
                :width="250"
              />
            </div>
          </div>
        </VContainer>
      </div>

      <!-- 👉 Plans -->
      <VContainer>
        <div class="pricing-section">
          <div class="text-center pb-6">
            <h4 class="text-h4 mb-2">
              Pick a plan that works best for you
            </h4>
            <p class="text-body-1 mb-0">
              Stay cool, we have a 48-hour money back guarantee!
            </p>
          </div>
          <!-- 👉 Features & Tables -->
          <VTable class="text-no-wrap border rounded pricing-table">
            <!-- 👉 Table head -->
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-4"
                >
                  TIME
                </th>
                <th
                  v-for="{ plan, price } in [
                    { plan: 'STARTER', price: 'Free' },
                    { plan: 'PRO', price: '$7.5/Month' },
                    { plan: 'ENTERPRISE', price: '$16/Month' },
                  ]"
                  :key="plan"
                  scope="col"
                  class="text-center py-4"
                >
                  <div class="position-relative">
                    {{ plan }}
                    <VAvatar
                      v-if="plan === 'PRO'"
                      rounded="lg"
                      color="primary"
                      size="18"
                      class="position-absolute ms-2"
                      style="inset-block-start: -0.25rem;"
                    >
                      <VIcon
                        icon="ri-star-s-fill"
                        size="14"
                      />
                    </VAvatar>
                  </div>
                  <div class="text-body-2">
                    {{ price }}
                  </div>
                </th>
              </tr>
            </thead>
            <!-- 👉 Table Body -->
            <tbody>
              <tr
                v-for="feature in features"
                :key="feature.feature"
              >
                <td class="text-high-emphasis">
                  {{ feature.feature }}
                </td>
                <td class="text-center">
                  <VIcon
                    v-if="!feature.addOnAvailable.starter"
                    :color="feature.starter ? 'primary' : ''"
                    size="20"
                    :icon="feature.starter ? 'ri-checkbox-circle-line' : 'ri-close-circle-line'"
                  />
                  <VChip
                    v-if="feature.addOnAvailable.starter"
                    color="primary"
                    size="small"
                  >
                    Add-On-Available
                  </VChip>
                </td>
                <td class="text-center">
                  <VIcon
                    v-if="!feature.addOnAvailable.pro"
                    :color="feature.pro ? 'primary' : ''"
                    size="20"
                    :icon="feature.pro ? 'ri-checkbox-circle-line' : 'ri-close-circle-line'"
                  />
                  <VChip
                    v-if="feature.addOnAvailable.pro"
                    color="primary"
                    size="small"
                  >
                    Add-On-Available
                  </VChip>
                </td>
                <td class="text-center">
                  <VIcon
                    v-if="!feature.addOnAvailable.enterprise"
                    :color="feature.enterprise ? 'primary' : ''"
                    size="20"
                    :icon="feature.enterprise ? 'ri-checkbox-circle-line' : 'ri-close-circle-line'"
                  />
                  <VChip
                    v-if="feature.addOnAvailable.enterprise"
                    color="primary"
                    size="small"
                  >
                    Add-On-Available
                  </VChip>
                </td>
              </tr>
            </tbody>
            <!-- 👉 Table footer -->
            <tfoot>
              <tr>
                <td class="py-4" />
                <td class="text-center py-4">
                  <VBtn
                    variant="outlined"
                    :to="{ name: 'front-pages-payment' }"
                  >
                    Choose Plan
                  </VBtn>
                </td>
                <td class="text-center py-4">
                  <VBtn :to="{ name: 'front-pages-payment' }">
                    Choose Plan
                  </VBtn>
                </td>
                <td class="text-center py-4">
                  <VBtn
                    variant="outlined"
                    :to="{ name: 'front-pages-payment' }"
                  >
                    Choose Plan
                  </VBtn>
                </td>
              </tr>
            </tfoot>
          </VTable>
        </div>
      </VContainer>

      <!-- 👉 FAQ -->
      <div class="bg-background">
        <VContainer>
          <div class="pricing-section">
            <div class="text-center">
              <h4 class="text-h4 mb-2">
                FAQ's
              </h4>
              <p class="text-body-1 mb-0">
                Let us help answer the most common questions.
              </p>
            </div>
            <div class="pt-6">
              <VExpansionPanels>
                <VExpansionPanel
                  v-for="faq in faqs"
                  :key="faq.question"
                  :title="faq.question"
                  :text="faq.answer"
                />
              </VExpansionPanels>
            </div>
          </div>
        </VContainer>
      </div>
      <Footer />
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.pricing-section{
  padding-block: 5.25rem !important;
  padding-inline: 0 !important;
}

.page-pricing-free-trial-banner-bg {
  /* stylelint-disable-next-line color-function-notation */
  background-color: rgba(var(--v-theme-primary), 0.16);
}

.pricing-card {
  padding-block-start: 4rem !important;
}

.pricing-table-title{
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.625rem;
}

@media screen and (min-width: 960px) {
  .free-trial-illustrator {
    position: absolute;
    inset-block-end: -1rem !important;
    inset-inline-end: 5%;
  }
}

@media screen and (max-width: 959px) {
  .free-trial-illustrator {
    position: relative;
    inset-block-end: -1rem !important;
  }
}
</style>

<style lang="scss">
.pricing-table{
  --v-table-header-color: rgb(var(--v-theme-surface));

  &.v-table{
    .v-table__wrapper{
      table{
        thead {
          tr{
            th{
              border-block-end: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity)) !important;
            }
          }
        }

        tbody{
          tr:nth-child(even){
            background: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
          }
        }
      }
    }
  }
}

.pricing-page{
  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}
</style>
