<script setup lang="ts">
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const currentTheme = vuetifyTheme.current.value.colors

const series = [
  {
    name: 'Subscribers',
    data: [28, 40, 36, 52, 38, 60, 55],
  },
]

const chartOptions = {
  chart: {
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2.5,
  },

  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 80, 100],
    },
  },
  xaxis: {
    type: 'numeric',
    lines: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: { show: false },
  },
  yaxis: [
    {
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: {
        left: 0,
        right: 0,
      },
    },
  ],
  tooltip: {
    enabled: false,
  },
  theme: {
    monochrome: {
      enabled: true,

      color: currentTheme.success,
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
}
</script>

<template>
  <VCard>
    <VCardText>
      <h4 class="text-h4">
        42.5k
      </h4>
      <VueApexCharts
        type="area"
        :options="chartOptions"
        :series="series"
        :height="110"
      />
      <h6 class="text-h6 text-center">
        Total Growth
      </h6>
    </VCardText>
  </VCard>
</template>
