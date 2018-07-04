<template lang="pug">
select.custom-select(v-model='typeId', v-on:change="onSelected")
  option(value="0") Marathon less than 3 hours and a half
  option(value="1", selected) Marathon from 3 hours and a half to 5 hours
  option(value="2") Marathon from 5 hours to 6 hours and a half
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import * as Vuex from "vuex";

@Component
export default class LapTimeSelector extends Vue {
    typeId: string = '1'
    public onSelected() {
        this.$store.commit("changeType", this.typeId);
    }
}
</script>
