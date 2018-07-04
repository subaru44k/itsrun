import Vue from 'vue'
import Vuex from 'vuex'

import PaceTablePhoneComponent from "./components/laptime/pacetable_phone_eng.vue";
import PaceTablePcComponent from "./components/laptime/pacetable_pc_eng.vue";
import LapTimeSelectorComponent from "./components/laptime/laptimeselector_eng.vue";
import TimeContainer from './model/TimeContainer';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        targetTimes: [
            new TimeContainer(3, 30, 0),
            new TimeContainer(3, 35, 0),
            new TimeContainer(3, 40, 0),
            new TimeContainer(3, 45, 0),
            new TimeContainer(3, 50, 0),
            new TimeContainer(3, 55, 0),
            new TimeContainer(4, 0, 0),
            new TimeContainer(4, 5, 0),
            new TimeContainer(4, 10, 0),
            new TimeContainer(4, 15, 0),
            new TimeContainer(4, 20, 0),
            new TimeContainer(4, 25, 0),
            new TimeContainer(4, 30, 0),
            new TimeContainer(4, 35, 0),
            new TimeContainer(4, 40, 0),
            new TimeContainer(4, 45, 0),
            new TimeContainer(4, 50, 0),
            new TimeContainer(4, 55, 0),
            new TimeContainer(5, 0, 0),
        ]
    },
    mutations: {
        changeType (state, type: string) {
            if (type === '0') {
                state.targetTimes = [
                    new TimeContainer(2, 0, 0),
                    new TimeContainer(2, 5, 0),
                    new TimeContainer(2, 10, 0),
                    new TimeContainer(2, 15, 0),
                    new TimeContainer(2, 20, 0),
                    new TimeContainer(2, 25, 0),
                    new TimeContainer(2, 30, 0),
                    new TimeContainer(2, 35, 0),
                    new TimeContainer(2, 40, 0),
                    new TimeContainer(2, 45, 0),
                    new TimeContainer(2, 50, 0),
                    new TimeContainer(2, 55, 0),
                    new TimeContainer(3, 0, 0),
                    new TimeContainer(3, 5, 0),
                    new TimeContainer(3, 10, 0),
                    new TimeContainer(3, 15, 0),
                    new TimeContainer(3, 20, 0),
                    new TimeContainer(3, 25, 0),
                    new TimeContainer(3, 30, 0),
                ]
            } else if (type === '1') {
                state.targetTimes = [
                    new TimeContainer(3, 30, 0),
                    new TimeContainer(3, 35, 0),
                    new TimeContainer(3, 40, 0),
                    new TimeContainer(3, 45, 0),
                    new TimeContainer(3, 50, 0),
                    new TimeContainer(3, 55, 0),
                    new TimeContainer(4, 0, 0),
                    new TimeContainer(4, 5, 0),
                    new TimeContainer(4, 10, 0),
                    new TimeContainer(4, 15, 0),
                    new TimeContainer(4, 20, 0),
                    new TimeContainer(4, 25, 0),
                    new TimeContainer(4, 30, 0),
                    new TimeContainer(4, 35, 0),
                    new TimeContainer(4, 40, 0),
                    new TimeContainer(4, 45, 0),
                    new TimeContainer(4, 50, 0),
                    new TimeContainer(4, 55, 0),
                    new TimeContainer(5, 0, 0),
                ]
            } else if (type === '2') {
                state.targetTimes = [
                    new TimeContainer(5, 0, 0),
                    new TimeContainer(5, 5, 0),
                    new TimeContainer(5, 10, 0),
                    new TimeContainer(5, 15, 0),
                    new TimeContainer(5, 20, 0),
                    new TimeContainer(5, 25, 0),
                    new TimeContainer(5, 30, 0),
                    new TimeContainer(5, 35, 0),
                    new TimeContainer(5, 40, 0),
                    new TimeContainer(5, 45, 0),
                    new TimeContainer(5, 50, 0),
                    new TimeContainer(5, 55, 0),
                    new TimeContainer(6, 0, 0),
                    new TimeContainer(6, 5, 0),
                    new TimeContainer(6, 10, 0),
                    new TimeContainer(6, 15, 0),
                    new TimeContainer(6, 20, 0),
                    new TimeContainer(6, 25, 0),
                    new TimeContainer(6, 30, 0),
                ]
            }
        }
    }
});

const app = new Vue({
    el: "#app",
    store,
    components: {
        laptimeselector: LapTimeSelectorComponent,
        pacetable_phone: PaceTablePhoneComponent,
        pacetable_pc: PaceTablePcComponent,
    },
})