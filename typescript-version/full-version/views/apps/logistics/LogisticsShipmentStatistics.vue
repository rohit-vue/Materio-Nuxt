<script setup lang="ts">
const chartColors = {
  line: {
    series1: '#FFB400',
    series2: '#9055FD',
  },
}

const headingColor = 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))'
const labelColor = 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))'
const borderColor = 'rgba(var(--v-border-color), var(--v-border-opacity))'

const series = [
  {
    name: 'Shipment',
    type: 'column',
    data: [38, 45, 33, 38, 32, 50, 48, 40, 42, 37],
  },
  {
    name: 'Delivery',
    type: 'line',
    data: [23, 28, 23, 32, 28, 44, 32, 38, 26, 34],
  },
]

const shipmentConfig = {
  chart: {
    type: 'line',
    stacked: false,
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  markers: {
    size: 5,
    colors: '#fff',
    strokeColors: chartColors.line.series2,
    hover: {
      size: 6,
    },
    borderRadius: 4,
  },
  stroke: {
    curve: 'smooth',
    width: [0, 3],
    lineCap: 'round',
  },
  legend: {
    show: true,
    position: 'bottom',
    markers: {
      width: 8,
      height: 8,
      offsetX: -3,
    },
    height: 40,
    offsetY: 10,
    itemMargin: {
      horizontal: 10,
      vertical: 0,
    },
    fontSize: '15px',
    fontFamily: 'Inter',
    fontWeight: 400,
    labels: {
      colors: headingColor,
      useSeriesColors: !1,
    },
  },
  grid: {
    strokeDashArray: 8,
    borderColor,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  colors: [chartColors.line.series1, chartColors.line.series2],
  fill: {
    opacity: [1, 1],
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 4,
      borderRadiusApplication: 'around',
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    tickAmount: 10,
    categories: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 400,
      },
    },
    axisBorder: {
      show: false,
      offsetY: 8,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    tickAmount: 4,
    min: 10,
    max: 50,
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 400,
      },
      formatter(val: string) {
        return `${val}%`
      },
    },
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 310,
        },
        xaxis: {
          labels: {
            style: {
              fontSize: '10px',
            },
          },
        },
        legend: {
          itemMargin: {
            vertical: 0,
            horizontal: 10,
          },
          fontSize: '13px',
          offsetY: 12,
        },
      },
    },
    {
      breakpoint: 1025,
      options: {
        chart: {
          height: 415,
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
          },
        },
      },
    },
    {
      breakpoint: 982,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '30%',
          },
        },
      },
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 250,
        },
        legend: {
          offsetY: 7,
        },
      },
    },
  ],
}
</script>

<template>
  <VCard>
    <VCardItem
      title="Shipment statistics"
      subtitle="Total number of deliveries 23.8k"
    >
      <template #append>
        <VBtnGroup
          density="compact"
          variant="outlined"
          divided
        >
          <VBtn color="primary">
            January
          </VBtn>

          <VBtn
            icon="ri-arrow-down-s-line"
            color="primary"
          />
        </VBtnGroup>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        id="shipment-statistics"
        height="320"
        :options="shipmentConfig"
        :series="series"
      />
    </VCardText>
  </VCard>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";

.v-btn-group--divided .v-btn:not(:last-child) {
  border-inline-end-color: rgba(var(--v-theme-primary), 0.5);
}

#shipment-statistics {
  .apexcharts-legend-text {
    font-size: 15px !important;
    line-height: 22px;
  }

  .apexcharts-legend{
    .apexcharts-legend-series {
      border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
      border-radius: 0.375rem;
      block-size: 83%;
      padding-block: 4px;
      padding-inline: 16px;
    }
  }
}
</style>
