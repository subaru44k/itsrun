<template lang="pug">
table.table.table-bordered
  tbody
    tr
      td.align-middle(rowspan=3) {{ dates[0] }}
      td {{ timeslots[0]}}
      conditional-status(v-bind:condstatus='status[0][0]')
    tr
      td {{ timeslots[1]}}
      conditional-status(v-bind:condstatus='status[0][1]')
    tr
      td {{ timeslots[2]}}
      conditional-status(v-bind:condstatus='status[0][2]')
    tr
      td.align-middle(rowspan=3) {{ dates[1]}}
      td {{ timeslots[0]}}
      conditional-status(v-bind:condstatus='status[1][0]')
    tr
      td {{ timeslots[1]}}
      conditional-status(v-bind:condstatus='status[1][1]')
    tr
      td {{ timeslots[2]}}
      conditional-status(v-bind:condstatus='status[1][2]')
    tr
      td.align-middle(rowspan=3) {{ dates[2]}}
      td {{ timeslots[0]}}
      conditional-status(v-bind:condstatus='status[2][0]')
    tr
      td {{ timeslots[1]}}
      conditional-status(v-bind:condstatus='status[2][1]')
    tr
      td {{ timeslots[2]}}
      conditional-status(v-bind:condstatus='status[2][2]')
    tr
      td.align-middle(rowspan=3) {{ dates[3]}}
      td {{ timeslots[0]}}
      conditional-status(v-bind:condstatus='status[3][0]')
    tr
      td {{ timeslots[1]}}
      conditional-status(v-bind:condstatus='status[3][1]')
    tr
      td {{ timeslots[2]}}
      conditional-status(v-bind:condstatus='status[3][2]')
    tr
      td.align-middle(rowspan=3) {{ dates[4]}}
      td {{ timeslots[0]}}
      conditional-status(v-bind:condstatus='status[4][0]')
    tr
      td {{ timeslots[1]}}
      conditional-status(v-bind:condstatus='status[4][1]')
    tr
      td {{ timeslots[2]}}
      conditional-status(v-bind:condstatus='status[4][2]')
    tr
      td.align-middle(rowspan=3) {{ dates[5]}}
      td {{ timeslots[0]}}
      conditional-status(v-bind:condstatus='status[5][0]')
    tr
      td {{ timeslots[1]}}
      conditional-status(v-bind:condstatus='status[5][1]')
    tr
      td {{ timeslots[2]}}
      conditional-status(v-bind:condstatus='status[5][2]')
    tr
      td.align-middle(rowspan=3) {{ dates[6]}}
      td {{ timeslots[0]}}
      conditional-status(v-bind:condstatus='status[6][0]')
    tr
      td {{ timeslots[1]}}
      conditional-status(v-bind:condstatus='status[6][1]')
    tr
      td {{ timeslots[2]}}
      conditional-status(v-bind:condstatus='status[6][2]')
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ConditionalStatusComponent from './conditional_status.vue';

@Component({
  props: {
    timeslots: Array,
    dates: Array,
    status: Array
  },
  components: {
    'conditional-status': ConditionalStatusComponent
  }
})
export default class AddItemComponent extends Vue {
}
</script>
