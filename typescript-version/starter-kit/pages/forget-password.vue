<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
import { themeConfig } from "@themeConfig";

import { VNodeRenderer } from "@layouts/components/VNodeRenderer";

const router = useRouter()

const form = ref({
  email: ""
})

async function handleEmail(email: string) {
  try {
    const response = await fetch("http://localhost:8000/api/send-reset-password-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    });

    if(!response.ok){
      throw new Error('Invalid email');
    }

    router.push({
      name: "reset-password"
    })
  } catch (e: any) {
    console.error(e);
  }
}

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
            <h4 class="text-h4 mb-1">Forgot Password? 🔒</h4>
            <p class="mb-0">Enter your email and we'll send you instructions to reset your password</p>
          </VCardText>

          <VCardText>
            <VForm @submit.prevent="handleEmail(form.email)">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="form.email"
                    label="Enter your email"
                    type="email"
                    placeholder="johndoe@email.com"
                  />
                </VCol>
                <VCol col="12" class="my-component">
                  <button class="myBtn" type="submit">
                    Send Reset Link
                  </button>
                </VCol>

                <!-- create account -->
                <VCol cols="12">
                  <NuxtLink
                    class="d-flex align-center justify-center"
                    :to="{ name: 'login' }"
                  >
                    <VIcon
                      icon="ri-arrow-left-s-line"
                      class=""
                      style="color:gray"
                    />
                    <span style="color:gray">Back to login</span>
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
