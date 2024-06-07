<script setup>
const { data: productList } = await useApi('pages/datatable')
const search = ref('')

// headers
const headers = [
  {
    title: 'PRODUCT',
    key: 'product.name',
  },
  {
    title: 'DATE',
    key: 'date',
  },
  {
    title: 'CATEGORY',
    key: 'product.category',
  },
  {
    title: 'BUYERS',
    key: 'buyer.name',
  },
  {
    title: 'PAYMENT',
    key: 'payment',
    sortable: false,
  },
  {
    title: 'STATUS',
    key: 'status',
    sortable: false,
  },
  {
    title: 'DELETE',
    key: 'delete',
    sortable: false,
  },
]

const deleteItem = itemId => {
  if (!productList.value)
    return
  const index = productList.value.findIndex(item => item.product.id === itemId)

  productList.value.splice(index, 1)
}

const categoryIcons = [
  {
    name: 'Mouse',
    icon: 'ri-mouse-fill',
    color: 'warning',
  },
  {
    name: 'Glass',
    icon: 'ri-glasses-line',
    color: 'primary',
  },
  {
    name: 'Smart Watch',
    icon: 'ri-time-line',
    color: 'success',
  },
  {
    name: 'Bag',
    icon: 'ri-shopping-bag-line',
    color: 'info',
  },
  {
    name: 'Storage Device',
    icon: 'ri-tape-line',
    color: 'warning',
  },
  {
    name: 'Bluetooth',
    icon: 'ri-bluetooth-line',
    color: 'error',
  },
  {
    name: 'Gaming',
    icon: 'ri-gamepad-line',
    color: 'warning',
  },
  {
    name: 'Home',
    icon: 'ri-home-line',
    color: 'error',
  },
  {
    name: 'VR',
    icon: 'ri-goggles-line',
    color: 'primary',
  },
  {
    name: 'Shoes',
    icon: 'ri-omega',
    color: 'success',
  },
  {
    name: 'Electronics',
    icon: 'ri-flashlight-fill',
    color: 'info',
  },
  {
    name: 'Projector',
    icon: 'ri-projector-line',
    color: 'warning',
  },
  {
    name: 'iPod',
    icon: 'ri-music-line',
    color: 'error',
  },
  {
    name: 'Keyboard',
    icon: 'ri-keyboard-box-line',
    color: 'primary',
  },
  {
    name: 'Smart Phone',
    icon: 'ri-smartphone-line',
    color: 'success',
  },
  {
    name: 'Smart TV',
    icon: 'ri-tv-line',
    color: 'info',
  },
  {
    name: 'Google Home',
    icon: 'ri-google-line',
    color: 'warning',
  },
  {
    name: 'Mac',
    icon: 'ri-apple-line',
    color: 'error',
  },
  {
    name: 'Headphone',
    icon: 'ri-headphone-line',
    color: 'primary',
  },
  {
    name: 'iMac',
    icon: 'ri-computer-line',
    color: 'success',
  },
  {
    name: 'iPhone',
    icon: 'ri-apple-line',
    color: 'warning',
  },
]

const resolveStatusColor = status => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}

const categoryIconFilter = categoryName => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)
  if (index !== -1)
    return [{
      icon: categoryIcons[index].icon,
      color: categoryIcons[index].color,
    }]
  
  return [{
    icon: 'ri-question-line',
    color: 'primary',
  }]
}
</script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <VTextField
            v-model="search"
            label="Search"
            placeholder="Search ..."
            append-inner-icon="ri-search-line"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="productList || []"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap"
    >
      <!-- product -->
      <template #item.product.name="{ item }">
        <div class="d-flex align-center">
          <div>
            <VImg
              :src="item.product.image"
              height="40"
              width="40"
            />
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">{{ item.product.name }}</span>
            <span class="text-xs">{{ item.product.brand }}</span>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #item.product.category="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(category, index) in categoryIconFilter(item.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            variant="tonal"
          >
            <VIcon
              size="18"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </VIcon>
          </VAvatar>
          <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
        </div>
      </template>

      <!-- buyer -->
      <template #item.buyer.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="1.875rem"
            :color="!item.buyer.avatar ? 'primary' : undefined"
            :variant="!item.buyer.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="item.buyer.avatar"
              :src="item.buyer.avatar"
            />
            <span
              v-else
              class="text-sm"
            >{{ item.buyer.name.slice(0, 2).toUpperCase() }}</span>
          </VAvatar>
          <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.buyer.name }}</span>
        </div>
      </template>

      <!-- Payment -->
      <template #item.payment="{ item }">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <span class="text-high-emphasis font-weight-medium">${{ item.payment.paidAmount }}</span>
            <span v-if="item.payment.paidAmount !== item.payment.total">/{{ item.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.payment.receivedPaymentStatus }}</span>
        </div>
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.payment.status)"
          :class="`text-${resolveStatusColor(item.payment.status)}`"
          size="small"
          class="font-weight-medium"
        >
          {{ item.payment.status }}
        </VChip>
      </template>

      <!-- Delete -->
      <template #item.delete="{ item }">
        <IconBtn
          size="small"
          @click="deleteItem(item.product.id)"
        >
          <VIcon icon="ri-delete-bin-line" />
        </IconBtn>
      </template>
    </VDataTable>
  </div>
</template>
