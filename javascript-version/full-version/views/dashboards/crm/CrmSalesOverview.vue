<script setup>
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const options = computed(() => {
  const currentTheme = ref(vuetifyTheme.current.value.colors)
  const variableTheme = ref(vuetifyTheme.current.value.variables)
  const secondaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['medium-emphasis-opacity'] })`
  const primaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['high-emphasis-opacity'] })`
  
  return {
    chart: { sparkline: { enabled: true } },
    colors: [
      'rgba(var(--v-theme-primary),1)',
      'rgba(var(--v-theme-primary), 0.7)',
      'rgba(var(--v-theme-primary), 0.5)',
      currentTheme.value['track-bg'],
    ],
    stroke: { width: 0 },
    legend: { show: false },
    dataLabels: { enabled: false },
    labels: [
      'Apparel',
      'Electronics',
      'FMCG',
      'Other Sales',
    ],
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    plotOptions: {
      pie: {
        customScale: 0.9,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              color: secondaryTextColor,
            },
            value: {
              offsetY: -15,
              fontWeight: 500,
              fontSize: '24px',
              color: primaryTextColor,
              formatter: value => `${ value }k`,
            },
            total: {
              show: true,
              label: 'Weekly Visits',
              fontSize: '15px',
              color: secondaryTextColor,
              formatter: value => `${ value.globals.seriesTotals.reduce((total, num) => total + num) }k`,
            },
          },
        },
      },
    },
  }
})

const series = [
  12,
  25,
  15,
  50,
]

const salesOverviews = [
  {
    product: 'Apparel',
    sales: '$1,840',
  },
  {
    product: 'Electronic',
    sales: '$11,420',
  },
  {
    product: 'FMCG',
    sales: '$1,840',
  },
  {
    product: 'Other Sales',
    sales: '$11,420',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Sales Overview</VCardTitle>

      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VCardText class="pt-5">
      <div class="d-flex gap-6 flex-md-row flex-column">
        <div class="mx-auto">
          <VueApexCharts
            type="donut"
            :options="options"
            :series="series"
            :height="220"
            :width="220"
          />
        </div>

        <div>
          <div class="d-flex align-center">
            <div class="me-3">
              <VAvatar
                rounded
                color="primary"
                variant="tonal"
              >
                <VIcon icon="ri-wallet-line" />
              </VAvatar>
            </div>
            <div>
              <p class="mb-0">
                Number of Sales
              </p>
              <h5 class="text-h5">
                $86,400
              </h5>
            </div>
          </div>
          <VDivider class="my-6" />

          <div>
            <VRow>
              <VCol
                v-for="sale in salesOverviews"
                :key="sale.product"
                cols="6"
              >
                <div class="d-flex align-center mb-1">
                  <VIcon
                    icon="ri-circle-fill"
                    color="primary"
                    size="10"
                    class="me-2"
                  />
                  <div
                    class="text-truncate"
                    style="max-inline-size: 85px;"
                  >
                    {{ sale.product }}
                  </div>
                </div>
                <h6 class="text-h6 text-medium-emphasis">
                  {{ sale.sales }}
                </h6>
              </VCol>
            </VRow>
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
