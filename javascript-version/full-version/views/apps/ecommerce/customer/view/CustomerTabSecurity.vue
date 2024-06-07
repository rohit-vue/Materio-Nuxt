<script setup>
import chrome from '@images/logos/chrome.png'

const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const smsVerificationNumber = ref('+1(968) 819-2547')
const isTwoFactorDialogOpen = ref(false)

const recentDeviceHeader = [
  {
    title: 'BROWSER',
    key: 'browser',
  },
  {
    title: 'DEVICE',
    key: 'device',
  },
  {
    title: 'LOCATION',
    key: 'location',
  },
  {
    title: 'RECENT ACTIVITY',
    key: 'activity',
  },
]

const recentDevices = [
  {
    browser: 'Chrome on Windows',
    logo: chrome,
    device: 'Dell XPS 15',
    location: 'United States',
    activity: '10, Jan 2020 20:07',
  },
  {
    browser: 'Chrome on Android',
    logo: chrome,
    device: 'Google Pixel 3a',
    location: 'Ghana',
    activity: '11, Jan 2020 10:16',
  },
  {
    browser: 'Chrome on macOS',
    logo: chrome,
    device: 'Apple iMac',
    location: 'Mayotte',
    activity: '11, Jan 2020 12:10',
  },
  {
    browser: 'Chrome on iPhone',
    logo: chrome,
    device: 'Apple iPhone XR',
    location: 'Mauritania',
    activity: '12, Jan 2020 8:29',
  },
]
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Change password -->
      <VCard title="Change Password">
        <VCardText>
          <VAlert
            variant="tonal"
            color="warning"
            closable
            class="mb-4"
          >
            <VAlertTitle>Ensure that these requirements are met</VAlertTitle>
            <span>Minimum 8 characters long, uppercase & symbol</span>
          </VAlert>

          <VForm @submit.prevent="() => {}">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="New Password"
                  placeholder="············"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="Confirm Password"
                  placeholder="············"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <VBtn type="submit">
                  Change Password
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Two step verification -->
      <VCard
        title="Two-step verification"
        subtitle="Keep your account secure with authentication step."
      >
        <VCardText>
          <div>
            <h4 class="font-weight-medium mb-1">
              SMS
            </h4>
            <VTextField
              density="compact"
              variant="outlined"
              :model-value="smsVerificationNumber"
              readonly
            >
              <template #append>
                <VBtn
                  icon
                  rounded
                  variant="outlined"
                  color="secondary"
                  class="me-2"
                >
                  <VIcon
                    icon="ri-edit-box-line"
                    size="24"
                    @click="isTwoFactorDialogOpen = true"
                  />
                </VBtn>
                <VBtn
                  icon
                  rounded
                  variant="outlined"
                  color="secondary"
                >
                  <VIcon
                    size="24"
                    icon="ri-user-add-line"
                  />
                </VBtn>
              </template>
            </VTextField>
          </div>

          <p class="mb-0 mt-4">
            Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. <a
              href="javascript:void(0)"
              class="text-decoration-none"
            >Learn more</a>.
          </p>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Recent devices -->
      <VCard title="Recent devices">
        <VDataTable
          :items="recentDevices"
          :headers="recentDeviceHeader"
          hide-default-footer
          class="text-no-wrap rounded-0"
        >
          <template #item.browser="{ item }">
            <div class="d-flex text-high-emphasis">
              <VAvatar
                :image="item.logo"
                :size="22"
                class="me-4"
              />
              {{ item.browser }}
            </div>
          </template>
          <!-- TODO Refactor this after vuetify provides proper solution for removing default footer -->
          <template #bottom />
        </VDataTable>
      </VCard>
    </VCol>
  </VRow>

  <!-- 👉 Enable One Time Password Dialog -->
  <TwoFactorAuthDialog
    v-model:isDialogVisible="isTwoFactorDialogOpen"
    :sms-code="smsVerificationNumber"
  />
</template>
