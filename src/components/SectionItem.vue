<template>
  <div>
    <h3>{{ useItem.title }}</h3>
    <ul>
      <li v-for="(item, name) in useItem.list" :key="item.id">
        <span class="bold" v-html="name"></span>:
        <span v-html="!item.hasSubList ? item.content : null" v-if="!item.hasSubList"></span>
        <span v-if="item.hasSubList">
            <ul>
              <li v-for="(subItem) in item.content" :key="subItem.id">
                <span v-html="subItem"></span>
              </li>
            </ul>
          </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {toRefs, defineProps} from 'vue'

const props = defineProps({
    useItem: {
      type: Object,
      required: true
    }
})
// no need to sync since data at loaded on page load
// const { useItem } = toRefs(props)
</script>