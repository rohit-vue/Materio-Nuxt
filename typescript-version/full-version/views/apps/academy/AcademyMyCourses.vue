<script setup lang="ts">
interface Props {
  searchQuery: string
}

const props = defineProps<Props>()

// Data table options
const itemsPerPage = ref(6)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const hideCompleted = ref(true)
const label = ref('All Courses')

const { data: coursesData } = await useApi<any>(createUrl('/apps/academy/courses', {
  query: {
    q: () => props.searchQuery,
    hideCompleted,
    label,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const courses = computed(() => coursesData.value.courses)
const totalCourse = computed(() => coursesData.value.total)

watch([hideCompleted, label, () => props.searchQuery], () => {
  page.value = 1
})

const resolveChipColor = (tags: string) => {
  if (tags === 'Web')
    return 'primary'
  if (tags === 'Art')
    return 'success'
  if (tags === 'UI/UX')
    return 'error'
  if (tags === 'Psychology')
    return 'warning'
  if (tags === 'Design')
    return 'info'
}
</script>

<template>
  <VCard class="mb-6">
    <VCardText>
      <!-- 👉 Header -->
      <div class="d-flex justify-space-between align-center flex-wrap gap-4 mb-6">
        <div>
          <h5 class="text-h5">
            My Courses
          </h5>
          <div class="text-body-1">
            Total 6 course you have purchased
          </div>
        </div>

        <div class="d-flex flex-wrap align-center gap-y-4 gap-x-6">
          <VSelect
            v-model="label"
            density="compact"
            :items="[
              { title: 'Web', value: 'web' },
              { title: 'Art', value: 'art' },
              { title: 'UI/UX', value: 'ui/ux' },
              { title: 'Psychology', value: 'psychology' },
              { title: 'Design', value: 'design' },
              { title: 'All Courses', value: 'All Courses' },
            ]"
            style="min-inline-size: 250px;"
          />
          <VSwitch
            v-model="hideCompleted"
            label="Hide Completed"
          />
        </div>
      </div>

      <!-- 👉 Course List -->
      <div class="mb-6">
        <VRow class="match-height">
          <template
            v-for="course in courses"
            :key="course.id"
          >
            <VCol
              cols="12"
              md="4"
              sm="6"
            >
              <VCard
                flat
                border
              >
                <div class="pa-2">
                  <VImg
                    :src="course.tutorImg"
                    class="cursor-pointer"
                    @click="() => $router.push({ name: 'apps-academy-course-details' })"
                  />
                </div>
                <VCardText class="pt-3">
                  <div class="d-flex justify-space-between align-center mb-4">
                    <VChip
                      variant="tonal"
                      :color="resolveChipColor(course.tags)"
                      size="small"
                    >
                      {{ course.tags }}
                    </VChip>
                    <div class="d-flex">
                      <h6 class="text-h6 text-medium-emphasis me-1">
                        {{ course.rating }}
                      </h6>
                      <VIcon
                        icon="ri-star-fill"
                        color="warning"
                        class="me-2"
                      />
                      <div class="text-body-1">
                        ({{ course.ratingCount }})
                      </div>
                    </div>
                  </div>

                  <h5 class="text-h5 mb-1">
                    <NuxtLink
                      :to="{ name: 'apps-academy-course-details' }"
                      class="course-title"
                    >
                      {{ course.courseTitle }}
                    </NuxtLink>
                  </h5>
                  <p>
                    {{ course.desc }}
                  </p>

                  <div
                    v-if="course.completedTasks !== course.totalTasks"
                    class="d-flex align-center mb-1"
                  >
                    <VIcon
                      icon="ri-time-line"
                      size="20"
                      class="me-1"
                    />
                    <div class="text-body-1 my-auto">
                      {{ course.time }}
                    </div>
                  </div>
                  <div
                    v-else
                    class="mb-2"
                  >
                    <VIcon
                      icon="ri-check-line"
                      color="success"
                      class="me-1"
                    />
                    <span class="text-success text-body-1">Completed</span>
                  </div>

                  <VProgressLinear
                    :model-value="(course.completedTasks / course.totalTasks) * 100"
                    rounded
                    rounded-bar
                    color="primary"
                    height="8"
                    class="mb-4"
                  />

                  <div class="d-flex flex-wrap gap-4">
                    <VBtn
                      variant="outlined"
                      color="secondary"
                      class="flex-grow-1"
                      :to="{ name: 'apps-academy-course-details' }"
                    >
                      <template #prepend>
                        <VIcon
                          icon="ri-refresh-line"
                          class="flip-in-rtl"
                        />
                      </template>
                      Start Over
                    </VBtn>
                    <VBtn
                      v-if="course.completedTasks !== course.totalTasks"
                      variant="outlined"
                      class="flex-grow-1"
                      :to="{ name: 'apps-academy-course-details' }"
                    >
                      <template #append>
                        <VIcon
                          icon="ri-arrow-right-line"
                          class="flip-in-rtl"
                        />
                      </template>
                      Continue
                    </VBtn>
                  </div>
                </VCardText>
              </VCard>
            </VCol>
          </template>
        </VRow>
      </div>

      <VPagination
        v-model="page"
        rounded
        color="primary"
        :length="Math.ceil(totalCourse / itemsPerPage)"
      />
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.course-title{
  &:not(:hover){
    color: rgba(var(--v-theme-on-surface), var(--v-text-high-emphasis))
  }
}
</style>
