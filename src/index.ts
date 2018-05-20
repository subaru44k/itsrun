declare const firebase: any;

import Vue from 'vue'

import ScheduleSmartphoneComponent from './components/schedule_phone';
import SchedulePcComponent from './components/schedule_pc';
import ConditionalStatus from './components/conditional_status';
import { FirebaseControl } from './firebase/FirebaseControl';

console.log("hello world");

// register component globally, but should register locally...
Vue.component('conditional-status', ConditionalStatus
)

const timeRange: string[] = [];
const schedule = new Vue({
  el: '#app',
  data: {
    //timeSlots: ['9:00-12:00', '12:00-17:00', '17:00-21:00'],
    timeSlots: timeRange,
    dates: ['4/29(日)', '4/30(月)', '5/1(火)', '5/2(水)', '5/3(木)', '5/4(金)', '5/5(土)'],
    status: [[1, 2, 2], [1, 2, 2], [1, 2, 2], [1, 2, 2], [1, 2, 2], [1, 2, 2], [2, 2, 1]]
  },
  components: {
    'schedule-phone': ScheduleSmartphoneComponent,
    'schedule-pc': SchedulePcComponent,
  }
});


const firebaseControl = new FirebaseControl(firebase);
firebaseControl.getTimeRange('nVfuSmsj9cULg3712chv').then((ranges) => {
    ranges.forEach(range => {
        timeRange.push(range);
    })
});