<script setup>
import message from '@images/cards/comment-alt-lines.svg'
import chart from '@images/cards/graph-bar.svg'
import heart from '@images/cards/heart-medical.svg'
import user from '@images/cards/user.svg'

const analytics = [
  {
    title: '42.8k',
    subtitle: 'Number of like',
    img: heart,
    color: 'primary',
  },
  {
    title: '21.2k',
    subtitle: 'Number of Followers',
    img: chart,
    color: 'warning',
  },
  {
    title: '2.4k',
    subtitle: 'Number of Comments',
    img: message,
    color: 'info',
  },
  {
    title: '389.50k',
    subtitle: 'Number of Visits',
    img: user,
    color: 'success',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>
        Analytics
      </VCardTitle>

      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="item in analytics"
          :key="item.title"
        >
          <template #prepend>
            <VAvatar
              size="40"
              :color="item.color"
              variant="tonal"
            >
              <component :is="item.img" />
            </VAvatar>
          </template>

          <VListItemTitle>
            <h5 class="text-h5">
              {{ item.title }}
            </h5>
          </VListItemTitle>

          <VListItemSubtitle>
            <div class="text-body-1">
              {{ item.subtitle }}
            </div>
          </VListItemSubtitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 24px;
}
</style>
