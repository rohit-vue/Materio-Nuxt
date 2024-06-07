<script setup lang="ts">
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const currentTheme = computed(() => vuetifyTheme.current.value.colors)

const series = [
  {
    name: 'Earning',
    data: [180, 120, 284, 180, 102],
  },
  {
    name: 'Expense',
    data: [-100, -130, -100, -60, -120],
  },
]

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'bar',
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        left: -15,
        right: 0,
        bottom: 5,
      },
      yaxis: {
        lines: { show: false },
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: [currentTheme.value['on-background'], currentTheme.value.error],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '25%',
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all',
      },
    },
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    stroke: {
      lineCap: 'round',
    },
    tooltip: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 200,
          },
          grid: {
            padding: {
              top: -12,
              left: -15,
              right: 0,
              bottom: -10,
            },
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              columnWidth: '20%',
              borderRadiusApplication: 'around',
              borderRadiusWhenStacked: 'all',
            },
          },
        },
      },
    ],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h4 class="text-h4">
        4,350
      </h4>
      <VueApexCharts
        id="sessions-chart"
        :options="chartOptions"
        :series="series"
        :height="110"
      />

      <h6 class="text-h6 text-center">
        Sessions
      </h6>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
#sessions-chart {
  .apexcharts-series {
    &[seriesName="Earning"] {
      transform: scaleY(0.965);
    }

    &[seriesName="Expense"] {
      transform: scaleY(1.035);
    }
  }
}
</style>
