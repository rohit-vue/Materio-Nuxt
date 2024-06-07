<script setup>
const themes = [
  {
    name: 'system',
    icon: 'ri-macbook-line',
  },
  {
    name: 'light',
    icon: 'ri-sun-line',
  },
  {
    name: 'dark',
    icon: 'ri-moon-clear-line',
  },
]
</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
