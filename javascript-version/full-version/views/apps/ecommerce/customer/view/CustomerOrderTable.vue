<script setup>
const searchQuery = ref('')

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  {
    title: 'Order',
    key: 'order',
  },
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Spent',
    key: 'spent',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const resolveStatus = status => {
  if (status === 'Delivered')
    return { color: 'success' }
  if (status === 'Out for Delivery')
    return { color: 'primary' }
  if (status === 'Ready to Pickup')
    return { color: 'info' }
  if (status === 'Dispatched')
    return { color: 'warning' }
}

const {
  data: ordersData,
  execute: fetchOrders,
} = await useApi(createUrl('/apps/ecommerce/orders', {
  query: {
    q: searchQuery,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))

const orders = computed(() => ordersData.value?.orders || [])
const totalOrder = computed(() => ordersData.value?.total || 0)

const deleteOrder = async id => {
  await $api(`/apps/ecommerce/orders/${ id }`, { method: 'DELETE' })
  fetchOrders()
}
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex align-center justify-sm-space-between justify-start flex-wrap gap-4">
        <div class="text-h5">
          Orders placed
        </div>
        <VTextField
          v-model="searchQuery"
          placeholder="Search Order"
          density="compact"
          style=" max-inline-size: 250px; min-inline-size: 200px;"
        />
      </div>
    </VCardText>
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :headers="headers"
      :items="orders"
      item-value="id"
      :items-length="totalOrder"
      class="text-no-wrap rounded-0"
      @update:options="updateOptions"
    >
      <!-- Order ID -->
      <template #item.order="{ item }">
        <NuxtLink :to="{ name: 'apps-ecommerce-order-details-id', params: { id: item.order } }">
          #{{ item.order }}
        </NuxtLink>
      </template>

      <!-- Date -->
      <template #item.date="{ item }">
        {{ new Date(item.date).toDateString() }}
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          size="small"
          :color="resolveStatus(item.status)?.color"
        >
          {{ item.status }}
        </VChip>
      </template>

      <!-- Spent -->
      <template #item.spent="{ item }">
        ${{ item.spent }}
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn size="small">
          <VIcon icon="ri-more-2-fill" />
          <VMenu activator="parent">
            <VList>
              <VListItem value="view">
                <NuxtLink
                  :to="{ name: 'apps-ecommerce-order-details-id', params: { id: item.order } }"
                  class="text-high-emphasis"
                >
                  View
                </NuxtLink>
              </VListItem>
              <VListItem
                value="delete"
                @click="deleteOrder(item.id)"
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
            {{ paginationMeta({ page, itemsPerPage }, totalOrder) }}
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
              :disabled="page >= Math.ceil(totalOrder / itemsPerPage)"
              @click="page >= Math.ceil(totalOrder / itemsPerPage) ? page = Math.ceil(totalOrder / itemsPerPage) : page++ "
            />
          </div>
        </div>
      </template>
    </VDataTableServer>
  </VCard>
</template>
