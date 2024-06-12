<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import { themeConfig } from "@themeConfig";

import { VNodeRenderer } from "@layouts/components/VNodeRenderer";

const router = useRouter()

const form = ref({
  newPassword: '',
  confirmPassword: ''
})

// async function handleEmail(email: string) {
//   try {
//     const response = await fetch("http://localhost:8000/api/send-reset-password-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({email}),
//     });

//     if(!response.ok){
//       throw new Error('Invalid email');
//     }

//     router.push({
//       name: "login"
//     })
//   } catch (e: any) {
//     console.error(e);
//   }
// }

definePageMeta({
  layout: "blank",
})
</script>

<template>
  <VContainer>
    <VRow class="my-container">
      <VCol
        cols="12"
        md="4"
        class="auth-card-v2 d-flex align-center pt-8 mt-16"
        style="background-color: rgb(var(--v-theme-surface));"
      >
        <VCard flat :max-width="500">
          <div
            class="auth-logo gap-x-3"
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              font: 24px;
            "
          >
            <VNodeRenderer :nodes="themeConfig.app.logo" />
            <h1 class="auth-title">matter</h1>
          </div>
          <VCardText class="mt-1">
            <h4 class="text-h4 mb-1">Verify your email ✉️</h4>
            <p class="mb-0">Account activation link sent to your email address: <b>john.doe@email.com</b> Please follow the link inside to continue.</p>
          </VCardText>

          <VCardText>
            <!-- <p class="mb-0">Type your 6 digit security code</p> -->
            <VForm @submit.prevent="">
              <VRow>
                <!-- Password resetting -->
                <!-- <VCol cols="12">
                  <vOtpInput />
                </VCol> -->
                <VCol col="12" class="my-component">
                  <NuxtLink
                    :to="{ name: 'index' }"
                  >
                    <VBtn class="myBtn" block type="submit"> Skip For Now </VBtn>
                  </NuxtLink>
                </VCol>

                <!-- create account -->
                <VCol cols="12">
                  <NuxtLink
                    class="d-flex align-center justify-center"
                    :to="{ name: '' }"
                  >
                    <p class="mb-0" style="color:black">Didn't get the mail?</p>
                    <span style="color:gray; margin-left: 5px">Resend</span>
                  </NuxtLink>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss">
@use "assets/styles/styles.scss";
</style>
