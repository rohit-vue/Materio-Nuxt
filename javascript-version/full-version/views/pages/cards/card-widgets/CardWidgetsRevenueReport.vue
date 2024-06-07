<script setup>
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const options = computed(() => {
  const currentTheme = ref(vuetifyTheme.current.value.colors)
  const variableTheme = ref(vuetifyTheme.current.value.variables)
  const secondaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['medium-emphasis-opacity'] })`
  
  return {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    grid: {
      yaxis: { lines: { show: false } },
      xaxis: { lines: { show: false } },
      padding: {
        left: 0,
        right: 0,
      },
    },
    legend: {
      offsetY: 8,
      fontSize: '15px',
      markers: {
        radius: 15,
        width: 10,
        height: 10,
      },
      labels: { colors: secondaryTextColor },
    },
    stroke: {
      width: 2,
      colors: [currentTheme.value.surface],
    },
    dataLabels: { enabled: false },
    colors: [
      currentTheme.value.success,
      currentTheme.value.secondary,
    ],
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '45%',
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all',
      },
    },
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
      crosshairs: { opacity: 0 },
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { labels: { show: false } },
    tooltip: { enabled: false },
    responsive: [
      {
        breakpoint: 1560,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '50%',
              borderRadius: 6,
            },
          },
        },
      },
      {
        breakpoint: 1380,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '60%',
              borderRadius: 6,
            },
          },
        },
      },
      {
        breakpoint: 1080,
        options: { plotOptions: { bar: { borderRadius: 4 } } },
      },
      {
        breakpoint: 960,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45%',
              borderRadius: 4,
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '55%',
              borderRadius: 4,
            },
          },
        },
      },
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '30%',
              borderRadius: 6,
            },
          },
        },
      },
      {
        breakpoint: 460,
        options: { plotOptions: { bar: { columnWidth: '45%' } } },
      },
      {
        breakpoint: 400,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%',
              borderRadius: 4,
            },
          },
        },
      },
    ],
  }
})

const series = [
  {
    name: 'Earning',
    data: [
      95,
      177,
      284,
      256,
      105,
      63,
      168,
      218,
      72,
    ],
  },
  {
    name: 'Expense',
    data: [
      -145,
      -80,
      -60,
      -180,
      -100,
      -60,
      -85,
      -75,
      -100,
    ],
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Revenue Report</VCardTitle>

      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="bar"
        :options="options"
        :series="series"
        :height="240"
      />
    </VCardText>
  </VCard>
</template>
