<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  divider: {
    type: Boolean,
    required: false,
    default: true,
  },
})
</script>

<template>
  <VDivider v-if="props.divider" />

  <div class="customizer-section">
    <div>
      <VChip
        label
        size="small"
        color="primary"
        rounded="sm"
      >
        {{ props.title }}
      </VChip>
    </div>

    <slot />
  </div>
</template>
