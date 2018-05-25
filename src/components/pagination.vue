<template lang="pug">
ul.pagination
  li.page-item
    a#previous-link.page-link(v-on:click='previous', aria-label='Previous')
      span(aria-hidden='true') &lt;
      span.sr-only Previous
  li.page-item
    a#next-link.page-link(v-on:click='next', aria-label='Next')
      span(aria-hidden='true') &gt;
      span.sr-only Next
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
})
export default class PaginationComponent extends Vue {
    previous() {
        this.$emit('previous-week-event');
    }
    next() {
        this.$emit('next-week-event');
    }
}
</script>
