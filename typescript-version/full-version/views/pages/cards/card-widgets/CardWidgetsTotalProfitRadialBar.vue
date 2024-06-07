<script setup lang="ts">
import { useTheme } from 'vuetify'

import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const options = computed(() => {
  const currentTheme = ref(vuetifyTheme.current.value.colors)
  const variableTheme = ref(vuetifyTheme.current.value.variables)

  const primaryTextColor = `rgba(${hexToRgb(currentTheme.value['on-surface'])},${variableTheme.value['high-emphasis-opacity']})`

  return {
    chart: {
      sparkline: { enabled: true },
    },
    stroke: { dashArray: 5 },
    colors: ['rgba(var(--v-theme-primary),1)'],
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    plotOptions: {
      radialBar: {
        endAngle: 90,
        startAngle: -90,
        hollow: { size: '55%' },
        track: { background: currentTheme.value['track-bg'] },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -5,
            fontSize: '18px',
            fontWeight: 500,
            color: primaryTextColor,
            formatter: (val: number) => {
              const num = (val * 35250) / 100

              return num > 999 ? `${(num / 1000).toFixed(1)}k` : `${num}`
            },
          },
        },
      },
    },
  }
})

const series = [80]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Total Profit</VCardTitle>

      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VueApexCharts
      type="radialBar"
      :options="options"
      :series="series"
    />
    <VCardText class="text-center">
      <div class="mt-5">
        <p class="text-body-1 mb-2">
          18k new sales
        </p>
        <VChip
          color="primary"
          size="small"
        >
          This Year
        </VChip>
      </div>
    </VCardText>
  </VCard>
</template>
