<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'ri-group-line',
  ],
  [
    'Settings',
    'ri-settings-5-line',
  ],
]

const cruds = [
  [
    'Create',
    'ri-add-line',
  ],
  [
    'Read',
    'ri-file-line',
  ],
  [
    'Update',
    'ri-refresh-line',
  ],
  [
    'Delete',
    'ri-delete-bin-line',
  ],
]
</script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="ri-home-line"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="ri-user-line"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
