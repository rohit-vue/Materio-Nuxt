<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: false,
    default: 'ri-close-line',
  },
  iconSize: {
    type: String,
    required: false,
    default: '24',
  },
})
</script>

<template>
  <IconBtn class="v-dialog-close-btn">
    <VIcon
      :icon="props.icon"
      :size="props.iconSize"
    />
  </IconBtn>
</template>
