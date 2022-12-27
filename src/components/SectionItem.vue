<template>
  <div>
    <slot></slot>
    <ul>
      <li v-for="item in useItem.list" :key="item.id">
        <span v-if="item.name" class="bold" v-html="item.name + ': '"></span>
        <span v-if="!item.hasSubList" v-html="!item.hasSubList ? item.content : null"></span>
        <span v-if="item.hasSubList">
          <section-item
                  v-for="subItem in item"
                  :key="subItem.id"
                  :useItem="subItem"
              >
          </section-item>
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