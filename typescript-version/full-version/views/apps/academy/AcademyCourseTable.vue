<script setup lang="ts">
import type { Course } from '@db/apps/academy/types'

const searchQuery = ref('')

// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  { title: 'Course Name', key: 'courseName' },
  { title: 'Time', key: 'time', sortable: false },
  { title: 'Progress', key: 'progress' },
  { title: 'Status', key: 'status', sortable: false },
]

// Fetch course Data
const { data: courseData } = await useApi<any>(createUrl('/apps/academy/courses', {
  query: {
    q: searchQuery,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const courses = computed((): Course[] => courseData.value.courses)
const totalCourse = computed(() => courseData.value.total)
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex flex-wrap justify-space-between align-center gap-4">
        <h5 class="text-h5">
          Courses you are taking
        </h5>
        <VTextField
          v-model="searchQuery"
          placeholder="Search Course"
          density="compact"
          style="max-inline-size: 300px; min-inline-size: 200px;"
        />
      </div>
    </VCardText>

    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      :items-per-page-options="[
        { value: 5, title: '5' },
        { value: 10, title: '10' },
        { value: 20, title: '20' },
        { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
      ]"
      :headers="headers"
      :items="courses"
      item-value="id"
      :items-length="totalCourse"
      show-select
      class="text-no-wrap"
      @update:options="updateOptions"
    >
      <template #item.courseName="{ item }">
        <div class="d-flex align-center gap-x-4 py-2">
          <VAvatar
            variant="tonal"
            rounded
            :color="item.color"
          >
            <VIcon
              :icon="item.logo"
              size="28"
            />
          </VAvatar>
          <div>
            <NuxtLink
              :to="{ name: 'apps-academy-course-details' }"
              class="d-inline-block text-h6 mb-1"
            >
              {{ item.courseTitle }}
            </NuxtLink>
            <div class="d-flex align-center">
              <VAvatar
                size="22"
                :image="item.image"
                class="me-2"
              />
              <div class="text-body-2 text-high-emphasis">
                {{ item.user }}
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #item.time="{ item }">
        <h6 class="text-h6">
          {{ item.time }}
        </h6>
      </template>

      <template #item.progress="{ item }">
        <div
          class="d-flex align-center gap-x-4 mb-2"
          style="inline-size: 15.625rem;"
        >
          <div class="text-no-wrap text-h6">
            {{ Math.floor((item.completedTasks / item.totalTasks) * 100) }}%
          </div>
          <div class="w-100">
            <VProgressLinear
              color="primary"
              height="8"
              :model-value="Math.floor((item.completedTasks / item.totalTasks) * 100)"
              rounded
            />
          </div>
          <div class="text-body-2">
            {{ item.completedTasks }}/{{ item.totalTasks }}
          </div>
        </div>
      </template>

      <template #item.status="{ item }">
        <div class="d-flex justify-space-between gap-x-4">
          <div class="d-flex gap-x-2 align-center">
            <VIcon
              icon="ri-group-line"
              color="primary"
              size="24"
            />
            <span class="text-body-1">
              {{ item.userCount }}
            </span>
          </div>
          <div class="d-flex gap-x-2 align-center">
            <VIcon
              icon="ri-computer-line"
              color="info"
              size="24"
            />
            <span class="text-body-1">{{ item.note }}</span>
          </div>
          <div class="d-flex gap-x-2 align-center">
            <VIcon
              icon="ri-video-upload-line"
              color="error"
              size="24"
            />
            <span class="text-body-1">{{ item.view }}</span>
          </div>
        </div>
      </template>

      <!-- Pagination -->
      <template #bottom>
        <VDivider />

        <div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1">
          <div class="d-flex align-center gap-x-2 text-medium-emphasis text-base">
            Rows Per Page:
            <VSelect
              v-model="itemsPerPage"
              class="per-page-select"
              variant="plain"
              :items="[10, 20, 25, 50, 100]"
            />
          </div>

          <p class="d-flex align-center text-base text-high-emphasis me-2 mb-0">
            {{ paginationMeta({ page, itemsPerPage }, totalCourse) }}
          </p>

          <div class="d-flex gap-x-2 align-center me-2">
            <VBtn
              class="flip-in-rtl text-high-emphasis"
              icon="ri-arrow-left-s-line"
              variant="text"
              density="comfortable"
              color="high-emphasis"
              :disabled="page <= 1"
              @click="page <= 1 ? page = 1 : page--"
            />

            <VBtn
              class="flip-in-rtl text-high-emphasis"
              icon="ri-arrow-right-s-line"
              density="comfortable"
              variant="text"
              color="high-emphasis"
              :disabled="page >= Math.ceil(totalCourse / itemsPerPage)"
              @click="page >= Math.ceil(totalCourse / itemsPerPage) ? page = Math.ceil(totalCourse / itemsPerPage) : page++ "
            />
          </div>
        </div>
      </template>
    </VDataTableServer>
  </VCard>
</template>
