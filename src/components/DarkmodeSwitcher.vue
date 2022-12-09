<template>
  <span @click="toggleMode">
    <SunIcon v-if="isDarkMode === 'light'"/>
    <MoonIcon v-if="isDarkMode === 'dark'"/>
  </span>
</template>

<script setup>
import SunIcon from './icons/IconSun.vue'
import MoonIcon from './icons/IconMoon.vue'
import { onMounted, reactive, ref, watch, watchEffect, computed } from "vue";

    const MODE = {
      DARK: 'dark',
      LIGHT: 'light'
    };
    
    const isDarkMode = ref(localStorage.theme);

    watchEffect((isDarkNow, wasDarkBefore) => {
      let html = document.querySelector('html');
      
      if (wasDarkBefore !== null) {
        localStorage.theme = !isDarkNow ? MODE.LIGHT : MODE.DARK;
      }
      
      if (localStorage.theme == MODE.DARK) {
        html.classList.add(MODE.DARK);
      } else {
        html.classList.remove(MODE.DARK);
      }
    })

    const toggleMode = () => {
      if(localStorage.theme == MODE.DARK) {
        document.querySelector('html').classList.remove(MODE.DARK);
        localStorage.theme = isDarkMode.value = MODE.LIGHT;

      }else if(localStorage.theme == MODE.LIGHT) {
        document.querySelector('html').classList.add(MODE.DARK);
        localStorage.theme = isDarkMode.value = MODE.DARK;
      }
    }
</script>
