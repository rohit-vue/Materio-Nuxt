<script setup>
import miscMaskDark from '@images/misc/misc-mask-dark.png'
import miscMaskLight from '@images/misc/misc-mask-light.png'
import miscUnderMaintenance from '@images/misc/misc-under-maintenance.png'
import tree1 from '@images/misc/tree1.png'
import tree3 from '@images/misc/tree3.png'

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

definePageMeta({
  layout: 'blank',
  public: false,

})
</script>

<template>
  <div class="misc-wrapper">
    <div class="text-center mb-10">
      <!-- 👉 Title and subtitle -->
      <h4 class="text-h4 mb-2">
        Under Maintenance! 🚧
      </h4>
      <p class="mb-0 text-body-1">
        Sorry for the inconvenience but we're performing some maintenance at the moment
      </p>
    </div>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="miscUnderMaintenance"
        alt="Coming Soon"
        max-width="750"
        class="mx-auto"
      />
      <VBtn
        to="/"
        class="mt-10"
        style="z-index: 1;"
      >
        Back to Home
      </VBtn>
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
