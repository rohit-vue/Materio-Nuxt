<script setup>
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
