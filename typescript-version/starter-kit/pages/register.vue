<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import { themeConfig } from "@themeConfig";

import { VNodeRenderer } from "@layouts/components/VNodeRenderer";

const form = ref({
  username: "",
  email: "",
  password: "",
  privacyPolicies: false,
})

const isPasswordVisible = ref(false);

definePageMeta({
  layout: "blank",
})
</script>

<template>
  <VContainer class="vh-100 mt-16">
    <VRow align="center" justify="center">
      <VCol
        cols="12"
        md="5"
        class="auth-card-v2 d-flex align-center pt-8"
        style="background-color: rgb(var(--v-theme-surface)); width: 80"
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
            <h4 class="text-h4 mb-1">Adventure starts here 🚀</h4>
            <p class="mb-0">Make your app management easy and fun!</p>
          </VCardText>

          <VCardText>
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- Username -->
                <VCol cols="12">
                  <VTextField
                    v-model="form.username"
                    autofocus
                    label="Username"
                    placeholder="Johndoe"
                  />
                </VCol>

                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="form.email"
                    label="Email"
                    type="email"
                    placeholder="johndoe@email.com"
                  />
                </VCol>

                <!-- password -->
                <VCol cols="12" class="my-component">
                  <!-- <v-textarea label="Label" variant="outlined"></v-textarea> -->
                  <VTextField
                    class="text-field"
                    v-model="form.password"
                    label="Password"
                    placeholder="············"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="
                      isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'
                    "
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <div class="d-flex align-center my-4">
                    <VCheckbox
                      id="privacy-policy"
                      v-model="form.privacyPolicies"
                      inline
                    />
                    <VLabel for="privacy-policy" style="opacity: 1">
                      <span class="me-1 text-high-emphasis">I agree to</span>
                      <a href="javascript:void(0)" style="color: gray"
                        >privacy policy & terms</a
                      >
                    </VLabel>
                  </div>

                  <VBtn class="myBtn" block type="submit"> Sign up </VBtn>
                </VCol>

                <!-- create account -->
                <VCol cols="12">
                  <div class="text-center text-base">
                    <span class="d-inline-block mr-1" style="color: black"
                      >Already have an account?</span
                    >
                    <NuxtLink
                      class="d-inline-block"
                      style="color: gray"
                      :to="{ name: 'login' }"
                    >
                      Sign in instead
                    </NuxtLink>
                  </div>
                </VCol>

                <VCol cols="12">
                  <div class="d-flex align-center">
                    <VDivider />
                    <span class="mx-4 text-high-emphasis">or</span>
                    <VDivider />
                  </div>
                </VCol>

                <!-- auth providers -->
                <VCol cols="12" class="text-center">
                  <AuthProvider />
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
