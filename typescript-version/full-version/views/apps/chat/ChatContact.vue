<script lang="ts" setup>
import { useChat } from '@/views/apps/chat/useChat'
import { useChatStore } from '@/views/apps/chat/useChatStore'
import type { ChatContact, ChatContactWithChat } from '@db/apps/chat/types'

interface Props {
  isChatContact?: boolean
  user: ChatContact | ChatContactWithChat
}

const props = withDefaults(defineProps<Props>(), {
  isChatContact: false,
})

const store = useChatStore()
const { resolveAvatarBadgeVariant } = useChat()

const isChatContactActive = computed(() => {
  const isActive = store.activeChat?.contact.id === props.user.id
  if (!props.isChatContact)
    return !store.activeChat?.chat && isActive

  return isActive
})
</script>

<template>
  <li
    :key="store.chatsContacts.length"
    class="chat-contact cursor-pointer d-flex align-center"
    :class="{ 'chat-contact-active': isChatContactActive }"
    :data-x="store.chatsContacts.length"
  >
    <VBadge
      dot
      location="bottom right"
      offset-x="3"
      offset-y="3"
      :color="resolveAvatarBadgeVariant(props.user.status)"
      bordered
      :model-value="props.isChatContact"
    >
      <VAvatar
        size="40"
        :variant="!props.user.avatar ? 'tonal' : undefined"
        :color="!props.user.avatar ? resolveAvatarBadgeVariant(props.user.status) : undefined"
      >
        <VImg
          v-if="props.user.avatar"
          :src="props.user.avatar"
          alt="John Doe"
        />
        <span v-else>{{ avatarText(user.fullName) }}</span>
      </VAvatar>
    </VBadge>
    <div class="flex-grow-1 ms-4 overflow-hidden">
      <p class="text-base mb-0">
        {{ props.user.fullName }}
      </p>
      <span class="d-block text-body-2 text-truncate">{{ props.isChatContact && 'chat' in props.user ? props.user.chat.lastMessage.message : props.user.about }}</span>
    </div>
    <div
      v-if="props.isChatContact && 'chat' in props.user"
      class="d-flex flex-column align-self-start"
    >
      <span class="d-block text-sm text-disabled whitespace-no-wrap">{{ formatDateToMonthShort(props.user.chat.lastMessage.time) }}</span>
      <VBadge
        v-if="props.user.chat.unseenMsgs"
        color="error"
        inline
        :content="props.user.chat.unseenMsgs"
        class="ms-auto"
      />
    </div>
  </li>
</template>

<style lang="scss">
@use "@styles/variables/vuetify.scss";
@use "@core/scss/base/mixins";
@use "vuetify/lib/styles/tools/states" as vuetifyStates;

.chat-contact {
  border-radius: vuetify.$border-radius-root;
  padding-block: 8px;
  padding-inline: var(--chat-content-spacing-x);

  @include mixins.before-pseudo;
  @include vuetifyStates.states($active: false);

  &.chat-contact-active {
    @include mixins.elevation(2);

    background: rgb(var(--v-theme-primary));
    color: #fff;

    --v-theme-on-background: #fff;

    .v-avatar {
      background: #fff;
    }
  }

  .v-badge--bordered .v-badge__badge::after {
    color: #fff;
  }
}
</style>
