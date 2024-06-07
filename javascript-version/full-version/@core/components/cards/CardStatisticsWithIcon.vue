<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  change: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between">
        <div class="d-flex flex-column gap-y-1">
          <div class="text-body-1 text-high-emphasis">
            {{ title }}
          </div>
          <div>
            <h5 class="text-h5">
              {{ value }}
              <span
                class="text-base"
                :class="change > 0 ? 'text-success' : 'text-error'"
              >({{ prefixWithPlus(change) }}%)</span>
            </h5>
          </div>
          <div class="text-body-2">
            {{ desc }}
          </div>
        </div>
        <VAvatar
          :color="iconColor"
          variant="tonal"
          rounded
          size="42"
        >
          <VIcon
            :icon="icon"
            size="26"
          />
        </VAvatar>
      </div>
    </VCardText>
  </VCard>
</template>
