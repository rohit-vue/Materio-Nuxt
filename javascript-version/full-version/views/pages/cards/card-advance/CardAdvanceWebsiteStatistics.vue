<script setup>
const chartOptions = {
  chart: {
    type: 'bar',
    parentHeightOffset: 0,
    toolbar: { show: false },
    sparkline: { enabled: true },
  },
  grid: { show: false },
  colors: ['rgba(var(--v-theme-primary))'],
  plotOptions: {
    bar: {
      barHeight: '85%',
      columnWidth: '35px',
      borderRadius: 3,
      distributed: true,
    },
  },
  legend: { show: false },
  dataLabels: { enabled: false },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  tooltip: { enabled: false },
}

const series = [{
  name: '2020',
  data: [
    50,
    40,
    110,
    80,
    40,
    60,
    40,
  ],
}]

const websiteStatistics = [
  {
    title: 'Direct',
    color: 'success',
    traffic: '86,471',
    percentage: '-15',
  },
  {
    title: 'Organic Search',
    color: 'primary',
    traffic: '57,484',
    percentage: '+85',
  },
  {
    title: 'Referral',
    color: 'warning',
    traffic: '2,534',
    percentage: '+48',
  },
  {
    title: 'Mail',
    color: 'error',
    traffic: '977',
    percentage: '-36',
  },
  {
    title: 'Social',
    color: 'info',
    traffic: '92',
    percentage: '+55',
  },
  {
    title: 'Other',
    color: 'secondary',
    traffic: '28',
    percentage: '+12',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Transactions</VCardTitle>

      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VCardText class="pt-3">
      <div class="d-flex align-center justify-space-between mb-5">
        <div>
          <h1 class="text-h1 mb-2">
            4,590
          </h1>
          <div class="text-body-2">
            Total Traffic
          </div>
        </div>

        <div>
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            height="80"
            width="120"
          />
        </div>
      </div>

      <div
        v-for="(data, index) in websiteStatistics"
        :key="data.title"
      >
        <div class="d-flex py-3 align-center">
          <div
            class="bubble"
            :class="`bg-${data.color}`"
          />
          <div class="text-body-1 text-high-emphasis">
            {{ data.title }}
          </div>
          <VSpacer />
          <h6 class="text-h6 me-6">
            {{ data.traffic }}
          </h6>
          <h6 class="text-h6 me-1">
            {{ data.percentage.slice(1) }}%
          </h6>
          <VIcon
            :size="24"
            :color="data.percentage.charAt(0) === '+' ? 'success' : 'error'"
          >
            {{ data.percentage.charAt(0) === '+' ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line' }}
          </VIcon>
        </div>
        <VDivider v-if="index !== websiteStatistics.length - 1" />
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.bubble {
  border-radius: 50%;
  block-size: 1rem;
  inline-size: 1rem;
  margin-inline-end: 0.5rem;
}
</style>
