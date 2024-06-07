<script setup>
const props = defineProps({
  connectionsData: {
    type: Array,
    required: true,
  },
})

const moreList = [
  {
    title: 'Share connections',
    value: 'Share connections',
  },
  {
    title: 'Suggest edits',
    value: 'Suggest edits',
  },
  {
    title: 'Report Bug',
    value: 'Report Bug',
  },
]
</script>

<template>
  <VCard
    title="Connection"
    class="connectionCard"
  >
    <template #append>
      <div class="me-n2">
        <MoreBtn
          :menu-list="moreList"
          density="compact"
        />
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="data in props.connectionsData"
          :key="data.name"
        >
          <template #prepend>
            <VAvatar
              size="38"
              :image="data.avatar"
            />
          </template>

          <VListItemTitle class="font-weight-medium mb-1">
            {{ data.name }}
          </VListItemTitle>
          <VListItemSubtitle>{{ data.connections }} Connections</VListItemSubtitle>

          <template #append>
            <VBtn
              icon
              class="rounded"
              :variant="data.isFriend ? 'elevated' : 'outlined' "
            >
              <VIcon
                size="24"
                :icon="data.isFriend ? 'ri-user-line' : 'ri-user-add-line'"
              />
            </VBtn>
          </template>
        </VListItem>

        <VListItem>
          <VListItemTitle>
            <VBtn
              block
              variant="text"
            >
              View all connections
            </VBtn>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>

<style lang="scss">
.connectionCard{
  .v-list{
    .v-list-item{
      &__prepend{
        .v-list-item__spacer{
          inline-size: 8px !important;
        }
      }
    }
  }
}
</style>
