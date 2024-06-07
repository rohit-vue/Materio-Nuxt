<script setup>
import { kFormatter } from '@core/utils/formatters'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'primary',
  },
  icon: {
    type: String,
    required: true,
  },
  stats: {
    type: Number,
    required: true,
  },
  change: {
    type: Number,
    required: true,
  },
})

const isPositive = computed(() => Math.sign(props.change) === 1)
</script>

<template>
  <VCard
    variant="text"
    border
  >
    <VCardText class="d-flex align-center">
      <VAvatar
        size="40"
        rounded
        class="elevation-2 me-4"
        style="background-color: rgb(var(--v-theme-surface));"
      >
        <VIcon
          :color="props.color"
          :icon="props.icon"
          :size="24"
        />
      </VAvatar>

      <div>
        <div class="text-body-1">
          {{ props.title }}
        </div>
        <div class="d-flex align-center flex-wrap">
          <h5 class="text-h5">
            {{ kFormatter(props.stats) }}
          </h5>

          <div
            v-if="props.change"
            :class="`${isPositive ? 'text-success' : 'text-error'} mt-1`"
          >
            <VIcon
              :icon="isPositive ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"
              size="24"
            />
            <span class="text-base">
              {{ Math.abs(props.change) }}%
            </span>
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.skin--bordered {
  .v-avatar {
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)) !important;
    box-shadow: none !important;
  }
}
</style>
