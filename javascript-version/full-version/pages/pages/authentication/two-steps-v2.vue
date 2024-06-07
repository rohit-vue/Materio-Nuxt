<script setup>
import tree2 from '@images/misc/tree2.png'
import authV2MaskDark from '@images/pages/mask-v2-dark.png'
import authV2MaskLight from '@images/pages/mask-v2-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import authV2TwoStepsIllustrationBorderedDark from '@images/pages/auth-v2-two-steps-illustration-border-dark.png'
import authV2TwoStepsIllustrationBorderedLight from '@images/pages/auth-v2-two-steps-illustration-border-light.png'
import authV2TwoStepsIllustrationDark from '@images/pages/auth-v2-two-steps-illustration-dark.png'
import authV2TwoStepsIllustrationLight from '@images/pages/auth-v2-two-steps-illustration-light.png'

const authThemeImg = useGenerateImageVariant(authV2TwoStepsIllustrationLight, authV2TwoStepsIllustrationDark, authV2TwoStepsIllustrationBorderedLight, authV2TwoStepsIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

definePageMeta({
  layout: 'blank', 
})

const router = useRouter()
const otp = ref('')
const isOtpInserted = ref(false)

const onFinish = () => {
  isOtpInserted.value = true
  setTimeout(() => {
    isOtpInserted.value = false
    router.push('/')
  }, 2000)
}
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

  <div>
    <VRow
      class="auth-wrapper"
      no-gutters
    >
      <VCol
        md="8"
        class="d-none d-md-flex position-relative"
      >
        <!-- Here your illustrator -->
        <div class="d-flex align-center justify-end w-100 h-100 pa-10 pe-0">
          <VImg
            max-width="753"
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
              Two Step Verification 💬
            </h4>
            <p class="mb-1">
              We sent a verification code to your mobile. Enter the code from the mobile in the field below.
            </p>
            <h6 class="text-h6">
              ******1234
            </h6>
          </VCardText>

          <VCardText>
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <div>Type your 6 digit security code</div>
                  <VOtpInput
                    v-model="otp"
                    :disabled="isOtpInserted"
                    type="number"
                    class="pa-0"
                    @finish="onFinish"
                  />
                </VCol>

                <!-- reset password -->

                <VCol cols="12">
                  <VBtn
                    block
                    :loading="isOtpInserted"
                    :disabled="isOtpInserted"
                    type="submit"
                  >
                    Verify my account
                  </VBtn>
                </VCol>

                <!-- back to login -->
                <VCol cols="12">
                  <div class="d-flex justify-center align-center flex-wrap">
                    <span class="me-1">Didn't get the code?</span>
                    <a href="#">Resend</a>
                  </div>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";

// .auth-illustration{
//   inset-block-end: 11.5rem;
//   inset-inline-end: 1.25rem;
// }
</style>
