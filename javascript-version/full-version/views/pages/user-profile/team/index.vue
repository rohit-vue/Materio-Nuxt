<script setup>
const router = useRoute('pages-user-profile-tab')
const teamData = ref([])

const fetchTeamData = async () => {
  if (router.params.tab === 'teams') {
    const data = await $api('/pages/profile', { query: { tab: router.params.tab } }).catch(err => console.log(err))

    teamData.value = data
  }
}

watch(router, fetchTeamData, { immediate: true })

const moreList = [
  {
    title: 'Rename Project',
    value: 'Rename Project',
  },
  {
    title: 'View Details',
    value: 'View Details',
  },
  {
    title: 'Add to favorites',
    value: 'Add to favorites',
  },
  {
    type: 'divider',
    class: 'my-2',
  },
  {
    title: 'Leave Project',
    value: 'Leave Project',
    class: 'text-error',
  },
]
</script>

<template>
  <VRow v-if="teamData">
    <VCol
      v-for="team in teamData"
      :key="team.title"
      cols="12"
      md="6"
      lg="4"
    >
      <VCard>
        <VCardItem class="pb-4">
          <template #prepend>
            <VAvatar
              size="38"
              :image="team?.avatar"
            />
          </template>

          <VCardTitle>{{ team.title }}</VCardTitle>
          <template #append>
            <div class="me-n3">
              <IconBtn>
                <VIcon
                  icon="ri-star-line"
                  color="disabled"
                />
              </IconBtn>
              <MoreBtn
                item-props
                :menu-list="moreList"
                color="disabled"
              />
            </div>
          </template>
        </VCardItem>

        <VCardText>
          <div class="text-base mb-4">
            {{ team.description }}
          </div>

          <div class="d-flex">
            <div class="v-avatar-group">
              <VAvatar
                v-for="data in team.avatarGroup"
                :key="data.name"
                size="32"
              >
                <VImg :src="data.avatar" />
                <VTooltip
                  activator="parent"
                  location="top"
                >
                  {{ data.name }}
                </VTooltip>
              </VAvatar>
              <VAvatar
                v-if="team.extraMembers"
                :color="$vuetify.theme.current.dark ? '#3A3B59' : '#F0EFF0'"
                :size="32"
              >
                <div class="text-body-2 text-high-emphasis font-weight-medium">
                  +{{ team.extraMembers }}
                </div>
              </VAvatar>
            </div>
            <VSpacer />
            <div class="d-flex align-center gap-2">
              <VChip
                v-for="data in team.chips"
                :key="data.title"
                :color="data.color"
                size="small"
              >
                {{ data.title }}
              </VChip>
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
