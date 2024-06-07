<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const emit = defineEmits(['toggleComposeDialogVisibility'])

defineOptions({
  inheritAttrs: false,
})

const folders = [
  {
    title: 'Inbox',
    prependIcon: 'ri-mail-line',
    to: { name: 'apps-email' },
    badge: {
      content: '21',
      color: 'primary',
    },
  },
  {
    title: 'Sent',
    prependIcon: 'ri-send-plane-line',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'sent' },
    },
  },
  {
    title: 'Draft',
    prependIcon: 'ri-edit-box-line',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'draft' },
    },
    badge: {
      content: '2',
      color: 'warning',
    },
  },
  {
    title: 'Starred',
    prependIcon: 'ri-star-line',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'starred' },
    },
  },
  {
    title: 'Spam',
    prependIcon: 'ri-spam-2-line',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'spam' },
    },
    badge: {
      content: '4',
      color: 'error',
    },
  },
  {
    title: 'Trash',
    prependIcon: 'ri-delete-bin-7-line',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'trashed' },
    },
  },
]

const labels = [
  {
    title: 'Personal',
    color: 'success',
    to: {
      name: 'apps-email-label',
      params: { label: 'personal' },
    },
  },
  {
    title: 'Company',
    color: 'primary',
    to: {
      name: 'apps-email-label',
      params: { label: 'company' },
    },
  },
  {
    title: 'Important',
    color: 'warning',
    to: {
      name: 'apps-email-label',
      params: { label: 'important' },
    },
  },
  {
    title: 'Private',
    color: 'error',
    to: {
      name: 'apps-email-label',
      params: { label: 'private' },
    },
  },
]
</script>

<template>
  <div class="d-flex flex-column h-100">
    <!-- 👉 Compose -->
    <div class="pa-5">
      <VBtn
        block
        @click="$emit('toggleComposeDialogVisibility')"
      >
        Compose
      </VBtn>
    </div>

    <!-- 👉 Folders -->
    <PerfectScrollbar
      :options="{ wheelPropagation: false }"
      class="h-100 pt-4"
    >
      <ul class="email-filters-labels">
        <NuxtLink
          v-for="folder in folders"
          :key="folder.title"
          v-slot="{ isActive, href, navigate }"
          class="d-flex align-center cursor-pointer"
          :to="folder.to"
          custom
        >
          <li
            v-bind="$attrs"
            :href="href"
            :class="isActive && 'email-filter-active text-primary'"
            class="d-flex align-center cursor-pointer"
            @click="navigate"
          >
            <VIcon
              :icon="folder.prependIcon"
              class="me-2"
              size="20"
            />
            <span>{{ folder.title }}</span>

            <VSpacer />

            <VChip
              v-if="folder.badge?.content"
              size="x-small"
              :color="folder.badge.color"
            >
              {{ folder.badge.content }}
            </VChip>
          </li>
        </NuxtLink>

        <!-- 👉 Labels -->
        <li class="text-sm d-block text-uppercase text-disabled mt-9 mb-4">
          LABELS
        </li>
        <NuxtLink
          v-for="label in labels"
          :key="label.title"
          v-slot="{ isActive, href, navigate }"
          class="d-flex align-center"
          :to="label.to"
          custom
        >
          <li
            v-bind="$attrs"
            :href="href"
            :class="isActive && 'email-label-active text-primary'"
            class="cursor-pointer"
            @click="navigate"
          >
            <VIcon
              :color="label.color"
              icon="ri-circle-fill"
              size="12"
              class="me-2"
            />
            <span>{{ label.title }}</span>
          </li>
        </NuxtLink>
      </ul>
    </PerfectScrollbar>
  </div>
</template>

<style lang="scss">
.email-filters-labels {
  > li {
    position: relative;
    margin-block-end: 4px;
    padding-block: 4px;
    padding-inline: 20px;
  }

  .email-filter-active,
  .email-label-active {
    &::after {
      position: absolute;
      background: currentcolor;
      block-size: 100%;
      content: "";
      inline-size: 3px;
      inset-block-start: 0;
      inset-inline-start: 0;
    }
  }
}
</style>
