<template lang="pug">
table.table.table-bordered
  tbody
    tr
      td.align-middle(rowspan=3) 4/30(月)
      td  9:00-12:00
      td
        img(src='images/circle.svg')
    tr
      td 12:00-17:00
      td 
        img(src='images/remove.svg')
    tr
      td 17:00-21:00
      td
        img(src='images/remove.svg')
    tr
      td.align-middle(rowspan=3) 5/1(火)
      td  9:00-12:00
      td
        img(src='images/circle.svg')
    tr
      td 12:00-17:00
      td
        img(src='images/remove.svg')
    tr
      td 17:00-21:00
      td
        img(src='images/remove.svg')
    tr
      td.align-middle(rowspan=3) 5/2(水)
      td  9:00-12:00
      td
        img(src='images/circle.svg')
    tr
      td 12:00-17:00
      td
        img(src='images/remove.svg')
    tr
      td 17:00-21:00
      td
        img(src='images/remove.svg')
    tr
      td.align-middle(rowspan=3) 5/3(木)
      td  9:00-12:00
      td
        img(src='images/circle.svg')
    tr
      td 12:00-17:00
      td
        img(src='images/remove.svg')
    tr
      td 17:00-21:00
      td
        img(src='images/remove.svg')
    tr
      td.align-middle(rowspan=3) 5/4(金)
      td  9:00-12:00
      td
        img(src='images/circle.svg')
    tr
      td 12:00-17:00
      td
        img(src='images/remove.svg')
    tr
      td 17:00-21:00
      td
        img(src='images/remove.svg')
    tr
      td.align-middle(rowspan=3) 5/5(土)
      td  9:00-12:00
      td
        img(src='images/circle.svg')
    tr
      td 12:00-17:00
      td
        img(src='images/remove.svg')
    tr
      td 17:00-21:00
      td
        img(src='images/remove.svg')
    tr
      td.align-middle(rowspan=3) 5/6(日)
      td  9:00-12:00
      td
        img(src='images/circle.svg')
    tr
      td 12:00-17:00
      td
        img(src='images/remove.svg')
    tr
      td 17:00-21:00
      td
        img(src='images/remove.svg')
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  
@Component({
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
