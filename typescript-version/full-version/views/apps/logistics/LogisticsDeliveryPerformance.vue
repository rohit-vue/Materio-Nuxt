<script setup lang="ts">
const deliveryData = [
  { title: 'Packages in transit', value: '10k', change: 25.8, icon: 'ri-gift-line', color: 'primary' },
  { title: 'Packages out for delivery', value: '5k', change: 4.3, icon: 'ri-car-line', color: 'info' },
  { title: 'Packages delivered', value: '15k', change: -12.5, icon: 'ri-check-line', color: 'success' },
  { title: 'Delivery success rate', value: '95%', change: 35.6, icon: 'ri-home-line', color: 'warning' },
  { title: 'Average delivery time', value: '2.5 Days', change: -2.15, icon: 'ri-timer-line', color: 'secondary' },
  { title: 'Customer satisfaction', value: '4.5/5', change: 5.7, icon: 'ri-user-line', color: 'error' },
]
</script>

<template>
  <VCard>
    <VCardItem
      title="Delivery performance"
      subtitle="12% increase in this month"
    >
      <template #append>
        <MoreBtn class="mt-n5" />
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="(data, index) in deliveryData"
          :key="index"
        >
          <template #prepend>
            <VAvatar
              :color="data.color"
              variant="tonal"
              rounded
              size="42"
            >
              <VIcon
                :icon="data.icon"
                size="26"
              />
            </VAvatar>
          </template>
          <VListItemTitle>{{ data.title }}</VListItemTitle>
          <VListItemSubtitle>
            <div
              :class="data.change > 0 ? 'text-success' : 'text-error'"
              class="d-flex align-center"
            >
              <VIcon
                :icon="data.change > 0 ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"
                size="24"
                class="me-1"
              />
              <span>{{ data.change }}%</span>
            </div>
          </VListItemSubtitle>
          <template #append>
            <span class="text-high-emphasis text-body-1 font-weight-medium">
              {{ data.value }}
            </span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
