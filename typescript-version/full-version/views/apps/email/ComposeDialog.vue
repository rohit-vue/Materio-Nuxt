<script lang="ts" setup>
import { Image } from '@tiptap/extension-image'
import { Link } from '@tiptap/extension-link'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'

defineEmits<{
  (e: 'close'): void
}>()

const to = ref('')
const cc = ref('')
const bcc = ref('')
const subject = ref('')
const message = ref('')
const emailCc = ref(false)
const emailBcc = ref(false)

const resetValues = () => {
  to.value = subject.value = message.value = ''
}

const editor = useEditor({
  content: '',

  extensions: [
    StarterKit,
    Image,
    Placeholder.configure({
      placeholder: 'Message',
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
  <VCard
    class="email-compose-dialog"
    elevation="24"
    max-width="30vw"
  >
    <VCardItem class="py-3">
      <VCardTitle class="text-medium-emphasis">
        Compose Mail
      </VCardTitle>

      <template #append>
        <IconBtn @click="$emit('close')">
          <VIcon icon="ri-subtract-line" />
        </IconBtn>

        <IconBtn @click="$emit('close'); resetValues()">
          <VIcon icon="ri-close-line" />
        </IconBtn>
      </template>
    </VCardItem>

    <div class="pe-5">
      <VTextField
        v-model="to"
        density="compact"
      >
        <template #prepend-inner>
          <div class="text-disabled font-weight-medium">
            To:
          </div>
        </template>
        <template #append>
          <span class="cursor-pointer text-medium-emphasis">
            <span @click="emailCc = !emailCc">Cc</span>
            <span class="mx-1">|</span>
            <span @click="emailBcc = !emailBcc">Bcc</span>
          </span>
        </template>
      </VTextField>
    </div>

    <VExpandTransition>
      <div v-if="emailCc">
        <VDivider />

        <VTextField
          v-model="cc"
          density="compact"
        >
          <template #prepend-inner>
            <div class="text-disabled font-weight-medium">
              Cc:
            </div>
          </template>
        </VTextField>
      </div>
    </VExpandTransition>

    <VExpandTransition>
      <div v-if="emailBcc">
        <VDivider />

        <VTextField
          v-model="bcc"
          density="compact"
        >
          <template #prepend-inner>
            <div class="text-disabled font-weight-medium">
              Bcc:
            </div>
          </template>
        </VTextField>
      </div>
    </VExpandTransition>

    <VDivider />

    <VTextField
      v-model="subject"
      density="compact"
    >
      <template #prepend-inner>
        <div class="text-disabled font-weight-medium">
          Subject:
        </div>
      </template>
    </VTextField>

    <VDivider />

    <!-- 👉 Tiptap editor -->
    <div class="tiptap-editor-wrapper">
      <div
        v-if="editor"
        class="d-flex flex-wrap gap-x-1 px-4 py-2"
      >
        <IconBtn
          rounded
          :color="editor.isActive('bold') ? 'primary' : ''"
          :variant="editor.isActive('bold') ? 'tonal' : 'text'"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <VIcon icon="ri-bold" />
        </IconBtn>

        <IconBtn
          rounded
          :color="editor.isActive('underline') ? 'primary' : ''"
          :variant="editor.isActive('underline') ? 'tonal' : 'text'"
          @click="editor.commands.toggleUnderline()"
        >
          <VIcon icon="ri-underline" />
        </IconBtn>

        <IconBtn
          rounded
          :color="editor.isActive('italic') ? 'primary' : ''"
          :variant="editor.isActive('italic') ? 'tonal' : 'text'"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <VIcon icon="ri-italic" />
        </IconBtn>

        <IconBtn
          rounded
          :color="editor.isActive('bulletList') ? 'primary' : ''"
          :variant="editor.isActive('bulletList') ? 'tonal' : 'text'"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <VIcon icon="ri-list-check" />
        </IconBtn>

        <IconBtn
          rounded
          :color="editor.isActive('orderedList') ? 'primary' : ''"
          :variant="editor.isActive('orderedList') ? 'tonal' : 'text'"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <VIcon icon="ri-list-ordered-2" />
        </IconBtn>

        <IconBtn
          rounded
          @click="setLink"
        >
          <VIcon icon="ri-links-line" />
        </IconBtn>

        <IconBtn
          rounded
          @click="addImage"
        >
          <VIcon icon="ri-image-line" />
        </IconBtn>
      </div>

      <VDivider />

      <div class="mx-5">
        <EditorContent :editor="editor" />
      </div>
    </div>

    <div class="d-flex align-center px-5 py-4 gap-4">
      <VBtn append-icon="ri-send-plane-line">
        Send
        <VMenu activator="parent">
          <VList :items="['Schedule Mail', 'Save Draft']" />
        </VMenu>
      </VBtn>

      <IconBtn>
        <VIcon icon="ri-attachment-2" />
      </IconBtn>

      <VSpacer />

      <IconBtn>
        <VIcon icon="ri-more-2-line" />
      </IconBtn>

      <IconBtn @click="$emit('close'); resetValues()">
        <VIcon icon="ri-delete-bin-7-line" />
      </IconBtn>
    </div>
  </VCard>
</template>

<style lang="scss">
.email-compose-dialog {
  z-index: 910 !important;

  .v-field--prepended {
    padding-inline-start: 20px;
  }

  .v-card-item {
    background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  }

  .v-textarea .v-field {
    --v-field-padding-start: 20px;
  }

  .v-field__outline {
    display: none;
  }

  .ProseMirror {
    block-size: 150px;
    overflow-y: auto;
    padding-block: .5rem;

    &:focus-visible {
      outline: none;
    }

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
}
</style>
