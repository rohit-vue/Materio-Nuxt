<script setup>
const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isDialogVisible'])

const selectedPlan = ref('basic')

const plansList = [
  {
    desc: 'Standard - $99/month',
    title: 'Standard',
    value: 'standard',
  },
  {
    desc: 'Basic - $0/month',
    title: 'Basic',
    value: 'basic',
  },
  {
    desc: 'Enterprise - $499/month',
    title: 'Enterprise',
    value: 'enterprice',
  },
  {
    desc: 'Company - $999/month',
    title: 'Company',
    value: 'company',
  },
]

const isConfirmDialogVisible = ref(false)
</script>

<template>
  <!-- 👉 upgrade plan -->
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 650"
    :model-value="props.isDialogVisible"
    @update:model-value="val => $emit('update:isDialogVisible', val)"
  >
    <VCard class="py-sm-11 py-3">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="$emit('update:isDialogVisible', false)"
      />

      <VCardItem class="text-center pb-10">
        <div class="text-center">
          <h4 class="text-h4 mb-2">
            Upgrade Plan
          </h4>
          <div class="text-body-1">
            Choose the best plan for user.
          </div>
        </div>
      </VCardItem>

      <VCardText class="d-flex justify-space-between flex-column flex-sm-row gap-4 px-15">
        <VSelect
          v-model="selectedPlan"
          :items="plansList"
          density="compact"
          label="Choose a plan"
          placeholder="Basic"
        />
        <VBtn>
          Upgrade
        </VBtn>
      </VCardText>

      <VDivider class="mb-5" />

      <VCardText class="px-15">
        <p class="font-weight-medium mb-2">
          User current plan is standard plan
        </p>
        <div class="d-flex justify-space-between flex-wrap">
          <div class="d-flex align-center me-3">
            <sup class="text-base text-primary">$</sup>
            <h1 class="text-h1 text-primary">
              99
            </h1>
            <sub class="text-body-2 mt-3">/month</sub>
          </div>
          <VBtn
            color="error"
            variant="outlined"
            class="mt-3"
            @click="isConfirmDialogVisible = true"
          >
            Cancel Subscription
          </VBtn>
        </div>
      </VCardText>

      <!-- 👉 Confirm Dialog -->
      <ConfirmDialog
        v-model:isDialogVisible="isConfirmDialogVisible"
        cancel-title="Cancelled"
        confirm-title="Unsubscribed!"
        confirm-msg="Your subscription cancelled successfully."
        confirmation-question="Are you sure to cancel your subscription?"
        cancel-msg="Unsubscription Cancelled!!"
      />
    </VCard>
  </VDialog>
</template>
