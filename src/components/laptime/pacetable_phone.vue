<template lang="pug">
.table-responsive
  table.table.table-bordered.table-phone
    thead
      tr
        th(scope='col') 目標タイム
        th(scope='col') {{ lapTimeList[0][0] }}
        th(scope='col') {{ lapTimeList[1][0] }}
        th(scope='col') {{ lapTimeList[2][0] }}
        th(scope='col') {{ lapTimeList[3][0] }}
        th(scope='col') {{ lapTimeList[4][0] }}
        th(scope='col') {{ lapTimeList[5][0] }}
        th(scope='col') {{ lapTimeList[6][0] }}
        th(scope='col') {{ lapTimeList[7][0] }}
        th(scope='col') {{ lapTimeList[8][0] }}
        th(scope='col') {{ lapTimeList[9][0] }}
        th(scope='col') {{ lapTimeList[10][0] }}
        th(scope='col') {{ lapTimeList[11][0] }}
        th(scope='col') {{ lapTimeList[12][0] }}
        th(scope='col') {{ lapTimeList[13][0] }}
        th(scope='col') {{ lapTimeList[14][0] }}
        th(scope='col') {{ lapTimeList[15][0] }}
        th(scope='col') {{ lapTimeList[16][0] }}
        th(scope='col') {{ lapTimeList[17][0] }}
        th(scope='col') {{ lapTimeList[18][0] }}
    tbody
      tr
        th(scope='row') 1km
        td(scope='col') {{ lapTimeList[0][1] }}
        td(scope='col') {{ lapTimeList[1][1] }}
        td(scope='col') {{ lapTimeList[2][1] }}
        td(scope='col') {{ lapTimeList[3][1] }}
        td(scope='col') {{ lapTimeList[4][1] }}
        td(scope='col') {{ lapTimeList[5][1] }}
        td(scope='col') {{ lapTimeList[6][1] }}
        td(scope='col') {{ lapTimeList[7][1] }}
        td(scope='col') {{ lapTimeList[8][1] }}
        td(scope='col') {{ lapTimeList[9][1] }}
        td(scope='col') {{ lapTimeList[10][1] }}
        td(scope='col') {{ lapTimeList[11][1] }}
        td(scope='col') {{ lapTimeList[12][1] }}
        td(scope='col') {{ lapTimeList[13][1] }}
        td(scope='col') {{ lapTimeList[14][1] }}
        td(scope='col') {{ lapTimeList[15][1] }}
        td(scope='col') {{ lapTimeList[16][1] }}
        td(scope='col') {{ lapTimeList[17][1] }}
        td(scope='col') {{ lapTimeList[18][1] }}
      tr
        th(scope='row') 5km
        td(scope='col') {{ lapTimeList[0][2] }}
        td(scope='col') {{ lapTimeList[1][2] }}
        td(scope='col') {{ lapTimeList[2][2] }}
        td(scope='col') {{ lapTimeList[3][2] }}
        td(scope='col') {{ lapTimeList[4][2] }}
        td(scope='col') {{ lapTimeList[5][2] }}
        td(scope='col') {{ lapTimeList[6][2] }}
        td(scope='col') {{ lapTimeList[7][2] }}
        td(scope='col') {{ lapTimeList[8][2] }}
        td(scope='col') {{ lapTimeList[9][2] }}
        td(scope='col') {{ lapTimeList[10][2] }}
        td(scope='col') {{ lapTimeList[11][2] }}
        td(scope='col') {{ lapTimeList[12][2] }}
        td(scope='col') {{ lapTimeList[13][2] }}
        td(scope='col') {{ lapTimeList[14][2] }}
        td(scope='col') {{ lapTimeList[15][2] }}
        td(scope='col') {{ lapTimeList[16][2] }}
        td(scope='col') {{ lapTimeList[17][2] }}
        td(scope='col') {{ lapTimeList[18][2] }}
      tr
        th(scope='row') 10km
        td(scope='col') {{ lapTimeList[0][3] }}
        td(scope='col') {{ lapTimeList[1][3] }}
        td(scope='col') {{ lapTimeList[2][3] }}
        td(scope='col') {{ lapTimeList[3][3] }}
        td(scope='col') {{ lapTimeList[4][3] }}
        td(scope='col') {{ lapTimeList[5][3] }}
        td(scope='col') {{ lapTimeList[6][3] }}
        td(scope='col') {{ lapTimeList[7][3] }}
        td(scope='col') {{ lapTimeList[8][3] }}
        td(scope='col') {{ lapTimeList[9][3] }}
        td(scope='col') {{ lapTimeList[10][3] }}
        td(scope='col') {{ lapTimeList[11][3] }}
        td(scope='col') {{ lapTimeList[12][3] }}
        td(scope='col') {{ lapTimeList[13][3] }}
        td(scope='col') {{ lapTimeList[14][3] }}
        td(scope='col') {{ lapTimeList[15][3] }}
        td(scope='col') {{ lapTimeList[16][3] }}
        td(scope='col') {{ lapTimeList[17][3] }}
        td(scope='col') {{ lapTimeList[18][3] }}
      tr
        th(scope='row') 15km
        td(scope='col') {{ lapTimeList[0][4] }}
        td(scope='col') {{ lapTimeList[1][4] }}
        td(scope='col') {{ lapTimeList[2][4] }}
        td(scope='col') {{ lapTimeList[3][4] }}
        td(scope='col') {{ lapTimeList[4][4] }}
        td(scope='col') {{ lapTimeList[5][4] }}
        td(scope='col') {{ lapTimeList[6][4] }}
        td(scope='col') {{ lapTimeList[7][4] }}
        td(scope='col') {{ lapTimeList[8][4] }}
        td(scope='col') {{ lapTimeList[9][4] }}
        td(scope='col') {{ lapTimeList[10][4] }}
        td(scope='col') {{ lapTimeList[11][4] }}
        td(scope='col') {{ lapTimeList[12][4] }}
        td(scope='col') {{ lapTimeList[13][4] }}
        td(scope='col') {{ lapTimeList[14][4] }}
        td(scope='col') {{ lapTimeList[15][4] }}
        td(scope='col') {{ lapTimeList[16][4] }}
        td(scope='col') {{ lapTimeList[17][4] }}
        td(scope='col') {{ lapTimeList[18][4] }}
      tr
        th(scope='row') 20km
        td(scope='col') {{ lapTimeList[0][5] }}
        td(scope='col') {{ lapTimeList[1][5] }}
        td(scope='col') {{ lapTimeList[2][5] }}
        td(scope='col') {{ lapTimeList[3][5] }}
        td(scope='col') {{ lapTimeList[4][5] }}
        td(scope='col') {{ lapTimeList[5][5] }}
        td(scope='col') {{ lapTimeList[6][5] }}
        td(scope='col') {{ lapTimeList[7][5] }}
        td(scope='col') {{ lapTimeList[8][5] }}
        td(scope='col') {{ lapTimeList[9][5] }}
        td(scope='col') {{ lapTimeList[10][5] }}
        td(scope='col') {{ lapTimeList[11][5] }}
        td(scope='col') {{ lapTimeList[12][5] }}
        td(scope='col') {{ lapTimeList[13][5] }}
        td(scope='col') {{ lapTimeList[14][5] }}
        td(scope='col') {{ lapTimeList[15][5] }}
        td(scope='col') {{ lapTimeList[16][5] }}
        td(scope='col') {{ lapTimeList[17][5] }}
        td(scope='col') {{ lapTimeList[18][5] }}
      tr
        th(scope='row') ハーフ
        td(scope='col') {{ lapTimeList[0][6] }}
        td(scope='col') {{ lapTimeList[1][6] }}
        td(scope='col') {{ lapTimeList[2][6] }}
        td(scope='col') {{ lapTimeList[3][6] }}
        td(scope='col') {{ lapTimeList[4][6] }}
        td(scope='col') {{ lapTimeList[5][6] }}
        td(scope='col') {{ lapTimeList[6][6] }}
        td(scope='col') {{ lapTimeList[7][6] }}
        td(scope='col') {{ lapTimeList[8][6] }}
        td(scope='col') {{ lapTimeList[9][6] }}
        td(scope='col') {{ lapTimeList[10][6] }}
        td(scope='col') {{ lapTimeList[11][6] }}
        td(scope='col') {{ lapTimeList[12][6] }}
        td(scope='col') {{ lapTimeList[13][6] }}
        td(scope='col') {{ lapTimeList[14][6] }}
        td(scope='col') {{ lapTimeList[15][6] }}
        td(scope='col') {{ lapTimeList[16][6] }}
        td(scope='col') {{ lapTimeList[17][6] }}
        td(scope='col') {{ lapTimeList[18][6] }}
      tr
        th(scope='row') 25km
        td(scope='col') {{ lapTimeList[0][7] }}
        td(scope='col') {{ lapTimeList[1][7] }}
        td(scope='col') {{ lapTimeList[2][7] }}
        td(scope='col') {{ lapTimeList[3][7] }}
        td(scope='col') {{ lapTimeList[4][7] }}
        td(scope='col') {{ lapTimeList[5][7] }}
        td(scope='col') {{ lapTimeList[6][7] }}
        td(scope='col') {{ lapTimeList[7][7] }}
        td(scope='col') {{ lapTimeList[8][7] }}
        td(scope='col') {{ lapTimeList[9][7] }}
        td(scope='col') {{ lapTimeList[10][7] }}
        td(scope='col') {{ lapTimeList[11][7] }}
        td(scope='col') {{ lapTimeList[12][7] }}
        td(scope='col') {{ lapTimeList[13][7] }}
        td(scope='col') {{ lapTimeList[14][7] }}
        td(scope='col') {{ lapTimeList[15][7] }}
        td(scope='col') {{ lapTimeList[16][7] }}
        td(scope='col') {{ lapTimeList[17][7] }}
        td(scope='col') {{ lapTimeList[18][7] }}
      tr
        th(scope='row') 30km
        td(scope='col') {{ lapTimeList[0][8] }}
        td(scope='col') {{ lapTimeList[1][8] }}
        td(scope='col') {{ lapTimeList[2][8] }}
        td(scope='col') {{ lapTimeList[3][8] }}
        td(scope='col') {{ lapTimeList[4][8] }}
        td(scope='col') {{ lapTimeList[5][8] }}
        td(scope='col') {{ lapTimeList[6][8] }}
        td(scope='col') {{ lapTimeList[7][8] }}
        td(scope='col') {{ lapTimeList[8][8] }}
        td(scope='col') {{ lapTimeList[9][8] }}
        td(scope='col') {{ lapTimeList[10][8] }}
        td(scope='col') {{ lapTimeList[11][8] }}
        td(scope='col') {{ lapTimeList[12][8] }}
        td(scope='col') {{ lapTimeList[13][8] }}
        td(scope='col') {{ lapTimeList[14][8] }}
        td(scope='col') {{ lapTimeList[15][8] }}
        td(scope='col') {{ lapTimeList[16][8] }}
        td(scope='col') {{ lapTimeList[17][8] }}
        td(scope='col') {{ lapTimeList[18][8] }}
      tr
        th(scope='row') 35km
        td(scope='col') {{ lapTimeList[0][9] }}
        td(scope='col') {{ lapTimeList[1][9] }}
        td(scope='col') {{ lapTimeList[2][9] }}
        td(scope='col') {{ lapTimeList[3][9] }}
        td(scope='col') {{ lapTimeList[4][9] }}
        td(scope='col') {{ lapTimeList[5][9] }}
        td(scope='col') {{ lapTimeList[6][9] }}
        td(scope='col') {{ lapTimeList[7][9] }}
        td(scope='col') {{ lapTimeList[8][9] }}
        td(scope='col') {{ lapTimeList[9][9] }}
        td(scope='col') {{ lapTimeList[10][9] }}
        td(scope='col') {{ lapTimeList[11][9] }}
        td(scope='col') {{ lapTimeList[12][9] }}
        td(scope='col') {{ lapTimeList[13][9] }}
        td(scope='col') {{ lapTimeList[14][9] }}
        td(scope='col') {{ lapTimeList[15][9] }}
        td(scope='col') {{ lapTimeList[16][9] }}
        td(scope='col') {{ lapTimeList[17][9] }}
        td(scope='col') {{ lapTimeList[18][9] }}
      tr
        th(scope='row') 40km
        td(scope='col') {{ lapTimeList[0][10] }}
        td(scope='col') {{ lapTimeList[1][10] }}
        td(scope='col') {{ lapTimeList[2][10] }}
        td(scope='col') {{ lapTimeList[3][10] }}
        td(scope='col') {{ lapTimeList[4][10] }}
        td(scope='col') {{ lapTimeList[5][10] }}
        td(scope='col') {{ lapTimeList[6][10] }}
        td(scope='col') {{ lapTimeList[7][10] }}
        td(scope='col') {{ lapTimeList[8][10] }}
        td(scope='col') {{ lapTimeList[9][10] }}
        td(scope='col') {{ lapTimeList[10][10] }}
        td(scope='col') {{ lapTimeList[11][10] }}
        td(scope='col') {{ lapTimeList[12][10] }}
        td(scope='col') {{ lapTimeList[13][10] }}
        td(scope='col') {{ lapTimeList[14][10] }}
        td(scope='col') {{ lapTimeList[15][10] }}
        td(scope='col') {{ lapTimeList[16][10] }}
        td(scope='col') {{ lapTimeList[17][10] }}
        td(scope='col') {{ lapTimeList[18][10] }}
      tr
        th(scope='row') フル
        td(scope='col') {{ lapTimeList[0][11] }}
        td(scope='col') {{ lapTimeList[1][11] }}
        td(scope='col') {{ lapTimeList[2][11] }}
        td(scope='col') {{ lapTimeList[3][11] }}
        td(scope='col') {{ lapTimeList[4][11] }}
        td(scope='col') {{ lapTimeList[5][11] }}
        td(scope='col') {{ lapTimeList[6][11] }}
        td(scope='col') {{ lapTimeList[7][11] }}
        td(scope='col') {{ lapTimeList[8][11] }}
        td(scope='col') {{ lapTimeList[9][11] }}
        td(scope='col') {{ lapTimeList[10][11] }}
        td(scope='col') {{ lapTimeList[11][11] }}
        td(scope='col') {{ lapTimeList[12][11] }}
        td(scope='col') {{ lapTimeList[13][11] }}
        td(scope='col') {{ lapTimeList[14][11] }}
        td(scope='col') {{ lapTimeList[15][11] }}
        td(scope='col') {{ lapTimeList[16][11] }}
        td(scope='col') {{ lapTimeList[17][11] }}
        td(scope='col') {{ lapTimeList[18][11] }}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { mapState } from "vuex";
import * as Vuex from "vuex";
import TimeContainer from '../../model/TimeContainer';
import LapTimeCalculator from '../../model/LapTimeCalculator';

@Component
export default class PaceTablePcComponent extends Vue {

    get lapTimeList() {
        const times: TimeContainer[] = this.$store.state.targetTimes;
        const lapTimeList: string[][] = [];
        times.forEach(time => {
            lapTimeList.push((new LapTimeCalculator(time)).getLapTime());
        })
        return lapTimeList;
    }
}
</script>
