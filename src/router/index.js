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
      path: '/tv',
      name: 'tvtime',
      redirect: to => { window.location.href = "https://www.tvtime.com/user/40961985/profile" },
    },
    {
      path: '/da',
      name: 'deviantart',
      redirect: to => { window.location.href = "https://c-mar1.deviantart.com" },
    },
    {
      path: '/fl',
      name: 'flickr',
      redirect: to => { window.location.href = "https://www.flickr.com/people/198177608@N06/" },
    },
    {
      path: '/an',
      name: 'anilist',
      redirect: to => { window.location.href = "https://anilist.co/user/moghwan" },
    },
    {
      path: '/dotfiles',
      name: 'dotfiles',
      redirect: to => { window.location.href = "https://github.com/moghwan/dotfiles" },
    },
    {
      path: '/b',
      name: 'blog',
      redirect: to => { window.location.href = "https://blog.moghwan.io" },
    },
    {
      path: '/m',
      name: 'medium',
      redirect: to => { window.location.href = "https://medium.com/@moghwan" },
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    },
  ]
})

export default router
