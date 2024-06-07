<script setup lang="ts">
import AcademyAssignmentProgress from '@/views/apps/academy/AcademyAssignmentProgress.vue'
import AcademyCardInterestedTopics from '@/views/apps/academy/AcademyCardInterestedTopics.vue'
import AcademyCardPopularInstructors from '@/views/apps/academy/AcademyCardPopularInstructors.vue'
import AcademyCardTopCourses from '@/views/apps/academy/AcademyCardTopCourses.vue'
import AcademyCourseTable from '@/views/apps/academy/AcademyCourseTable.vue'
import AcademyUpcomingWebinar from '@/views/apps/academy/AcademyUpcomingWebinar.vue'

import customCheck from '@images/svg/check.svg'
import customLaptop from '@images/svg/laptop.svg'
import customLightbulb from '@images/svg/lightbulb.svg'

const borderColor = 'rgba(var(--v-border-color), var(--v-border-opacity))'

// Topics Charts config
const topicsChartConfig = {
  chart: {
    height: 270,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },

  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '70%',
      distributed: true,
      borderRadius: 7,
    },
  },

  colors: [
    '#8C57FF', '#16B1FF', '#56CA00', '#8A8D93', '#FF4C51', '#FFB400',
  ],

  grid: {
    borderColor,
    strokeDashArray: 10,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: -35,
      bottom: -12,
    },
  },

  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontWeight: 200,
      fontSize: '13px',

    },
    offsetX: 0,
    dropShadow: {
      enabled: false,
    },
    formatter(val: string, opt: any) {
      return topicsChartConfig.labels[opt.dataPointIndex]
    },
  },
  labels: ['UI Design', 'UX Design', 'Music', 'Animation', 'Vue', 'SEO'],

  xaxis: {
    categories: ['6', '5', '4', '3', '2', '1'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
        fontSize: '13px',
      },
      formatter(val: string) {
        return `${val}%`
      },
    },
  },

  yaxis: {
    max: 35,
    labels: {
      style: {
        colors: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
        fontSize: '13px',
      },
    },
  },

  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px',
    },
    onDatasetHover: {
      highlightDataSeries: false,
    },
  },
  legend: {
    show: false,
  },

}

// Donut Chart Colors
const donutChartColors = {
  donut: {
    series1: '#22A95E',
    series2: '#24B364',
    series3: '#56CA00',
    series4: '#53D28C',
    series5: '#7EDDA9',
    series6: '#A9E9C5',
  },
}

// Donuts Chart Config
const timeSpendingChartConfig = {
  chart: {
    height: 157,
    width: 130,
    parentHeightOffset: 0,
    type: 'donut',
  },
  labels: ['36h', '56h', '16h', '32h', '56h', '16h'],
  colors: [
    donutChartColors.donut.series1,
    donutChartColors.donut.series2,
    donutChartColors.donut.series3,
    donutChartColors.donut.series4,
    donutChartColors.donut.series5,
    donutChartColors.donut.series6,
  ],
  stroke: {
    width: 0,
  },
  dataLabels: {
    enabled: false,
    formatter(val: string) {
      return `${Number.parseInt(val)}%`
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    theme: false,
  },
  grid: {
    padding: {
      top: 0,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
        labels: {
          show: true,
          value: {
            fontSize: '1.125rem',
            color: 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))',
            fontWeight: 500,
            offsetY: -15,
            formatter(val: string) {
              return `${Number.parseInt(val)}%`
            },
          },
          name: {
            offsetY: 20,
          },
          total: {
            show: true,
            fontSize: '.7rem',
            label: 'Total',
            color: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
            formatter() {
              return '231h'
            },
          },
        },
      },
    },
  },
}

const timeSpendingChartSeries = [23, 35, 10, 20, 35, 23]
</script>

<template>
  <div>
    <VRow class="py-5 match-height">
      <!-- 👉 Welcome -->
      <VCol
        cols="12"
        md="8"
        sm="6"
        :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'"
      >
        <div class="pe-3">
          <h5 class="text-h5 text-high-emphasis mb-1">
            Welcome back, Felecia 👋🏻
          </h5>

          <div
            class="text-wrap text-medium-emphasis mb-4"
            style="max-inline-size: 400px;"
          >
            Your progress this week is Awesome. let's keep it up
            and get a lot of points reward!
          </div>

          <div class="d-flex justify-space-between flex-wrap gap-6 flex-column flex-md-row">
            <div
              v-for="{ title, value, icon, color } in [
                { title: 'Hours Spent', value: '34h', icon: customLaptop, color: 'primary' },
                { title: 'Test Results', value: '82%', icon: customLightbulb, color: 'info' },
                { title: 'Course Completed', value: '14', icon: customCheck, color: 'warning' },
              ]"
              :key="title"
            >
              <div class="d-flex">
                <VAvatar
                  variant="tonal"
                  :color="color"
                  rounded
                  size="54"
                  class="text-primary me-4"
                >
                  <VIcon
                    :icon="icon"
                    size="38"
                  />
                </VAvatar>
                <div>
                  <h6 class="text-h6 text-medium-emphasis">
                    {{ title }}
                  </h6>
                  <h4
                    class="text-h4 font-weight-medium"
                    :class="`text-${color}`"
                  >
                    {{ value }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VCol>

      <!-- 👉 Time Spending -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex flex-column ps-3">
            <h5 class="text-h5 mb-1 text-no-wrap">
              Time Spending
            </h5>
            <div class="mb-6 text-body-1">
              Weekly Report
            </div>
            <h4 class="text-h4 mb-2">
              231<span class="text-medium-emphasis">h</span> 14<span class="text-medium-emphasis">m</span>
            </h4>
            <div>
              <VChip
                color="success"
                density="comfortable"
              >
                +18.4%
              </VChip>
            </div>
          </div>
          <div>
            <VueApexCharts
              type="donut"
              height="150"
              width="150"
              :options="timeSpendingChartConfig"
              :series="timeSpendingChartSeries"
            />
          </div>
        </div>
      </VCol>
    </VRow>

    <VRow class="match-height">
      <VCol
        cols="12"
        md="8"
      >
        <!-- 👉 Topic You are Interested in -->
        <AcademyCardInterestedTopics />
      </VCol>

      <!-- 👉 Popular Instructors  -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <AcademyCardPopularInstructors />
      </VCol>

      <!-- 👉 Academy Top Courses  -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <AcademyCardTopCourses />
      </VCol>

      <!-- 👉 Academy Upcoming Webinar -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <AcademyUpcomingWebinar />
      </VCol>

      <!-- 👉 Academy Assignment Progress  -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <AcademyAssignmentProgress />
      </VCol>

      <!-- 👉 Academy Course Table  -->
      <VCol>
        <AcademyCourseTable />
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";

.topicCard{
  .v-badge.v-badge--dot{
    .v-badge__badge{
      border-radius: 6px;
      block-size: 12px;
      inline-size: 12px;
    }
  }
}
</style>
