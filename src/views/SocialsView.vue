<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Let us connect</template>
  
    <div class="socials">
      <ul>
        <li><RouterLink target='_blank' :to="{ name: 'github' }">GitHub</RouterLink></li>
        <li><RouterLink target='_blank' :to="{ name: 'twitter' }">Twitter</RouterLink></li>
        <li><RouterLink target='_blank' :to="{ name: 'linkedin' }">LinkedIn</RouterLink></li>
        <li><RouterLink target='_blank' :to="{ name: 'stackoverflow' }">Stackoverflow</RouterLink></li>
        <li><RouterLink target='_blank' :to="{ name: 'deviantart' }">DeviantArt</RouterLink></li>
        <li><RouterLink target='_blank' :to="{ name: 'unsplash' }">Unsplash</RouterLink></li>
        <li><RouterLink target='_blank' :to="{ name: 'instagram' }">Instagram</RouterLink></li>
      </ul>
    </div>
  </WelcomeItem>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
