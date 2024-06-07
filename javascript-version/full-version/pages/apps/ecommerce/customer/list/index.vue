<script setup>
import ECommerceAddCustomerDrawer from '@/views/apps/ecommerce/ECommerceAddCustomerDrawer.vue'

const searchQuery = ref('')
const isAddCustomerDrawerOpen = ref(false)

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Data table Headers
const headers = [
  {
    title: 'Customer',
    key: 'customer',
  },
  {
    title: 'Customer Id',
    key: 'customerId',
  },
  {
    title: 'Country',
    key: 'country',
  },
  {
    title: 'Orders',
    key: 'orders',
  },
  {
    title: 'Total Spent',
    key: 'totalSpent',
  },
]

const updateOptions = options => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const { data: customerData } = await useApi(createUrl('/apps/ecommerce/customers', {
  query: {
    q: searchQuery,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const customers = computed(() => customerData.value.customers)
const totalCustomers = computed(() => customerData.value.total)
</script>

<template>
  <div>
    <VCard>
      <VCardText>
        <div class="d-flex justify-space-between flex-wrap gap-y-4">
          <VTextField
            v-model="searchQuery"
            style="max-inline-size: 200px; min-inline-size: 200px;"
            density="compact"
            placeholder="Search .."
          />
          <div class="d-flex flex-row gap-4 align-center flex-wrap">
            <VBtn
              prepend-icon="ri-upload-2-line"
              variant="outlined"
              color="secondary"
            >
              Export
            </VBtn>
            <VBtn
              prepend-icon="ri-add-line"
              @click="isAddCustomerDrawerOpen = !isAddCustomerDrawerOpen"
            >
              Add Customer
            </VBtn>
          </div>
        </div>
      </VCardText>

      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="customers"
        item-value="customer"
        :headers="headers"
        :items-length="totalCustomers"
        show-select
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #item.customer="{ item }">
          <div class="d-flex align-center gap-x-3">
            <VAvatar
              size="34"
              :image="item.avatar"
            />
            <div class="d-flex flex-column">
              <NuxtLink
                :to="{ name: 'apps-ecommerce-customer-details-id', params: { id: item.customerId } }"
                class="text-h6 font-weight-medium"
              >
                {{ item.customer }}
              </NuxtLink>
              <span class="text-sm">{{ item.email }}</span>
            </div>
          </div>
        </template>
        <template #item.customerId="{ item }">
          <h6 class="text-h6 font-weight-regular">
            #{{ item.customerId }}
          </h6>
        </template>

        <template #item.orders="{ item }">
          {{ item.order }}
        </template>

        <template #item.country="{ item }">
          <div class="d-flex gap-x-2">
            <img
              :src="item.countryFlag"
              height="22"
              width="22"
            >
            <span class="text-body-1">{{ item.country }}</span>
          </div>
        </template>

        <template #item.totalSpent="{ item }">
          <h6 class="text-h6">
            ${{ item.totalSpent }}
          </h6>
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
              {{ paginationMeta({ page, itemsPerPage }, totalCustomers) }}
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
                :disabled="page >= Math.ceil(totalCustomers / itemsPerPage)"
                @click="page >= Math.ceil(totalCustomers / itemsPerPage) ? page = Math.ceil(totalCustomers / itemsPerPage) : page++ "
              />
            </div>
          </div>
        </template>
      </VDataTableServer>
    </VCard>
    <ECommerceAddCustomerDrawer v-model:is-drawer-open="isAddCustomerDrawerOpen" />
  </div>
</template>
