<script setup>
import poseM9 from '@images/cards/pose-m-9.png'
</script>

<template>
  <VCard class="position-relative">
    <VCardText>
      <div class="mb-3">
        <h5 class="text-h5">
          Upgrade Account <span class="text-high-emphasis">😀</span>
        </h5>
        <div class="text-body-1">
          Add 15 team members
        </div>
      </div>
      <h4 class="text-h4 text-primary">
        $199
      </h4>
      <div class="text-body-1 mb-3">
        40% OFF <span class="text-high-emphasis">😍</span>
      </div>
      <VBtn size="small">
        Upgrade Plan
      </VBtn>
    </VCardText>

    <!-- Trophy -->
    <VImg
      :src="poseM9"
      class="illustration flip-in-rtl"
    />
  </VCard>
</template>

<style lang="scss">
.v-card .triangle-bg {
  position: absolute;
  inline-size: 10.375rem;
  inset-block-end: 0;
  inset-inline-end: 0;
}

.v-card .illustration {
  position: absolute;
  inline-size: 3rem;
  inset-block-end: 1rem;
  inset-inline-end: 3rem;
}
</style>
