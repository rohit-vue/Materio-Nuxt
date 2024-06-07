<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['cancel'])
</script>

<template>
  <div class="pa-5 d-flex align-center">
    <h5 class="text-h5">
      {{ props.title }}
    </h5>
    <VSpacer />

    <slot name="beforeClose" />

    <IconBtn
      class="text-medium-emphasis"
      size="x-small"
      @click="$emit('cancel', $event)"
    >
      <VIcon
        icon="ri-close-line"
        size="24"
      />
    </IconBtn>
  </div>
</template>
