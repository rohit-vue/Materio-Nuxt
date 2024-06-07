<script setup lang="ts">
import miscMaskDark from '@images/misc/misc-mask-dark.png'
import miscMaskLight from '@images/misc/misc-mask-light.png'
import tree1 from '@images/misc/tree1.png'
import tree3 from '@images/misc/tree3.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

definePageMeta({
  layout: 'blank',

})
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-sm-4 pa-md-7 pa-0"
      max-width="460"
    >
      <VCardText>
        <div class="d-flex align-center gap-x-3 justify-center mb-6">
          <VNodeRenderer :nodes="themeConfig.app.logo" />

          <h1 class="auth-title">
            {{ themeConfig.app.title }}
          </h1>
        </div>

        <h4 class="text-h4 mb-1">
          Verify your email ✉️
        </h4>
        <p class="mb-5">
          Account activation link sent to your email address: hello@example.com Please follow the link inside to continue.
        </p>

        <VBtn
          block
          to="/"
          class="mb-5"
        >
          Skip for now
        </VBtn>

        <div class="d-flex align-center justify-center">
          <span class="me-1">Didn't get the mail? </span><a href="#">Resend</a>
        </div>
      </VCardText>
    </VCard>
    <div class="d-flex gap-x-2 auth-footer-start-tree">
      <img
        class="d-none d-md-block"
        :src="tree3"
        :height="120"
        :width="67"
      >
      <img
        class="d-none d-md-block align-self-end"
        :src="tree3"
        :height="70"
        :width="40"
      >
    </div>

    <img
      :src="tree1"
      class="auth-footer-end-tree d-none d-md-block"
      :width="97"
      :height="210"
    >

    <!-- bg img -->
    <img
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
      height="172"
    >
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
