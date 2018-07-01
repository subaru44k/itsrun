import Vue from 'vue'
import Vuex from 'vuex'

import PaceTableComponent from "./components/pacetable.vue";
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
        changeType (type) {
        }
    }
});

const app = new Vue({
    el: "#app",
    store,
    components: {
        pacetable: PaceTableComponent,
    },
})