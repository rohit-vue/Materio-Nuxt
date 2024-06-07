<script setup>
import miscMaskDark from '@images/misc/misc-mask-dark.png'
import miscMaskLight from '@images/misc/misc-mask-light.png'
import tree1 from '@images/misc/tree1.png'
import tree3 from '@images/misc/tree3.png'
import miscComingSoon from '@images/pages/misc-coming-soon.png'

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

definePageMeta({
  layout: 'blank', 
})

const email = ref('')
</script>

<template>
  <div class="misc-wrapper">
    <div>
      <!-- 👉 Title and subtitle -->
      <div class="text-center mb-10">
        <h4 class="text-h4 mb-2">
          We are launching soon 🚀
        </h4>
        <p class="text-body-1">
          Our website is opening soon. Please register to get notified when it's ready!
        </p>
      </div>

      <!-- 👉 Email input -->
      <VForm
        class="d-flex align-center justify-center flex-wrap gap-4"
        @submit.prevent="() => {}"
      >
        <VTextField
          v-model="email"
          density="compact"
          autofocus
          placeholder="Enter your email or username"
          class="misc-email-input"
        />
        <VBtn type="submit">
          Notify
        </VBtn>
      </VForm>
    </div>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 mt-10">
      <VImg
        :src="miscComingSoon"
        alt="Coming Soon"
        :max-width="700"
        height="500"
        class="mx-auto"
      />
    </div>

    <div class="d-md-flex gap-x-2 misc-footer-tree d-none">
      <img
        :src="tree3"
        alt="tree"
        height="120"
        width="68"
      >
      <img
        :src="tree3"
        alt="tree"
        height="70"
        width="40"
        class="align-self-end"
      >
    </div>

    <img
      height="210"
      :src="tree1"
      class="misc-footer-tree-1 d-none d-md-block"
    >
    <img
      cover
      :src="authThemeMask"
      height="172"
      class="misc-footer-img d-none d-md-block flip-in-rtl"
    >
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";

.misc-email-input {
  max-inline-size: 21.875rem;
  min-inline-size: 16rem;
}

.misc-footer-tree, .misc-footer-tree-1 {
  position: absolute;
}

.misc-footer-tree {
  inset-block-end: 3.75rem;
  inset-inline-start: 3.75rem;
}

.misc-footer-tree-1 {
  inset-block-end: 5rem;
  inset-inline-end: 4.75rem;
}
</style>
