<template>
  <div class="socials">
    <h1>Let us connect</h1>
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
