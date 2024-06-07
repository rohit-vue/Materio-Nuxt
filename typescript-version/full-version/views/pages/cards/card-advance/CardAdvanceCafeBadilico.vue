<script setup lang="ts">
import cafeBadilico from '@images/cards/cafe-badilico.png'
</script>

<template>
  <VCard>
    <VImg
      cover
      height="168"
      :src="cafeBadilico"
    />

    <VCardText>
      <div class="d-flex justify-space-between align-center mb-2">
        <h5 class="text-h5">
          Cafe Badilico
        </h5>
        <MoreBtn density="compact" />
      </div>
      <div class="d-flex gap-x-2 align-center mb-5">
        <VRating
          :model-value="4"
          :size="24"
          background-color="warning"
        />

        <div class="text-body-1">
          4 Star (12.4k)
        </div>
      </div>
      <p>Italian Cafe</p>
      <p>
        The refrigerated dairy aisle of your local grocery store can be a great source tasty, convenient selections for your.
      </p>

      <VDivider />

      <p class="my-4">
        Tonight's availability
      </p>

      <div class="d-flex gap-x-2 mb-5">
        <VChip size="small">
          5:30PM
        </VChip>
        <VChip size="small">
          7:00PM
        </VChip>
        <VChip size="small">
          7:15PM
        </VChip>
      </div>

      <VBtn block>
        Book Now
      </VBtn>
    </VCardText>
  </VCard>
</template>
