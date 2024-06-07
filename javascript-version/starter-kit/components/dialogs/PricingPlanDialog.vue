<script setup>
const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isDialogVisible'])

const dialogVisibleUpdate = val => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    class="v-dialog-xl"
    @update:model-value="dialogVisibleUpdate"
  >
    <VCard class="pricing-dialog pa-2 pa-sm-11">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="emit('update:isDialogVisible', false)"
      />

      <VCardText class="pt-5">
        <AppPricing
          title="Pricing Plan"
          md="4"
          cols="12"
        >
          <template #heading>
            <h4 class="text-h4 pb-2">
              Pricing Plans
            </h4>
          </template>
          <template #subtitle>
            <div class="text-body-1">
              All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.
            </div>
          </template>
        </AppPricing>
      </VCardText>
    </VCard>
  </VDialog>
</template>
