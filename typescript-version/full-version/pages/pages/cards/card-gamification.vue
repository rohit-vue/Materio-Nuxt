<script setup lang="ts">
import CardAward from '@/views/pages/cards/gamification/CardAward.vue'
import CardCongratulations from '@/views/pages/cards/gamification/CardCongratulations.vue'
import CardUpgrade from '@/views/pages/cards/gamification/CardUpgrade.vue'
import CardWelcome from '@/views/pages/cards/gamification/CardWelcome.vue'
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
    >
      <CardAward />
    </VCol>

    <VCol
      cols="12"
      md="8"
      class="align-self-end mt-sm-10 mt-md-0"
    >
      <CardCongratulations />
    </VCol>

    <VCol
      cols="12"
      md="8"
      class="align-self-end mt-sm-10 mt-md-0"
    >
      <CardWelcome />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <CardUpgrade />
    </VCol>
  </VRow>
</template>
