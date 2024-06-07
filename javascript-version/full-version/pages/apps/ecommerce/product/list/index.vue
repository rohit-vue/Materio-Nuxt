<script setup>
const widgetData = ref([
  {
    title: 'In-Store Sales',
    value: '$5,345',
    icon: 'ri-home-6-line',
    desc: '5k orders',
    change: 5.7,
  },
  {
    title: 'Website Sales',
    value: '$74,347',
    icon: 'ri-computer-line',
    desc: '21k orders',
    change: 12.4,
  },
  {
    title: 'Discount',
    value: '$14,235',
    icon: 'ri-gift-line',
    desc: '6k orders',
  },
  {
    title: 'Affiliate',
    value: '$8,345',
    icon: 'ri-money-dollar-circle-line',
    desc: '150 orders',
    change: -3.5,
  },
])

const headers = [
  {
    title: 'Product',
    key: 'product',
  },
  {
    title: 'Category',
    key: 'category',
  },
  {
    title: 'Stock',
    key: 'stock',
    sortable: false,
  },
  {
    title: 'SKU',
    key: 'sku',
  },
  {
    title: 'Price',
    key: 'price',
  },
  {
    title: 'QTY',
    key: 'qty',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const selectedStatus = ref()
const selectedCategory = ref()
const selectedStock = ref()
const searchQuery = ref('')

const status = ref([
  {
    title: 'Scheduled',
    value: 'Scheduled',
  },
  {
    title: 'Publish',
    value: 'Published',
  },
  {
    title: 'Inactive',
    value: 'Inactive',
  },
])

const categories = ref([
  {
    title: 'Accessories',
    value: 'Accessories',
  },
  {
    title: 'Home Decor',
    value: 'Home Decor',
  },
  {
    title: 'Electronics',
    value: 'Electronics',
  },
  {
    title: 'Shoes',
    value: 'Shoes',
  },
  {
    title: 'Office',
    value: 'Office',
  },
  {
    title: 'Games',
    value: 'Games',
  },
])

const stockStatus = ref([
  {
    title: 'In Stock',
    value: true,
  },
  {
    title: 'Out of Stock',
    value: false,
  },
])

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

const resolveCategory = category => {
  if (category === 'Accessories')
    return {
      color: 'error',
      icon: 'ri-headphone-line',
    }
  if (category === 'Home Decor')
    return {
      color: 'info',
      icon: 'ri-home-6-line',
    }
  if (category === 'Electronics')
    return {
      color: 'primary',
      icon: 'ri-computer-line',
    }
  if (category === 'Shoes')
    return {
      color: 'success',
      icon: 'ri-footprint-line',
    }
  if (category === 'Office')
    return {
      color: 'warning',
      icon: 'ri-briefcase-line',
    }
  if (category === 'Games')
    return {
      color: 'primary',
      icon: 'ri-gamepad-line',
    }
}

const resolveStatus = statusMsg => {
  if (statusMsg === 'Scheduled')
    return {
      text: 'Scheduled',
      color: 'warning',
    }
  if (statusMsg === 'Published')
    return {
      text: 'Publish',
      color: 'success',
    }
  if (statusMsg === 'Inactive')
    return {
      text: 'Inactive',
      color: 'error',
    }
}

const {
  data: productsData,
  execute: fetchProducts,
} = await useApi(createUrl('/apps/ecommerce/products', {
  query: {
    q: searchQuery,
    stock: selectedStock,
    category: selectedCategory,
    status: selectedStatus,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))

const products = computed(() => productsData.value.products)
const totalProduct = computed(() => productsData.value.total)

const deleteProduct = async id => {
  await $api(`apps/ecommerce/products/${ id }`, { method: 'DELETE' })
  fetchProducts()
}
</script>

<template>
  <div>
    <!-- 👉 widgets -->
    <VCard class="mb-6">
      <VCardText class="px-2">
        <VRow>
          <template
            v-for="(data, index) in widgetData"
            :key="index"
          >
            <VCol
              cols="12"
              sm="6"
              md="3"
              class="px-6"
            >
              <div
                class="d-flex justify-space-between"
                :class="$vuetify.display.xs ? 'product-widget' : $vuetify.display.sm ? index < 2 ? 'product-widget' : '' : ''"
              >
                <div class="d-flex flex-column gap-y-1">
                  <p class="text-capitalize mb-0">
                    {{ data.title }}
                  </p>

                  <h6 class="text-h4">
                    {{ data.value }}
                  </h6>

                  <div class="d-flex align-center">
                    <div class="text-no-wrap me-2">
                      {{ data.desc }}
                    </div>

                    <VChip
                      v-if="data.change"
                      size="small"
                      :color="data.change > 0 ? 'success' : 'error'"
                    >
                      {{ prefixWithPlus(data.change) }}%
                    </VChip>
                  </div>
                </div>

                <VAvatar
                  variant="tonal"
                  rounded
                  size="44"
                >
                  <VIcon
                    :icon="data.icon"
                    size="28"
                    color="high-emphasis"
                  />
                </VAvatar>
              </div>
            </VCol>
            <VDivider
              v-if="$vuetify.display.mdAndUp ? index !== widgetData.length - 1 : $vuetify.display.smAndUp ? index % 2 === 0 : false"
              vertical
              inset
              length="100"
            />
          </template>
        </VRow>
      </VCardText>
    </VCard>

    <!-- 👉 products -->
    <VCard title="Filters">
      <VCardText>
        <VRow>
          <!-- 👉 Select Status -->
          <VCol
            cols="12"
            sm="4"
          >
            <VSelect
              v-model="selectedStatus"
              label="Select Status"
              placeholder="Select Status"
              :items="status"
              clearable
              clear-icon="ri-close-line"
            />
          </VCol>

          <!-- 👉 Select Category -->
          <VCol
            cols="12"
            sm="4"
          >
            <VSelect
              v-model="selectedCategory"
              label="Category"
              placeholder="Select Category"
              :items="categories"
              clearable
              clear-icon="ri-close-line"
            />
          </VCol>

          <!-- 👉 Select Stock Status -->
          <VCol
            cols="12"
            sm="4"
          >
            <VSelect
              v-model="selectedStock"
              label="Stock"
              placeholder="Stock"
              :items="stockStatus"
              clearable
              clear-icon="ri-close-line"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex flex-wrap gap-4">
        <div class="d-flex align-center">
          <!-- 👉 Search  -->
          <VTextField
            v-model="searchQuery"
            placeholder="Search Product"
            style="inline-size: 200px;"
            density="compact"
            class="me-3"
          />
        </div>

        <VSpacer />

        <div class="d-flex gap-x-4">
          <!-- 👉 Export button -->
          <div>
            <VBtn
              variant="outlined"
              color="secondary"
              prepend-icon="ri-external-link-line"
            >
              Export
            </VBtn>
          </div>

          <VBtn
            color="primary"
            prepend-icon="ri-add-line"
            @click="$router.push('/apps/ecommerce/product/add')"
          >
            Add Product
          </VBtn>
        </div>
      </VCardText>

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="headers"
        show-select
        :items="products"
        :items-length="totalProduct"
        class="text-no-wrap rounded-0"
        @update:options="updateOptions"
      >
        <!-- product  -->
        <template #item.product="{ item }">
          <div class="d-flex align-center gap-x-4">
            <VAvatar
              v-if="item.image"
              size="38"
              variant="tonal"
              rounded
              :image="item.image"
            />
            <div class="d-flex flex-column">
              <span class="text-base text-high-emphasis font-weight-medium">{{ item.productName }}</span>
              <span class="text-sm">{{ item.productBrand }}</span>
            </div>
          </div>
        </template>

        <!-- category -->
        <template #item.category="{ item }">
          <VAvatar
            size="30"
            variant="tonal"
            :color="resolveCategory(item.category)?.color"
            class="me-4"
          >
            <VIcon
              :icon="resolveCategory(item.category)?.icon"
              size="18"
            />
          </VAvatar>
          <span class="text-base text-high-emphasis">{{ item.category }}</span>
        </template>

        <!-- stock -->
        <template #item.stock="{ item }">
          <VSwitch :model-value="item.stock" />
        </template>

        <!-- status -->
        <template #item.status="{ item }">
          <VChip
            v-bind="resolveStatus(item.status)"
            size="small"
          />
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn size="small">
            <VIcon icon="ri-edit-box-line" />
          </IconBtn>

          <IconBtn size="small">
            <VIcon icon="ri-more-2-fill" />

            <VMenu activator="parent">
              <VList>
                <VListItem
                  value="download"
                  prepend-icon="ri-download-line"
                >
                  Download
                </VListItem>

                <VListItem
                  value="delete"
                  prepend-icon="ri-delete-bin-line"
                  @click="deleteProduct(item.id)"
                >
                  Delete
                </VListItem>

                <VListItem
                  value="duplicate"
                  prepend-icon="ri-stack-line"
                >
                  Duplicate
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
              {{ paginationMeta({ page, itemsPerPage }, totalProduct) }}
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
                :disabled="page >= Math.ceil(totalProduct / itemsPerPage)"
                @click="page >= Math.ceil(totalProduct / itemsPerPage) ? page = Math.ceil(totalProduct / itemsPerPage) : page++ "
              />
            </div>
          </div>
        </template>
      </VDataTableServer>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.product-widget{
  border-block-end: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  padding-block-end: 1rem;
}
</style>
