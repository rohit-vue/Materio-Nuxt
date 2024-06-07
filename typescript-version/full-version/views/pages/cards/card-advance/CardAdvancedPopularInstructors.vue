<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
</script>

<template>
  <VCard>
    <VCardItem title="Popular Instructors">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>
    <VDivider />
    <div class="text-overline d-flex justify-space-between px-5 py-4">
      <div>instructors</div>
      <div>Courses</div>
    </div>
    <VDivider />
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="instructor in [
            { name: 'Jordan Stevenson', profession: 'Business Intelligence', totalCourses: 33, avatar: avatar1 },
            { name: 'Bentlee Emblin', profession: 'Digital Marketing', totalCourses: 52, avatar: avatar2 },
            { name: 'Benedetto Rossiter', profession: 'UI/UX Design', totalCourses: 12, avatar: avatar3 },
            { name: 'Beverlie Krabbe', profession: 'Vue', totalCourses: 8, avatar: avatar4 },
            { name: 'Benette Rose', profession: 'React', totalCourses: 20, avatar: avatar5 },
            { name: 'John Doe', profession: 'Public speaking', totalCourses: 30, avatar: avatar6 },

          ]"
          :key="instructor.name"
        >
          <template #prepend>
            <VAvatar
              size="34"
              :image="instructor.avatar"
            />
          </template>
          <h6 class="text-h6">
            {{ instructor.name }}
          </h6>
          <div class="text-caption text-medium-emphasis">
            {{ instructor.profession }}
          </div>

          <template #append>
            <h6 class="text-h6">
              {{ instructor.totalCourses }}
            </h6>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list{
  --v-card-list-gap: 16px;

}
</style>
