<template lang="pug">
select.custom-select(v-model='typeId', v-on:change="onSelected")
  option(value="0") マラソン　〜３時間半
  option(value="1", selected) マラソン　３時間半〜５時間
  option(value="2") マラソン　５時間〜６時間半
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
