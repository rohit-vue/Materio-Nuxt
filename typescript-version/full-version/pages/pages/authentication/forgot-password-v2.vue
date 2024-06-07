<script setup lang="ts">
import authV2ForgotPasswordIllustrationBorderedDark from '@images/pages/auth-v2-forgot-password-illustration-dark-border.png'
import authV2ForgotPasswordIllustrationDark from '@images/pages/auth-v2-forgot-password-illustration-dark.png'
import authV2ForgotPasswordIllustrationBorderedLight from '@images/pages/auth-v2-forgot-password-illustration-light-border.png'
import authV2ForgotPasswordIllustrationLight from '@images/pages/auth-v2-forgot-password-illustration-light.png'

import tree1 from '@images/misc/tree1.png'
import authV2MaskDark from '@images/pages/mask-v2-dark.png'
import authV2MaskLight from '@images/pages/mask-v2-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const authThemeImg = useGenerateImageVariant(
  authV2ForgotPasswordIllustrationLight,
  authV2ForgotPasswordIllustrationDark,
  authV2ForgotPasswordIllustrationBorderedLight,
  authV2ForgotPasswordIllustrationBorderedDark,
  true)

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

definePageMeta({
  layout: 'blank',

})

const email = ref('')
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
      cols="12"
      md="8"
      class="d-none d-md-flex position-relative"
    >
      <div
        class="d-flex align-center justify-end w-100 h-100 pa-10"
        :class="$vuetify.locale.isRtl ? 'pe-10' : 'pe-0'"
      >
        <VImg
          width="853"
          height="684"
          :src="authThemeImg"
          class="auth-illustration"
        />
      </div>

      <img
        class="auth-footer-mask"
        height="360"
        :src="authThemeMask"
      >

      <img
        :src="tree1"
        alt="tree image"
        height="140"
        class="auth-footer-tree"
      >
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
            Forgot Password? 🔒
          </h4>
          <p class="mb-0">
            Enter your email and we'll send you instructions to reset your password
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="email"
                  autofocus
                  label="Email"
                  placeholder="johndoe@email.com"
                  type="email"
                />
              </VCol>

              <!-- Reset link -->
              <VCol cols="12">
                <VBtn
                  block
                  type="submit"
                >
                  Send Reset Link
                </VBtn>
              </VCol>

              <!-- back to login -->
              <VCol cols="12">
                <NuxtLink
                  class="d-flex align-center justify-center"
                  :to="{ name: 'pages-authentication-login-v2' }"
                >
                  <VIcon
                    icon="ri-arrow-left-s-line"
                    class="flip-in-rtl"
                  />
                  <span>Back to login</span>
                </NuxtLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
