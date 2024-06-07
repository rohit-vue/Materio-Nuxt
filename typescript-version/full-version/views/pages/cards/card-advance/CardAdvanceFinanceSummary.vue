<script setup lang="ts">
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Finance Summary</VCardTitle>
      <VCardSubtitle>Check out each Column for more details</VCardSubtitle>

      <template #append>
        <VAvatar
          size="44"
          color="primary"
          variant="tonal"
        >
          <VIcon
            size="28"
            icon="ri-question-line"
          />
        </VAvatar>
      </template>
    </VCardItem>

    <VCardText>
      <div class="d-flex flex-column gap-y-6">
        <div class="d-flex flex-wrap gap-y-4">
          <div style="min-inline-size: 210px;">
            <div class="mb-1">
              Annual Companies Taxes
            </div>
            <h5 class="text-h5">
              $1450.35
            </h5>
          </div>
          <div>
            <div class="mb-1">
              Next Tax Review Date
            </div>
            <h5 class="text-h5">
              July 14, 2021
            </h5>
          </div>
        </div>

        <div class="d-flex flex-wrap gap-y-4">
          <div style="min-inline-size: 210px;">
            <div class="mb-1">
              Average Product Price
            </div>
            <h5 class="text-h5">
              $85.50
            </h5>
          </div>

          <div>
            <div class="mb-1">
              Satisfaction Rate
            </div>
            <div
              class="d-flex align-center gap-5"
              style="inline-size: 130px;"
            >
              <div class="flex-grow-1">
                <VProgressLinear
                  color="primary"
                  rounded
                  rounded-bar
                  :model-value="75"
                  :height="6"
                />
              </div>
              <span>75%</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-space-between align-center">
          <div class="v-avatar-group">
            <VAvatar
              :size="40"
              :image="avatar7"
            />
            <VAvatar
              :size="40"
              :image="avatar8"
            />
            <VAvatar
              :size="40"
              :image="avatar6"
            />
            <VAvatar
              :color="$vuetify.theme.current.dark ? '#3A3B59' : '#F0EFF0'"
              :size="40"
            >
              +3
            </VAvatar>
          </div>
          <VChip
            color="primary"
            size="small"
          >
            5 days Ago
          </VChip>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
