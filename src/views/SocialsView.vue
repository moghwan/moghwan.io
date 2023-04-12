<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'

const socials = [
  'GitHub',
  'Twitter',
  'LinkedIn',
  'Stackoverflow',
  'Spotify',
  'TvTime',
  'Anilist',
  'DeviantArt',
  'Unsplash',
];

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Let us connect</template>
  
    <div class="socials">
      <ul>
        <li v-for="social in socials">
          <RouterLink target='_blank' :to="{ name: social.toLowerCase() }">{{ social }}</RouterLink>
        </li>
      </ul>
    </div>
  </WelcomeItem>
</template>
