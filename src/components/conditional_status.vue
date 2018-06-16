<template lang="pug">
td
  img(src='/images/not_loaded.svg', v-if='condstatus === -1')
  img(src='/images/unknown.svg', v-if='condstatus === 0')
  img(src='/images/circle.svg', v-if='condstatus === 1')
  img(src='/images/remove.svg', v-if='condstatus === 2')
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  
@Component({
  props: {
    condstatus: Number
  }
})
export default class ConditionalStatusComponent extends Vue {
}
</script>
