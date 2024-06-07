<script setup lang="ts">
import { Image } from '@tiptap/extension-image'
import { Link } from '@tiptap/extension-link'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { Email } from '@db/apps/email/types'
import { useEmail } from '@/views/apps/email/useEmail'
import type { MoveEmailToAction } from '@/views/apps/email/useEmail'

interface Props {
  email: Email | null
  emailMeta: {
    hasPreviousEmail: boolean
    hasNextEmail: boolean
  }
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'refresh'): void
  (e: 'navigated', direction: 'previous' | 'next'): void
  (e: 'close'): void
  (e: 'trash'): void
  (e: 'unread'): void
  (e: 'read'): void
  (e: 'star'): void
  (e: 'unstar'): void
}>()

const { updateEmailLabels } = useEmail()

const { labels, resolveLabelColor, emailMoveToFolderActions, shallShowMoveToActionFor, moveSelectedEmailTo } = useEmail()

const handleMoveMailsTo = (action: MoveEmailToAction) => {
  moveSelectedEmailTo(action, [(props.email as Email).id])
  emit('refresh')
  emit('close')
}

const updateMailLabel = async (label: Email['labels'][number]) => {
  await updateEmailLabels([(props.email as Email).id], label)

  emit('refresh')
}

const editor = useEditor({
  content: '',

  extensions: [
    StarterKit,
    Image,
    Placeholder.configure({
      placeholder: 'Write a Comment...',
    }),
    Underline,
    Link.configure(
      {
        openOnClick: false,
      },
    ),
  ],
})

const setLink = () => {
  const previousUrl = editor.value?.getAttributes('link').href
  // eslint-disable-next-line no-alert
  const url = window.prompt('URL', previousUrl)

  // cancelled
  if (url === null)
    return

  // empty
  if (url === '') {
    editor.value?.chain().focus().extendMarkRange('link').unsetLink().run()

    return
  }

  // update link
  editor.value?.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}

const addImage = () => {
  // eslint-disable-next-line no-alert
  const url = window.prompt('URL')

  if (url)
    editor.value?.chain().focus().setImage({ src: url }).run()
}
</script>

<template>
  <!-- ℹ️ calc(100% - 256px) => 265px is left sidebar width -->
  <VNavigationDrawer
    temporary
    :model-value="!!props.email"
    location="right"
    :scrim="false"
    floating
    class="email-view"
  >
    <template v-if="props.email">
      <!-- 👉 header -->

      <div class="email-view-header d-flex align-center px-5 py-4">
        <IconBtn
          class="me-2 flip-in-rtl"
          @click="$emit('close')"
        >
          <VIcon icon="ri-arrow-left-s-line" />
        </IconBtn>

        <div class="d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-2">
          <h6 class="text-h6 font-weight-regular text-truncate">
            {{ props.email.subject }}
          </h6>

          <div class="d-flex flex-wrap gap-2">
            <VChip
              v-for="label in props.email.labels"
              :key="label"
              :color="resolveLabelColor(label)"
              size="small"
              class="text-capitalize flex-shrink-0"
            >
              {{ label }}
            </VChip>
          </div>
        </div>

        <div class="d-flex align-center gap-2">
          <IconBtn
            variant="plain"
            :disabled="!props.emailMeta.hasPreviousEmail"
            class="flip-in-rtl"
            @click="$emit('navigated', 'previous')"
          >
            <VIcon icon="ri-arrow-left-s-line" />
          </IconBtn>
          <IconBtn
            variant="plain"
            class="flip-in-rtl"
            :disabled="!props.emailMeta.hasNextEmail"
            @click="$emit('navigated', 'next')"
          >
            <VIcon icon="ri-arrow-right-s-line" />
          </IconBtn>
        </div>
      </div>

      <VDivider />

      <!-- 👉 Action bar -->
      <div class="email-view-action-bar d-flex align-center text-medium-emphasis gap-1 px-5">
        <!-- Trash -->
        <IconBtn
          v-show="!props.email.isDeleted"
          @click="$emit('trash'); $emit('close')"
        >
          <VIcon icon="ri-delete-bin-7-line" />
          <VTooltip
            activator="parent"
            location="top"
          >
            Delete Mail
          </VTooltip>
        </IconBtn>

        <!-- Read/Unread -->
        <IconBtn @click.stop="$emit('unread'); $emit('close')">
          <VIcon icon="ri-mail-line" />
          <VTooltip
            activator="parent"
            location="top"
          >
            Mark as Unread
          </VTooltip>
        </IconBtn>

        <!-- Move to folder -->
        <IconBtn>
          <VIcon icon="ri-folder-line" />
          <VTooltip
            activator="parent"
            location="top"
          >
            Move to
          </VTooltip>

          <VMenu activator="parent">
            <VList density="compact">
              <template
                v-for="moveTo in emailMoveToFolderActions"
                :key="moveTo.title"
              >
                <VListItem
                  :class="shallShowMoveToActionFor(moveTo.action) ? 'd-flex' : 'd-none'"
                  class="align-center"
                  href="#"
                  @click="handleMoveMailsTo(moveTo.action)"
                >
                  <template #prepend>
                    <VIcon
                      :icon="moveTo.icon"
                      class="me-2"
                      size="20"
                    />
                  </template>
                  <VListItemTitle class="text-capitalize">
                    {{ moveTo.action }}
                  </VListItemTitle>
                </VListItem>
              </template>
            </VList>
          </VMenu>
        </IconBtn>

        <!-- Update labels -->
        <IconBtn>
          <VIcon icon="ri-price-tag-3-line" />
          <VTooltip
            activator="parent"
            location="top"
          >
            Label
          </VTooltip>

          <VMenu activator="parent">
            <VList density="compact">
              <VListItem
                v-for="label in labels"
                :key="label.title"
                href="#"
                @click.stop="updateMailLabel(label.title)"
              >
                <template #prepend>
                  <VBadge
                    inline
                    :color="resolveLabelColor(label.title)"
                    dot
                  />
                </template>
                <VListItemTitle class="ms-2 text-capitalize">
                  {{ label.title }}
                </VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </IconBtn>

        <VSpacer />

        <!-- Star/Unstar -->
        <IconBtn
          :color="props.email.isStarred ? 'warning' : 'default'"
          @click="props.email?.isStarred ? $emit('unstar') : $emit('star')"
        >
          <VIcon icon="ri-star-line" />
        </IconBtn>

        <!-- Dots vertical -->
        <MoreBtn />
      </div>

      <VDivider />

      <!-- 👉 Mail Content -->
      <PerfectScrollbar
        tag="div"
        class="mail-content-container flex-grow-1"
        :options="{ wheelPropagation: false }"
      >
        <VCard class="ma-6 mb-4">
          <VCardText class="mail-header">
            <div class="d-flex align-start">
              <VAvatar
                size="38"
                class="me-3"
              >
                <VImg
                  :src="props.email.from.avatar"
                  :alt="props.email.from.name"
                />
              </VAvatar>

              <div class="d-flex flex-wrap flex-grow-1 overflow-hidden">
                <div class="text-truncate">
                  <h6 class="text-h6 font-weight-regular text-truncate">
                    {{ props.email.from.name }}
                  </h6>
                  <p class="text-body-2 mb-0">
                    {{ props.email.from.email }}
                  </p>
                </div>

                <VSpacer />

                <div class="d-flex align-center">
                  <span class="text-disabled me-4">{{ formatDate(props.email.time) }}</span>
                  <IconBtn v-show="props.email.attachments.length">
                    <VIcon icon="ri-attachment-2" />
                  </IconBtn>
                </div>
              </div>
              <MoreBtn class="align-self-sm-center" />
            </div>
          </VCardText>

          <VDivider />

          <VCardText>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="text-base"
              v-html="props.email.message"
            />
            <!-- eslint-enable -->
          </VCardText>

          <template v-if="props.email.attachments.length">
            <VDivider />

            <VCardText class="d-flex flex-column gap-y-4">
              <span>Attachments</span>
              <div
                v-for="attachment in props.email.attachments"
                :key="attachment.fileName"
                class="d-flex align-center"
              >
                <VImg
                  :src="attachment.thumbnail"
                  :alt="attachment.fileName"
                  aspect-ratio="1"
                  max-height="24"
                  max-width="24"
                  class="me-2"
                />
                <span>{{ attachment.fileName }}</span>
              </div>
            </VCardText>
          </template>
        </VCard>

        <VCard class="ma-6">
          <VCardText>
            <h6 class="text-h6 font-weight-regular mb-6">
              Reply to Ross Geller
            </h6>
            <!-- 👉 Tiptap editor -->
            <div class="tiptap-editor-wrapper">
              <div
                v-if="editor"
                class="d-flex flex-wrap gap-x-2 mb-6"
              >
                <VIcon
                  icon="ri-bold"
                  :color="editor.isActive('bold') ? 'primary' : ''"
                  size="20"
                  @click="editor.chain().focus().toggleBold().run()"
                />

                <VIcon
                  :color="editor.isActive('underline') ? 'primary' : ''"
                  icon="ri-underline"
                  size="20"
                  @click="editor.commands.toggleUnderline()"
                />

                <VIcon
                  :color="editor.isActive('italic') ? 'primary' : ''"
                  icon="ri-italic"
                  size="20"
                  @click="editor.chain().focus().toggleItalic().run()"
                />

                <VIcon
                  :color="editor.isActive('bulletList') ? 'primary' : ''"
                  icon="ri-list-check"
                  size="20"
                  @click="editor.chain().focus().toggleBulletList().run()"
                />

                <VIcon
                  :color="editor.isActive('orderedList') ? 'primary' : ''"
                  icon="ri-list-ordered-2"
                  size="20"
                  @click="editor.chain().focus().toggleOrderedList().run()"
                />

                <VIcon
                  icon="ri-links-line"
                  size="20"
                  @click="setLink"
                />

                <VIcon
                  icon="ri-image-line"
                  size="20"
                  @click="addImage"
                />
              </div>

              <EditorContent :editor="editor" />
            </div>

            <div class="d-flex align-center justify-end mt-6">
              <VBtn
                color="secondary"
                variant="plain"
                class="me-4"
              >
                <VIcon icon="ri-attachment-2" />
                <span>Attachments</span>
              </VBtn>
              <VBtn>
                <span>Send</span>
                <VIcon icon="ri-send-plane-line" />
              </VBtn>
            </div>
          </VCardText>
        </VCard>
      </PerfectScrollbar>
    </template>
  </VNavigationDrawer>
</template>

<style lang="scss">
.email-view {
  inline-size: 100% !important;

  @media only screen and (min-width: 1280px) {
    inline-size: calc(100% - 256px) !important;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }

  .ProseMirror {
    padding: 0;
    block-size: 100px;
    overflow-y: auto;

    p {
      margin-block-end: 0;
    }

    p.is-editor-empty:first-child::before {
      block-size: 0;
      color: #adb5bd;
      content: attr(data-placeholder);
      float: inline-start;
      pointer-events: none;
    }

    ul,ol{
      padding-inline: 1.125rem;
    }
  }

  .is-active {
    border-color: rgba(var(--v-theme-primary), var(--v-border-opacity)) !important;
    background-color: rgba(var(--v-theme-primary), var(--v-activated-opacity));
    color: rgb(var(--v-theme-primary));
  }

  .ProseMirror-focused{
    outline: none !important;
  }
}

.email-view-action-bar {
  min-block-size: 54px;
}

.mail-content-container {
  background-color: rgb(var(--v-theme-on-background), var(--v-hover-opacity));

  .mail-header {
    min-block-size: 84px;
  }

  .v-card {
    border: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  }
}
</style>
