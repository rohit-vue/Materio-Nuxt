<script setup lang="ts">
import illustrationJohn from '@images/cards/illustration-john.png'
</script>

<template>
  <VCard class="overflow-visible">
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="6"
      >
        <VCardItem>
          <VCardTitle>
            <h4 class="text-h4 text-wrap">
              Welcome back <strong>John!</strong> <span class="text-high-emphasis">🥳</span>
            </h4>
          </VCardTitle>
        </VCardItem>

        <VCardText class="pt-4">
          <div class="text-body-1 me-2">
            You have 4 tasks to finish today,
            You already completed 68% <span class="text-high-emphasis">😍</span> tasks. Good job!
          </div>
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        sm="6"
        class="text-center"
      >
        <img
          :src="illustrationJohn"
          class="john-illustration"
          :height="$vuetify.display.xs ? '165' : '200'"
          :class="$vuetify.display.xs ? 'position-relative' : 'position-absolute'"
        >
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.john-illustration {
  inset-block-end: 0;
  inset-inline-end: 0;
}

@media (max-width: 600px) {
  .john-illustration {
    inset-block-end: -0.375rem;
    inset-inline-end: 0;
  }
}
</style>
