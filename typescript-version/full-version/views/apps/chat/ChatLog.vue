<script lang="ts" setup>
import { useChatStore } from '@/views/apps/chat/useChatStore'
import type { ChatOut } from '@db/apps/chat/types'

const store = useChatStore()

interface MessageGroup {
  senderId: ChatOut['messages'][number]['senderId']
  messages: Omit<ChatOut['messages'][number], 'senderId'>[]
}

const contact = computed(() => ({
  id: store.activeChat?.contact.id,
  avatar: store.activeChat?.contact.avatar,
}))

// Feedback icon
const resolveFeedbackIcon = (feedback: ChatOut['messages'][number]['feedback']) => {
  if (feedback.isSeen)
    return { icon: 'ri-check-double-line', color: 'success' }
  else if (feedback.isDelivered)
    return { icon: 'ri-check-double-line', color: undefined }
  else
    return { icon: 'ri-check-line', color: undefined }
}

const msgGroups = computed(() => {
  let messages: ChatOut['messages'] = []

  const _msgGroups: MessageGroup[] = []

  if (store.activeChat!.chat) {
    messages = store.activeChat!.chat.messages

    let msgSenderId = messages[0].senderId

    let msgGroup: MessageGroup = {
      senderId: msgSenderId,
      messages: [],
    }

    messages.forEach((msg, index) => {
      if (msgSenderId === msg.senderId) {
        msgGroup.messages.push({
          message: msg.message,
          time: msg.time,
          feedback: msg.feedback,
        })
      }
      else {
        msgSenderId = msg.senderId
        _msgGroups.push(msgGroup)
        msgGroup = {
          senderId: msg.senderId,
          messages: [
            {
              message: msg.message,
              time: msg.time,
              feedback: msg.feedback,
            },
          ],
        }
      }

      if (index === messages.length - 1)
        _msgGroups.push(msgGroup)
    })
  }

  return _msgGroups
})
</script>

<template>
  <div class="chat-log pa-5">
    <div
      v-for="(msgGrp, index) in msgGroups"
      :key="msgGrp.senderId + String(index)"
      class="chat-group d-flex align-start"
      :class="[{
        'flex-row-reverse': msgGrp.senderId !== contact.id,
        'mb-8': msgGroups.length - 1 !== index,
      }]"
    >
      <div
        class="chat-avatar"
        :class="msgGrp.senderId !== contact.id ? 'ms-4' : 'me-4'"
      >
        <VAvatar size="32">
          <VImg :src="msgGrp.senderId === contact.id ? contact.avatar : store.profileUser?.avatar" />
        </VAvatar>
      </div>
      <div
        class="chat-body d-inline-flex flex-column"
        :class="msgGrp.senderId !== contact.id ? 'align-end' : 'align-start'"
      >
        <div
          v-for="(msgData, msgIndex) in msgGrp.messages"
          :key="msgData.time"
          class="chat-content text-body-1 py-2 px-4 elevation-2"
          :class="[
            msgGrp.senderId === contact.id ? 'bg-surface chat-left' : 'bg-primary text-white chat-right',
            msgGrp.messages.length - 1 !== msgIndex ? 'mb-2' : 'mb-1',
          ]"
        >
          <p class="mb-0">
            {{ msgData.message }}
          </p>
        </div>
        <div
          :class="{ 'text-right': msgGrp.senderId !== contact.id }"
          class="d-flex align-center gap-2"
        >
          <VIcon
            v-if="msgGrp.senderId !== contact.id"
            size="16"
            :color="resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length - 1].feedback).color"
          >
            {{ resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length - 1].feedback).icon }}
          </VIcon>
          <p
            class="text-sm text-disabled mb-0"
            style="letter-spacing: 0.4px;"
          >
            {{ formatDate(msgGrp.messages[msgGrp.messages.length - 1].time, { hour: 'numeric', minute: 'numeric' }) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=scss>
.chat-log {
  .chat-content {
    border-end-end-radius: 6px;
    border-end-start-radius: 6px;

    p {
      overflow-wrap: anywhere;
    }

    &.bg-surface{
      color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity)) !important;
    }

    &.chat-left {
      border-start-end-radius: 6px;
    }

    &.chat-right {
      border-start-start-radius: 6px;
    }
  }
}
</style>
