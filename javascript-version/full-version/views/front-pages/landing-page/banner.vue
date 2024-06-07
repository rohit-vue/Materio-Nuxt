<script setup>
import ctaDashborad from '@images/front-pages/landing-page/cta-dashboard.png'
</script>

<template>
  <div class="landing-cta position-relative bg-surface">
    <VContainer>
      <div class="d-flex align-center justify-sm-space-between flex-column flex-md-row gap-y-4 pt-9">
        <div class="text-sm-start text-center py-8">
          <div class="banner-text pb-1">
            Ready to Get Started?
          </div>
          <div class="text-body-1 font-weight-medium mb-8">
            Start your project with a 14-day free trial
          </div>
          <VBtn
            color="primary"
            :append-icon="$vuetify.locale.isRtl ? 'ri-arrow-left-line' : 'ri-arrow-right-line'"
            :to="{ name: 'front-pages-payment' }"
          >
            Get Started
          </VBtn>
        </div>

        <VImg
          :src="ctaDashborad"
          :max-width="$vuetify.display.mdAndUp ? 600 : ''"
          max-height="250"
          width="auto"
          class="mb-n4"
        />
      </div>
    </VContainer>
  </div>
</template>

<style lang="scss" scoped>
.landing-cta {
  background-image: url("@images/front-pages/backgrounds/cta-bg.png");
  background-size: cover;
  margin-block: auto;
}

.banner-text{
  color: rgb(var(--v-theme-primary));
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.25px;
  line-height: 42px;
}
</style>
