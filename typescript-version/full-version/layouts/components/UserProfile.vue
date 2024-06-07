<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const ability = useAbility()

// TODO: Get type from backend
const userData = useCookie<any>('userData')

const { signOut } = useAuth()

async function logout() {
  try {
    await signOut({ redirect: false })

    // Remove "userData" from cookie
    userData.value = null

    // Reset user abilities
    ability.update([])

    navigateTo({ name: 'login' })
  }
  catch (error) {
    throw createError(error)
  }
}

const userProfileList = [
  { type: 'divider' },
  {
    type: 'navItem',
    icon: 'ri-user-line',
    title: 'Profile',
    to: { name: 'apps-user-view-id', params: { id: 21 } },
  },
  {
    type: 'navItem',
    icon: 'ri-settings-4-line',
    title: 'Settings',
    to: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
  },
  {
    type: 'navItem',
    icon: 'ri-file-text-line',
    title: 'Billing Plan',
    to: { name: 'pages-account-settings-tab', params: { tab: 'billing-plans' } },
    badgeProps: { color: 'error', content: '4' },
  },
  { type: 'divider' },
  {
    type: 'navItem',
    icon: 'ri-money-dollar-circle-line',
    title: 'Pricing',
    to: { name: 'pages-pricing' },
  },
  {
    type: 'navItem',
    icon: 'ri-question-line',
    title: 'FAQ',
    to: { name: 'pages-faq' },
  },
  { type: 'divider' },

]
</script>

<template>
  <VBadge
    v-if="userData"
    dot
    bordered
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      size="38"
      :color="!(userData && userData.avatar) ? 'primary' : undefined"
      :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
    >
      <VImg
        v-if="userData && userData.avatar"
        :src="userData.avatar"
      />
      <VIcon
        v-else
        icon="ri-user-line"
      />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="15px"
      >
        <VList>
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    :color="!(userData && userData.avatar) ? 'primary' : undefined"
                    :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
                  >
                    <VImg
                      v-if="userData && userData.avatar"
                      :src="userData.avatar"
                    />
                    <VIcon
                      v-else
                      icon="ri-user-line"
                    />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <h6 class="text-h6 font-weight-medium">
              {{ userData.fullName || userData.username }}
            </h6>
            <VListItemSubtitle class="text-capitalize text-disabled">
              {{ userData.role }}
            </VListItemSubtitle>
          </VListItem>

          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <template
              v-for="item in userProfileList"
              :key="item.title"
            >
              <VListItem
                v-if="item.type === 'navItem'"
                :to="item.to"
              >
                <template #prepend>
                  <VIcon
                    :icon="item.icon"
                    size="22"
                  />
                </template>

                <VListItemTitle>{{ item.title }}</VListItemTitle>

                <template
                  v-if="item.badgeProps"
                  #append
                >
                  <VBadge
                    inline
                    v-bind="item.badgeProps"
                  />
                </template>
              </VListItem>

              <VDivider
                v-else
                class="my-1"
              />
            </template>

            <VListItem>
              <VBtn
                block
                color="error"
                size="small"
                append-icon="ri-logout-box-r-line"
                @click="logout"
              >
                Logout
              </VBtn>
            </VListItem>
          </PerfectScrollbar>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
