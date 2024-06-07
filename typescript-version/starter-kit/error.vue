<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'
import miscMaskDark from '@images/misc/misc-mask-dark.png'
import miscMaskLight from '@images/misc/misc-mask-light.png'
import tree1 from '@images/misc/tree1.png'
import tree3 from '@images/misc/tree3.png'
import misc404 from '@images/pages/404.png'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  error: NuxtError
}>()

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

const isDev = process.dev

const errToShow = computed(() => {
  const is404 = props.error?.statusCode === 404 || props.error.message?.includes('404')

  if (is404) {
    return {
      title: 'Page Not Found',
      description: 'We couldn\'t find the page you are looking for.',
    }
  }

  else if (isDev) {
    return {
      title: props.error?.statusMessage,
      description: props.error.message,
    }
  }

  return {
    title: 'Oops! Something went wrong.',
    description: 'We are working on it and we\'ll get it fixed as soon as we can',
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout name="blank">
    <div class="misc-wrapper">
      <ErrorHeader
        :status-code="props.error.statusCode"
        :title="errToShow.title"
        :description="errToShow.description"
        class="mb-10"
      />

      <!-- eslint-disable vue/no-v-html -->
      <div
        v-if="isDev"
        style="max-inline-size: 80dvw; overflow-x: scroll;"
        v-html="error.stack"
      />
      <!-- eslint-enable -->

      <!-- 👉 Image -->
      <div class="misc-avatar w-100 text-center">
        <VImg
          :src="misc404"
          alt="Coming Soon"
          :max-width="800"
          class="mx-auto"
        />
        <VBtn
          class="mt-10"
          style="z-index: 1;"
          @click="handleError"
        >
          Back to Home
        </VBtn>

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
    </div>
  </NuxtLayout>
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
