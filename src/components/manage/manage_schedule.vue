<template lang="pug">
table.table.table-bordered
  tbody
    tr
      td 
      td {{ timeslots[0] }}
      td {{ timeslots[1] }}
      td {{ timeslots[2] }}
    tr
      td {{ dates[0] }}
      selectable-conditional-status(v-bind:condstatus='status[0][0]', v-bind:dateIndex='0', v-bind:timeIndex='0', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[0][1]', v-bind:dateIndex='0', v-bind:timeIndex='1', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[0][2]', v-bind:dateIndex='0', v-bind:timeIndex='2', v-on:item-selected='handleItemSelected')
    tr
      td {{ dates[1] }}
      selectable-conditional-status(v-bind:condstatus='status[1][0]', v-bind:dateIndex='1', v-bind:timeIndex='0', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[1][1]', v-bind:dateIndex='1', v-bind:timeIndex='1', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[1][2]', v-bind:dateIndex='1', v-bind:timeIndex='2', v-on:item-selected='handleItemSelected')
    tr
      td {{ dates[2] }}
      selectable-conditional-status(v-bind:condstatus='status[2][0]', v-bind:dateIndex='2', v-bind:timeIndex='0', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[2][1]', v-bind:dateIndex='2', v-bind:timeIndex='1', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[2][2]', v-bind:dateIndex='2', v-bind:timeIndex='2', v-on:item-selected='handleItemSelected')
    tr
      td {{ dates[3] }}
      selectable-conditional-status(v-bind:condstatus='status[3][0]', v-bind:dateIndex='3', v-bind:timeIndex='0', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[3][1]', v-bind:dateIndex='3', v-bind:timeIndex='1', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[3][2]', v-bind:dateIndex='3', v-bind:timeIndex='2', v-on:item-selected='handleItemSelected')
    tr
      td {{ dates[4] }}
      selectable-conditional-status(v-bind:condstatus='status[4][0]', v-bind:dateIndex='4', v-bind:timeIndex='0', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[4][1]', v-bind:dateIndex='4', v-bind:timeIndex='1', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[4][2]', v-bind:dateIndex='4', v-bind:timeIndex='2', v-on:item-selected='handleItemSelected')
    tr
      td {{ dates[5] }}
      selectable-conditional-status(v-bind:condstatus='status[5][0]', v-bind:dateIndex='5', v-bind:timeIndex='0', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[5][1]', v-bind:dateIndex='5', v-bind:timeIndex='1', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[5][2]', v-bind:dateIndex='5', v-bind:timeIndex='2', v-on:item-selected='handleItemSelected')
    tr
      td {{ dates[6] }}
      selectable-conditional-status(v-bind:condstatus='status[6][0]', v-bind:dateIndex='6', v-bind:timeIndex='0', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[6][1]', v-bind:dateIndex='6', v-bind:timeIndex='1', v-on:item-selected='handleItemSelected')
      selectable-conditional-status(v-bind:condstatus='status[6][2]', v-bind:dateIndex='6', v-bind:timeIndex='2', v-on:item-selected='handleItemSelected')
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import SelectableConditionalStatusComponent from './selectable_conditional_status';
  
@Component({
  props: {
    timeslots: Array,
    dates: Array,
    status: Array
  },
  components: {
    'selectable-conditional-status': SelectableConditionalStatusComponent
  }
})
export default class AddItemComponent extends Vue {
    handleItemSelected(dateIndex: number, timeIndex: number, item: number) {
      console.log('item selected: ' + dateIndex, timeIndex, item);
      this.$emit('schedule-changed', dateIndex, timeIndex, item);
    }
}
</script>
