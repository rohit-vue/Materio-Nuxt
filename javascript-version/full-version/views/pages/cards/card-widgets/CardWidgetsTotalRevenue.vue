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
    labels: [
      'Returning',
      'New Users',
      'Referrals',
    ],
    legend: { show: false },
    stroke: { lineCap: 'round' },
    colors: [
      'rgba(var(--v-theme-primary),1)',
      currentTheme.value.success,
      currentTheme.value.warning,
    ],
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: '40%' },
        track: {
          background: 'transparent',
          margin: 10,
        },
        dataLabels: {
          name: {
            offsetY: 28,
            color: secondaryTextColor,
          },
          value: {
            fontSize: '1.75rem',
            offsetY: -12,
            color: primaryTextColor,
            formatter(value) {
              return `${ value }k`
            },
          },
          total: {
            show: true,
            label: `${ new Date().getFullYear() }`,
            color: secondaryTextColor,
            fontSize: '13px',
            fontWeight: 400,
            formatter(value) {
              return `${ value.globals.seriesTotals.reduce((total, num) => total + num) }k`
            },
          },
        },
      },
    },
  }
})

const series = [
  71,
  78,
  86,
]

const revenueData = [
  {
    title: 'New User',
    value: 856,
    color: 'success',
  },
  {
    title: 'Returning',
    value: 345,
    color: 'primary',
  },
  {
    title: 'Referrals',
    value: 258,
    color: 'warning',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Total Revenue</VCardTitle>

      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="radialBar"
        :options="options"
        :series="series"
        :height="243"
      />

      <div class="d-flex justify-space-around mt-4">
        <template
          v-for="(item, index) in revenueData"
          :key="index"
        >
          <div>
            <div class="d-flex align-center">
              <VIcon
                size="10"
                :color="item.color"
                icon="ri-circle-fill"
                class="me-2"
              />
              <h6 class="text-h6">
                {{ item.value }}
              </h6>
            </div>

            <div class="text-base">
              {{ item.title }}
            </div>
          </div>
          <VDivider
            v-if="index !== revenueData.length - 1"
            vertical
          />
        </template>
      </div>
    </VCardText>
  </VCard>
</template>
