<script setup lang="ts">
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const currentTheme = computed(() => vuetifyTheme.current.value.colors)

const chartOptions = computed(() => {
  const variableTheme = ref(vuetifyTheme.current.value.variables)

  const secondaryTextColor = `rgba(${hexToRgb(currentTheme.value['on-surface'])},${variableTheme.value['medium-emphasis-opacity']})`
  const primaryTextColor = `rgba(${hexToRgb(currentTheme.value['on-surface'])},${variableTheme.value['high-emphasis-opacity']})`

  return {
    chart: {
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    stroke: {
      width: 5,
      colors: [currentTheme.value.surface],
    },
    legend: { show: false },
    tooltip: { enabled: true },
    dataLabels: { enabled: false },
    colors: [currentTheme.value.primary, currentTheme.value.info, currentTheme.value.warning, currentTheme.value.error],
    labels: ['Comments', 'Replies', 'Shares', 'Likes'],
    series: [45, 10, 18, 27],
    grid: {
      padding: {
        top: -7,
        bottom: 5,
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
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            value: {
              fontSize: '1.15rem',
              fontFamily: 'Inter',
              fontWeight: 500,
              offsetY: -18,
              color: primaryTextColor,
              formatter: (o: any) => `${Number.parseInt(o)}%`,
            },
            name: {
              offsetY: 18,
              fontFamily: 'Inter',
            },
            total: {
              label: '1 Quarter',
              show: true,
              color: secondaryTextColor,
              fontSize: '0.75rem',
              fontWeight: 400,
              formatter: () => '28%',
            },
          },
        },
      },
    },
  }
})
</script>

<template>
  <VCard class="overflow-visible">
    <VCardText class="d-flex justify-space-between align-center gap-3">
      <div>
        <h5 class="text-h5 mb-1">
          Total Sales
        </h5>

        <div class="text-body-1 mb-3">
          Calculated in last 7 days
        </div>
        <div class="d-flex align-center flex-wrap">
          <h4 class="text-h4">
            $25,980
          </h4>
          <div class="d-flex align-center">
            <VIcon
              icon="ri-arrow-up-s-line"
              size="24"
              color="success"
            />
            <span class="text-body-1 text-success">15.6%</span>
          </div>
        </div>
      </div>

      <VueApexCharts
        type="donut"
        :options="chartOptions"
        :height="120"
        :series="[45, 10, 18, 27]"
        :width="110"
      />
    </VCardText>
  </VCard>
</template>
