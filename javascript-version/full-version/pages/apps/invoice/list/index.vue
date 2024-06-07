<script setup>
const searchQuery = ref('')
const selectedStatus = ref(null)
const selectedRows = ref([])

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

const widgetData = ref([
  {
    title: 'Clients',
    value: 24,
    icon: 'ri-user-line',
  },
  {
    title: 'Invoices',
    value: 165,
    icon: 'ri-pages-line',
  },
  {
    title: 'Paid',
    value: '$2.46k',
    icon: 'ri-wallet-line',
  },
  {
    title: 'Unpaid',
    value: '$876',
    icon: 'ri-money-dollar-circle-line',
  },
])

// 👉 headers
const headers = [
  {
    title: '#',
    key: 'id',
  },
  {
    title: 'Status',
    key: 'trending',
    sortable: false,
  },
  {
    title: 'Client',
    key: 'client',
  },
  {
    title: 'Total',
    key: 'total',
  },
  {
    title: 'Issued Date',
    key: 'date',
  },
  {
    title: 'Balance',
    key: 'balance',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const {
  data: invoiceData,
  execute: fetchInvoices,
} = await useApi(createUrl('/apps/invoice', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const invoices = computed(() => invoiceData.value.invoices)
const totalInvoices = computed(() => invoiceData.value.totalInvoices)

// 👉 Invoice balance variant resolver
const resolveInvoiceBalanceVariant = (balance, total) => {
  if (balance === total)
    return {
      status: 'Unpaid',
      chip: { color: 'error' },
    }
  if (balance === 0)
    return {
      status: 'Paid',
      chip: { color: 'success' },
    }
  
  return {
    status: balance,
    chip: { variant: 'text' },
  }
}

const resolveInvoiceStatusVariantAndIcon = status => {
  if (status === 'Partial Payment')
    return {
      variant: 'warning',
      icon: 'ri-line-chart-line',
    }
  if (status === 'Paid')
    return {
      variant: 'success',
      icon: 'ri-check-line',
    }
  if (status === 'Downloaded')
    return {
      variant: 'info',
      icon: 'ri-arrow-down-line',
    }
  if (status === 'Draft')
    return {
      variant: 'secondary',
      icon: 'ri-save-line',
    }
  if (status === 'Sent')
    return {
      variant: 'primary',
      icon: 'ri-mail-line',
    }
  if (status === 'Past Due')
    return {
      variant: 'error',
      icon: 'ri-error-warning-line',
    }
  
  return {
    variant: 'secondary',
    icon: 'ri-close-line',
  }
}

const computedMoreList = computed(() => {
  return paramId => [
    {
      title: 'Download',
      value: 'download',
      prependIcon: 'ri-download-line',
    },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'ri-pencil-line',
      to: {
        name: 'apps-invoice-edit-id',
        params: { id: paramId },
      },
    },
    {
      title: 'Duplicate',
      value: 'duplicate',
      prependIcon: 'ri-stack-line',
    },
  ]
})

const deleteInvoice = async id => {
  await $api(`/apps/invoice/${ id }`, { method: 'DELETE' })
  fetchInvoices()
}
</script>

<template>
  <section v-if="invoices">
    <!-- 👉 Invoice Widgets -->
    <VCard class="mb-6">
      <VCardText class="px-2">
        <VRow>
          <template
            v-for="(data, id) in widgetData"
            :key="id"
          >
            <VCol
              cols="12"
              sm="6"
              md="3"
              class="px-6"
              :class="id !== widgetData.length - 1 && $vuetify.display.width <= 600 ? 'border-b' : ''"
            >
              <div class="d-flex justify-space-between">
                <div class="d-flex flex-column">
                  <h4 class="text-h4">
                    {{ data.value }}
                  </h4>
                  <span class="text-body-1 text-capitalize">{{ data.title }}</span>
                </div>

                <VAvatar
                  variant="tonal"
                  rounded
                  size="42"
                >
                  <VIcon
                    :icon="data.icon"
                    size="26"
                    color="high-emphasis"
                  />
                </VAvatar>
              </div>
            </VCol>
            <VDivider
              v-if="$vuetify.display.mdAndUp ? id !== widgetData.length - 1
                : $vuetify.display.smAndUp ? id % 2 === 0
                  : false"
              vertical
              inset
            />
          </template>
        </VRow>
      </VCardText>
    </VCard>

    <VCard id="invoice-list">
      <VCardText class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Create invoice -->
        <VBtn
          prepend-icon="ri-add-line"
          :to="{ name: 'apps-invoice-add' }"
        >
          Create invoice
        </VBtn>

        <VSpacer />

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div class="invoice-list-search">
            <VTextField
              v-model="searchQuery"
              density="compact"
              placeholder="Search Invoice"
            />
          </div>

          <div class="invoice-list-search">
            <VSelect
              v-model="selectedStatus"
              placeholder="Invoice Status"
              clearable
              density="compact"
              clear-icon="ri-close-line"
              :items="['Downloaded', 'Draft', 'Sent', 'Paid', 'Partial Payment', 'Past Due']"
            />
          </div>
        </div>
      </VCardText>

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        show-select
        :items-length="totalInvoices"
        :headers="headers"
        :items="invoices"
        item-value="id"
        class="text-no-wrap rounded-0"
        @update:options="updateOptions"
      >
        <!-- id -->
        <template #item.id="{ item }">
          <NuxtLink :to="{ name: 'apps-invoice-preview-id', params: { id: item.id } }">
            #{{ item.id }}
          </NuxtLink>
        </template>

        <!-- trending -->
        <template #item.trending="{ item }">
          <VTooltip>
            <template #activator="{ props }">
              <VAvatar
                :size="28"
                v-bind="props"
                :color="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant"
                variant="tonal"
              >
                <VIcon
                  :size="16"
                  :icon="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon"
                />
              </VAvatar>
            </template>
            <p class="mb-0">
              {{ item.invoiceStatus }}
            </p>
            <p class="mb-0">
              Balance: {{ item.balance }}
            </p>
            <p class="mb-0">
              Due date: {{ item.dueDate }}
            </p>
          </VTooltip>
        </template>

        <!-- client -->
        <template #item.client="{ item }">
          <div class="d-flex align-center">
            <VAvatar
              size="34"
              :color="!item.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant : undefined"
              :variant="!item.avatar.length ? 'tonal' : undefined"
              class="me-3"
            >
              <VImg
                v-if="item.avatar.length"
                :src="item.avatar"
              />
              <span v-else>{{ avatarText(item.client.name) }}</span>
            </VAvatar>
            <div class="d-flex flex-column">
              <NuxtLink
                :to="{ name: 'pages-user-profile-tab', params: { tab: 'profile' } }"
                class="text-h6 font-weight-medium mb-0"
              >
                {{ item.client.name }}
              </NuxtLink>
              <span class="text-body-2">{{ item.client.companyEmail }}</span>
            </div>
          </div>
        </template>

        <!-- Total -->
        <template #item.total="{ item }">
          ${{ item.total }}
        </template>

        <!-- Date -->
        <template #item.date="{ item }">
          {{ item.issuedDate }}
        </template>

        <!-- Balance -->
        <template #item.balance="{ item }">
          <VChip
            v-if="typeof ((resolveInvoiceBalanceVariant(item.balance, item.total)).status) === 'string'"
            :color="resolveInvoiceBalanceVariant(item.balance, item.total).chip.color"
            size="small"
          >
            {{ (resolveInvoiceBalanceVariant(item.balance, item.total)).status }}
          </VChip>
          <h6
            v-else
            class="text-h6 font-weight-regular"
          >
            {{ Number((resolveInvoiceBalanceVariant(item.balance, item.total)).status) > 0 ? `$${(resolveInvoiceBalanceVariant(item.balance, item.total)).status}` : `-$${Math.abs(Number((resolveInvoiceBalanceVariant(item.balance, item.total)).status))}` }}
          </h6>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <div class="text-no-wrap">
            <IconBtn
              size="small"
              @click="deleteInvoice(item.id)"
            >
              <VIcon icon="ri-delete-bin-7-line" />
            </IconBtn>

            <IconBtn
              size="small"
              :to="{ name: 'apps-invoice-preview-id', params: { id: item.id } }"
            >
              <VIcon icon="ri-eye-line" />
            </IconBtn>

            <MoreBtn
              size="small"
              :menu-list="computedMoreList(item.id)"
              item-props
            />
          </div>
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
              {{ paginationMeta({ page, itemsPerPage }, totalInvoices) }}
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
                :disabled="page >= Math.ceil(totalInvoices / itemsPerPage)"
                @click="page >= Math.ceil(totalInvoices / itemsPerPage) ? page = Math.ceil(totalInvoices / itemsPerPage) : page++ "
              />
            </div>
          </div>
        </template>
      </VDataTableServer>
      <!-- !SECTION -->
    </VCard>
  </section>
  <section v-else>
    <VCard>
      <VCardTitle>No Invoice Found</VCardTitle>
    </VCard>
  </section>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-search {
    inline-size: 12rem;
  }
}
</style>
