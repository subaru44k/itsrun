<template lang="pug">
td
  select.custom-select(v-model='statusvalue', name='status', v-on:change='onOptionSelected')
    option(value='0' v-bind:selected='condstatus === 0') 0
    option(value='1' v-bind:selected='condstatus === 1') 1
    option(value='2' v-bind:selected='condstatus === 2') 2
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  
@Component<ConditionalStatusComponent>({
  props: {
    condstatus: Number,
    dateIndex: Number,
    timeIndex: Number
  },
})
export default class ConditionalStatusComponent extends Vue {
  condstatus: number;
  dateIndex: number;
  timeIndex: number;
  statusvalue: number = 0;

  updated() {
    this.statusvalue = this.condstatus;
  }

  onOptionSelected() {
    console.log('selected: ' + this.dateIndex, this.timeIndex, this.statusvalue);
    this.$emit('item-selected', this.dateIndex, this.timeIndex, Number(this.statusvalue));
  }

}
</script>
