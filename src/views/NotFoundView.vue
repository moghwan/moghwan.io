<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      404
    </template>
    <template #heading>Don't expect a funny GIF in here</template>
  </WelcomeItem>
</template>
