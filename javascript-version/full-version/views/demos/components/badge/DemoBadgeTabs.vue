<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
</script>

<template>
  <VTabs
    grow
    height="52"
  >
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        floating
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
