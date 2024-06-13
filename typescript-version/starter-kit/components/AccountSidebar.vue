<script lang="ts" setup>
</script>

<template>
  <VCol cols="3" class="sidebar-container">
    <h1 class="sidebar-header">Account Setting</h1>
  <!-- <VCol cols="3" class="sidebar-container" style="box-shadow: none; margin-top: -2rem"> -->
      <VCard style="background-color: inherit; box-shadow: none;">
        <VCardText style="background-color: inherit;">
          <VList style="background-color: inherit;">
            <VListItem link to="/login">
              <v-icon>mdi-home</v-icon>
              <span>User</span>
            </VListItem>
            <VListItem link to="/login">
              <VIcon name="mdi-account" />
              <span>Company</span>
            </VListItem>
            <VListItem link to="/login">
              <VIcon name="mdi-settings" />
              <span>Team</span>
            </VListItem>
            <VListItem link to="/login">
              <VIcon name="mdi-settings" />
              <span>Permissions</span>
            </VListItem>
            <VListItem link to="/login">
              <VIcon name="mdi-settings" />
              <span>Notifications</span>
            </VListItem>
            <VListItem link to="/login">
              <VIcon name="mdi-settings" />
              <span>Billing</span>
            </VListItem>
            <VListItem link to="/login">
              <VIcon name="mdi-settings" />
              <span>Security</span>
            </VListItem>
            <VListItem link to="/login">
              <VIcon name="mdi-settings" />
              <span>Integrations</span>
            </VListItem>
            <!-- Add more items here -->
          </VList>
        </VCardText>
      </VCard>
    <!-- </VCol> -->
  </VCol>
</template>

<style lang="scss">
@use "assets/styles/styles.scss";
</style>
