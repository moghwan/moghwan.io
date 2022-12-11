<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      Uses
      (or check the <RouterLink target='_blank' :to="{ name: 'uses' }" class="external-link">!tl;dr</RouterLink> version)
    </template>

    <div class="uses">
      <h3>OSoftware</h3>
      <ul>
        <li>OS: Manjaro i3 community [<a href="https://github.com/moghwan/dotfiles">dotfiles</a>]</li>
        <li>Dev tools:<ul>
          <li>PhpStorm &amp; Laradock (LAMP)</li>
          <li>WebStorm &amp; nvm</li>
          <li>Vim to edit config files</li>
        </ul>
        </li>
        <li>Stacks:<ul>
          <li>Laravel / Inertia / Vue 2 / TailWind</li>
          <li>Laravel / Livewire / Bootstrap 5</li>
          <li>NuxtJS / TailWind</li>
          <li>ionic and Kotlin</li>
        </ul>
        </li>
        <li>Deployment: Vercel / Cloudways / OVH (VPS) / Fastlane</li>
        <li>Terminal: Konsole/iTerm &amp; OhMyZsh [robbyrussell theme]</li>
        <li>Note-taking: TickTick &amp; Notion.so</li>
        <li>Browser: Firefox (DE for Desktop, Nightly for mobile)</li>
      </ul>
      <h3>Hardware</h3>
      <ul>
        <li>Laptop: HP 450 G8</li>
        <li>Keyboard: Keychron K6, reds with <a href="https://www.reddit.com/r/evangelion/comments/vi5we9">custom keycaps</a></li>
        <li>Phone: <a href="https://dbrand.com/shop/special-edition/something">Something</a> like Pixel 6 Pro</li>
        <li>Wearable: miband 6</li>
      </ul>

    </div>
  </WelcomeItem>
</template>

<style scoped>
.uses { margin-top: 1rem; }
</style>