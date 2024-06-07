<script setup>
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const options = computed(() => {
  const currentTheme = ref(vuetifyTheme.current.value.colors)
  const variableTheme = ref(vuetifyTheme.current.value.variables)
  const secondaryColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['medium-emphasis-opacity'] })`
  
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: '60%',
      },
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      'rgba(var(--v-theme-primary), 0.16)',
      'rgba(var(--v-theme-primary), 0.16)',
      'rgba(var(--v-theme-primary), 0.16)',
      'rgba(var(--v-theme-primary), 0.16)',
      'rgba(var(--v-theme-primary),1)',
      'rgba(var(--v-theme-primary), 0.16)',
      'rgba(var(--v-theme-primary), 0.16)',
    ],
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    xaxis: {
      categories: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
      ],
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          fontSize: '13px',
          colors: secondaryColor,
        },
      },
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        top: -15,
        left: -10,
        right: -10,
      },
    },
    tooltip: { enabled: false },
  }
})

const series = [{
  data: [
    40,
    60,
    50,
    60,
    90,
    40,
    50,
  ],
}]

const weeklySalesData = [
  {
    avatar: {
      icon: 'ri-pie-chart-2-line',
      color: 'primary',
    },
    title: '34.6k',
    subtitle: 'Sales',
  },
  {
    avatar: {
      icon: 'ri-money-dollar-circle-line',
      color: 'success',
    },
    title: '$482k',
    subtitle: 'Total Profit',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Weekly Sales</VCardTitle>
      <VCardSubtitle>Total 85.4k Sales</VCardSubtitle>

      <template #append>
        <div class="mt-n7 me-n3">
          <MoreBtn density="compact" />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="bar"
        :options="options"
        :series="series"
        :height="203"
      />
    </VCardText>

    <VCardText class="d-flex justify-space-around">
      <div
        v-for="data in weeklySalesData"
        :key="data.title"
        class="d-flex align-center me-3"
      >
        <div>
          <VAvatar
            rounded
            :color="data.avatar.color"
            variant="tonal"
            class="me-3"
          >
            <VIcon :icon="data.avatar.icon" />
          </VAvatar>
        </div>

        <div>
          <h6 class="text-h6">
            {{ data.title }}
          </h6>
          <div class="text-base text-no-wrap">
            {{ data.subtitle }}
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
