<script setup>
import girlWithLaptop from '@images/pages/pose-fs-9.png'
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-center  align-start pb-0 px-3 pt-3 mb-6 bg-light-primary rounded">
        <VImg
          :src="girlWithLaptop"
          width="145"
          height="140"
        />
      </div>
      <div>
        <h5 class="text-h5 mb-1">
          Upcoming Webinar
        </h5>
        <div class="text-body-1">
          Next Generation Frontend Architecture Using Layout Engine And Vue.
        </div>
        <div class="d-flex justify-space-between my-6 gap-4 flex-wrap">
          <div
            v-for="{ icon, title, value } in [{ icon: 'ri-calendar-line', title: '17 Nov 23', value: 'Date' }, { icon: 'ri-time-line', title: '32 Minutes', value: 'Duration' }]"
            :key="title"
            class="d-flex gap-x-4 align-center"
          >
            <VAvatar
              color="primary"
              variant="tonal"
              rounded
            >
              <VIcon :icon="icon" />
            </VAvatar>
            <div>
              <div class="text-body-1 text-high-emphasis">
                {{ title }}
              </div>
              <div class="text-caption text-medium-emphasis">
                {{ value }}
              </div>
            </div>
          </div>
        </div>
        <VBtn block>
          Join the event
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
