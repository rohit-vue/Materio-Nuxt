<script setup lang="ts">
import { kFormatter } from '@core/utils/formatters'

import arrowGrowth from '@images/cards/arrow-growth.png'
import atmCard from '@images/cards/atm-card.png'
import creditCard from '@images/cards/credit-card.png'
import paypal from '@images/cards/paypal.png'
import wallet from '@images/cards/wallet.png'

interface Colors {
  'PayPal': string
  'Credit Card': string
  'Mastercard': string
  'Wallet': string
  'Transfer': string
}

interface Transactions {
  gateway: keyof Colors
  for: string
  amount: number
  img: string
  imgHeight?: number
}

const transactions: Transactions[] = [
  {
    gateway: 'PayPal',
    for: 'Received Money',
    amount: 2482,
    img: paypal,
    imgHeight: 22,
  },
  {
    gateway: 'Credit Card',
    for: 'DigitalOcean',
    amount: -1250,
    img: creditCard,
    imgHeight: 15,
  },
  {
    gateway: 'Mastercard',
    for: 'Netflix',
    amount: -99,
    img: atmCard,
    imgHeight: 15,
  },
  {
    gateway: 'Wallet',
    for: 'Mac\'D',
    amount: -82,
    img: wallet,
    imgHeight: 18,
  },
  {
    gateway: 'Transfer',
    for: 'Refund',
    amount: 8934,
    img: arrowGrowth,
    imgHeight: 12,
  },
  {
    gateway: 'Wallet',
    for: 'Buy Apple Watch',
    amount: -399,
    img: wallet,
    imgHeight: 18,
  },
]

const transactionsColors: Colors = {
  'PayPal': 'error',
  'Credit Card': 'success',
  'Mastercard': 'warning',
  'Wallet': 'primary',
  'Transfer': 'info',
}

const formateAmount = (amount: number) => {
  return Math.sign(amount) === 1 ? `+$${kFormatter(amount)}` : `-$${Math.abs(amount)}`
}
</script>

<template>
  <VCard>
    <!-- SECTION Card Header and Menu -->
    <VCardItem>
      <!-- 👉 Title -->
      <VCardTitle>Transactions</VCardTitle>

      <!-- 👉 menu -->
      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>
    <!-- !SECTION -->

    <!-- SECTION Transactions List -->
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="transaction in transactions"
          :key="transaction.for"
        >
          <!-- 👉 Avatar -->
          <template #prepend>
            <VAvatar
              rounded
              variant="tonal"
              :color="transactionsColors[transaction.gateway]"
            >
              <img
                :src="transaction.img"
                :height="transaction.imgHeight"
              >
            </VAvatar>
          </template>

          <!-- 👉 Title and Subtitle  -->
          <VListItemTitle>
            <h6 class="text-h6">
              {{ transaction.gateway }}
            </h6>
          </VListItemTitle>
          <VListItemSubtitle>
            <div class="text-body-1 me-2">
              {{ transaction.for }}
            </div>
          </VListItemSubtitle>

          <!-- 👉 Amounts -->
          <template #append>
            <VListItemAction>
              <h6 class="text-h6 me-2">
                {{ formateAmount(transaction.amount) }}
              </h6>
              <VIcon
                :size="24"
                :color="Math.sign(transaction.amount) === 1 ? 'success' : 'error'"
                :icon="Math.sign(transaction.amount) === 1 ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCardText>
    <!-- !SECTION -->
  </VCard>
</template>

 <style lang="scss" scoped>
  .card-list {
    --v-card-list-gap: 1.5rem;
  }
  </style>
