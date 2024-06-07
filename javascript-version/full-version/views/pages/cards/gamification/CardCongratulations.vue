<script setup>
import illustrationJohn2 from '@images/cards/illustration-john-2.png'
</script>

<template>
  <VCard class="overflow-visible">
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="6"
        order="2"
        order-sm="1"
      >
        <VCardItem>
          <VCardTitle>
            <h4 class="text-h4 text-wrap">
              Congratulations <strong>John!</strong> <span class="text-high-emphasis">🎉</span>
            </h4>
          </VCardTitle>
        </VCardItem>

        <VCardText class="pt-4">
          <div class="mb-0 text-body-1 me-2">
            You have done 72% <span class="text-high-emphasis">😎</span> more sales today.
            Check your new raising badge in your profile.
          </div>
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        sm="6"
        order="1"
        order-sm="2"
        class="text-center"
      >
        <img
          :src="illustrationJohn2"
          :height="$vuetify.display.xs ? '165' : '200'"
          :class="$vuetify.display.xs ? 'position-relative' : 'position-absolute'"
          class="john-illustration flip-in-rtl mt-6 mt-sm-0"
        >
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.john-illustration {
  inset-block-end: -0.0625rem;
  inset-inline-end: 0;
}
</style>
