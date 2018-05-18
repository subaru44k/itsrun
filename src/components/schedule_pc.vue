<template lang="pug">
table.table.table-bordered
  tbody
    tr
      td 
      td  9:00-12:00
      td 12:00-17:00
      td 17:00-21:00
    tr
      td 4/30(月)
      td
        img(src='images/circle.svg')
      td
        img(src='images/circle.svg')
      td
        img(src='images/remove.svg')
    tr
      td 5/1(火)
      td
        img(src='images/circle.svg')
      td
        img(src='images/circle.svg')
      td
        img(src='images/remove.svg')
    tr
      td 5/2(水)
      td
        img(src='images/circle.svg')
      td
        img(src='images/circle.svg')
      td
        img(src='images/remove.svg')
    tr
      td 5/3(木)
      td
        img(src='images/circle.svg')
      td
        img(src='images/circle.svg')
      td
        img(src='images/remove.svg')
    tr
      td 5/4(金)
      td
        img(src='images/circle.svg')
      td
        img(src='images/circle.svg')
      td
        img(src='images/remove.svg')
    tr
      td 5/5(土)
      td
        img(src='images/circle.svg')
      td
        img(src='images/circle.svg')
      td
        img(src='images/remove.svg')
    tr
      td 5/6(日)
      td
        img(src='images/circle.svg')
      td
        img(src='images/circle.svg')
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
