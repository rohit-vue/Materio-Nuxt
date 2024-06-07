<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
</script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <ClientOnly>
      <swiper-container
        navigation="true"
        centered-slides="true"
        space-between="30"
        slides-per-view="1"
        events-prefix="swiper-"
        :injectStyles="[
          `
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        `,
        ]"
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
            spaceBetween: 20,
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
          <VCard>
            <VCardText>
              <div class="d-flex flex-column align-center gap-y-3">
                <VIcon
                  :icon="icon"
                  size="28"
                />
                <span class="text-high-emphasis">{{ text }}</span>
              </div>
            </VCardText>
          </VCard>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
