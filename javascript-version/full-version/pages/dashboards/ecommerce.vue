<script setup>
import ECommerceCongratulations from '@/views/dashboards/ecommerce/ECommerceCongratulations.vue'
import ECommerceInvoiceTable from '@/views/dashboards/ecommerce/ECommerceInvoiceTable.vue'
import ECommerceMeetingSchedule from '@/views/dashboards/ecommerce/ECommerceMeetingSchedule.vue'
import ECommerceNewVisitors from '@/views/dashboards/ecommerce/ECommerceNewVisitors.vue'
import ECommerceTotalProfit from '@/views/dashboards/ecommerce/ECommerceTotalProfit.vue'
import ECommerceTotalRevenue from '@/views/dashboards/ecommerce/ECommerceTotalRevenue.vue'
import ECommerceTotalSalesChart from '@/views/dashboards/ecommerce/ECommerceTotalSalesChart.vue'
import ECommerceTotalSalesRadial from '@/views/dashboards/ecommerce/ECommerceTotalSalesRadial.vue'
import ECommerceTransactions from '@/views/dashboards/ecommerce/ECommerceTransactions.vue'
import ECommerceWebsiteTransactions from '@/views/dashboards/ecommerce/ECommerceWebsiteTransactions.vue'

const statisticsVertical = [
  {
    title: 'Revenue',
    color: 'success',
    icon: 'ri-money-dollar-circle-line',
    stats: '95.2k',
    change: 12,
    subtitle: 'Revenue Increase',
  },
  {
    title: 'Transactions',
    color: 'info',
    icon: 'ri-bank-card-line',
    stats: '$1.2k',
    change: 38,
    subtitle: 'Daily Transactions',
  },
]

const statisticsVerticalTwo = [
  {
    title: 'Logistics',
    color: 'error',
    icon: 'ri-car-line',
    stats: '44.10k',
    change: 12,
    subtitle: 'Revenue Increase',
  },
  {
    title: 'Reports',
    color: 'warning',
    icon: 'ri-file-chart-line',
    stats: '268',
    change: -28,
    subtitle: 'System Bugs',
  },
]
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="8"
      class="d-flex flex-column align-self-end"
    >
      <ECommerceCongratulations />
    </VCol>

    <VCol
      v-for="statistic in statisticsVertical"
      :key="statistic.title"
      cols="12"
      sm="6"
      md="2"
    >
      <CardStatisticsVertical v-bind="statistic" />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <ECommerceTotalProfit />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VRow class="match-height">
        <VCol cols="12">
          <ECommerceTotalSalesChart />
        </VCol>
        <VCol cols="6">
          <ECommerceTotalRevenue />
        </VCol>
        <VCol cols="6">
          <ECommerceTotalSalesRadial />
        </VCol>
      </VRow>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <ECommerceTransactions />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VRow>
        <VCol
          v-for="statistics in statisticsVerticalTwo"
          :key="statistics.title"
          cols="6"
        >
          <CardStatisticsVertical v-bind="statistics" />
        </VCol>

        <VCol cols="12">
          <ECommerceNewVisitors />
        </VCol>
      </VRow>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <ECommerceWebsiteTransactions />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <ECommerceInvoiceTable />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <ECommerceMeetingSchedule />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
