<script setup lang="ts">
import CrmActivityTimeline from '@/views/dashboards/crm/CrmActivityTimeline.vue'
import CrmDeveloperMeetup from '@/views/dashboards/crm/CrmDeveloperMeetup.vue'
import CrmMeetingSchedule from '@/views/dashboards/crm/CrmMeetingSchedule.vue'
import CrmRevenueReport from '@/views/dashboards/crm/CrmRevenueReport.vue'
import CrmSalesOverview from '@/views/dashboards/crm/CrmSalesOverview.vue'
import CrmTotalGrowthCharts from '@/views/dashboards/crm/CrmTotalGrowthCharts.vue'
import CrmTotalSales from '@/views/dashboards/crm/CrmTotalSales.vue'
import CrmTransactions from '@/views/dashboards/crm/CrmTransactions.vue'
import CrmUpgradeYourPlan from '@/views/dashboards/crm/CrmUpgradeYourPlan.vue'
import CrmWeeklySales from '@/views/dashboards/crm/CrmWeeklySales.vue'
import illustration1 from '@images/cards/illustration-1.png'
import illustration2 from '@images/cards/illustration-2.png'

const cardStatisticsWithImages = [
  {
    title: 'Ratings',
    subtitle: 'Year of 2021',
    stats: '13k',
    change: 15.6,
    image: illustration1,
    color: 'primary',
  },
  {
    title: 'Sessions',
    subtitle: 'Last Week',
    stats: '24.5k',
    change: -20,
    image: illustration2,
    color: 'secondary',
  },
]

const statistic = {
  title: 'New Project',
  color: 'primary',
  icon: 'ri-file-word-2-line',
  stats: '862',
  change: -18,
  subtitle: 'Yearly Project',
}
</script>

<template>
  <section>
    <VRow class="match-height">
      <VCol
        v-for="statistics in cardStatisticsWithImages"
        :key="statistics.title"
        class="pt-8 pt-sm-3"
        cols="12"
        md="3"
        sm="6"
      >
        <CardStatisticsWithImages v-bind="statistics" />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <CrmTransactions />
      </VCol>

      <VCol
        cols="12"
        sm="6"
        md="3"
      >
        <CrmTotalSales />
      </VCol>

      <VCol
        cols="12"
        sm="6"
        md="3"
      >
        <CrmRevenueReport />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <CrmSalesOverview />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <CrmActivityTimeline />
      </VCol>

      <VCol
        cols="12"
        sm="8"
        md="4"
      >
        <CrmWeeklySales />
      </VCol>

      <VCol
        cols="12"
        md="2"
        sm="4"
      >
        <VRow class="match-height">
          <VCol
            cols="6"
            sm="12"
          >
            <CrmTotalGrowthCharts />
          </VCol>

          <VCol
            cols="6"
            sm="12"
          >
            <CardStatisticsVertical v-bind="statistic" />
          </VCol>
        </VRow>
      </VCol>

      <VCol
        cols="12"
        md="4"
      >
        <CrmUpgradeYourPlan />
      </VCol>

      <VCol
        cols="12"
        md="4"
      >
        <CrmMeetingSchedule />
      </VCol>

      <VCol
        cols="12"
        md="4"
      >
        <CrmDeveloperMeetup />
      </VCol>
    </VRow>
  </section>
</template>
