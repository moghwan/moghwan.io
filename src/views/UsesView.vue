<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import { uses } from '../assets/data/user.json'

const uses_ = uses;
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      Uses
    </template>

    <div class="uses">
      <p v-for="(use, key) in uses_" :key="use.id">
        <h3>{{ use.title }}</h3>
        <ul>
          <li v-for="(item, keyy) in use.list" :key="item.id">
            <span class="bold" v-html="keyy"></span>:
            <span v-html="!item.hasSubList ? item.content : null" v-if="!item.hasSubList"></span>
            <span v-if="item.hasSubList">
              <ul>
                <li v-for="(subItem, keyyy) in item.content" :key="subItem.id">
                  <span v-html="subItem"></span>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </p>
    </div>
  </WelcomeItem>
</template>

<style scoped>
.uses { margin-top: 1rem; }
.bold { font-weight: bold }
</style>