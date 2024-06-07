<script setup>
import paperImg from '@images/svg/paper.svg?raw'
import rocketImg from '@images/svg/rocket.svg?raw'
import userInfoImg from '@images/svg/user-info.svg?raw'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

const rocketIcon = h('div', {
  innerHTML: rocketImg,
  style: 'font-size: 2.625rem; color: rgb(var(--v-theme-primary))',
})

const userInfoIcon = h('div', {
  innerHTML: paperImg,
  style: 'font-size: 2.625rem; color: rgb(var(--v-theme-primary))',
})

const paperIcon = h('div', {
  innerHTML: userInfoImg,
  style: 'font-size: 2.625rem; color: rgb(var(--v-theme-primary))',
})

const widgetData = [
  {
    title: 'Total Earning',
    value: '$24,983',
    icon: 'ri-money-dollar-circle-line',
    color: 'primary',
  },
  {
    title: 'Unpaid Earning',
    value: '$8,647',
    icon: 'ri-gift-line',
    color: 'success',
  },
  {
    title: 'Signups',
    value: '2,367',
    icon: 'ri-group-line',
    color: 'error',
  },
  {
    title: 'Conversion Rate',
    value: '4.5%',
    icon: 'ri-refresh-line',
    color: 'info',
  },
]

const stepsData = [
  {
    icon: rocketIcon,
    desc: 'Create & validate your referral link and get',
    value: '$50',
  },
  {
    icon: paperIcon,
    desc: 'For every new signup you get',
    value: '10%',
  },
  {
    icon: userInfoIcon,
    desc: 'Get other friends to generate link and get',
    value: '$100',
  },
]

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Data Table Headers
const headers = [
  {
    title: 'Users',
    key: 'users',
  },
  {
    title: 'Referred ID',
    key: 'referred-id',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Value',
    key: 'value',
  },
  {
    title: 'Earnings',
    key: 'earning',
  },
]

const updateOptions = options => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const { data: referralData } = await useApi(createUrl('/apps/ecommerce/referrals', {
  query: {
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))

const referrals = computed(() => referralData.value.referrals)
const totalReferrals = computed(() => referralData.value.total)

const resolveStatus = status => {
  if (status === 'Rejected')
    return {
      text: 'Rejected',
      color: 'error',
    }
  if (status === 'Unpaid')
    return {
      text: 'Unpaid',
      color: 'warning',
    }
  if (status === 'Paid')
    return {
      text: 'Paid',
      color: 'success',
    }
}
</script>

<template>
  <div>
    <!-- 👉 Header -->
    <VRow class="match-height">
      <!-- 👉 Widgets -->
      <VCol
        v-for="(data, index) in widgetData"
        :key="index"
        cols="12"
        md="3"
        sm="6"
      >
        <VCard>
          <VCardText>
            <div class="d-flex align-center justify-space-between">
              <div class="d-flex flex-column">
                <span class="text-h5 mb-1">{{ data.value }}</span>
                <span class="text-sm">{{ data.title }}</span>
              </div>
              <VAvatar
                :icon="data.icon"
                variant="tonal"
                :color="data.color"
              />
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- 👉 Icon Steps -->
      <VCol
        cols="12"
        md="8"
      >
        <VCard>
          <VCardItem>
            <VCardTitle> How to use</VCardTitle>
            <VCardSubtitle>
              Integrate your referral code in 3 easy steps.
            </VCardSubtitle>
          </VCardItem>

          <VCardText>
            <div class="d-flex gap-6 justify-space-between align-center flex-sm-row flex-column">
              <div
                v-for="(step, index) in stepsData"
                :key="index"
                class="d-flex flex-column align-center gap-y-2"
                style="max-inline-size: 185px;"
              >
                <div class="icon-container">
                  <VNodeRenderer :nodes="step.icon" />
                </div>
                <span class="text-body-1 text-wrap text-center">
                  {{ step.desc }}
                </span>
                <span class="text-primary text-h6">{{ step.value }}</span>
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- 👉 Invite -->
      <VCol
        cols="12"
        md="4"
      >
        <VCard>
          <VCardText>
            <div class="mb-11">
              <h5 class="text-h5 mb-5">
                Invite your friends
              </h5>
              <div class="d-flex align-center flex-wrap gap-4">
                <VTextField
                  placeholder="Email Addresss"
                  density="compact"
                />
                <VBtn>
                  <VIcon
                    start
                    icon="ri-check-line"
                  />
                  Submit
                </VBtn>
              </div>
            </div>

            <div>
              <h5 class="text-h5 mb-5">
                Share the referral link
              </h5>
              <div class="d-flex align-center flex-wrap gap-4">
                <VTextField
                  placeholder="themeselection.com/?ref=6478"
                  density="compact"
                />
                <div class="d-flex gap-x-2">
                  <VBtn
                    icon
                    class="rounded"
                    color="#3B5998"
                  >
                    <VIcon
                      color="white"
                      icon="ri-facebook-circle-line"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    class="rounded"
                    color="#55ACEE"
                  >
                    <VIcon
                      color="white"
                      icon="ri-twitter-line"
                    />
                  </VBtn>
                </div>
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- 👉 Referral Table -->

      <VCol cols="12">
        <VCard>
          <VCardText>
            <div class="d-flex justify-space-between align-center flex-wrap gap-4">
              <h5 class="text-h5">
                Referred Users
              </h5>
              <VBtn prepend-icon="ri-upload-2-line">
                Export
              </VBtn>
            </div>
          </VCardText>

          <VDataTableServer
            v-model:items-per-page="itemsPerPage"
            v-model:page="page"
            :items="referrals"
            :headers="headers"
            :items-length="totalReferrals"
            show-select
            class="text-high-emphasis"
            @update:options="updateOptions"
          >
            <template #item.users="{ item }">
              <div class="d-flex align-center gap-x-4">
                <VAvatar
                  :image="item.avatar"
                  :size="34"
                />
                <div>
                  <h6 class="text-h6">
                    <NuxtLink
                      class="text-high-emphasis"
                      :to="{ name: 'apps-ecommerce-customer-details-id', params: { id: 478426 } }"
                    >
                      {{ item.user }}
                    </NuxtLink>
                  </h6>

                  <div class="text-sm text-medium-emphasis">
                    {{ item.email }}
                  </div>
                </div>
              </div>
            </template>

            <template #item.referred-id="{ item }">
              {{ item.referredId }}
            </template>

            <template #item.status="{ item }">
              <VChip
                v-bind="resolveStatus(item.status)"
                size="small"
              />
            </template>

            <!-- Pagination -->
            <template #bottom>
              <VDivider />

              <div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1">
                <div class="d-flex align-center gap-x-2 text-medium-emphasis text-base">
                  Rows Per Page:
                  <VSelect
                    v-model="itemsPerPage"
                    class="per-page-select"
                    variant="plain"
                    :items="[10, 20, 25, 50, 100]"
                  />
                </div>

                <p class="d-flex align-center text-base text-high-emphasis me-2 mb-0">
                  {{ paginationMeta({ page, itemsPerPage }, totalReferrals) }}
                </p>

                <div class="d-flex gap-x-2 align-center me-2">
                  <VBtn
                    class="flip-in-rtl"
                    icon="ri-arrow-left-s-line"
                    variant="text"
                    density="comfortable"
                    color="high-emphasis"
                    :disabled="page <= 1"
                    @click="page <= 1 ? page = 1 : page--"
                  />

                  <VBtn
                    class="flip-in-rtl"
                    icon="ri-arrow-right-s-line"
                    density="comfortable"
                    variant="text"
                    color="high-emphasis"
                    :disabled="page >= Math.ceil(totalReferrals / itemsPerPage)"
                    @click="page >= Math.ceil(totalReferrals / itemsPerPage) ? page = Math.ceil(totalReferrals / itemsPerPage) : page++ "
                  />
                </div>
              </div>
            </template>
          </VDataTableServer>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgb(var(--v-theme-primary));
  border-radius: 50%;
  block-size: 70px;
  inline-size: 70px;
}

.icon {
  color: #000;
  font-size: 42px;
}
</style>
