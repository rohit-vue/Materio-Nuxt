<script setup>
import tree2 from '@images/misc/tree2.png'
import authV2MaskDark from '@images/pages/mask-v2-dark.png'
import authV2MaskLight from '@images/pages/mask-v2-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import authV2VerifyEmailIllustrationBorderedDark from '@images/pages/auth-v2-verify-email-illustration-border-dark.png'
import authV2VerifyEmailIllustrationBorderedLight from '@images/pages/auth-v2-verify-email-illustration-border-light.png'
import authV2VerifyEmailIllustrationDark from '@images/pages/auth-v2-verify-email-illustration-dark.png'
import authV2VerifyEmailIllustrationLight from '@images/pages/auth-v2-verify-email-illustration-light.png'

const authThemeImg = useGenerateImageVariant(authV2VerifyEmailIllustrationLight, authV2VerifyEmailIllustrationDark, authV2VerifyEmailIllustrationBorderedLight, authV2VerifyEmailIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

definePageMeta({
  layout: 'blank', 
})
</script>

<template>
  <NuxtLink to="/">
    <div class="auth-logo d-flex align-center gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </NuxtLink>

  <VRow
    class="auth-wrapper"
    no-gutters
  >
    <VCol
      md="8"
      class="d-none d-md-flex position-relative"
    >
      <!-- here your illustration -->
      <div
        class="d-flex align-center justify-end w-100 h-100 pa-10 "
        :class="$vuetify.locale.isRtl ? 'pe-10' : 'pe-0'"
      >
        <VImg
          max-width="808"
          :src="authThemeImg"
          class="auth-illustration"
        />
      </div>

      <img
        class="auth-footer-mask"
        height="360"
        :src="authThemeMask"
      >
      <div class="d-flex gap-x-2 auth-footer-tree">
        <img
          :src="tree2"
          alt="tree image"
          height="180"
          width="48"
        >
        <img
          :src="tree2"
          alt="tree image"
          height="120"
          width="32"
          class="align-self-end"
        >
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
      style="background-color: rgb(var(--v-theme-surface));"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
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
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
