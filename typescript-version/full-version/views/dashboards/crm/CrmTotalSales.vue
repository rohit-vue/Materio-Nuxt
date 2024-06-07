<script setup lang="ts">
import { useTheme } from 'vuetify'

import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const options = computed(() => {
  const currentTheme = ref(vuetifyTheme.current.value.colors)
  const variableTheme = ref(vuetifyTheme.current.value.variables)

  const secondaryTextColor = `rgba(${hexToRgb(currentTheme.value['on-surface'])},${variableTheme.value['medium-emphasis-opacity']})`

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.2,
        opacityFrom: 1,
        shadeIntensity: 0,
        type: 'horizontal',
        stops: [0, 100, 100],
      },
    },
    stroke: {
      width: 5,
      curve: 'smooth',
      lineCap: 'round',
    },
    legend: { show: false },
    colors: [currentTheme.value.success],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        bottom: -10,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          colors: secondaryTextColor,
        },
      },
    },
    yaxis: {
      labels: { show: false },
    },
    tooltip: { enabled: false },
  }
})

const series = [{ name: 'Total Sales', data: [0, 258, 30, 240, 150, 400] }]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle class="mb-1">
        Total Sales
      </VCardTitle>
      <VCardSubtitle>$21,845</VCardSubtitle>

      <template #append>
        <div class="mt-n7 me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="line"
        :options="options"
        :series="series"
        :height="206"
      />
    </VCardText>
  </VCard>
</template>
