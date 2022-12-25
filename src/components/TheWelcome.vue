<script setup>
import WelcomeItem from './WelcomeItem.vue'
import InfoIcon from './icons/IconInfo.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <InfoIcon />
    </template>
    <template #heading>Who</template>

    <p>Just another dev, from Morocco and based in Casablanca.</p>
    <p><a href="https://blog.moghwan.me/this-is-not-my-first-blog-post" class="external-link" target="_blank" rel="noopener">Read more</a>.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>What</template>

    <p>Most projects never see the light, either because I'm perfecting the MVP or just lazy to start one. Here are some:</p>
    <ul>
      <li>
        <a href="https://bouayadapp-ma.moghwan.me/" class="external-link" target="_blank" rel="noopener">Bouayadapp</a>: daily quotes with salate times.(discontinued).
      </li>
      <li>
        <a href="https://bouayadapi.moghwan.me/" class="external-link" target="_blank" rel="noopener">Bouayad API</a>: Unofficial API for the Bouayadapp (WIP).
      </li>
      <li>
        <a href="https://corona.moghwan.me/" class="external-link" target="_blank" rel="noopener">Covid States</a>: Just another Unofficial Covid-19 Graph stats for Morocco.
      </li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Where</template>

    <RouterLink :to="{ name: 'socials' }">
      Let's connect
    </RouterLink>
  </WelcomeItem>
</template>
