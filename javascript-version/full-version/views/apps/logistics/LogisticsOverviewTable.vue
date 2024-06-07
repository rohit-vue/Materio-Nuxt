<script setup>
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const { data: vehiclesData } = await useApi(createUrl('/apps/logistics/vehicles', {
  query: {
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))

const vehicles = computed(() => vehiclesData.value.vehicles)
const totalVehicles = computed(() => vehiclesData.value.totalVehicles)

const headers = [
  {
    title: 'LOCATION',
    key: 'location',
  },
  {
    title: 'STARTING ROUTE',
    key: 'startRoute',
  },
  {
    title: 'ENDING ROUTE',
    key: 'endRoute',
  },
  {
    title: 'WARNINGS',
    key: 'warnings',
  },
  {
    title: 'PROGRESS',
    key: 'progress',
  },
]

const resolveChipColor = warning => {
  if (warning === 'No Warnings')
    return 'success'
  if (warning === 'fuel problems')
    return 'primary'
  if (warning === 'Temperature Not Optimal')
    return 'warning'
  if (warning === 'Ecu Not Responding')
    return 'error'
  if (warning === 'Oil Leakage')
    return 'info'
}
</script>

<template>
  <VCard>
    <VCardItem title="On Route vehicles">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>

    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      :items-per-page-options="[
        { value: 5, title: '5' },
        { value: 10, title: '10' },
        { value: 20, title: '20' },
        { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
      ]"
      :items-length="totalVehicles"
      :items="vehicles"
      item-value="location"
      :headers="headers"
      show-select
      class="text-no-wrap"
      @update:options="updateOptions"
    >
      <template #item.location="{ item }">
        <div class="py-2">
          <VAvatar
            variant="tonal"
            class="me-4"
            color="secondary"
          >
            <VIcon
              icon="ri-bus-line"
              size="28"
            />
          </VAvatar>
          <NuxtLink
            :to="{ name: 'apps-logistics-fleet' }"
            class="text-base text-high-emphasis"
          >
            VOL-{{ item.location }}
          </NuxtLink>
        </div>
      </template>

      <template #item.startRoute="{ item }">
        {{ item.startCity }}, {{ item.startCountry }}
      </template>

      <template #item.endRoute="{ item }">
        {{ item.endCity }}, {{ item.endCountry }}
      </template>

      <template #item.warnings="{ item }">
        <VChip
          :color="resolveChipColor(item.warnings)"
          size="small"
        >
          {{ item.warnings }}
        </VChip>
      </template>

      <template #item.progress="{ item }">
        <div
          class="d-flex align-center gap-x-4"
          style="min-inline-size: 240px;"
        >
          <div class="w-100">
            <VProgressLinear
              :model-value="item.progress"
              rounded
              color="primary"
              :height="8"
            />
          </div>
          <div>
            {{ item.progress }}%
          </div>
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
            {{ paginationMeta({ page, itemsPerPage }, totalVehicles) }}
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
              :disabled="page >= Math.ceil(totalVehicles / itemsPerPage)"
              @click="page >= Math.ceil(totalVehicles / itemsPerPage) ? page = Math.ceil(totalVehicles / itemsPerPage) : page++ "
            />
          </div>
        </div>
      </template>
    </VDataTableServer>
  </VCard>
</template>
