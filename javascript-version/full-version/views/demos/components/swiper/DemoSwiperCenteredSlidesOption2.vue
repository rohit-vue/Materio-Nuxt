<script setup>
import { register } from 'swiper/element/bundle'

register()
</script>

<template>
  <ClientOnly>
    <swiper-container
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'ri-github-fill', text: 'Getting Started' },
          { icon: 'ri-facebook-circle-line', text: 'Pricing & Plans' },
          { icon: 'ri-twitter-line', text: 'Sales Question' },
          { icon: 'ri-instagram-line', text: 'Usage Guidelines' },
          { icon: 'ri-gitlab-line', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard class="bg-default">
          <VCardText>
            <div class="d-flex align-center gap-x-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="font-weight-medium">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
