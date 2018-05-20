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
      conditional-status(v-bind:condstatus='status[0][0]')
      conditional-status(v-bind:condstatus='status[0][1]')
      conditional-status(v-bind:condstatus='status[0][2]')
    tr
      td {{ dates[1] }}
      conditional-status(v-bind:condstatus='status[1][0]')
      conditional-status(v-bind:condstatus='status[1][1]')
      conditional-status(v-bind:condstatus='status[1][2]')
    tr
      td {{ dates[2] }}
      conditional-status(v-bind:condstatus='status[2][0]')
      conditional-status(v-bind:condstatus='status[2][1]')
      conditional-status(v-bind:condstatus='status[2][2]')
    tr
      td {{ dates[3] }}
      conditional-status(v-bind:condstatus='status[3][0]')
      conditional-status(v-bind:condstatus='status[3][1]')
      conditional-status(v-bind:condstatus='status[3][2]')
    tr
      td {{ dates[4] }}
      conditional-status(v-bind:condstatus='status[4][0]')
      conditional-status(v-bind:condstatus='status[4][1]')
      conditional-status(v-bind:condstatus='status[4][2]')
    tr
      td {{ dates[5] }}
      conditional-status(v-bind:condstatus='status[5][0]')
      conditional-status(v-bind:condstatus='status[5][1]')
      conditional-status(v-bind:condstatus='status[5][2]')
    tr
      td {{ dates[6] }}
      conditional-status(v-bind:condstatus='status[6][0]')
      conditional-status(v-bind:condstatus='status[6][1]')
      conditional-status(v-bind:condstatus='status[6][2]')
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
    private logout() {
        this.$emit('logout-event');
    }

    onLogout() {
        console.log('logout button')
        this.logout();
    }
}
</script>
