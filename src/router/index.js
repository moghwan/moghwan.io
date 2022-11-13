import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/u',
      name: 'uses',
      component: () => import('../views/UsesView.vue')
    },
    {
      path: '/s',
      name: 'socials',
      component: () => import('../views/SocialsView.vue')
    },
    {
      path: '/gh',
      name: 'github',
      redirect: to => { window.location.href = "https://github.com/moghwan" },
    },
    {
      path: '/tw',
      name: 'twitter',
      redirect: to => { window.location.href = "https://twitter.com/moghwan" },
    },
    {
      path: '/li',
      name: 'linkedin',
      redirect: to => { window.location.href = "https://www.linkedin.com/in/moghwan" },
    },
    {
      path: '/so',
      name: 'stackoverflow',
      redirect: to => { window.location.href = "https://stackoverflow.com/users/2543690/moghwan" },
    },
    {
      path: '/da',
      name: 'deviantart',
      redirect: to => { window.location.href = "https://c-mar1.deviantart.com" },
    },
    {
      path: '/us',
      name: 'unsplash',
      redirect: to => { window.location.href = "https://unsplash.com/@moghwan" },
    },
    {
      path: '/ig',
      name: 'instagram',
      redirect: to => { window.location.href = "https://instagram.com/_moghwan" },
    },
    {
      path: '/b',
      name: 'blog',
      redirect: to => { window.location.href = "https://blog.moghwan.me" },
    },
  ]
})

export default router
