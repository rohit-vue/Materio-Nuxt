<script setup lang="ts">
import SettingsCheckout from '@/views/apps/ecommerce/settings/SettingsCheckout.vue'
import SettingsLocations from '@/views/apps/ecommerce/settings/SettingsLocations.vue'
import SettingsNotifications from '@/views/apps/ecommerce/settings/SettingsNotifications.vue'
import SettingsPayment from '@/views/apps/ecommerce/settings/SettingsPayment.vue'
import SettingsShippingAndDelivery from '@/views/apps/ecommerce/settings/SettingsShippingAndDelivery.vue'
import SettingsStoreDetails from '@/views/apps/ecommerce/settings/SettingsStoreDetails.vue'

const tabsData = [
  { icon: 'ri-store-line', title: 'Store Details' },
  { icon: 'ri-bank-card-line', title: 'Payments' },
  { icon: 'ri-shopping-cart-line', title: 'Checkout' },
  { icon: 'ri-car-line', title: 'Shipping & Delivery' },
  { icon: 'ri-map-pin-line', title: 'Location' },
  { icon: 'ri-notification-3-line', title: 'Notifications' },
]

const activeTab = ref(null)
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
    >
      <h5 class="text-h5 mb-4">
        Getting Started
      </h5>

      <VTabs
        v-model="activeTab"
        direction="vertical"
        class="v-tabs-pill disable-tab-transition"
      >
        <VTab
          v-for="(tabItem, index) in tabsData"
          :key="index"
          :prepend-icon="tabItem.icon"
        >
          {{ tabItem.title }}
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <VWindow
        v-model="activeTab"
        class="disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <SettingsStoreDetails />
        </VWindowItem>

        <VWindowItem>
          <SettingsPayment />
        </VWindowItem>

        <VWindowItem>
          <SettingsCheckout />
        </VWindowItem>

        <VWindowItem>
          <SettingsShippingAndDelivery />
        </VWindowItem>

        <VWindowItem>
          <SettingsLocations />
        </VWindowItem>

        <VWindowItem>
          <SettingsNotifications />
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
