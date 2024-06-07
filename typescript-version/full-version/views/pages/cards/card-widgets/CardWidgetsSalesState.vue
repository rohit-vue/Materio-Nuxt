<script setup lang="ts">
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const options = computed(() => {
  const currentTheme = ref(vuetifyTheme.current.value.colors)

  return {
    chart: {
      offsetY: -30,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 5,
      curve: 'smooth',
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -40,
        right: 0,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.7,
        opacityFrom: 0.5,
        shadeIntensity: 1,
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.6,
              color: currentTheme.value.primary,
            },
            {
              offset: 100,
              opacity: 0.1,
              color: currentTheme.value.surface,
            },
          ],
        ],
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: currentTheme.value.primary,
      },
    },
    xaxis: {
      type: 'numeric',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    markers: {
      size: 1,
      offsetY: 1,
      offsetX: -10,
      strokeWidth: 5,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 8,
          seriesIndex: 0,
          dataPointIndex: 5,
          strokeColor: currentTheme.value.primary,
          fillColor: currentTheme.value.surface,
        },
      ],
    },
  }
})

const series = [{ name: 'Traffic Rate', data: [35, 180, 100, 300, 220, 400] }]
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between">
        <div>
          <h5 class="text-h5">
            Sales State
          </h5>
          <div class="text-body-1">
            Total $42,580 Sales
          </div>
        </div>
        <MoreBtn />
      </div>
    </VCardText>

    <VueApexCharts
      type="area"
      :options="options"
      :series="series"
      :height="295"
    />
  </VCard>
</template>
