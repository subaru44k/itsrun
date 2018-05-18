<template lang="pug">
table.table.table-bordered
  tbody
    tr
      td.align-middle(rowspan=3) {{ dates[0] }}
      td {{ timeslots[0]}}
      td
        img(src='images/circle.svg', v-if='status[0][0] === 1')
        img(src='images/remove.svg', v-if='status[0][0] === 2') 
    tr
      td {{ timeslots[1]}}
      td
        img(src='images/circle.svg', v-if='status[0][1] === 1')
        img(src='images/remove.svg', v-if='status[0][1] === 2')
    tr
      td {{ timeslots[2]}}
      td
        img(src='images/circle.svg', v-if='status[0][2] === 1')
        img(src='images/remove.svg', v-if='status[0][2] === 2')
    tr
      td.align-middle(rowspan=3) {{ dates[1]}}
      td {{ timeslots[0]}}
      td
        img(src='images/circle.svg', v-if='status[1][0] === 1')
        img(src='images/remove.svg', v-if='status[1][0] === 2')
    tr
      td {{ timeslots[0]}}
      td
        img(src='images/circle.svg', v-if='status[1][1] === 1')
        img(src='images/remove.svg', v-if='status[1][1] === 2')
    tr
      td {{ timeslots[2]}}
      td
        img(src='images/circle.svg', v-if='status[1][2] === 1')
        img(src='images/remove.svg', v-if='status[1][2] === 2')
    tr
      td.align-middle(rowspan=3) {{ dates[2]}}
      td {{ timeslots[0]}}
      td
        img(src='images/circle.svg', v-if='status[2][0] === 1')
        img(src='images/remove.svg', v-if='status[2][0] === 2')
    tr
      td {{ timeslots[1]}}
      td
        img(src='images/circle.svg', v-if='status[2][1] === 1')
        img(src='images/remove.svg', v-if='status[2][1] === 2')
    tr
      td {{ timeslots[2]}}
      td
        img(src='images/circle.svg', v-if='status[2][2] === 1')
        img(src='images/remove.svg', v-if='status[2][2] === 2')
    tr
      td.align-middle(rowspan=3) {{ dates[3]}}
      td {{ timeslots[0]}}
      td
        img(src='images/circle.svg', v-if='status[3][0] === 1')
        img(src='images/remove.svg', v-if='status[3][0] === 2')
    tr
      td {{ timeslots[1]}}
      td
        img(src='images/circle.svg', v-if='status[3][1] === 1')
        img(src='images/remove.svg', v-if='status[3][1] === 2')
    tr
      td {{ timeslots[2]}}
      td
        img(src='images/circle.svg', v-if='status[3][2] === 1')
        img(src='images/remove.svg', v-if='status[3][2] === 2')
    tr
      td.align-middle(rowspan=3) {{ dates[4]}}
      td {{ timeslots[0]}}
      td
        img(src='images/circle.svg', v-if='status[4][0] === 1')
        img(src='images/remove.svg', v-if='status[4][0] === 2')
    tr
      td {{ timeslots[1]}}
      td
        img(src='images/circle.svg', v-if='status[4][1] === 1')
        img(src='images/remove.svg', v-if='status[4][1] === 2')
    tr
      td {{ timeslots[2]}}
      td
        img(src='images/circle.svg', v-if='status[4][2] === 1')
        img(src='images/remove.svg', v-if='status[4][2] === 2')
    tr
      td.align-middle(rowspan=3) {{ dates[5]}}
      td {{ timeslots[0]}}
      td
        img(src='images/circle.svg', v-if='status[5][0] === 1')
        img(src='images/remove.svg', v-if='status[5][0] === 2')
    tr
      td {{ timeslots[1]}}
      td
        img(src='images/circle.svg', v-if='status[5][1] === 1')
        img(src='images/remove.svg', v-if='status[5][1] === 2')
    tr
      td {{ timeslots[2]}}
      td
        img(src='images/circle.svg', v-if='status[5][2] === 1')
        img(src='images/remove.svg', v-if='status[5][2] === 2')
    tr
      td.align-middle(rowspan=3) {{ dates[6]}}
      td {{ timeslots[0]}}
      td
        img(src='images/circle.svg', v-if='status[6][0] === 1')
        img(src='images/remove.svg', v-if='status[6][0] === 2')
    tr
      td {{ timeslots[1]}}
      td
        img(src='images/circle.svg', v-if='status[6][1] === 1')
        img(src='images/remove.svg', v-if='status[6][1] === 2')
    tr
      td {{ timeslots[2]}}
      td
        img(src='images/circle.svg', v-if='status[6][2] === 1')
        img(src='images/remove.svg', v-if='status[6][2] === 2')
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  
@Component({
  props: {
    timeslots: Array,
    dates: Array,
    status: Array
  }
})
export default class AddItemComponent extends Vue {
}
</script>
