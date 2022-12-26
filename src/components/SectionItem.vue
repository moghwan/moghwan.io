<template>
  <div>
    <h3>{{ useItem.name }}</h3>
    <ul>
      <li v-for="item in useItem.list" :key="item.id">
        <span class="bold" v-html="item.name"></span>:
        <span v-if="!item.hasSubList" v-html="!item.hasSubList ? item.content : null"></span>
        <span v-if="item.hasSubList">
            <ul>
              <li v-for="(subItem) in item.list" :key="subItem.id">
                <span v-if="!subItem.hasSubList" v-html="!subItem.hasSubList ? subItem.content : null"></span>
                <span v-if="subItem.hasSubList">
                  <ul>
                    <li v-for="(subItem2) in subItem.list" :key="subItem2.id">
                      <span v-if="!subItem2.hasSubList" v-html="!subItem2.hasSubList ? subItem.content : null"></span>
                      <span v-if="subItem2.hasSubList">
                        sub item has list!
                      </span>
                    </li>
                  </ul>
                </span>
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