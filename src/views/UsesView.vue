<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import SectionItem from '../components/SectionItem.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import { uses } from '../assets/data/user.json'

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon/>
    </template>
    <template #heading>
      Uses
      <!--      (or check the <RouterLink target='_blank' :to="{ name: 'uses' }" class="external-link">!tl;dr</RouterLink> version)-->
    </template>

    <div class="uses">
      <section-item 
          v-for="(use) in uses" 
          :key="use.id" 
          :useItem="use"
      >
        <h3>{{ use.name }}</h3>
      </section-item>
    </div>
  </WelcomeItem>
</template>

<style scoped>
.uses {
  margin-top: 1rem;
}
</style>