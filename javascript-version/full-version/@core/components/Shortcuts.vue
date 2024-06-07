<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  togglerIcon: {
    type: String,
    required: false,
    default: 'ri-star-smile-line',
  },
  shortcuts: {
    type: Array,
    required: true,
  },
})

const router = useRouter()
</script>

<template>
  <IconBtn>
    <VIcon :icon="props.togglerIcon" />

    <VMenu
      activator="parent"
      offset="15px"
      location="bottom end"
    >
      <VCard
        max-width="380"
        max-height="560"
        class="d-flex flex-column"
      >
        <VCardItem class="px-4 py-2">
          <h5 class="text-h5">
            Shortcuts
          </h5>

          <template #append>
            <IconBtn>
              <VIcon
                icon="ri-add-line"
                color="high-emphasis"
              />
              <VTooltip
                activator="parent"
                location="start"
              >
                Add Shortcut
              </VTooltip>
            </IconBtn>
          </template>
        </VCardItem>

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
          <VRow class="ma-0 mt-n1">
            <VCol
              v-for="(shortcut, index) in props.shortcuts"
              :key="shortcut.title"
              cols="6"
              class="text-center border-t cursor-pointer pa-6 shortcut-icon"
              :class="(index + 1) % 2 ? 'border-e' : ''"
              @click="router.push(shortcut.to)"
            >
              <VAvatar
                variant="tonal"
                size="50"
              >
                <VIcon
                  color="high-emphasis"
                  size="26"
                  :icon="shortcut.icon"
                />
              </VAvatar>

              <h6 class="text-h6 mt-3">
                {{ shortcut.title }}
              </h6>
              <p class="text-sm text-medium-emphasis mb-0">
                {{ shortcut.subtitle }}
              </p>
            </VCol>
          </VRow>
        </PerfectScrollbar>
      </VCard>
    </VMenu>
  </IconBtn>
</template>

<style lang="scss">
.shortcut-icon:hover {
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}
</style>
