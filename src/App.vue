<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Home/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ name: 'uses' }">Uses</RouterLink>
        <RouterLink :to="{ name: 'oss' }">Oss</RouterLink>
        <RouterLink target='_blank' :to="{ name: 'blog' }" class="external-link">Blog</RouterLink>
        <RouterLink target='_blank' :to="{ name: 'cv' }" class="external-link">CV</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-accent-2);
}

nav a {
  display: inline-block;
  margin: 0 1rem;
  color: var(--color-text);
}

nav a:first-of-type {
  border: 0;
}

a.external-link {
  border-bottom: 1px dashed;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
