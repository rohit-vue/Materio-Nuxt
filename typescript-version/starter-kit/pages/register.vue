<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import { themeConfig } from "@themeConfig";

import { VNodeRenderer } from "@layouts/components/VNodeRenderer";

const router = useRouter()
const isPasswordVisible = ref(false);
const error = ref()
const isLoading = ref(false);

const form = ref({
  username: "",
  email: "",
  password: "",
  privacyPolicies: true,
})

async function handleFormSubmit() {

  try {
    isLoading.value = true;
    error.value = ''

    if (!form.value.privacyPolicies) {
      error.value = 'You must accept the privacy & terms'
      return
    }

    // Register the user
    await useFetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: form.value,
    });

    // Send email verification link
    await fetch("http://localhost:8000/api/verify/{id}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: form.value.email }),
    });

    router.push({
      name: "verify-email",
    });
  } catch (e: any) {
    error.value = e.message
    console.error(e)
  } finally {
    isLoading.value = false;
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
        class="auth-card-v2 d-flex align-center pt-8"
        style="background-color: rgb(var(--v-theme-surface))"
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
            <VForm @submit.prevent="handleFormSubmit()">
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
                      v-model="form.privacyPolicies"
                      inline
                    />

                    <VLabel for="privacy-policy" style="opacity: 1">
                      <span class="me-1 text-high-emphasis">I agree to</span>
                      <a href="javascript:void(0)" style="color: gray">privacy policy & terms</a>
                    </VLabel>
                  </div>

                    <p v-if="error" style="color: red">{{ error }}</p>
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
