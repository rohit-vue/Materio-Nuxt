<script setup>
const props = defineProps({
  languages: {
    type: Array,
    required: true,
  },
  location: {
    type: null,
    required: false,
    default: 'bottom end',
  },
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <IconBtn>
    <VIcon icon="ri-translate-2" />

    <!-- Menu -->
    <VMenu
      activator="parent"
      :location="props.location"
      offset="15px"
      width="160"
    >
      <!-- List -->
      <VList
        :selected="[locale]"
        color="primary"
        mandatory
      >
        <!-- List item -->
        <VListItem
          v-for="lang in props.languages"
          :key="lang.i18nLang"
          :value="lang.i18nLang"
          @click="locale = lang.i18nLang"
        >
          <!-- Language label -->
          <VListItemTitle>{{ lang.label }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </IconBtn>
</template>
