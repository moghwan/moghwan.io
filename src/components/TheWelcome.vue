<script setup>
import { computed } from "vue";
import WelcomeItem from './WelcomeItem.vue'
import InfoIcon from './icons/IconInfo.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import { wowawe } from '../assets/data/user.json'

const who = computed(() => wowawe.who )
const what = computed(() => wowawe.what )
const where = computed(() => wowawe.where )

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <InfoIcon />
    </template>
    <template #heading>{{ who.name }}</template>
    <p v-html="who.content"></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{ what.name }}</template>
    <p v-html="what.content"/>
    <ul>
      <li v-for="item in what.list" :key="item.id" v-html="item.content"/>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>{{ where.name }}</template>
    <RouterLink :to="{ name: 'socials' }">
      {{ where.content }}
    </RouterLink>
  </WelcomeItem>
</template>
