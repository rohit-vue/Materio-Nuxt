<script setup>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: Object,
    required: true,
  },
  codeLanguage: {
    type: String,
    required: false,
    default: 'markup',
  },
  noPadding: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const preferredCodeLanguage = useCookie('preferredCodeLanguage', {
  default: () => 'ts',
  maxAge: COOKIE_MAX_AGE_1_YEAR,
})

const isCodeShown = ref(false)
const { copy, copied } = useClipboard({ source: computed(() => props.code[preferredCodeLanguage.value]) })
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>{{ props.title }}</VCardTitle>
      <template #append>
        <IconBtn
          :color="isCodeShown ? 'primary' : 'default'"
          :class="isCodeShown ? '' : 'text-disabled'"
          @click="isCodeShown = !isCodeShown"
        >
          <VIcon
            size="20"
            icon="ri-code-s-line"
          />
        </IconBtn>
      </template>
    </VCardItem>
    <slot v-if="noPadding" />
    <VCardText v-else>
      <slot />
    </VCardText>
    <VExpandTransition>
      <div v-show="isCodeShown">
        <VDivider />

        <VCardText class="d-flex gap-y-3 flex-column">
          <div class="d-flex justify-end">
            <VBtnToggle
              v-model="preferredCodeLanguage"
              mandatory
              density="compact"
            >
              <VBtn value="ts">
                <!-- eslint-disable-next-line regex/invalid -->
                <VIcon icon="mdi-language-typescript" />
              </VBtn>
              <VBtn value="js">
                <!-- eslint-disable-next-line regex/invalid -->
                <VIcon icon="mdi-language-javascript" />
              </VBtn>
            </VBtnToggle>
          </div>

          <div class="position-relative">
            <Prism
              :key="props.code[preferredCodeLanguage]"
              :language="props.codeLanguage"
              :style="$vuetify.locale.isRtl ? 'text-align: right' : 'text-align: left'"
            >
              {{ props.code[preferredCodeLanguage] }}
            </Prism>
            <IconBtn
              class="position-absolute app-card-code-copy-icon"
              color="white"
              @click="() => { copy() }"
            >
              <VIcon
                :icon="copied ? 'ri-check-line' : 'ri-file-copy-line'"
                size="20"
              />
            </IconBtn>
          </div>
        </VCardText>
      </div>
    </VExpandTransition>
  </VCard>
</template>

<style lang="scss">
@use "@styles/variables/vuetify.scss";

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  border-radius: vuetify.$card-border-radius;
}

.app-card-code-copy-icon {
  inset-block-start: 1.2em;
  inset-inline-end: 0.8em;
}
</style>
