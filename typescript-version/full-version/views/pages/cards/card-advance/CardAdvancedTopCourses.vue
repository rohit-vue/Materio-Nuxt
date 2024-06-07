<script setup lang="ts">
const coursesData = [
  { title: 'Videography Basic Design Course', views: '1.2k', icon: 'ri-video-download-line', color: 'primary' },
  { title: 'Basic Front-end Development Course', views: '834', icon: 'ri-code-view', color: 'info' },
  { title: 'Basic Fundamentals of Photography', views: '3.7k', icon: 'ri-image-2-line', color: 'success' },
  { title: 'Advance Dribble Base Visual Design', views: '2.5k', icon: 'ri-palette-line', color: 'warning' },
  { title: 'Your First Singing Lesson', views: '948', icon: 'ri-music-2-line', color: 'error' },
]
</script>

<template>
  <VCard>
    <VCardItem title="Top Courses">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="(course, index) in coursesData"
          :key="index"
        >
          <template #prepend>
            <VAvatar
              rounded
              variant="tonal"
              :color="course.color"
            >
              <VIcon
                :icon="course.icon"
                size="24"
              />
            </VAvatar>
          </template>

          <template #title>
            <div class="text-h6 clamp-text text-wrap me-4">
              {{ course.title }}
            </div>
          </template>

          <template #append>
            <VChip
              variant="tonal"
              size="small"
            >
              {{ course.views }} Views
            </VChip>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
