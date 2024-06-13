<script lang="ts" setup>
</script>

<template>
  <VCol cols="2" class="sidebar-container" style="position: fixed;">
    <h1 class="sidebar-header">Account Settings</h1>
  <!-- <VCol cols="3" class="sidebar-container" style="box-shadow: none; margin-top: -2rem"> -->
      <VCard style="background-color: inherit; box-shadow: none; margin-left: -1.6rem; margin-top: -0.5rem;">
        <VCardText style="background-color: inherit;">
          <VList style="background-color: inherit;">
            <VListItem link to="/account-setting/">
              <v-icon>mdi-home</v-icon>
              <span>User</span>
            </VListItem>
            <VListItem link to="/account-setting/company">
              <VIcon name="mdi-account" />
              <span>Company</span>
            </VListItem>
            <VListItem link to="/account-setting/team">
              <VIcon name="mdi-settings" />
              <span>Team</span>
            </VListItem>
            <VListItem link to="/account-setting/permissions">
              <VIcon name="mdi-settings" />
              <span>Permissions</span>
            </VListItem>
            <VListItem link to="/account-setting/notifications">
              <VIcon name="mdi-settings" />
              <span>Notifications</span>
            </VListItem>
            <VListItem link to="/account-setting/billing">
              <VIcon name="mdi-settings" />
              <span>Billing</span>
            </VListItem>
            <VListItem link to="/account-setting/security">
              <VIcon name="mdi-settings" />
              <span>Security</span>
            </VListItem>
            <VListItem link to="/account-setting/integrations">
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
