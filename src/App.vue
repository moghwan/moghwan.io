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
        <RouterLink target='_blank' :to="{ name: 'blog' }" class="external-link external-link-left">Blog</RouterLink>
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
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-accent-2);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color: var(--color-text);
}

nav a:first-of-type {
  border: 0;
}

a.external-link {
  background-image: url("data:image/svg+xml, %3Csvg fill='%23ffffff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='25px' height='25px'%3E%3Cpath d='M 31.5 9 C 31.224 9 31 9.224 31 9.5 C 31 9.776 31.224 10 31.5 10 L 39.292969 10 L 25.146484 24.146484 C 24.951484 24.341484 24.951484 24.658516 25.146484 24.853516 C 25.244484 24.950516 25.372 25 25.5 25 C 25.628 25 25.755516 24.950516 25.853516 24.853516 L 40 10.707031 L 40 18.5 C 40 18.776 40.224 19 40.5 19 C 40.776 19 41 18.776 41 18.5 L 41 9.5 C 41 9.224 40.776 9 40.5 9 L 31.5 9 z M 14.5 10 C 12.019 10 10 12.019 10 14.5 L 10 35.5 C 10 37.981 12.019 40 14.5 40 L 35.5 40 C 37.981 40 40 37.981 40 35.5 L 40 23.5 C 40 23.224 39.776 23 39.5 23 C 39.224 23 39 23.224 39 23.5 L 39 35.5 C 39 37.43 37.43 39 35.5 39 L 14.5 39 C 12.57 39 11 37.43 11 35.5 L 11 14.5 C 11 12.57 12.57 11 14.5 11 L 26.5 11 C 26.776 11 27 10.776 27 10.5 C 27 10.224 26.776 10 26.5 10 L 14.5 10 z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
}

a.external-link.external-link-right {
  background-position-x: right;
  padding-right: 1.5rem;
}

a.external-link.external-link-left {
  padding-left: 1.5rem;
  padding-bottom: .5rem;
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
