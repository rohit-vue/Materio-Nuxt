<script setup>
import RoleCards from '@/views/apps/roles/RoleCards.vue'
import UserList from '@/views/apps/roles/UserList.vue'
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h5 class="text-h5 mb-1">
        Roles List
      </h5>
      <p class="text-body-1 mb-0">
        A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need
      </p>
    </VCol>

    <!-- 👉 Roles Cards -->
    <VCol cols="12">
      <RoleCards />
    </VCol>

    <VCol cols="12">
      <h5 class="text-h5 mt-6">
        Total users with their roles
      </h5>
      <p class="text-body-1 mb-6">
        Find all of your company's administrator accounts and their associate roles.
      </p>

      <!-- 👉 User List  -->
      <UserList />
    </VCol>
  </VRow>
</template>
