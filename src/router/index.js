import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsesView from '../views/UsesView.vue'
import SocialsView from '../views/SocialsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/u',
      name: 'uses',
      component: UsesView
    },
    // {
    //   path: '/bu',
    //   name: 'blog uses',
    //   redirect: to => { window.location.href = "https://github.com/moghwan" },
    // },
    {
      path: '/s',
      name: 'socials',
      component: SocialsView
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
      path: '/sp',
      name: 'spotify',
      redirect: to => { window.location.href = "https://stats.fm/moghwan" },
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
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    },
  ]
})

export default router
