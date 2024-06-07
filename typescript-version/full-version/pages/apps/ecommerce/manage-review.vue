<script setup lang="ts">
import type { Review } from '@db/apps/ecommerce/types'

const selectedStatus = ref('All')
const searchQuery = ref('')

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Fetch Reviews
const { data: ReviewData, execute: fetchReviews } = await useApi<any>(createUrl('/apps/ecommerce/reviews', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))

const reviews = computed((): Review[] => ReviewData.value.reviews)
const totalReviews = computed(() => ReviewData.value.total)

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// Delete Review
const deleteReview = async (id: number) => {
  await $api(`/apps/ecommerce/reviews/${id}`, {
    method: 'DELETE',
  })

  fetchReviews()
}

const reviewCardData = [
  { rating: 5, value: 124 },
  { rating: 4, value: 40 },
  { rating: 3, value: 12 },
  { rating: 2, value: 7 },
  { rating: 1, value: 2 },
]

// Data table Headers
const headers = [
  { title: 'Product', key: 'product' },
  { title: 'Reviewer', key: 'reviewer' },
  { title: 'Review', key: 'review', sortable: false },
  { title: 'Date', key: 'date' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

// Chart Configs
const labelColor = 'rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))'

const reviewStatChartSeries = [
  {
    data: [20, 40, 60, 80, 100, 80, 60],
  },
]

const reviewStatChartConfig = {
  chart: {
    height: 160,
    width: 190,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    padding: {
      top: -25,
      bottom: -12,
    },
  },
  colors: [
    'rgba(var(--v-theme-success), var(--v-activated-opacity))',
    'rgba(var(--v-theme-success), var(--v-activated-opacity))',
    'rgba(var(--v-theme-success), var(--v-activated-opacity))',
    'rgba(var(--v-theme-success), var(--v-activated-opacity))',
    'rgba(var(--v-theme-success), 1)',
    'rgba(var(--v-theme-success), var(--v-activated-opacity))',
    'rgba(var(--v-theme-success), var(--v-activated-opacity))',
  ],
  plotOptions: {
    bar: {
      barHeight: '75%',
      columnWidth: '35%',
      borderRadius: 5,
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px',
      },
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  responsive: [{
    breakpoint: 0,
    options: {
      chart: {
        width: '100%',
      },
      plotOptions: {
        bar: {
          columnWidth: '40%',
        },
      },
    },
  }, {
    breakpoint: 1440,
    options: {
      chart: {
        height: 150,
        width: 190,
        toolbar: {
          show: !1,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '40%',
        },
      },
    },
  }, {
    breakpoint: 1400,
    options: {
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '40%',
        },
      },
    },
  }, {
    breakpoint: 1200,
    options: {
      chart: {
        height: 130,
        width: 190,
        toolbar: {
          show: !1,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '40%',
        },
      },
    },
  }, {
    breakpoint: 992,
    chart: {
      height: 150,
      width: 190,
      toolbar: {
        show: !1,
      },
    },
    options: {
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: '40%',
        },
      },
    },
  }, {
    breakpoint: 883,
    options: {
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: '40%',
        },
      },
    },
  }, {
    breakpoint: 768,
    options: {
      chart: {
        height: 150,
        width: 190,
        toolbar: {
          show: !1,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '40%',
        },
      },
    },
  }, {
    breakpoint: 576,
    options: {
      chart: {
        width: '100%',
        height: '200',
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '30% ',
        },
      },
    },
  }, {
    breakpoint: 420,
    options: {
      plotOptions: {
        chart: {
          width: '100%',
          height: '200',
          type: 'bar',
        },
        bar: {
          borderRadius: 3,
          columnWidth: '30%',
        },
      },
    },
  }],
}
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Total Review Card  -->
      <VCard>
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="6"
            >
              <div :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'">
                <div class="d-flex align-center gap-x-2">
                  <h4 class="text-h3 text-primary">
                    4.89
                  </h4>
                  <VIcon
                    icon="ri-star-smile-line"
                    color="primary"
                    size="32"
                  />
                </div>
                <h6 class="my-2 text-h6">
                  Total 187 reviews
                </h6>
                <div class="mb-2">
                  All reviews are from genuine customers
                </div>
                <VChip
                  color="primary"
                  size="small"
                  :class="$vuetify.display.smAndUp ? '' : 'mb-4'"
                >
                  +5 This week
                </VChip>
              </div>
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <div
                v-for="(item, index) in reviewCardData"
                :key="index"
                class="d-flex align-center gap-4 mb-3"
              >
                <div class="text-sm text-no-wrap">
                  {{ item.rating }} Star
                </div>
                <div class="w-100">
                  <VProgressLinear
                    color="primary"
                    height="8"
                    :model-value="(item.value / 185) * 100"
                    rounded
                  />
                </div>
                <div class="text-sm">
                  {{ item.value }}
                </div>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="5"
            >
              <div>
                <h5 class="text-h5 mb-2">
                  Reviews statistics
                </h5>
                <div class="mb-9">
                  <span class="me-2">12 New Reviews</span>
                  <VChip
                    color="success"
                    size="small"
                  >
                    +8.4%
                  </VChip>
                </div>

                <div>
                  <div class="text-high-emphasis text-body-1 mb-2">
                    <span class="text-success">87%</span> Positive Reviews
                  </div>
                  <div class="text-body-2">
                    Weekly Report
                  </div>
                </div>
              </div>
            </VCol>

            <VCol
              cols="12"
              sm="7"
            >
              <div class="d-flex justify-start justify-sm-end">
                <VueApexCharts
                  id="shipment-statistics"
                  type="bar"
                  height="150"
                  :options="reviewStatChartConfig"
                  :series="reviewStatChartSeries"
                />
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VCardText>
          <div class="d-flex justify-space-between flex-wrap gap-y-4">
            <VTextField
              v-model="searchQuery"
              style="max-inline-size: 250px; min-inline-size: 200px;"
              placeholder="Search"
              density="compact"
            />
            <div class="d-flex flex-row gap-4 align-center flex-wrap">
              <VSelect
                v-model="selectedStatus"
                style="min-inline-size: 6.25rem;"
                density="compact"
                :items="[
                  { title: 'All', value: 'All' },
                  { title: 'Published', value: 'Published' },
                  { title: 'Pending', value: 'Pending' },
                ]"
              />
              <VBtn prepend-icon="ri-upload-2-line">
                Export
              </VBtn>
            </div>
          </div>
        </VCardText>

        <VDataTableServer
          v-model:items-per-page="itemsPerPage"
          v-model:page="page"
          :headers="headers"
          :items="reviews"
          show-select
          :items-length="totalReviews"
          item-value="id"
          class="text-no-wrap rounded-0"
          @update:options="updateOptions"
        >
          <template #item.product="{ item }">
            <div class="d-flex gap-x-4 align-center">
              <VAvatar
                :image="item.productImage"
                :size="38"
                variant="tonal"
                rounded
              />
              <div class="d-flex flex-column">
                <h6 class="text-h6">
                  {{ item.product }}
                </h6>
                <span class="text-sm text-wrap clamp-text">{{ item.companyName }}</span>
              </div>
            </div>
          </template>

          <template #item.reviewer="{ item }">
            <div class="d-flex align-center gap-x-4">
              <VAvatar
                :image="item.avatar"
                size="34"
              />
              <div class="d-flex flex-column">
                <NuxtLink
                  :to="{ name: 'apps-ecommerce-customer-details-id', params: { id: 478426 } }"
                  class="font-weight-medium"
                >
                  {{ item.reviewer }}
                </NuxtLink>
                <span class="text-body-2">{{ item.email }}</span>
              </div>
            </div>
          </template>

          <template #item.review="{ item }">
            <div class="py-4">
              <VRating
                :size="24"
                readonly
                :model-value="item.review"
              />
              <h6 class="text-h6 mb-1">
                {{ item.head }}
              </h6>
              <p class="text-sm text-medium-emphasis text-wrap mb-0">
                {{ item.para }}
              </p>
            </div>
          </template>

          <template #item.date="{ item }">
            <span class="text-body-1">{{ new Date(item.date).toDateString() }}</span>
          </template>

          <template #item.status="{ item }">
            <VChip
              :color="item.status === 'Published' ? 'success' : 'warning'"
              size="small"
            >
              {{ item.status }}
            </VChip>
          </template>

          <template #item.actions="{ item }">
            <IconBtn size="small">
              <VIcon icon="ri-more-2-line" />
              <VMenu activator="parent">
                <VList>
                  <VListItem
                    value="view"
                    :to="{ name: 'apps-ecommerce-order-details-id', params: { id: item.id } }"
                  >
                    View
                  </VListItem>
                  <VListItem
                    value="delete"
                    @click="deleteReview(item.id)"
                  >
                    Delete
                  </VListItem>
                </VList>
              </VMenu>
            </IconBtn>
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
                {{ paginationMeta({ page, itemsPerPage }, totalReviews) }}
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
                  :disabled="page >= Math.ceil(totalReviews / itemsPerPage)"
                  @click="page >= Math.ceil(totalReviews / itemsPerPage) ? page = Math.ceil(totalReviews / itemsPerPage) : page++ "
                />
              </div>
            </div>
          </template>
        </VDataTableServer>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
