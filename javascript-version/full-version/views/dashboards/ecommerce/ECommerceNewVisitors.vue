<script setup>
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

const options = {
  chart: {
    parentHeightOffset: 0,
    toolbar: { show: false },
  },
  grid: {
    show: false,
    padding: {
      top: -5,
      left: -10,
      right: -7,
      bottom: -12,
    },
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
    'rgba(var(--v-theme-primary),0.1)',
    'rgba(var(--v-theme-primary),0.1)',
    'rgba(var(--v-theme-primary),0.1)',
    'rgba(var(--v-theme-primary),0.1)',
    'rgba(var(--v-theme-primary))',
    'rgba(var(--v-theme-primary),0.1)',
    'rgba(var(--v-theme-primary),0.1)',
    'rgba(var(--v-theme-primary),0.1)',
  ],
  states: {
    hover: { filter: { type: 'none' } },
    active: { filter: { type: 'none' } },
  },
  xaxis: {
    tickPlacement: 'on',
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
    categories: [
      'S',
      'M',
      'T',
      'W',
      'T',
      'F',
      'S',
    ],
  },
  yaxis: { show: false },
  tooltip: { enabled: false },
}
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol cols="6">
        <VCardItem>
          <VCardTitle>New Visitors</VCardTitle>
        </VCardItem>

        <VCardText class="mt-5">
          <p class="text-body-1 mb-2">
            48% new visitors <br>
            this week.
          </p>

          <div class="d-flex align-center">
            <h4 class="text-h4">
              12,480
            </h4>
            <VIcon
              icon="ri-arrow-up-s-line"
              size="24"
              color="success"
            />
            <span class="text-success font-weight-medium">28</span>
          </div>
        </VCardText>
      </VCol>

      <VCol cols="6">
        <VCardText>
          <VueApexCharts
            type="bar"
            :options="options"
            :series="series"
            :height="160"
          />
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
