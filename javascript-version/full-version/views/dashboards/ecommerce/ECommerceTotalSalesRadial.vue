<script setup>
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()
const series = [78]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  
  return {
    chart: { sparkline: { enabled: true } },
    colors: [currentTheme.info],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: '65%' },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: '1.125rem',
            fontWeight: '500',
            offsetY: 0,
            color: `rgba(${ hexToRgb(currentTheme['on-surface']) },${ variableTheme['medium-emphasis-opacity'] })`,
          },
        },
        track: { background: currentTheme['track-bg'] },
      },
    },
    stroke: { lineCap: 'round' },
    responsive: [{
      breakpoint: 450,
      options: { plotOptions: { radialBar: { hollow: { size: '52%' } } } },
    }],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h4 class="text-h4">
        135k
      </h4>
      <VueApexCharts
        id="stats-radial-bar-chart"
        :options="chartOptions"
        :series="series"
        type="radialBar"
        :height="150"
      />

      <h6 class="text-h6 text-center mt-6">
        Total sales
      </h6>
    </VCardText>
  </VCard>
</template>
