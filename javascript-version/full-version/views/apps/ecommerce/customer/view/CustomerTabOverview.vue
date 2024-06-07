<script setup>
import CustomerOrderTable from './CustomerOrderTable.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="primary"
            icon="ri-money-dollar-circle-line"
            rounded
          />
          <h6 class="text-lg font-weight-medium">
            Account Balance
          </h6>
          <div class="text-base">
            <p class="mb-0">
              <span class="text-primary font-weight-medium text-lg me-1">$7480</span>
              Credit Left
            </p>
            <p class="mb-0 text-base">
              Account balance for next purchase
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="success"
            icon="ri-gift-line"
            rounded
          />
          <h6 class="text-lg font-weight-medium">
            Loyalty Program
          </h6>
          <div>
            <VChip
              color="success"
              size="small"
              class="mb-2"
            >
              Platinum Member
            </VChip>

            <p class="mb-0 text-base">
              3000 points to next tier
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="warning"
            icon="ri-star-smile-line"
            rounded
          />
          <h6 class="text-lg font-weight-medium">
            Wishlist
          </h6>
          <div>
            <p class=" mb-0">
              <span class="text-warning font-weight-medium text-lg me-1">15</span>
              items in wishlist
            </p>
            <p class="mb-0 text-base">
              Receive notification when items go on sale
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="info"
            icon="ri-vip-crown-line"
            rounded
          />
          <h6 class="text-lg font-weight-medium">
            Coupons
          </h6>
          <div>
            <p class="mb-0">
              <span class="text-info text-lg me-2">21</span>
              Coupons you win
            </p>
            <p class="mb-0 text-base">
              Use coupon on next purchase
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <CustomerOrderTable />
    </VCol>
  </VRow>
</template>
