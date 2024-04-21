<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import SectionItem from '../components/SectionItem.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import { oss } from '../assets/data/user.json'

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon/>
    </template>
    <template #heading>
      {{ oss.name }}
    </template>

    <div class="oss">
      <section-item 
          :key="oss.id"
          :useItem="oss"
      >
      </section-item>
    </div>
  </WelcomeItem>
</template>

<style scoped>
.oss {
  margin-top: 1rem;
}
</style>