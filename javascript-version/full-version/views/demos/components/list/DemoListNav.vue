<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'ri-folder-line',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'ri-group-line',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'ri-star-line',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'ri-history-line',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'ri-checkbox-circle-line',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'ri-upload-line',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'ri-upload-cloud-line',
  },
]
</script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
